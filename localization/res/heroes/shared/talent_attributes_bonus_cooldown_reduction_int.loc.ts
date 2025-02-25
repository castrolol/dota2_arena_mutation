import { AbilityLocalizationMounted, L, Language, ignore, ref, skill } from '../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `talent_attributes_bonus_cooldown_reduction_int`,
        name: L`${ref("DOTA_Tooltip_variable_cooldown_lower")} reduction`,
        description: L`Reduces ${ref("DOTA_Tooltip_variable_cooldown_lower")}.`,
        ability_specials: [
            {
                ability_special: 'cooldownSpellReduction',
                text: L`Reduction`,
                percentage: true,
            }
        ],
    };
}
