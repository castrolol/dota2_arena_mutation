import { BaseAbility, BaseModifier, registerAbility, registerModifier } from '../../../../../utils/dota_ts_adapter';
import { AbilityDefinition, CustomAbilityType } from '../../../../static_definitions';
import { TalentBaseModifier } from '../../../../talent_base_modifier';
import { special_ability_crystal_maiden_frosty_fortress_ice_block } from '../special_abilities/special_ability_crystal_maiden_frosty_fortress_ice_block';

@registerAbility()
export class talent_crystal_maiden_frosty_fortress_ice_block extends BaseAbility {
    GetIntrinsicModifierName(): string {
        return modifier_talent_crystal_maiden_frosty_fortress_ice_block.name;
    }
}

@registerModifier()
export class modifier_talent_crystal_maiden_frosty_fortress_ice_block extends TalentBaseModifier {
    OnTalentCreated(params: any): void {
        if (IsClient()) return;

        const parent = this.GetParent();
        if (!parent.HasAbility(special_ability_crystal_maiden_frosty_fortress_ice_block.name)) {
            parent.AddAbility(special_ability_crystal_maiden_frosty_fortress_ice_block.name);
            const abilityOn4 = parent.GetAbilityByIndex(3);
            parent.SwapAbilities(special_ability_crystal_maiden_frosty_fortress_ice_block.name, abilityOn4.GetName(), true, false);
        }

        const ability = parent.FindAbilityByName(special_ability_crystal_maiden_frosty_fortress_ice_block.name);
        ability.SetLevel(params.level);
    }

    OnDestroy(): void {}
}

export const $_DEFINITION: AbilityDefinition = {
    name: talent_crystal_maiden_frosty_fortress_ice_block.name,
    AbilityTextureName: 'crystal_maiden_frosty_fortress_ice_block',
    CustomAbilityType: CustomAbilityType.Trait,
    ScriptFile: __dirname,

    AbilityBehavior:
        'DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_UNRESTRICTED | DOTA_ABILITY_BEHAVIOR_IGNORE_PSEUDO_QUEUE | DOTA_ABILITY_BEHAVIOR_TOGGLE | DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING',
    FightRecapLevel: '1',

    MaxLevel: '3',
    RequiredLevel: '-3',
    AbilityIndex: '4',
    // Casting
    //-------------------------------------------------------------------------------------------------------------
    AbilityCastPoint: '0 0 0 0',
    AbilityCooldown: '60 45 30',
    AbilityManaCost: '150 175 200',
    AbilityValues: {
        ice_block_duration: '0.75 1.0 1.5',
    },
};
