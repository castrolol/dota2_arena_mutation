import { BaseAbility, BaseModifier, registerAbility, registerModifier } from '../../../utils/dota_ts_adapter';
import { RemoveReflectedAbilities, SpellReflect } from '../../../utils/util';
import { AbilityDefinition, CustomAbilityType } from '../../static_definitions';
import { modifier_talent_antimage_shadow_dancer_bodyguard_of_shadows } from '../shadow_rogue/shadow_dancer/talents/talent_antimage_shadow_dancer_bodyguard_of_shadow';
 
@registerAbility()
export class base_ability_antimage_counterspell extends BaseAbility {

    caster: CDOTA_BaseNPC = this.GetCaster();
    sound_active: string = "Hero_Antimage.Counterspell.Cast";
    particle_active: string = "particles/units/heroes/hero_antimage/antimage_blink_end_glow.vpcf";

    Precache(context: CScriptPrecacheContext) {
        PrecacheResource(PrecacheType.PARTICLE, "particles/units/heroes/hero_antimage/antimage_blink_end_glow.vpcf", context);
        PrecacheResource(PrecacheType.PARTICLE, "particles/units/heroes/hero_antimage/antimage_counter.vpcf", context);
        PrecacheResource(PrecacheType.PARTICLE, "particles/units/heroes/hero_antimage/antimage_spellshield.vpcf", context);

    }

    GetIntrinsicModifierName(): string {
        return base_modifier_antimage_counterspell_passive.name;
    }



    OnSpellStart(): void {
        // Ability specials
        const duration = this.GetSpecialValueFor("duration");

        base_modifier_antimage_counterspell_active.apply(this.caster, this.caster, this, { duration });
        base_modifier_antimage_counterspell_active_absorb.apply(this.caster, this.caster, this, { duration });

        // Play sound
        this.caster.EmitSound(this.sound_active);

        // Create particle effect
        const particle_active_fx = ParticleManager.CreateParticle(this.particle_active, ParticleAttachment.ABSORIGIN_FOLLOW, this.caster);
        ParticleManager.ReleaseParticleIndex(particle_active_fx);
    }
}


@registerModifier()
export class base_modifier_antimage_counterspell_passive extends BaseModifier {
    // Modifier properties
    caster: CDOTA_BaseNPC = this.GetCaster()!;
    ability: CDOTABaseAbility = this.GetAbility()!;
    parent: CDOTA_BaseNPC = this.GetParent();
    reflected_abilities?: CDOTABaseAbility[];
    currently_reflecting: boolean = false;

    // Modifier specials
    magic_resistance: number = 0;

    IsHidden() {
        return true;
    }
    IsDebuff() {
        return false;
    }
    IsPurgable() {
        return false;
    }

    OnCreated(): void {
        this.FetchAbilitySpecials();

        // Initialize reflection table for Counterspell's active
        this.reflected_abilities = [];

        if (IsServer()) {
            this.StartIntervalThink(3);
        }
    }

    OnRefresh(): void {
        this.FetchAbilitySpecials();
    }

    FetchAbilitySpecials() {
        // Modifier specials
        this.magic_resistance = this.ability.GetSpecialValueFor("magic_resistance");

    }

    OnIntervalThink(): void {
        RemoveReflectedAbilities(this);
    }

    

    DeclareFunctions(): ModifierFunction[] {
        return [
            ModifierFunction.MAGICAL_RESISTANCE_BONUS,
            // ModifierFunction.ABSORB_SPELL, // Reimagined effect
            ModifierFunction.REFLECT_SPELL,
            
        ]; // Reimagined effect
    }

    GetModifierMagicalResistanceBonus(): number {
        // If the parent is an illusion or broken, give no bonus
        if (this.parent.IsIllusion()) return 0;
        if (this.parent.PassivesDisabled()) return 0;

        return this.magic_resistance;
    }

    GetReflectSpell(event: ModifierAbilityEvent): 0 | 1 {
        return 1;
    }

}

@registerModifier()
export class base_modifier_antimage_counterspell_active extends BaseModifier {
    // Modifier properties
    caster: CDOTA_BaseNPC = this.GetCaster()!;
    ability: CDOTABaseAbility = this.GetAbility()!;
    parent: CDOTA_BaseNPC = this.GetParent();
    sound_reflect: string = "Hero_Antimage.Counterspell.Target";
    particle_shield: string = "particles/units/heroes/hero_antimage/antimage_counter.vpcf";
    particle_shield_fx?: ParticleID;
    particle_absorb: string = "particles/units/heroes/hero_antimage/antimage_spellshield.vpcf";
    particle_absorb_fx?: ParticleID;

