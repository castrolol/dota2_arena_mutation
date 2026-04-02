import { AbilityLocalizationMounted, L, Language, ignore, skill } from '../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `talent_attributes_bonus_magic_defense_bonus_int`,
        name: L`Magic Resistance Bonus`,
        description: L`Increases magic resistance.`,
        ability_specials: [
            {
                ability_special: 'magicDefenseBonus',
                text: L`RESISTANCE BONUS`,
                percentage: true,
            }
        ],
    };
}
