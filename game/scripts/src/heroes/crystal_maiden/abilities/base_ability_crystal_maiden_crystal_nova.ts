import { registerAbility, BaseAbility, registerModifier, BaseModifier } from '../../../utils/dota_ts_adapter';
import { AbilityDefinition, CustomAbilityType } from '../../static_definitions';

@registerAbility()
export class base_ability_crystal_maiden_crystal_nova extends BaseAbility {
    // Ability properties
    caster: CDOTA_BaseNPC = this.GetCaster()!;
    sound_precast: string = 'hero_Crystal.CrystalNovaCast';
    sound_cast: string = 'Hero_Crystal.CrystalNova';
    particle_crystal_nova: string = 'particles/units/heroes/hero_crystalmaiden/maiden_crystal_nova.vpcf';
    particle_crystal_nova_fx?: ParticleID;

    // Ability specials
    radius?: number;
    duration?: number;
    vision_duration?: number;
    vision_radius?: number;
    nova_damage?: number;

    Precache(context: CScriptPrecacheContext) {
        PrecacheResource(PrecacheType.PARTICLE, 'particles/units/heroes/hero_crystalmaiden/maiden_crystal_nova.vpcf', context);
        PrecacheResource(PrecacheType.PARTICLE, 'particles/generic_gameplay/generic_slowed_cold.vpcf', context);
        PrecacheResource(PrecacheType.PARTICLE, 'particles/units/heroes/hero_crystalmaiden/maiden_frostbite_buff.vpcf', context);
        PrecacheResource(PrecacheType.PARTICLE, 'particles/heroes/crystal_maiden/snowstorm_field.vpcf', context);
        PrecacheResource(PrecacheType.PARTICLE, 'particles/heroes/crystal_maiden/hailwind_shards.vpcf', context);
    }

    CastFilterResultTarget(target: CDOTA_BaseNPC): UnitFilterResult {
        return super.CastFilterResultTarget(target);
    }

    GetAbilityTargetTeam(): UnitTargetTeam {
        let team = super.GetAbilityTargetTeam();

        return team;
    }

    GetBehavior(): AbilityBehavior | Uint64 {
        let behaviour = AbilityBehavior.POINT | AbilityBehavior.AOE;

        return behaviour;
    }

    OnAbilityPhaseStart() {
        this.EmitSound(this.sound_precast);
        return true;
    }

    OnAbilityPhaseInterrupted() {
        this.StopSound(this.sound_precast);
    }

    GetAOERadius(): number {
        return this.GetSpecialValueFor('radius');
    }

    GetDamageReduction() {
        return this.damage_reduction;
    }

    damage_reduction = 0;

    OnSpellStart(): void {
        // Ability properties

        const target_position = this.GetCursorPosition();

        // Ability specials
        this.radius = this.GetSpecialValueFor('radius');
        this.duration = this.GetSpecialValueFor('duration');
        this.vision_duration = this.GetSpecialValueFor('vision_duration');
        this.vision_radius = this.GetSpecialValueFor('vision_radius');
        this.nova_damage = this.GetSpecialValueFor('nova_damage');

        // Play cast sound

        this.ExplodeNovaAt({
            duration: this.duration,
            position: target_position,
            damage: this.nova_damage,
            radius: this.radius,
            vision_duration: this.vision_duration,
            vision_radius: this.vision_radius,
        });

        const target = this.GetCursorTarget();
        if (target) {
            let extraExplosions = 0; // this.GetInnerNovaExtraExplosions();
            let damageOpts = {
                duration: this.duration,
                position: target_position,
                damage: this.nova_damage,
                radius: this.radius,
                vision_duration: this.vision_duration,
                vision_radius: this.vision_radius,
            };

            while (extraExplosions > 0) {
                Timers.CreateTimer(extraExplosions * 0.33, () => {
                    this.ExplodeNovaAt({
                        ...damageOpts,
                        position: target.GetAbsOrigin(),
                    });
                });
                extraExplosions--;
            }
        }
    }

