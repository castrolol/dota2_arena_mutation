import { HeroDefinition } from "../static_definitions";
import { base_ability_crystal_maiden_brilliance_aura } from "./abilities/base_ability_crystal_maiden_brilliance_aura";
import { base_ability_crystal_maiden_crystal_nova } from "./abilities/base_ability_crystal_maiden_crystal_nova";
import { base_ability_crystal_maiden_freezing_field } from "./abilities/base_ability_crystal_maiden_freezing_field";
import { base_ability_crystal_maiden_frostbite } from "./abilities/base_ability_crystal_maiden_frostbite";
import { talent_frosty_fortress_ice_block } from "./ice_stronghold/frosty_fortress/talents/talent_frosty_fortress_ice_block";

export const HERO: HeroDefinition = {
    name: 'npc_dota_hero_crystal_maiden',

    abilities: {
        slot1: base_ability_crystal_maiden_crystal_nova.name,
        slot2: base_ability_crystal_maiden_frostbite.name,
        slot3: base_ability_crystal_maiden_brilliance_aura.name,
        slot6: base_ability_crystal_maiden_freezing_field.name,
    },

    classes: {
        ice_stronghold: {
            name: 'ice_stronghold',
            l18n: 'CUSTOM_crystal_maiden_ice_stronghold',
            icon: {
                icon: 'ice_tower',
                type: 'file',
            },
            color: 'blue_1',
            paths: {
                arcane_illusionist: {
                    name: 'frosty_fortress',
                    l18n: 'CUSTOM_crystal_maiden_ice_stronghold_frosty_fortress',
                    icon: {
                        icon: 'armor',
                        type: 'local',
                    },
                    talents: [
                        [talent_frosty_fortress_ice_block.name, null, null, null],
                        [null, null, null, null], 
                        [null, null, null, null],
                        [null, null, null, null],
                    ],
                },
                magical_shade: {
                    name: 'freezing_mountain',
                    l18n: 'CUSTOM_crystal_maiden_ice_stronghold_freezing_mountain',
                    icon: {
                        icon: 'full_heart',
                        type: 'local',
                    },
                    talents: [
                        [null, null, null, null],
                        [null, null, null, null],
                        [null, null, null, null],
                        [null, null, null, null],
                    ],
                },
            },
        },
        
        frost_mage: {
            name: 'frost_mage',
            l18n: 'CUSTOM_crystal_maiden_frost_mage',
            icon: {
                icon: 'snowflake',
                type: 'local',
            },
            color: 'cyan_3',
            paths: {
                arcane_illusionist: {
                    name: 'sudden_freeze',
                    l18n: 'CUSTOM_crystal_maiden_frost_mage_sudden_freeze',
                    icon: {
                        icon: 'wand',
                        type: 'file',
                    },
                    talents: [
                        [null, null, null, null],
                        [null, null, null, null], 
                        [null, null, null, null],
                        [null, null, null, null],
                    ],
                },
                magical_shade: {
                    name: 'frost_archmage',
                    l18n: 'CUSTOM_crystal_maiden_frost_mage_frost_archmage',
                    icon: {
                        icon: 'snowflake',
                        type: 'local',
                    },
                    talents: [
                        [null, null, null, null],
                        [null, null, null, null],
                        [null, null, null, null],
                        [null, null, null, null],
                    ],
                },
            },
        },

        
        snow_walker: {
            name: 'snow_walker',
            l18n: 'CUSTOM_crystal_maiden_snow_walker',
            icon: {
                icon: 'focus_fire',
                type: 'local',
            },
            color: 'purple_3',
            paths: {
                arcane_illusionist: {
                    name: 'snow_hawkeye',
                    l18n: 'CUSTOM_crystal_maiden_snow_walker_snow_hawkeye',
                    icon: {
                        icon: 'execute',
                        type: 'local',
                    },
                    talents: [
                        [null, null, null, null],
                        [null, null, null, null], 
                        [null, null, null, null],
                        [null, null, null, null],
                    ],
                },
                magical_shade: {
                    name: 'snow_shade',
                    l18n: 'CUSTOM_crystal_maiden_snow_walker_snow_shade',
                    icon: {
                        icon: 'speed',
                        type: 'local',
                    },
                    talents: [
                        [null, null, null, null],
                        [null, null, null, null],
                        [null, null, null, null],
                        [null, null, null, null],
                    ],
                },
            },
        },

        
    },
};
