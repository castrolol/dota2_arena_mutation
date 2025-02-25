import { AbilityLocalizationMounted, Colors, L, Language, color, endcolor, ignore, skill } from '../../../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `talent_crystal_maiden_ice_stronghold_ice_block`,
        name: L`Ice Block`,
        lore: L`You should just embrace the absolute zero`,
        description: L`On activate freeze yourself, making you invunerable and frozen for a short duration.\n\nWhile frozen, you will be ${color(Colors.Ability)}immune${endcolor()} to any damage and status effects, but also ${color(Colors.Warning)}unable to move or act${endcolor()}.\n\n${color(Colors.Info)}Can be cancelled by reactivating the ability.${endcolor()}`,
        ability_specials: [
            {
                ability_special: 'max_stacks',
                text: L`MAX STACKS`,
                percentage: false,
            },
            {
                ability_special: 'armor_per_stack',
                text: L`ARMOR PER STACK`,
                percentage: false,
            },
            {
                ability_special: 'stack_duration',
                text: L`STACK DURATION`,
                percentage: false,
            },
        ],
    };
}
