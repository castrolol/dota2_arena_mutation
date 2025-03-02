import { BaseAbility, BaseModifier, registerAbility, registerModifier } from '../../../utils/dota_ts_adapter';
import { IsEnemy } from '../../../utils/util';
import { AbilityDefinition, CustomAbilityType } from '../../static_definitions';
import { modifier_talent_crystal_maiden_frosty_fortress_heavy_frost_armor } from '../ice_stronghold/frosty_fortress/talents/talent_crystal_maiden_frosty_fortress_heavy_frost_armor';

@registerAbility()
export class base_ability_crystal_maiden_frostbite extends BaseAbility {
    // Ability properties
    caster: CDOTA_BaseNPC = this.GetCaster();
    sound_cast: string = 'Hero_Crystal.Frostbite';

    // Ability specials
    duration?: number;

    Precache(context: CScriptPrecacheContext) {
        PrecacheResource(PrecacheType.PARTICLE, 'particles/units/heroes/hero_crystalmaiden/maiden_frostbite_buff.vpcf', context);
    }

    CastFilterResultTarget(target: CDOTA_BaseNPC): UnitFilterResult {
        if (!IsServer()) return undefined as any;

        // Always apply on enemies according to the unit filter
        if (target.GetTeamNumber() != this.caster.GetTeamNumber()) {
            return UnitFilter(
                target,
                this.GetAbilityTargetTeam(),
                this.GetAbilityTargetType(),
                this.GetAbilityTargetFlags(),
                this.caster.GetTeamNumber()
            );
        } // Check on allies for disable help
        else if (modifier_talent_crystal_maiden_frosty_fortress_heavy_frost_armor.IsActiveOnCaster(this.caster)) {
            if (PlayerResource.IsDisableHelpSetForPlayerID(target.GetPlayerOwnerID(), this.caster.GetPlayerOwnerID())) {
                return UnitFilterResult.FAIL_DISABLE_HELP;
            }
            if (target.IsConsideredHero()) {
                return UnitFilterResult.SUCCESS; // UnitFilter(target, this.GetAbilityTargetTeam(), this.GetAbilityTargetType(), this.GetAbilityTargetFlags(), this.caster.GetTeamNumber());
            }
            return UnitFilterResult.FAIL_CONSIDERED_HERO;
        }
    }

    GetBehavior(): AbilityBehavior {
        let behaviors = AbilityBehavior.UNIT_TARGET;

        return behaviors;
    }

    GetCooldown(level: number): number {
        let cooldown = super.GetCooldown(level);

        return cooldown;
    }

    OnSpellStart(): void {
        // Ability properties
        const target = this.GetCursorTarget()!;
        this.duration = this.GetSpecialValueFor('duration');
        EmitSoundOn(this.sound_cast, target);

        if (!IsEnemy(target, this.caster)) {

            modifier_talent_crystal_maiden_frosty_fortress_heavy_frost_armor.ApplyOn(this.caster, this);

            return;
        }

        // Ability specials

        // Play cast sound

        if (target.TriggerSpellAbsorb(this)) return;

        custom_modifier_crystal_maiden_frostbite_debuff.apply(target, this.caster, this, {
            duration: this.duration,
            slowAmount: this.GetSlowAmount(),
        });
    }

    GetSlowAmount() {
        return 0;
    }

    ExecuteOrderFilter(event: ExecuteOrderFilterEvent): boolean {
        // Prevent casting if the caster is currently TPing

        return true;
    }
}

@registerModifier()
export class custom_modifier_crystal_maiden_frostbite_debuff extends BaseModifier {
    // Modifier properties
    caster: CDOTA_BaseNPC = this.GetCaster()!;
    ability: CDOTABaseAbility = this.GetAbility()!;
    parent: CDOTA_BaseNPC = this.GetParent();
    sound_cast: string = 'Hero_Crystal.Frostbite';
    particle_frostbite: string = 'particles/units/heroes/hero_crystalmaiden/maiden_frostbite_buff.vpcf';
    damage_per_tick: number = 0;
    first_tick: boolean = true;

    slowAmount: number = 0;
    // Modifier specials
    damage_per_second?: number;
    creep_damage_per_second?: number;
    tick_interval?: number;
    duration?: number;

    IsHidden() {
        return false;
    }
    IsDebuff() {
        return true;
    }
    IsPurgable() {
        return true;
    }

    OnCreated({ slowAmount }: any): void {
        // Modifier properties

        this.ability = this.GetAbility()!;

        // Modifier specials
        this.damage_per_second = this.ability.GetSpecialValueFor('damage_per_second');
        this.creep_damage_per_second = this.ability.GetSpecialValueFor('creep_damage_per_second');
        this.tick_interval = this.ability.GetSpecialValueFor('tick_interval');
        this.duration = this.ability.GetSpecialValueFor('duration');

        if (this.parent.IsHero() || this.parent.IsConsideredHero()) {
            this.damage_per_tick = this.damage_per_second * this.tick_interval;
        } else {
            this.damage_per_tick = this.creep_damage_per_second * this.tick_interval;
        }
        this.slowAmount = 0;

        if (IsServer()) {
            this.slowAmount = slowAmount;

            this.SetHasCustomTransmitterData(true);
            Timers.CreateTimer(0.1, () => {
                this.SendBuffRefreshToClients();
            });

            this.DealDamage(true);

            this.StartIntervalThink(this.tick_interval!);

            this.OnIntervalThink();
        }
    }

