import { AbilityLocalizationMounted, L, Language, ignore, ref, skill } from '../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `talent_attributes_bonus_status_resistance_int`,
        name: L`${ref("DOTA_Tooltip_variable_STATUS_RESIST")}`,
        description: L`Increases ${ref("DOTA_Tooltip_variable_STATUS_RESIST")}.`,
        ability_specials: [
            {
                ability_special: 'statusResistance',
                text: L`${ref("DOTA_Tooltip_variable_STATUS_RESIST")}`,
                percentage: true,
            }
        ],
    };
}
