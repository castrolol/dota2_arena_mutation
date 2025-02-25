import { AbilityLocalizationMounted, L, Language, ignore, skill } from '../../../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `talent_crystal_maiden_ice_stronghold_frost_armor`,
        name: L`Frost Armor`,
        lore: L`The cold front of the Ice Stronghold increases her resistance front of the enemies.`,
        description: L`Gains a stack of Frost Armor everytime you attack an enemy. Each stack grants bonus armor.`,
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
