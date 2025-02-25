import { AbilityLocalizationMounted, L, Language, ignore, ref, skill } from '../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `talent_attributes_bonus_movespeed_uni`,
        name: L`MOVEMENT SPEED BONUS`,
        description: L`Increase your movement speed.`,
        ability_specials: [
            {
                ability_special: 'movespeedBonus',
                text: L`MOVEMENT SPEED BONUS`,
                percentage: false,
            }
        ],
    };
}
