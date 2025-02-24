import { registerAbility, BaseAbility, registerModifier, BaseModifier } from '../../../utils/dota_ts_adapter';
import { AbilityDefinition, CustomAbilityType } from '../../static_definitions';

@registerAbility()
export class base_ability_crystal_maiden_freezing_field extends BaseAbility {
    // Ability properties
    caster: CDOTA_BaseNPC = this.GetCaster();
    sound_channel: string = 'hero_Crystal.freezingField.wind';

    max_duration?: number;
    damage?: number;

    Precache(context: CScriptPrecacheContext) {
        PrecacheResource(PrecacheType.PARTICLE, 'particles/units/heroes/hero_crystalmaiden/maiden_freezing_field_snow.vpcf', context);
        PrecacheResource(PrecacheType.PARTICLE, 'particles/units/heroes/hero_crystalmaiden/maiden_freezing_field_explosion.vpcf', context);
        PrecacheResource(PrecacheType.PARTICLE, 'particles/units/heroes/hero_crystalmaiden/maiden_frostbite_buff.vpcf', context);
        PrecacheResource(PrecacheType.PARTICLE, 'particles/heroes/crystal_maiden/freezing_field_talent_projectile.vpcf', context);
        PrecacheResource(PrecacheType.PARTICLE, 'particles/crystal_maiden/ice_stronghold/freezing_field_reduce_damage.vpcf', context);
    }

    GetBehavior(): Uint64 | AbilityBehavior {
        let behaviors = AbilityBehavior.NO_TARGET + AbilityBehavior.CHANNELLED + AbilityBehavior.DONT_RESUME_ATTACK;
        return behaviors;
    }

    GetChannelTime(): number {
        let channel_time = super.GetChannelTime();
        return channel_time;
    }

    OnSpellStart(): void {
        this.max_duration = this.GetSpecialValueFor('max_duration');

        this.damage = this.GetSpecialValueFor('damage');
        this.AddSpellImmunity();

        this.caster.EmitSound('DOTA_Item.BlackKingBar.Activate');

        EmitSoundOn(this.sound_channel, this.caster);

        this.caster.AddNewModifier(this.caster, this, custom_modifier_crystal_maiden_freezing_field_aura.name, {
            duration: this.max_duration,
        });
    }

    AddSpellImmunity() {}

    OnChannelFinish(interrupted: boolean) {
        StopSoundOn(this.sound_channel, this.caster);

        if (this.caster.HasModifier(custom_modifier_crystal_maiden_freezing_field_aura.name)) {
            this.caster.RemoveModifierByName(custom_modifier_crystal_maiden_freezing_field_aura.name);
        }
    }
}

@registerModifier()
export class custom_modifier_crystal_maiden_freezing_field_aura extends BaseModifier {
    // Modifier properties
    caster: CDOTA_BaseNPC = this.GetCaster()!;
    ability: CDOTABaseAbility = this.GetAbility()!;
    parent: CDOTA_BaseNPC = this.GetParent();
    sound_channel: string = 'hero_Crystal.freezingField.wind';
    sound_explosion: string = 'hero_Crystal.freezingField.explosion';
    particle_snow_aura: string = 'particles/units/heroes/hero_crystalmaiden/maiden_freezing_field_snow.vpcf';
    particle_snow_aura_fx?: ParticleID;
    particle_explosion: string = 'particles/units/heroes/hero_crystalmaiden/maiden_freezing_field_explosion.vpcf';
    particle_explosion_fx?: ParticleID;
    quadrant: number = 1;
    elapsed_time: number = 0;
    ability_crystal_nova: string = 'reimagined_crystal_maiden_crystal_nova';

    radius?: number;
    explosion_radius?: number;
    bonus_armor?: number;
    explosion_interval?: number;
    slow_duration?: number;
    explosion_min_dist?: number;
    explosion_max_dist?: number;
    damage?: number;

    IsHidden() {
        return false;
    }
    IsDebuff() {
        return false;
    }
    IsPurgable() {
        return false;
    }

    OnCreated(): void {
        // Modifier specials
        this.radius = this.ability.GetSpecialValueFor('radius');
        this.explosion_radius = this.ability.GetSpecialValueFor('explosion_radius');
        this.bonus_armor = this.ability.GetSpecialValueFor('bonus_armor');
        this.explosion_interval = this.ability.GetSpecialValueFor('explosion_interval');
        this.slow_duration = this.ability.GetSpecialValueFor('slow_duration');
        this.explosion_min_dist = this.ability.GetSpecialValueFor('explosion_min_dist');
        this.explosion_max_dist = this.ability.GetSpecialValueFor('explosion_max_dist');
        this.damage = (this.ability as any).damage;

        this.particle_snow_aura_fx = ParticleManager.CreateParticle(this.particle_snow_aura, ParticleAttachment.ABSORIGIN_FOLLOW, this.parent);
        ParticleManager.SetParticleControl(this.particle_snow_aura_fx, 0, this.parent.GetAbsOrigin());
        ParticleManager.SetParticleControl(this.particle_snow_aura_fx, 1, Vector(this.radius, 0, 0));
        this.AddParticle(this.particle_snow_aura_fx, false, false, -1, false, false);

        if (IsServer()) this.StartIntervalThink(this.explosion_interval);
    }

