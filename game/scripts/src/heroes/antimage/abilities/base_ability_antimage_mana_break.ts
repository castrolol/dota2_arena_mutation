import { registerAbility, BaseAbility, registerModifier, BaseModifier } from '../../../utils/dota_ts_adapter';
import { CalculateDirectionToPosition, CalculateDistanceBetweenPoints, RemoveReflectedAbilities, SpellReflect } from '../../../utils/util';
import { AbilityDefinition, CustomAbilityType } from '../../static_definitions';

@registerAbility()
export class base_ability_antimage_mana_break extends BaseAbility {

    caster: CDOTA_BaseNPC = this.GetCaster();
	sound_blast: string = "AntiMage.ManaBreak.EnergyBlast.Cast";
	sound_blast_hit: string = "AntiMage.ManaBreak.EnergyBlast.Hit";
	particle_blast: string = "particles/heroes/anti_mage/antimage_energy_blast.vpcf";

    Precache(context: CScriptPrecacheContext) {
        PrecacheResource(PrecacheType.PARTICLE, "particles/heroes/anti_mage/antimage_energy_blast.vpcf", context);

    }

    GetIntrinsicModifierName(): string {
        return base_modifier_antimage_mana_break.name;
    }
 
}


@registerModifier()
export class base_modifier_antimage_mana_break extends BaseModifier {
	// Modifier properties
	caster: CDOTA_BaseNPC = this.GetCaster()!;
	ability: CDOTABaseAbility = this.GetAbility()!;
	parent: CDOTA_BaseNPC = this.GetParent();
	sound_mana_break: string = "Hero_Antimage.ManaBreak";
	particle_mana_break: string = "particles/generic_gameplay/generic_manaburn.vpcf";
	particle_mana_cleave: string = "particles/heroes/anti_mage/antimage_mana_cleave.vpcf";
	particle_mana_cleave_burn: string = "particles/heroes/anti_mage/antimage_mana_burn_hit.vpcf";

	// Modifier specials
	percent_damage_per_burn: number = 0;
	mana_per_hit: number = 0;
	mana_per_hit_pct: number = 0;
	illusion_percentage: number = 0;
 
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
	}

	OnRefresh(): void {
		this.FetchAbilitySpecials();
	}

	FetchAbilitySpecials() {
		// Modifier specials
		this.percent_damage_per_burn = this.ability.GetSpecialValueFor("percent_damage_per_burn");
		this.mana_per_hit = this.ability.GetSpecialValueFor("mana_per_hit");
		this.mana_per_hit_pct = this.ability.GetSpecialValueFor("mana_per_hit_pct");
		this.illusion_percentage = this.ability.GetSpecialValueFor("illusion_percentage");
	}

	DeclareFunctions(): ModifierFunction[] {
		return [
			ModifierFunction.PROCATTACK_BONUS_DAMAGE_PHYSICAL,
			//	ModifierFunction.PROCATTACK_BONUS_DAMAGE_PURE, // Talent 2
			ModifierFunction.ON_ATTACK_LANDED,
		];
	}

	GetModifierProcAttack_BonusDamage_Physical(event: ModifierAttackEvent): number {
		// Do nothing if the caster is broken
		if (this.parent.PassivesDisabled()) return 0;

		// Do nothing if the target is spell immune
		if (event.target.IsMagicImmune()) return 0;

		// Do nothing if the target is an ally
		if (event.target.GetTeamNumber() === this.parent.GetTeamNumber()) return 0;

		// Do nothing if the target is a building
		if (event.target.IsBuilding()) return 0;

		// Do nothing if the target has no mana
		if (event.target.GetMaxMana() === 0) return 0;

		let damage: number;

		// Calculate the mana burn amount for that target
		let mana_burn_amount = this.mana_per_hit + this.mana_per_hit_pct * event.target.GetMaxMana() * 0.01;

		// Check if parent is an illusion; if so, calculate damage percentage of illusion reduction
		if (this.parent.IsIllusion()) {
			mana_burn_amount = mana_burn_amount * this.illusion_percentage * 0.01;
		}

		// Check if target has enough mana to burn; otherwise, burn all its mana and adjust damage accordingly
		let actual_mana_burned;
		if (event.target.GetMana() <= mana_burn_amount) {
			actual_mana_burned = event.target.GetMana();
		} else {
			actual_mana_burned = mana_burn_amount;
		}

		// Burn mana for the target
		event.target.Script_ReduceMana(actual_mana_burned, this.ability)

		// Calculate damage percentage of mana burned
		damage = actual_mana_burned * this.percent_damage_per_burn * 0.01;
	 
		// Play sound
		EmitSoundOn(this.sound_mana_break, event.target);

		// Add hit particle effects
		const particle_mana_break_fx = ParticleManager.CreateParticle(this.particle_mana_break, ParticleAttachment.ABSORIGIN_FOLLOW, event.target);
		ParticleManager.SetParticleControl(particle_mana_break_fx, 0, event.target.GetAbsOrigin());
		ParticleManager.ReleaseParticleIndex(particle_mana_break_fx);

		return damage;
	}

	 
}





export const $_DEFINITION: AbilityDefinition = {
    name: base_ability_antimage_mana_break.name,
    AbilityTextureName: 'antimage_mana_break',
    ScriptFile: __dirname,
    CustomAbilityType: CustomAbilityType.Base,
    MaxLevel: 4,
    AbilityBehavior: "DOTA_ABILITY_BEHAVIOR_PASSIVE",
    AbilityUnitDamageType: "DAMAGE_TYPE_PHYSICAL",
    SpellImmunityType: "SPELL_IMMUNITY_ENEMIES_NO",
    AbilitySound: "Hero_Antimage.ManaBreak",
    IsBreakable: "1",
    AbilityCastAnimation: "ACT_DOTA_CAST_ABILITY_1",
    AbilityValues: {
        mana_per_hit: "25 30 35 40",
        mana_per_hit_pct: "1.6 2.4 3.2 4",
        percent_damage_per_burn: "50",
        illusion_percentage: "50",
    },
};
