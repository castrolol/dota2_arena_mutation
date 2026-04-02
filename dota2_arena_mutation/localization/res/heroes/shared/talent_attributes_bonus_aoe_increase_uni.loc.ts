import { AbilityLocalizationMounted, L, Language, dot, ignore, skill } from '../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `talent_attributes_bonus_aoe_increase_uni`,
        name: L`Area of Effect Size Increase`,
        description: L`Increase your area of effect size.`,
        ability_specials: [
            {
                ability_special: 'aoeBonus',
                text: L`BONUS`,
                percentage: false,
            }
        ],
    };
}
