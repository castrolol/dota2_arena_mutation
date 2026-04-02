import { AbilityLocalizationMounted, L, Language, ignore, skill } from '../../../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `increment_crystal_maiden_ice_stronghold_frostbite_dmg_per_armor`,
        name: L`Armor to Damage`,
        description: L`When you cast ${skill(
            'DOTA_Tooltip_ability_base_ability_crystal_maiden_frostbite'
        )}, the target will take damage based on a percent of your armor amount.`,
        ability_specials: [
            {
                ability_special: 'damage_armor',
                text: L`ARMOR TO DAMAGE`,
                percentage: true,
            }
        ],
    };
}
