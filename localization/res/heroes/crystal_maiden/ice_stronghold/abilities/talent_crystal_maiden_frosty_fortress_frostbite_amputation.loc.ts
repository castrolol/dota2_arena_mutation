import { AbilityLocalizationMounted, L, Language, ignore, ref, skill } from '../../../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.Brazilian,
        ability_classname: `talent_crystal_maiden_frosty_fortress_frostbite_amputation`,
        name: L`Aputação por Queimadura de Frio`,
        lore: L`As vezes tocar no gelo não é tão refrescante...`,
        description: L`Ao ser atacado, desarma o atacante.`,
        ability_specials: [
            {
                ability_special: 'disarm_duration',
                text: L`DURAÇÃO`,
                percentage: false,
            },
            {
                ability_special: 'cooldown_duration',
                text: L`${ref("DOTA_Tooltip_variable_COOLDOWN")}`,
                percentage: false,
            } 
        ],
    };
}
