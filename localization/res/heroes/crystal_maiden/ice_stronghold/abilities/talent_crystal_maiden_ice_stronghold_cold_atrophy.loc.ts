import { AbilityLocalizationMounted, L, Language, ignore, ref, skill } from '../../../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `talent_crystal_maiden_ice_stronghold_cold_atrophy`,
        name: L`Cold Atrophy`,
        lore: L`The cold of the Ice Stronghold has a imponent effect on those who facing her.`,
        description: L`When casting ${skill(
            'DOTA_Tooltip_ability_base_ability_crystal_maiden_crystal_nova'
        )}, the affected enemies will have all damage reduced.`,
        ability_specials: [
            {
                ability_special: 'dmg_reduction',
                text: L`DAMAGE REDUCTION`,
                percentage: true,
            },
            {
                ability_special: 'radius',
                text: L`${ref("DOTA_Tooltip_variable_RADIUS")}`,
                percentage: false,
            },
            {
                ability_special: 'duration',
                text: L`DURATION`,
                percentage: false,
            },
        ],
    };
}
