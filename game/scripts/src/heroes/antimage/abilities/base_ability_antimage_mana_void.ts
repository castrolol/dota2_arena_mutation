import { registerAbility, BaseAbility, registerModifier, BaseModifier } from '../../../utils/dota_ts_adapter';
import { CalculateDirectionToPosition, CalculateDistanceBetweenPoints } from '../../../utils/util';
import { AbilityDefinition, CustomAbilityType } from '../../static_definitions';

@registerAbility()
export class base_ability_antimage_mana_void extends BaseAbility {

    caster: CDOTA_BaseNPC = this.GetCaster();
    sound_start: string = "Hero_Antimage.ManaVoidCast";
    sound_cast: string = "Hero_Antimage.ManaVoid";
    particle_void: string = "particles/units/heroes/hero_antimage/antimage_manavoid.vpcf";

    mana_void_damage_per_mana: number = 0;
    mana_void_ministun: number = 0;
    mana_void_aoe_radius: number = 0;

    Precache(context: CScriptPrecacheContext) {
        PrecacheResource(PrecacheType.PARTICLE, "particles/units/heroes/hero_antimage/antimage_manavoid.vpcf", context);
    }

    OnAbilityPhaseStart(): boolean {
        EmitSoundOn(this.sound_start, this.caster);
        return true;
    }

    OnAbilityPhaseInterrupted(): void {
        StopSoundOn(this.sound_start, this.caster);
    }

    GetAOERadius(): number {
        return this.GetSpecialValueFor("mana_void_aoe_radius");
    }


    OnSpellStart(): void {
        // Ability properties
        const target = this.GetCursorTarget()!;

        // Ability specials
        this.mana_void_damage_per_mana = this.GetSpecialValueFor("mana_void_damage_per_mana");
        this.mana_void_ministun = this.GetSpecialValueFor("mana_void_ministun");
        this.mana_void_aoe_radius = this.GetSpecialValueFor("mana_void_aoe_radius");

        // If target can absorb the ability, trigger the absorb and exit
        if (this.caster.GetTeamNumber() != target!.GetTeamNumber()) {
            if (target!.TriggerSpellAbsorb(this)) {
                return;
            }
        }

        // Play cast sound
        EmitSoundOn(this.sound_cast, target!);

        // Play particle effect
        const particle_void_fx = ParticleManager.CreateParticle(this.particle_void, ParticleAttachment.POINT, target!);
        ParticleManager.SetParticleControlEnt(particle_void_fx, 0, target!, ParticleAttachment.POINT_FOLLOW, "attach_hitloc", target!.GetAbsOrigin(), true);
        ParticleManager.SetParticleControl(particle_void_fx, 1, Vector(this.mana_void_aoe_radius!, 0, 0));
        ParticleManager.ReleaseParticleIndex(particle_void_fx);

        // Apply stun on target
        this.ApplyStunAndDebuff(target!, this.mana_void_ministun);

        // Find all enemies in the AoE
        const enemies = FindUnitsInRadius(
            this.caster.GetTeamNumber(),
            target!.GetAbsOrigin(),
            undefined,
            this.mana_void_aoe_radius!,
            UnitTargetTeam.ENEMY,
            UnitTargetType.HERO + UnitTargetType.BASIC,
            UnitTargetFlags.NONE,
            FindOrder.ANY,
            false
        );

        let mana_calculation_target = target!;


        // Calculate damage
        let damage = this.CalculateDamage(mana_calculation_target);


        // Deal damage to all targets in the AoE
        for (const enemy of enemies) {
            this.DealDamageToEnemy(enemy, damage);
        }

    }

    DealDamageToEnemy(enemy: CDOTA_BaseNPC, damage: number): void {
        // Deal damage to the enemy
        ApplyDamage({
            attacker: this.caster,
            damage: damage,
            damage_type: this.GetAbilityDamageType(),
            victim: enemy,
            ability: this,
            damage_flags: DamageFlag.NONE,
        });
    }

    CalculateDamage(target: CDOTA_BaseNPC): number {
        // Calculate damage based on missing mana
        let damage: number = (target.GetMaxMana() - target.GetMana()) * this.mana_void_damage_per_mana;

        return damage;
    }

    ApplyStunAndDebuff(target: CDOTA_BaseNPC, stun_duration: number) {
        // Apply a stun on the main target
        target.AddNewModifier(this.caster, this, BuiltInModifier.STUN, { duration: stun_duration });
    }

}


export const $_DEFINITION: AbilityDefinition = {
    name: base_ability_antimage_mana_void.name,
    AbilityTextureName: 'antimage_mana_void',
    ScriptFile: __dirname,
    CustomAbilityType: CustomAbilityType.Base,
    MaxLevel: 4,

    AbilityType: "ABILITY_TYPE_ULTIMATE",
    AbilityBehavior: "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_AOE",
    AbilityUnitTargetTeam: "DOTA_UNIT_TARGET_TEAM_ENEMY",
    AbilityUnitTargetType: "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
    SpellImmunityType: "SPELL_IMMUNITY_ENEMIES_NO",
    AbilityUnitDamageType: "DAMAGE_TYPE_MAGICAL",
    FightRecapLevel: "2",
    AbilitySound: "Hero_Antimage.ManaVoid",
    AbilityCastRange: "600",
    AbilityCastPoint: "0.3 0.3 0.3 0.3",
    AbilityCastAnimation: "ACT_DOTA_CAST_ABILITY_4",

    AbilityManaCost: "100 150 200",
    AbilityModifierSupportValue: "0.0",
    AbilityCooldown: "70",

    AbilityValues: {
        mana_void_damage_per_mana: "0.8 0.95 1.1",
        mana_void_ministun: "0.3",
        mana_void_aoe_radius: "500",

    },
};
