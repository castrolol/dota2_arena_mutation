import { AbilityLocalizationMounted, Colors, L, Language, abilityValue, color, endcolor, ignore, skill } from '../../../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `talent_antimage_shadow_dancer_shadow`,
        name: L`Shadow`,
        description: L`When you attack an enemy, a shadow comes into the world to attack the target.`,
        notes: [
            L`The shadow is a clone of you, so it has the same stats and items of you.\n`,
            L`The shadow cannot create another shadow\n`,
            L`The shadow is considered an illusion on item / abilities`,
        ],
        ability_specials: [
            {
                ability_special: 'shadow_clone_chance',
                text: L`CHANCE`,
                percentage: true,
            },
            {
                ability_special: 'shadow_clone_damage',
                text: L`DAMAGE`,
                percentage: true,
            },
            {
                ability_special: 'attacks_until_die',
                text: L`NUMBER OF ATTACKS`,
                percentage: false,
            },
        ],
    };
}