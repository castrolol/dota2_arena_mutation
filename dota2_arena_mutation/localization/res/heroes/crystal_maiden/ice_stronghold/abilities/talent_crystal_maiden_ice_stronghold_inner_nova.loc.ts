import { AbilityLocalizationMounted, Colors, L, Language, color, endcolor, ignore, skill } from '../../../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `talent_crystal_maiden_ice_stronghold_inner_nova`,
        name: L`Inner Nova`,
        lore: L`When it comes from within, the power is frightening.`,
        description: L`Allow the ${skill(
            'DOTA_Tooltip_ability_base_ability_crystal_maiden_crystal_nova'
        )} one to be self-casted (pressing two times), when self-casted it'll create extra explosions.`,
        ability_specials: [
            {
                ability_special: 'extra_explosions',
                text: L`EXTRA EXPLOSIONS`,
                percentage: false,
            },
        ],
    };
}
