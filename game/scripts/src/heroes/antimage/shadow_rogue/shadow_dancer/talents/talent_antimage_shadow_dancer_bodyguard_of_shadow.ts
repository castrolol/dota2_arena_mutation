import { registerAbility, BaseAbility, registerModifier, BaseModifier } from "../../../../../utils/dota_ts_adapter";
import {
  AbilityDefinition,
  CustomAbilityType,
} from "../../../../static_definitions";
import { TalentBaseModifier } from "../../../../talent_base_modifier";
import {
  modifier_shadow_clone,
  special_ability_antimage_shadow_dancer_shadow,
} from "../special_abilities/special_ability_antimage_shadow_dancer_shadow";

@registerAbility()
export class talent_antimage_shadow_dancer_bodyguard_of_shadows extends BaseAbility {
  // Ability properties

  GetIntrinsicModifierName(): string {
    return modifier_talent_antimage_shadow_dancer_bodyguard_of_shadows.name;
  }
}

@registerModifier()
export class modifier_talent_antimage_shadow_dancer_bodyguard_of_shadows extends TalentBaseModifier {
  attacks: number = 0;
  shadow_clone_damage: number = 0;

  OnTalentCreated(params: any): void {
    this.attacks = this.GetAbilityValueFor("attacks_until_die");
    this.shadow_clone_damage = this.GetAbilityValueFor("shadow_clone_damage");
  }

  GetAbilityName(): string {
    return talent_antimage_shadow_dancer_bodyguard_of_shadows.name;
  }

  CreateShadowFor(caster: CDOTA_BaseNPC, target: CDOTA_BaseNPC) {
    print("Criou? ");

    modifier_shadow_clone.CreateShadowClone(
      caster,
      null,
      target.GetAbsOrigin(),
      target,
      {
        attacks: this.attacks,
        shadow_clone_damage: this.shadow_clone_damage,
      }
    );
  }
}

export const $_DEFINITION: AbilityDefinition = {
  name: talent_antimage_shadow_dancer_bodyguard_of_shadows.name,
  AbilityTextureName: "antimage_shadow_dancer_bodyguard_of_shadow",
  CustomAbilityType: CustomAbilityType.Trait,
  ScriptFile: __dirname,
  IsBreakable: "1",
  AbilityBehavior: "DOTA_ABILITY_BEHAVIOR_PASSIVE",
  FightRecapLevel: "1",

  MaxLevel: "3",
  RequiredLevel: "-3",
  // Casting
  //-------------------------------------------------------------------------------------------------------------
  AbilityCastPoint: "0 0 0 0",
  AbilityValues: {
    shadow_clone_damage: "75 100 124",
    attacks_until_die: "2 2 2",
  },
};