    // Modifier specials
    shard_illusion_duration: number = 0;
    shard_illusion_incoming_damage: number = 0;
    shard_illusion_outgoing_damage: number = 0;


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
        this.FetchAbilitySpecials();
    }

    FetchAbilitySpecials() {
        // Modifier specials
        this.shard_illusion_duration = this.ability.GetSpecialValueFor("shard_illusion_duration");
        this.shard_illusion_incoming_damage = this.ability.GetSpecialValueFor("shard_illusion_incoming_damage");
        this.shard_illusion_outgoing_damage = this.ability.GetSpecialValueFor("shard_illusion_outgoing_damage");

    }

    DeclareFunctions(): ModifierFunction[] {
        return [
            ModifierFunction.REFLECT_SPELL,
        ];
    }


    GetPriority(): ModifierPriority {
        return ModifierPriority.HIGH
    }

    GetReflectSpell(event: ModifierAbilityEvent): 0 | 1 {
        if (!IsServer()) return 0;
        // If spell reflection returned false we'll stop here
        if (!SpellReflect(event, this.parent, base_modifier_antimage_counterspell_passive.name)) {
            return 0;
        }
        print("Refletou?")

      


        // Play reflect sound
        EmitSoundOn(this.sound_reflect, event.ability.GetCaster());

        return 1;
    }


}

@registerModifier()
export class base_modifier_antimage_counterspell_active_absorb extends BaseModifier {
    // Modifier properties
    caster: CDOTA_BaseNPC = this.GetCaster()!;
    ability: CDOTABaseAbility = this.GetAbility()!;
    parent: CDOTA_BaseNPC = this.GetParent();
    sound_reflect: string = "Hero_Antimage.Counterspell.Target";
    particle_shield: string = "particles/units/heroes/hero_antimage/antimage_counter.vpcf";
    particle_shield_fx?: ParticleID;
    particle_absorb: string = "particles/units/heroes/hero_antimage/antimage_spellshield.vpcf";
    particle_absorb_fx?: ParticleID;

    // Modifier specials
    shard_illusion_duration: number = 0;
    shard_illusion_incoming_damage: number = 0;
    shard_illusion_outgoing_damage: number = 0;


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
        this.FetchAbilitySpecials();

        // Play particle
        this.particle_shield_fx = ParticleManager.CreateParticle(this.particle_shield, ParticleAttachment.ABSORIGIN_FOLLOW, this.parent);
        ParticleManager.SetParticleControl(this.particle_shield_fx, 0, this.parent.GetAbsOrigin());
        ParticleManager.SetParticleControl(this.particle_shield_fx, 1, Vector(150, 150, 150));
        this.AddParticle(this.particle_shield_fx, false, false, -1, false, false);
    }

    FetchAbilitySpecials() {

    }

    DeclareFunctions(): ModifierFunction[] {
        return [
            ModifierFunction.ABSORB_SPELL
        ];
    }

    GetAbsorbSpell(event: ModifierAbilityEvent): 0 | 1 {
        if (!IsServer()) return 0;
     
        // Do not absorb allies' spells
        if (event.ability.GetCaster().GetTeamNumber() == this.parent.GetTeamNumber()) return 0;

        const bodyguard_modifier = modifier_talent_antimage_shadow_dancer_bodyguard_of_shadows.find_on(this.parent)

        print("bodyguard_modifier " , bodyguard_modifier)

        if (bodyguard_modifier) {
            bodyguard_modifier.CreateShadowFor(this.parent, event.ability.GetCaster());
        }
        // Play absorb effect
        this.particle_absorb_fx = ParticleManager.CreateParticle(this.particle_absorb, ParticleAttachment.CUSTOMORIGIN_FOLLOW, this.parent);
        ParticleManager.SetParticleControlEnt(this.particle_absorb_fx, 0, this.parent, ParticleAttachment.POINT_FOLLOW, AttachLocation.HITLOC, this.parent.GetAbsOrigin(), true);
        ParticleManager.ReleaseParticleIndex(this.particle_absorb_fx);

        return 1;
    }

    GetPriority(): ModifierPriority {
        return ModifierPriority.LOW
    }


}



export const $_DEFINITION: AbilityDefinition = {
    name: base_ability_antimage_counterspell.name,
    AbilityTextureName: 'antimage_counterspell',
    ScriptFile: __dirname,
    CustomAbilityType: CustomAbilityType.Base,
    MaxLevel: 4,
    AbilityBehavior: "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
    SpellDispellableType: "SPELL_DISPELLABLE_YES",
    FightRecapLevel: "1",
    IsBreakable: "1",


    AbilityCooldown: "15 11 7 3",

    AbilityCastRange: "0",
    AbilityCastPoint: "0 0 0 0",
    AbilityManaCost: "50",

    AbilityCastAnimation: "ACT_DOTA_CAST_ABILITY_3",
    AbilityCastGestureSlot: "DEFAULT",

    AbilityValues: {
        magic_resistance: "16 24 32 40",
        does_reflect: "1",
        reflected_spell_amp: "0",
        duration: "1.2",
        duration_illusion: "4",
        outgoing_damage: "-25",
        incoming_damage: "100",
    },
};
