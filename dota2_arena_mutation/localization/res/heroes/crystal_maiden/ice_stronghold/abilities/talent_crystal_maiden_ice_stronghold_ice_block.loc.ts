import { AbilityLocalizationMounted, Colors, L, Language, color, endcolor, ignore, skill } from '../../../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `talent_crystal_maiden_frosty_fortress_ice_block`,
        name: L`Ice Block`,
        lore: L`You should just embrace the absolute zero`,
        description: L`On activate freeze yourself, making you invunerable and frozen for a short duration.\n\nWhile frozen, you will be ${color(Colors.Ability)}immune${endcolor()} to any damage and status effects, but also ${color(Colors.Warning)}unable to move or act${endcolor()}.\n\n${color(Colors.Info)}Can be cancelled by reactivating the ability.${endcolor()}`,
        ability_specials: [
            {
                ability_special: 'ice_block_duration',
                text: L`DURATION`,
                percentage: false,
            } 
        ],
    };
}
