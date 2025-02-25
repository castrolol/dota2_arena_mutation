import { AbilityLocalizationMounted, Colors, L, Language, abilityValue, color, endcolor, ignore, ref, skill } from '../../../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `talent_crystal_maiden_frost_archmage_icy_soul`,
        name: L`Ice Orb`,
        description: L`Awakes your coldblood decreasing your mana usage and the ${ref("DOTA_Tooltip_variable_cooldown_lower")}`,
        ability_specials: [
            {
                ability_special: 'mana_reduction',
                text: L`MANA REDUCTION`,
                percentage: true,
            },
            {
                ability_special: 'cooldown_reduction',
                text: L`${ref("DOTA_Tooltip_variable_COOLDOWN")} REDUCTION`,
                percentage: true,
            },
            {
                ability_special: 'buff_duration',
                text: L`DURATION`,
                percentage: false,
            },
        ],
    };
}
