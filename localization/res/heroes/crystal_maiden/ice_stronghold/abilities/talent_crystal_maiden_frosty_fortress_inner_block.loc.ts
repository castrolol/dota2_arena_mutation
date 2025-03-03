import { AbilityLocalizationMounted, L, Language, ignore, ref, skill } from '../../../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `talent_crystal_maiden_frosty_fortress_inner_block`,
        name: L`Inner Block`,
        lore: L`From the inside!`,
        description: L`It blocks an ability casted against you, the blocking drains a percent of original ability mana cost.\nIf you don't have enough mana, the block doesn't activate.`,
        ability_specials: [
            {
                ability_special: 'mana_drained',
                text: L`MANA PERCENTAGE`,
                percentage: true,
            } ,
            {
                ability_special: 'buff_cooldown',
                text: L`${ref("DOTA_Tooltip_variable_COOLDOWN")}`,
                percentage: false,
            } 
        ],
    };
}
