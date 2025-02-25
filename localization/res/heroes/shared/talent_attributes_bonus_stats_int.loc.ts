import { AbilityLocalizationMounted, L, Language, ignore, skill } from '../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `talent_attributes_bonus_stats_int`,
        name: L`Bonus Intelligence`,
        description: L`Increases intelligence attribute.`,
        ability_specials: [
            {
                ability_special: 'intBonus',
                text: L`Bonus`,
                percentage: false,
            }
        ],
    };
}
