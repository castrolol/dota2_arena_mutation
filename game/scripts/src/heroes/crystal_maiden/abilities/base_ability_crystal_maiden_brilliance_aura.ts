import { registerAbility, BaseAbility, registerModifier, BaseModifier } from '../../../utils/dota_ts_adapter';
import { AbilityDefinition, CustomAbilityType } from '../../static_definitions';

@registerAbility()
export class base_ability_crystal_maiden_brilliance_aura extends BaseAbility {
    caster: CDOTA_BaseNPC = this.GetCaster();
    sound_cast: string = 'Hero_Crystal.CrystalNova.Yulsaria';
    particle_cast: string = 'particles/heroes/crystal_maiden/arcane_aura_focused_arcane_cast.vpcf';
    particle_cast_fx?: ParticleID;

    Precache(context: CScriptPrecacheContext) {
        PrecacheResource(PrecacheType.PARTICLE, 'particles/heroes/crystal_maiden/arcane_aura_focused_arcane_cast.vpcf', context);
        PrecacheResource(PrecacheType.PARTICLE, 'particles/heroes/crystal_maiden/arcane_aura_focused_arcane_effect.vpcf', context);
    }

    GetIntrinsicModifierName() {
        return custom_modifier_crystal_maiden_arcane_aura_aura.name;
    }

    Spawn(): void {
        if (!IsServer()) return;

        this.OnUpgrade();
    }
}

@registerModifier()
export class custom_modifier_crystal_maiden_arcane_aura_aura extends BaseModifier {
    caster: CDOTA_BaseNPC = this.GetCaster()!;
    ability: CDOTABaseAbility = this.GetAbility()!;
    parent: CDOTA_BaseNPC = this.GetParent();
    radius: number = 25000;

    IsHidden() {
        return true;
    }
    IsDebuff() {
        return false;
    }
    IsPurgable() {
        return false;
    }
    RemoveOnDeath() {
        return false;
    }

    OnCreated(): void {}

    OnRefresh() {
        this.OnCreated();
    }

    IsAura(): boolean {
        // Does nothing when caster is disabled
        if (this.parent.PassivesDisabled()) {
            return false;
        }

        return true;
    }

    IsAuraActiveOnDeath() {
        return true;
    }
    GetAuraDuration() {
        return 0.5;
    }
    GetAuraRadius(): number {
        return this.radius;
    }

    GetAuraSearchFlags(): UnitTargetFlags {
        return UnitTargetFlags.NONE;
    }
    GetAuraSearchTeam(): UnitTargetTeam {
        return UnitTargetTeam.FRIENDLY;
    }
    GetAuraSearchType(): UnitTargetType {
        return UnitTargetType.HERO + UnitTargetType.BASIC;
    }
    GetModifierAura(): string {
        return custom_modifier_crystal_maiden_arcane_aura_buff.name;
    }
}

@registerModifier()
export class custom_modifier_crystal_maiden_arcane_aura_buff extends BaseModifier {
    // Modifier properties
    caster: CDOTA_BaseNPC = this.GetCaster()!;
    ability: CDOTABaseAbility = this.GetAbility()!;
    parent: CDOTA_BaseNPC = this.GetParent();
    // modifier_blueheart: string = "modifier_reimagined_crystal_maiden_arcane_aura_blueheart_mastery";
    // modifier_focused_arcane: string = "modifier_reimagined_crystal_maiden_arcane_aura_focused_arcane";
    // modifier_frostbite_buff: string = "modifier_reimagined_crystal_maiden_frostbite_buff";

    // Modifier specials
    mana_regen?: number;
    self_factor?: number;

    // // Reimagined specials
    // igloo_frosting_arcane_aura_multiplier?: number;
    // focused_arcane_magic_res?: number;
    // focused_arcane_spell_amp?: number;
    // blueheart_mastery_mana_regen?: number;

    // // Reimagined talent specials
    // mana_regen_multiplier?: number;
    // cooldown_reduction?: number;

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
        // Modifier properties

        this.ability = this.GetAbility()!;

        // Modifier specials
        this.mana_regen = this.ability.GetSpecialValueFor('mana_regen');
        this.self_factor = this.ability.GetSpecialValueFor('self_factor');