    AddCustomTransmitterData() {
        // -- on server
        const data = {
            slowAmount: this.slowAmount,
        };

        return data;
    }

    HandleCustomTransmitterData(data: { slowAmount: number }) {
        // -- on client
        this.slowAmount = data.slowAmount;

        this.GetModifierMoveSpeedBonus_Percentage = () => {
            return data.slowAmount * -1;
        };

        this.CheckState = (): Partial<Record<ModifierState, boolean>> => {
            if (data.slowAmount != 0) {
                return {};
            }

            return {
                [ModifierState.ROOTED]: true,
                [ModifierState.INVISIBLE]: false,
                [ModifierState.DISARMED]: true,
            };
        };
    }

    GetModifierMoveSpeedBonus_Percentage() {
        return this.slowAmount * -1;
    }

    CheckState(): Partial<Record<ModifierState, boolean>> {
        if (this.slowAmount != 0) {
            return {};
        }

        return {
            [ModifierState.ROOTED]: true,
            [ModifierState.INVISIBLE]: false,
            [ModifierState.DISARMED]: true,
        };
    }

    DealDamage(first: boolean) {
        const bonus = 0;
        const damageProps: ApplyDamageOptions = {
            attacker: this.caster,
            victim: this.parent,
            damage: this.damage_per_tick + bonus,
            ability: this.ability,
            damage_type: this.ability.GetAbilityDamageType(),
        };
        if (!first) {
            damageProps.damage_flags = DamageFlag.HPLOSS;
        }

        ApplyDamage(damageProps);
    }

    first_damage = true;

    OnIntervalThink(): void {
        this.DealDamage(false);
    }

    DeclareFunctions(): ModifierFunction[] {
        return [ModifierFunction.MOVESPEED_BONUS_PERCENTAGE];
    }

    OnTooltip(): number {
        return this.damage_per_tick!;
    }

    OnTooltip2(): number {
        return this.tick_interval!;
    }

    GetEffectName(): string {
        return this.particle_frostbite;
    }

    GetEffectAttachType(): ParticleAttachment {
        return ParticleAttachment.ABSORIGIN_FOLLOW;
    }

    GetPriority(): ModifierPriority {
        return ModifierPriority.NORMAL;
    }

    OnDestroy(): void {
        StopSoundOn(this.sound_cast, this.parent);
    }
}

@registerModifier()
export class custom_modifier_crystal_maiden_frostbite_spell_armor_reduce extends BaseModifier {
    GetTexture(): string {
        return 'crystal_maiden_frost_archmage_intense_frostbite';
    }

    GetEffectAttachType(): ParticleAttachment {
        return ParticleAttachment.ROOTBONE_FOLLOW;
    }

    GetEffectName(): string {
        return 'particles/creatures/aghanim/aghanim_debug_ring.vpcf';
    }
    DeclareFunctions(): ModifierFunction[] {
        return [ModifierFunction.MAGICAL_RESISTANCE_BONUS];
    }

    GetModifierMagicalResistanceBonus(event: ModifierAttackEvent): number {
        return -this.magic_def_reduction;
    }

    magic_def_reduction = 0;

    OnCreated(params: { magic_def_reduction: number }): void {
        this.magic_def_reduction = params.magic_def_reduction;

        // --send init data from server to client
        this.SetHasCustomTransmitterData(true);
        Timers.CreateTimer(0.1, () => {
            this.SendBuffRefreshToClients();
        });
    }

    AddCustomTransmitterData() {
        // -- on server
        const data = {
            magic_def_reduction: this.magic_def_reduction,
        };

        return data;
    }

    HandleCustomTransmitterData(data: { magic_def_reduction: number }) {
        // -- on client
        this.magic_def_reduction = data.magic_def_reduction;
    }
}

export const $_DEFINITION: AbilityDefinition = {
    name: base_ability_crystal_maiden_frostbite.name,
    AbilityTextureName: 'crystal_maiden_frostbite',
    ScriptFile: __dirname,
    CustomAbilityType: CustomAbilityType.Base,
    AbilityBehavior: 'DOTA_ABILITY_BEHAVIOR_UNIT_TARGET',
    AbilityUnitTargetTeam: 'DOTA_UNIT_TARGET_TEAM_BOTH',
    AbilityUnitTargetType: 'DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC',
    AbilityUnitDamageType: 'DAMAGE_TYPE_MAGICAL',
    SpellImmunityType: 'SPELL_IMMUNITY_ENEMIES_NO',
    SpellDispellableType: 'SPELL_DISPELLABLE_YES',
    FightRecapLevel: '1',
    MaxLevel: 4,
    // Casting
    //-------------------------------------------------------------------------------------------------------------
    AbilityCastRange: '550',
    AbilityCastPoint: '0.3 0.3 0.3 0.3',

    // Time
    //-------------------------------------------------------------------------------------------------------------
    AbilityCooldown: '9 8 7 6',

    // Cost
    //-------------------------------------------------------------------------------------------------------------
    AbilityManaCost: '140 145 150 155',

    // Stats
    //-------------------------------------------------------------------------------------------------------------
    AbilityModifierSupportValue: '0.5',

    AffectedBy: [],

    AbilityValues: {
        damage_per_second: '100',
        creep_damage_per_second: '100',
        duration: '1.5 2.0 2.5 3.0',
        tick_interval: '0.2',
    },
};