    ExplodeNovaAt({
        position,
        radius,
        duration,
        vision_duration,
        vision_radius,
        damage,
    }: {
        position: Vector;
        radius: number;
        duration: number;
        vision_duration: number;
        vision_radius: number;
        damage: number;
    }) {
        const actualDuration = this.GetNovaDuration(duration);

        EmitSoundOnLocationWithCaster(position, this.sound_cast, this.caster);
        // Apply FoW visibility around the target
        this.CreateVisibilityNode(position, vision_radius, vision_duration);

        // Play particle effect
        this.particle_crystal_nova_fx = ParticleManager.CreateParticle(this.particle_crystal_nova, ParticleAttachment.CUSTOMORIGIN, undefined);
        ParticleManager.SetParticleControl(this.particle_crystal_nova_fx, 0, position);
        ParticleManager.SetParticleControl(this.particle_crystal_nova_fx, 1, Vector(radius, actualDuration, radius));
        ParticleManager.SetParticleControl(this.particle_crystal_nova_fx, 2, position);
        ParticleManager.ReleaseParticleIndex(this.particle_crystal_nova_fx);

        // Find all enemies in range
        const enemies = FindUnitsInRadius(
            this.caster.GetTeamNumber(),
            position,
            undefined,
            radius,
            UnitTargetTeam.ENEMY,
            UnitTargetType.HERO | UnitTargetType.BASIC,
            UnitTargetFlags.NONE,
            FindOrder.ANY,
            false
        );

        for (const enemy of enemies) {
            // Deal damage to each enemy
            const acutal_damage = this.GetActualDamage(enemy, damage);
            ApplyDamage({
                attacker: this.caster,
                damage: acutal_damage,
                damage_type: this.GetAbilityDamageType(),
                victim: enemy,
                ability: this,
                damage_flags: DamageFlag.NONE,
            });

            enemy.AddNewModifier(this.caster, this, custom_modifier_crystal_maiden_crystal_nova_slow.name, { duration: actualDuration });
        }
    }

    GetActualDamage(target: CDOTA_BaseNPC, baseDamage: number): number {
        let damage = baseDamage;

        return damage;
    }

    ExplodeMiniNova(target: CDOTA_BaseNPC, radiusPercentage: number) {
        this.radius = this.GetSpecialValueFor('radius');
        this.duration = this.GetSpecialValueFor('duration');
        this.vision_duration = this.GetSpecialValueFor('vision_duration');
        this.vision_radius = this.GetSpecialValueFor('vision_radius');
        this.nova_damage = this.GetSpecialValueFor('nova_damage');

        this.ExplodeNovaAt({
            duration: this.duration,
            position: target.GetAbsOrigin(),
            damage: this.nova_damage,
            radius: this.radius * radiusPercentage,
            vision_duration: this.vision_duration,
            vision_radius: this.vision_radius * radiusPercentage,
        });
    }

    GetNovaDuration(duration: number): number {
        return duration;
    }
}

@registerModifier()
export class custom_modifier_crystal_maiden_crystal_nova_slow extends BaseModifier {
    // Modifier properties
    caster: CDOTA_BaseNPC = this.GetCaster()!;
    ability: CDOTABaseAbility = this.GetAbility()!;
    parent: CDOTA_BaseNPC = this.GetParent();
    particle_slowed = 'particles/generic_gameplay/generic_slowed_cold.vpcf';
    modifier_snowstorm_buff: string = 'modifier_reimagined_crystal_maiden_crystal_nova_snowstorm_buff';
    modifier_frostbite_debuff: string = 'modifier_reimagined_crystal_maiden_frostbite_debuff';

    // Modifier specials
    movespeed_slow?: number;
    attackspeed_slow?: number;

    // Reimagined specials
    // snowbite_interval?: number;

    IsHidden() {
        return false;
    }
    IsDebuff() {
        return true;
    }
    IsPurgable() {
        return true;
    }

    OnCreated(): void {
        // Modifier specials

        this.movespeed_slow = this.ability.GetSpecialValueFor('movespeed_slow');
        this.attackspeed_slow = this.ability.GetSpecialValueFor('attackspeed_slow');

        // Reimagined specials
        // this.snowbite_interval = this.ability.GetSpecialValueFor("snowbite_interval");

        // Snowbite: When an enemy is under Frostbite's effect while on a Snowstorm Field, Crystal Nova's slow modifier's refreshes itself.
        // this.ReimaginedSnowbite();
    }

    // ReimaginedSnowbite(): void {
    // 	if (IsServer()) {
    // 		this.StartIntervalThink(this.snowbite_interval!);
    // 	}
    // }

    // OnIntervalThink(): void {
    // 	// Only applies if the parent has both Frostbite's and Snowstorm Field's modifiers
    // 	if (this.parent.HasModifier(this.modifier_snowstorm_buff) && this.parent.HasModifier(this.modifier_frostbite_debuff)) {
    // 		this.ForceRefresh();
    // 	}
    // }

    DeclareFunctions(): ModifierFunction[] {
        return [ModifierFunction.MOVESPEED_BONUS_PERCENTAGE, ModifierFunction.ATTACKSPEED_BONUS_CONSTANT];
    }

    GetModifierMoveSpeedBonus_Percentage(): number {
        let movespeed_slow = this.movespeed_slow!;
        // Talent: Dense Ice: Crystal Nova's move and attack speed slow scales with the the enemy's distance to the Snowstorm Field, up to x% additional slow when standing in the center. Every y units of distance reduces the slow slightly.
        //movespeed_slow += this.ReimaginedTalentDenseIce();
        return movespeed_slow * -1;
    }

    GetModifierAttackSpeedBonus_Constant(): number {
        let attackspeed_slow = this.attackspeed_slow!;

        // Talent: Dense Ice: Crystal Nova's move and attack speed slow scales with the the enemy's distance to the Snowstorm Field, up to x% additional slow when standing in the center. Every y units of distance reduces the slow slightly.
        //attackspeed_slow += this.ReimaginedTalentDenseIce();
        return attackspeed_slow * -1;
    }