        // Reimagined specials
        // this.igloo_frosting_arcane_aura_multiplier = this.ability.GetSpecialValueFor("igloo_frosting_arcane_aura_multiplier");
        // this.focused_arcane_magic_res = this.ability.GetSpecialValueFor("focused_arcane_magic_res");
        // this.focused_arcane_spell_amp = this.ability.GetSpecialValueFor("focused_arcane_spell_amp");
        // this.blueheart_mastery_mana_regen = this.ability.GetSpecialValueFor("blueheart_mastery_mana_regen");
    }

    OnRefresh(): void {
        this.OnCreated();
    }

    DeclareFunctions(): ModifierFunction[] {
        return [
            ModifierFunction.MANA_REGEN_CONSTANT,
            // ModifierFunction.MAGICAL_RESISTANCE_BONUS, // Reimagined: Focused Arcane
            // ModifierFunction.SPELL_AMPLIFY_PERCENTAGE, // Reimagined: Focused Arcane
            // ModifierFunction.COOLDOWN_PERCENTAGE, // Talent: Intense Cold
            // ModifierFunction.TOOLTIP,
        ];
    }

    // OnTooltip(): number {
    // 	return this.focused_arcane_magic_res!;
    // }

    GetModifierConstantManaRegen(): number {
        // Basic mana regen rate
        let mana_regen = this.mana_regen!;

        // If this is the caster, multiply rate by self factor
        if (this.parent == this.caster) {
            mana_regen = mana_regen * this.self_factor!;
        }

        // // Reimagination: Blueheart Mastery: Dealing damage to enemy units improves Crystal Maiden's aura's mana regeneration for each damage instance she inflicts. Stacks infinitely, independent stacks. Each stack lasts a few seconds.
        // mana_regen += this.ReimaginationBlueheartMastery();

        // // Reimagination: Frostbite's Igloo Frosting: Frostbite can be cast on an ally, rooting it and increasing Arcane's Auras effect on that ally by a multiplier.
        // mana_regen = mana_regen * this.ReimaginationIglooFrosting();

        // // Talent: Intense Cold: Focused Arcane now multiplies the mana regeneration of Arcane Aura by x and decreases the cooldowns of all affected allies by y%.
        // mana_regen *= this.ReimaginationTalentIntenseCold(true);

        return mana_regen;
    }

    // ReimaginationIglooFrosting(): number {
    // 	let multiplier = 1;
    // 	// If parent has the allied Frostbite modifier, increase by the multiplier
    // 	if (this.parent.HasModifier(this.modifier_frostbite_buff)) {
    // 		multiplier = this.igloo_frosting_arcane_aura_multiplier!;
    // 	}

    // 	return multiplier;
    // }

    // ReimaginationBlueheartMastery(): number {
    // 	let bonus = 0;

    // 	if (this.caster!.HasModifier(this.modifier_blueheart)) {
    // 		const stacks = this.caster!.GetModifierStackCount(this.modifier_blueheart, this.caster!);
    // 		if (stacks && stacks > 0) {
    // 			bonus = stacks * this.blueheart_mastery_mana_regen!;
    // 		}
    // 	}

    // 	return bonus;
    // }

    GetModifierMagicalResistanceBonus(): number {
        // // Only applies if the parent has Focused Arcane
        // if (this.caster!.HasModifier(this.modifier_focused_arcane)) {
        // 	let focused_arcane_magic_res = this.focused_arcane_magic_res!;
        // 	focused_arcane_magic_res = focused_arcane_magic_res * this.ReimaginationIglooFrosting();
        // 	return focused_arcane_magic_res!;
        // }

        return 0;
    }

    GetModifierSpellAmplify_Percentage(): number {
        // if (this.caster!.HasModifier(this.modifier_focused_arcane)) {
        // 	let focused_arcane_spell_amp = this.focused_arcane_spell_amp!;
        // 	focused_arcane_spell_amp = focused_arcane_spell_amp * this.ReimaginationIglooFrosting();
        // 	return focused_arcane_spell_amp!;
        // }

        return 0;
    }

    GetModifierPercentageCooldown(): number {
        //	return this.ReimaginationTalentIntenseCold(false);
        return 0;
    }

    // ReimaginationTalentIntenseCold(mana_multiplier: boolean): number {
    // 	if (HasTalent(this.caster, CrystalMaidenTalents.CrystalMaidenTalent_6)) {
    // 		if (this.caster.HasModifier(this.modifier_focused_arcane)) {
    // 			if (mana_multiplier) {
    // 				if (!this.mana_regen_multiplier) this.mana_regen_multiplier = GetTalentSpecialValueFor(this.caster, CrystalMaidenTalents.CrystalMaidenTalent_6, "mana_regen_multiplier");
    // 				return this.mana_regen_multiplier;
    // 			} else {
    // 				if (!this.cooldown_reduction) this.cooldown_reduction = GetTalentSpecialValueFor(this.caster, CrystalMaidenTalents.CrystalMaidenTalent_6, "cooldown_reduction");
    // 				return this.cooldown_reduction;
    // 			}
    // 		}
    // 	}

    // 	if (mana_multiplier) {
    // 		return 1;
    // 	} else {
    // 		return 0;
    // 	}
    // }
}

export const $_DEFINITION: AbilityDefinition = {
    name: base_ability_crystal_maiden_brilliance_aura.name,
    AbilityTextureName: 'crystal_maiden_brilliance_aura',
    ScriptFile: __dirname,
    CustomAbilityType: CustomAbilityType.Base,
    AbilityUnitTargetTeam: 'DOTA_UNIT_TARGET_TEAM_FRIENDLY',
    SpellImmunityType: 'SPELL_IMMUNITY_ALLIES_YES',
    MaxLevel: 4,
    
    AbilityBehavior: 'DOTA_ABILITY_BEHAVIOR_PASSIVE',
    AbilityCooldown: '18',
    AbilityManaCost: '100',
    AbilityCastPoint: '0.1',
    AbilityValues: {
        mana_regen: '0.5 1 1.5 2',
        self_factor: '3',
    },
};
