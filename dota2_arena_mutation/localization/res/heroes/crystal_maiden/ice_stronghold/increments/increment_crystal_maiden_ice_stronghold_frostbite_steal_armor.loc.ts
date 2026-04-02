import { AbilityLocalizationMounted, L, Language, ignore, skill } from '../../../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `increment_crystal_maiden_ice_stronghold_frostbite_steal_armor`,
        name: L`Stealing Armor`,
        description: L`When you cast ${skill(
            'DOTA_Tooltip_ability_base_ability_crystal_maiden_frostbite'
        )}, it steals armor from target per second, it lasts longer than ${skill('DOTA_Tooltip_ability_base_ability_crystal_maiden_frostbite')}.`,
        ability_specials: [
            {
                ability_special: 'armor_per_sec',
                text: L`ARMOR PER SECOND`,
                percentage: false,
            },
            {
                ability_special: 'armor_duration',
                text: L`ARMOR DURATION`,
                percentage: false,
            },
        ],
    };
}
