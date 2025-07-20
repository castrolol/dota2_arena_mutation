import { registerAbility, BaseAbility, registerModifier, BaseModifier } from '../../../../../utils/dota_ts_adapter';
import { AddNewModifier, IsEnemy } from '../../../../../utils/util';
import { AbilityDefinition, CustomAbilityType } from '../../../../static_definitions';
import { TalentBaseModifier } from '../../../../talent_base_modifier';
import { special_ability_antimage_shadow_dancer_shadow } from '../special_abilities/special_ability_antimage_shadow_dancer_shadow';

@registerAbility()
export class talent_antimage_shadow_dancer_shadow extends BaseAbility {
    // Ability properties

    Precache(context: CScriptPrecacheContext) {
        PrecacheResource(PrecacheType.PARTICLE, 'particles/antimage/shadow_dancer/status_effect_shadow_dancer_antimage.vpcf', context);
        PrecacheResource(PrecacheType.PARTICLE, 'particles/antimage/shadow_dancer/status_effect_shadow_dancer_antimage_ambient.vpcf', context);
    }

    GetIntrinsicModifierName(): string {
        return modifier_talent_antimage_shadow_dancer_shadow.name;
    }

}

@registerModifier()
export class modifier_talent_antimage_shadow_dancer_shadow extends TalentBaseModifier {
    OnTalentCreated(params: any): void {
        if (IsClient()) return;

        const parent = this.GetParent();
        if (!parent.HasAbility(special_ability_antimage_shadow_dancer_shadow.name)) {
            parent.AddAbility(special_ability_antimage_shadow_dancer_shadow.name);
        }

        const ability = parent.FindAbilityByName(special_ability_antimage_shadow_dancer_shadow.name);
        ability.SetLevel(params.level);
    }

    OnDestroy(): void { }
}


export const $_DEFINITION: AbilityDefinition = {
    name: talent_antimage_shadow_dancer_shadow.name,
    AbilityTextureName: 'antimage_shadow_dancer_shadow_clone',
    CustomAbilityType: CustomAbilityType.Trait,
    ScriptFile: __dirname,
    IsBreakable: '1',
    AbilityBehavior: 'DOTA_ABILITY_BEHAVIOR_PASSIVE',
    FightRecapLevel: '1',

    MaxLevel: '4',
    RequiredLevel: '-3',
    // Casting
    //-------------------------------------------------------------------------------------------------------------
    AbilityCastPoint: '0 0 0 0',
    AbilityValues: {
        shadow_clone_damage: '50 66 82 100',
        shadow_clone_chance: "17 17 17 17",
        attacks_until_die: '1 1 2 2',
    },
};
