import { registerAbility, BaseAbility, registerModifier, BaseModifier } from '../../../utils/dota_ts_adapter';
import { CalculateDirectionToPosition, CalculateDistanceBetweenPoints } from '../../../utils/util';
import { AbilityDefinition, CustomAbilityType } from '../../static_definitions';
import { modifier_talent_antimage_shadow_dancer_zipzap, modifier_talent_antimage_shadow_dancer_zipzap_thinker } from '../shadow_rogue/shadow_dancer/talents/talent_antimage_shadow_dancer_zipzap';

@registerAbility()
export class base_ability_antimage_blink extends BaseAbility {

    caster: CDOTA_BaseNPC = this.GetCaster();
    sound_blink_out: string = "Hero_Antimage.Blink_out";
    sound_blink_in: string = "Hero_Antimage.Blink_in";
    particle_blink_start: string = "particles/units/heroes/hero_antimage/antimage_blink_start.vpcf";
    particle_blink_end: string = "particles/units/heroes/hero_antimage/antimage_blink_end.vpcf";
    particle_interference: string = "particles/econ/items/antimage/antimage_weapon_basher_ti5/am_manaburn_basher_ti_5.vpcf";
    blonk_thinker: CDOTA_BaseNPC | undefined;

    Precache(context: CScriptPrecacheContext) {
        PrecacheResource(PrecacheType.PARTICLE, "particles/units/heroes/hero_antimage/antimage_blink_start.vpcf", context);
        PrecacheResource(PrecacheType.PARTICLE, "particles/units/heroes/hero_antimage/antimage_blink_end.vpcf", context);
        PrecacheResource(PrecacheType.PARTICLE, "particles/econ/items/antimage/antimage_weapon_basher_ti5/am_manaburn_basher_ti_5.vpcf", context);
        PrecacheResource(PrecacheType.PARTICLE, "particles/heroes/anti_mage/antimage_magic_nullity_shield.vpcf", context);
        PrecacheResource(PrecacheType.PARTICLE, "particles/antimage/shadow_dancer/antimage_blonk_ground.vpcf", context);

    }

    OnSpellStart(): void {


        const target_position = this.GetCursorPosition();
        const direction = CalculateDirectionToPosition(this.caster.GetAbsOrigin(), target_position);
        const original_caster_position = this.caster.GetAbsOrigin();

        // Ability specials
        const blink_range = this.GetSpecialValueFor("blink_range");
        const min_range = this.GetSpecialValueFor("min_range");

        ProjectileManager.ProjectileDodge(this.caster);

        // Check distance and calculate Blink position accordingly
        const distance = CalculateDistanceBetweenPoints(this.caster.GetAbsOrigin(), target_position);

        let blink_pos: Vector;

        if (distance <= min_range) {
            blink_pos = (this.caster.GetAbsOrigin() + direction * min_range) as Vector;
        } else if (distance <= blink_range) {
            blink_pos = target_position;
        } else {
            blink_pos = (this.caster.GetAbsOrigin() + direction * blink_range) as Vector;
        }

        // Play blink out sound
        EmitSoundOn(this.sound_blink_out, this.caster);

        // Play blink start particle
        const particle_blink_start_fx = ParticleManager.CreateParticle(this.particle_blink_start, ParticleAttachment.WORLDORIGIN, undefined);
        ParticleManager.SetParticleControl(particle_blink_start_fx, 0, original_caster_position);
        ParticleManager.ReleaseParticleIndex(particle_blink_start_fx);

        // Set caster at blink position
        this.caster.SetAbsOrigin(blink_pos);
        FindClearSpaceForUnit(this.caster, blink_pos, true);
        ResolveNPCPositions(blink_pos, this.caster.GetHullRadius());

        // Play blink in sound
        EmitSoundOn(this.sound_blink_in, this.caster);

        // Play blink end particle
        const particle_blink_end_fx = ParticleManager.CreateParticle(this.particle_blink_end, ParticleAttachment.ABSORIGIN_FOLLOW, this.caster);
        ParticleManager.SetParticleControl(particle_blink_end_fx, 0, this.caster.GetAbsOrigin());
        ParticleManager.ReleaseParticleIndex(particle_blink_end_fx);

        this.CreateBlonkTarget(original_caster_position);

    }

    CreateBlonkTarget(position: Vector) {

        const modifier = modifier_talent_antimage_shadow_dancer_zipzap.find_on(this.GetCaster());

        if (modifier === undefined) return;

        const thinker = CreateModifierThinker(
            this.GetCaster(),
            this,
            modifier_talent_antimage_shadow_dancer_zipzap_thinker.name,
            { duration: modifier.token_duration },
            position,
            this.GetCaster().GetTeam(),
            false
        )
        this.GetCaster().AddNewModifier(this.GetCaster(), this, "modifier_talent_antimage_shadow_dancer_zipzap_cooldown", { duration: modifier.token_duration })
        thinker.AddNewModifier(this.GetCaster(), this, BuiltInModifier.KILL, { duration: modifier.token_duration })

        this.blonk_thinker = thinker;

    }
}


export const $_DEFINITION: AbilityDefinition = {
    name: base_ability_antimage_blink.name,
    AbilityTextureName: 'antimage_blink',
    ScriptFile: __dirname,
    CustomAbilityType: CustomAbilityType.Base,
    MaxLevel: 4,

    AbilityBehavior: "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_ROOT_DISABLES | DOTA_ABILITY_BEHAVIOR_OVERSHOOT",
    AbilityCooldown: '15 12 9 6',
    AbilityManaCost: '45',
    AbilityCastPoint: '0.4',
    AbilityCastAnimation: 'ACT_DOTA_CAST_ABILITY_2',
    AbilityCastRange: '750 900 1050 1200',
    AbilityValues: {
        "blink_range": "750 900 1050 1200",
        "min_range": "200"
    },
};