    GetEffectName(): string {
        return this.particle_slowed;
    }

    GetEffectAttachType(): ParticleAttachment {
        return ParticleAttachment.ABSORIGIN_FOLLOW;
    }

    // ReimaginedTalentDenseIce(): number {
    // 	if (HasTalent(this.caster, CrystalMaidenTalents.CrystalMaidenTalent_2)) {
    // 		const stacks = this.parent.GetModifierStackCount("modifier_reimagined_crystal_maiden_talent_2_debuff", this.caster);
    // 		if (stacks) return stacks;
    // 	}

    // 	return 0;
    // }
}

@registerModifier()
export class modifier_abyssal_underlord_firestorm_custom_thinker extends BaseModifier {
    caster = this.GetCaster()!;
    parent = this.GetParent()!;
    ability = this.GetAbility()!;

    wave = 0;
    delayed = false;
    damageTable: any;

    interval = 0;
    count = 0;
    radius = 0;
    delay = 0;
    damage = 0;

    IsHidden() {
        return true;
    }

    IsPurgable() {
        return false;
    }

    OnCreated(kv: { damage_per_wave: number; waves: number }) {
        this.damage = kv.damage_per_wave; // self.ability: GetSpecialValueFor("wave_damage")
        this.delay = 0.5; //self.ability: GetSpecialValueFor("first_wave_delay")
        this.radius = 350; //self.ability: GetSpecialValueFor("radius")
        this.count = kv.waves; //self.ability: GetSpecialValueFor("wave_count")
        this.interval = 0.75; // self.ability: GetSpecialValueFor("wave_interval")
        // self.burn_duration = self.ability: GetSpecialValueFor("burn_duration")
        // self.burn_interval = self.ability: GetSpecialValueFor("burn_interval")
        // self.burn_damage = self.ability: GetSpecialValueFor("burn_damage")

        if (!IsServer()) return;

        this.wave = 0;
        this.damageTable = {
            attacker: this.caster,
            damage: this.damage,
            damage_type: this.ability.GetAbilityDamageType(),
            ability: this.ability,
        };

        this.StartIntervalThink(this.delay);
    }

    OnDestroy() {
        if (!IsServer()) return;
        this.GetParent().Destroy();
    }

    OnIntervalThink() {
        if (!this.delayed) {
            this.delayed = true;
            this.StartIntervalThink(this.interval);
            this.OnIntervalThink();
            return;
        }

        let enemies = FindUnitsInRadius(
            this.caster.GetTeamNumber(),
            this.parent.GetOrigin(),
            undefined,
            this.radius,
            UnitTargetTeam.ENEMY,
            UnitTargetType.HERO | UnitTargetType.BASIC,
            0,
            0,
            false
        );

        for (let enemy of enemies) {
            this.damageTable.victim = enemy;
            ApplyDamage(this.damageTable);
        }

        this.PlayEffects();
        this.wave = this.wave + 1;
        if (this.wave >= this.count) {
            this.Destroy();
        }
    }

    PlayEffects() {
        let particle_cast = 'particles/custom_crystal_icestorm_wave.vpcf';
        let sound_cast = 'Hero_AbyssalUnderlord.Firestorm';
        let effect_cast = ParticleManager.CreateParticle(particle_cast, ParticleAttachment.WORLDORIGIN, undefined);
        ParticleManager.SetParticleControl(effect_cast, 0, this.parent.GetOrigin());
        ParticleManager.SetParticleControl(effect_cast, 4, Vector(this.radius - 100, 0, 0));
        ParticleManager.ReleaseParticleIndex(effect_cast);
        EmitSoundOn(sound_cast, this.parent);
    }
}

export const $_DEFINITION: AbilityDefinition = {
    name: base_ability_crystal_maiden_crystal_nova.name,
    AbilityTextureName: 'crystal_maiden_crystal_nova',
    ScriptFile: __dirname,
    CustomAbilityType: CustomAbilityType.Base,
    AbilityBehavior: 'DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE',
    AbilityUnitDamageType: 'DAMAGE_TYPE_MAGICAL',
    SpellImmunityType: 'SPELL_IMMUNITY_ENEMIES_NO',
    SpellDispellableType: 'SPELL_DISPELLABLE_YES',
    FightRecapLevel: '1',
    MaxLevel: 4,

    AbilityCastRange: '700',
    AbilityCastPoint: '0.3 0.3 0.3 0.3',

    AbilityCooldown: '11 10 9 8',

    AbilityManaCost: '130 145 160 175',

    AffectedBy: [
         
    ],

    AbilityValues: {
        radius: '425',
        movespeed_slow: '20 30 40 50',
        attackspeed_slow: '20 30 40 50',
        duration: '4.5',

        vision_duration: '6.0',
        vision_radius: '900',
        nova_damage: '110 160 210 260',
    },
};
