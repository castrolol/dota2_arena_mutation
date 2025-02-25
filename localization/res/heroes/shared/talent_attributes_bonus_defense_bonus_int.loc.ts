import { AbilityLocalizationMounted, L, Language, ignore, skill } from '../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `talent_attributes_bonus_defense_bonus_int`,
        name: L`Armor Bonus`,
        description: L`Increases armor.`,
        ability_specials: [
            {
                ability_special: 'armorBonus',
                text: L`ARMOR BONUS`,
                percentage: false,
            }
        ],
    };
}
