import { registerAbility, BaseAbility } from "../../../../../utils/dota_ts_adapter";
import { AbilityDefinition, CustomAbilityType } from "../../../../static_definitions";

@registerAbility()
export class special_abililty_antimage_shadow_dancer_blonk_trigger extends BaseAbility {

    sound_blink_out: string = "Hero_Antimage.Blink_out";
    sound_blink_in: string = "Hero_Antimage.Blink_in";
    particle_blink_start: string = "particles/antimage/shadow_dancer/antimage_shadow_dancer_blonk.vpcf";
    particle_blink_end: string = "particles/units/heroes/hero_antimage/antimage_blink_end.vpcf";
    particle_interference: string = "particles/econ/items/antimage/antimage_weapon_basher_ti5/am_manaburn_basher_ti_5.vpcf";
    
    Spawn(): void {
        if (!IsServer()) return
        this.SetLevel(1)
    }

    OnSpellStart(): void {

        const ability = this.GetCaster().FindAbilityByName("base_ability_antimage_blink") as any;


        if (ability && ability.blonk_thinker) {
            const caster = this.GetCaster()
            const original_caster_position = caster.GetAbsOrigin()
            const blink_pos = ability.blonk_thinker.GetAbsOrigin();

            EmitSoundOn(this.sound_blink_out, caster);

            // Play blink start particle
            const particle_blink_start_fx = ParticleManager.CreateParticle(this.particle_blink_start, ParticleAttachment.WORLDORIGIN, undefined);
            ParticleManager.SetParticleControl(particle_blink_start_fx, 0, original_caster_position);
            ParticleManager.ReleaseParticleIndex(particle_blink_start_fx);
    
            // Set caster at blink position
            caster.SetAbsOrigin(blink_pos);
            FindClearSpaceForUnit(caster, blink_pos, true);
            ResolveNPCPositions(blink_pos, caster.GetHullRadius());
    
            // Play blink in sound
            EmitSoundOn(this.sound_blink_in, caster);
    
            // Play blink end particle
            const particle_blink_end_fx = ParticleManager.CreateParticle(this.particle_blink_end, ParticleAttachment.ABSORIGIN_FOLLOW, caster);
            ParticleManager.SetParticleControl(particle_blink_end_fx, 0, caster.GetAbsOrigin());
            ParticleManager.ReleaseParticleIndex(particle_blink_end_fx);
             
            caster.Stop();

            Timers.CreateTimer(FrameTime(), () => {
                caster.Stop()
                ability.blonk_thinker?.ForceKill(false)
            })
        }
    }

}


export const $_DEFINITION: AbilityDefinition = {
    name: special_abililty_antimage_shadow_dancer_blonk_trigger.name,
    AbilityTextureName: 'antimage_shadow_dancer_zipzap',
    ScriptFile: __dirname,
    CustomAbilityType: CustomAbilityType.SpecialAbility,
    AbilityBehavior: "DOTA_ABILITY_BEHAVIOR_HIDDEN | DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING | DOTA_ABILITY_BEHAVIOR_NO_TARGET",
    AbilityUnitDamageType: "DAMAGE_TYPE_MAGICAL",
    SpellImmunityType: "SPELL_IMMUNITY_ENEMIES_NO",
    SpellDispellableType: "SPELL_DISPELLABLE_YES",
    AbilitySound: "Antimage.Blink",
    AbilityCooldown: "0",
    AbilityCastPoint: "0"
};
