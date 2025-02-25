import { AbilityLocalizationMounted, L, Language, ignore, skill } from '../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `talent_attributes_bonus_chance_of_disarm_int`,
        name: L`Chance of Disarm`,
        description: L`When attacked there is a chance to disarm attacker.`,
        ability_specials: [
            {
                ability_special: 'disarmChance',
                text: L`CHANCE`,
                percentage: true,
            },
            {
                ability_special: 'disarmDuration',
                text: L`DURATION`,
                percentage: false,
            }
        ],
    };
}