    OnIntervalThink() {
        const caster_position = this.parent.GetAbsOrigin();
        const direction = this.parent.GetForwardVector();
        const explosion_distance = RandomInt(this.explosion_min_dist!, this.explosion_max_dist!);
        const front_position = (caster_position + direction * explosion_distance) as Vector;

        const qangle = QAngle(0, RandomInt((this.quadrant - 1) * 90, this.quadrant * 90), 0);

        let explosion_position = RotatePosition(caster_position, qangle, front_position);

        if (this.quadrant == 4) this.quadrant = 1;
        else this.quadrant++;

        this.FreezingProjectileHitPosition(explosion_position);
    }

    FreezingProjectileHitPosition(explosion_position: Vector) {
        EmitSoundOnLocationWithCaster(explosion_position, this.sound_explosion, this.parent);

        this.particle_explosion_fx = ParticleManager.CreateParticle(this.particle_explosion, ParticleAttachment.CUSTOMORIGIN, this.parent);
        ParticleManager.SetParticleControl(this.particle_explosion_fx, 0, explosion_position);
        ParticleManager.ReleaseParticleIndex(this.particle_explosion_fx);

        const enemies = FindUnitsInRadius(
            this.parent.GetTeamNumber(),
            explosion_position,
            undefined,
            this.explosion_radius!,
            UnitTargetTeam.ENEMY,
            UnitTargetType.HERO + UnitTargetType.BASIC,
            UnitTargetFlags.NONE,
            FindOrder.ANY,
            false
        );

        for (const enemy of enemies) {
            let damage = this.damage!;

            ApplyDamage({
                attacker: this.caster!,
                damage: damage,
                damage_type: this.ability.GetAbilityDamageType(),
                victim: enemy,
                ability: this.ability,
                damage_flags: DamageFlag.NONE,
            });
        }
    }

    IsAura() {
        return true;
    }
    GetAuraDuration() {
        return 1;
    }
    GetAuraRadius() {
        return 900;
    }
    GetAuraSearchFlags() {
        return UnitTargetFlags.NONE;
    }
    GetAuraSearchTeam() {
        return UnitTargetTeam.ENEMY;
    }
    GetAuraSearchType() {
        return UnitTargetType.HERO + UnitTargetType.BASIC;
    }
    GetModifierAura() {
        return custom_modifier_crystal_maiden_freezing_field_slow.name;
    }

    DeclareFunctions(): ModifierFunction[] {
        return [ModifierFunction.PHYSICAL_ARMOR_BONUS, ModifierFunction.ON_ORDER];
    }

    GetModifierPhysicalArmorBonus(): number {
        return this.bonus_armor!;
    }

    OnOrder(event: ModifierUnitEvent) {
        if (!IsServer()) return;

        if (event.unit != this.parent) return;
    }
}

@registerModifier()
export class custom_modifier_crystal_maiden_freezing_field_slow extends BaseModifier {
    movespeed_slow = 0;
    attack_slow = 0;

    OnCreated(params: object): void {
        this.movespeed_slow = this.GetAbility()?.GetSpecialValueFor('movespeed_slow')!;

        this.attack_slow = this.GetAbility()?.GetSpecialValueFor('attack_slow')!;
    }

    DeclareFunctions(): ModifierFunction[] {
        return [ModifierFunction.MOVESPEED_BONUS_PERCENTAGE, ModifierFunction.ATTACKSPEED_BONUS_CONSTANT];
    }

    GetModifierMoveSpeedBonus_Percentage(): number {
        return -this.movespeed_slow;
    }

    GetModifierAttackSpeedBonus_Constant(): number {
        return -this.attack_slow;
    }
}

export const $_DEFINITION: AbilityDefinition = {
    name: base_ability_crystal_maiden_freezing_field.name,
    AbilityTextureName: 'crystal_maiden_freezing_field',
    ScriptFile: __dirname,
    AbilityType: 'DOTA_ABILITY_TYPE_ULTIMATE',
    CustomAbilityType: CustomAbilityType.Base,
    AbilityBehavior: 'DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_CHANNELLED | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK',
    AbilityUnitDamageType: 'DAMAGE_TYPE_MAGICAL',
    SpellImmunityType: 'SPELL_IMMUNITY_ENEMIES_NO',
    FightRecapLevel: '2',
    MaxLevel: 3,
    AbilityChannelTime: '10',
    AbilityCastPoint: '0',
    AbilityCastAnimation: 'ACT_DOTA_CAST_ABILITY_4',
    AbilityChannelAnimation: 'ACT_DOTA_CHANNEL_ABILITY_4',

    AbilityCooldown: '110 100 90',

    AbilityManaCost: '200 400 600',

    AbilityModifierSupportValue: '0.35',

    AffectedBy: ['talent_crystal_maiden_ice_stronghold_spell_immunity', 'increment_crystal_maiden_ice_stronghold_freezing_field_reduce_damage'],

    AbilityValues: {
        max_duration: '10',
        radius: '810',
        explosion_radius: '300',
        bonus_armor: '20',

        explosion_interval: '0.1',
        movespeed_slow: '30',
        attack_slow: '60',
        slow_duration: '1.0',

        explosion_min_dist: '195',

        explosion_max_dist: '785',

        damage: {
            value: '105 170 250',
            talent_crystal_maiden_ice_stronghold_spell_immunity: '+50',
        },
    },
};
