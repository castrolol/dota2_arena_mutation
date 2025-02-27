import { AbilityLocalizationMounted, L, Language, ignore, ref, skill } from '../../../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `talent_crystal_maiden_frosty_fortress_brain_freeze`,
        name: L`Brain Freeze`,
        lore: L`Too much ice cream...`,
        description: L`When casting ${skill(
            'DOTA_Tooltip_ability_base_ability_crystal_maiden_crystal_nova'
        )}, all affected enemies will have their ${ref("DOTA_Tooltip_variable_COOLDOWN")} increased`,
        ability_specials: [
            {
                ability_special: 'cooldown_reduction',
                text: L`${ref("DOTA_Tooltip_variable_COOLDOWN")} INCREASE`,
                percentage: true,
            } 
        ],
    };
}
