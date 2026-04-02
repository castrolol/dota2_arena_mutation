import { AbilityLocalizationMounted, L, Language, dot, ignore, skill } from '../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `talent_attributes_bonus_mana_boost_lesser_int`,
        name: L`Lesser Mana Boost`,
        description: L`Boosts your max mana.`,
        ability_specials: [
            {
                ability_special: 'manaBonus',
                text: L`MANA`,
                percentage: true,
            }
        ],
    };
}
