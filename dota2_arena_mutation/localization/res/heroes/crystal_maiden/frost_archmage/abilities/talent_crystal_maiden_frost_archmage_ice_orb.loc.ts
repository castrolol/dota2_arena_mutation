import { AbilityLocalizationMounted, Colors, L, Language, abilityValue, color, endcolor, ignore, skill } from '../../../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `talent_crystal_maiden_frost_archmage_ice_orb`,
        name: L`Ice Orb`,
        description: L`After casting a ${skill('DOTA_Tooltip_ability_base_ability_crystal_maiden_crystal_nova')}, an ${color(
            Colors.Ability
        )}Ice Orb${endcolor()} will be created and after ${color(Colors.Ability)}${abilityValue(
            'delay'
        )} second${endcolor()} it seeks out the nearest enemy unit inside the explosion's area and deals ${color(
            Colors.Magic
        )}magic damage${endcolor()} based on your ${color(Colors.Magic)}intelligence${endcolor()} atribute`,

        ability_specials: [
            {
                ability_special: 'damage_per_int',
                text: L`INTELLIGENCE MULTIPLIER`,
                percentage: false,
            },
        ],
    };
}
