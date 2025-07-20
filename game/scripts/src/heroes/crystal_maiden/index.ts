import { HeroDefinition, localIcon, fileIcon, makel18n, makeHero18n, emptyRow, talentsFor } from "../static_definitions";
import { base_ability_crystal_maiden_brilliance_aura } from "./abilities/base_ability_crystal_maiden_brilliance_aura";
import { base_ability_crystal_maiden_crystal_nova } from "./abilities/base_ability_crystal_maiden_crystal_nova";
import { base_ability_crystal_maiden_freezing_field } from "./abilities/base_ability_crystal_maiden_freezing_field";
import { base_ability_crystal_maiden_frostbite } from "./abilities/base_ability_crystal_maiden_frostbite";
import { IceStronghold } from "./ice_stronghold";

const heroName = "crystal_maiden";

export const HERO: HeroDefinition = {
    name: makeHero18n(heroName),

    abilities: {
        slot1: base_ability_crystal_maiden_crystal_nova.name,
        slot2: base_ability_crystal_maiden_frostbite.name,
        slot3: base_ability_crystal_maiden_brilliance_aura.name,
        slot6: base_ability_crystal_maiden_freezing_field.name,
    },

    classes: {
        ice_stronghold: {
            name: IceStronghold.name,
            l18n: makel18n(heroName, IceStronghold.name),
            icon: fileIcon('ice_tower'),
            color: 'blue_1',
            paths: {
                frosty_fortress: {
                    name: IceStronghold.FrostyFortress.name,
                    l18n: makel18n(heroName, IceStronghold.name, IceStronghold.FrostyFortress.name),
                    icon: localIcon('armor'),
                    talents: talentsFor(
                        IceStronghold.FrostyFortress,
                        [
                            ["bonus:block_physical_int", "bonus:damage_reduction_int", "bonus:defense_bonus_int", "bonus:dot_defense_uni"],
                            ["ice_block", "heavy_frost_armor", "brain_freeze", "inner_block"],
                            ["frostbite_amputation", null, null, null],
                            null
                        ]
                    ),
                },
                freezing_mountain: {
                    name: 'freezing_mountain',
                    l18n: 'CUSTOM_crystal_maiden_ice_stronghold_freezing_mountain',
                    icon: localIcon('full_heart'),
                    talents: [
                        emptyRow(),
                        emptyRow(),
                        emptyRow(),
                        emptyRow(),
                    ],
                },
            },
        },

        frost_mage: {
            name: 'frost_mage',
            l18n: 'CUSTOM_crystal_maiden_frost_mage',
            icon: localIcon('snowflake'),
            color: 'cyan_3',
            paths: {
                sudden_freeze: {
                    name: 'sudden_freeze',
                    l18n: 'CUSTOM_crystal_maiden_frost_mage_sudden_freeze',
                    icon: fileIcon('wand'),
                    talents: [
                        emptyRow(),
                        emptyRow(),
                        emptyRow(),
                        emptyRow(),
                    ],
                },
                frost_archmage: {
                    name: 'frost_archmage',
                    l18n: 'CUSTOM_crystal_maiden_frost_mage_frost_archmage',
                    icon: localIcon('snowflake'),
                    talents: [
                        emptyRow(),
                        emptyRow(),
                        emptyRow(),
                        emptyRow(),
                    ],
                },
            },
        },


        snow_walker: {
            name: 'snow_walker',
            l18n: 'CUSTOM_crystal_maiden_snow_walker',
            icon: localIcon('focus_fire'),
            color: 'purple_3',
            paths: {
                snow_hawkeye: {
                    name: 'snow_hawkeye',
                    l18n: 'CUSTOM_crystal_maiden_snow_walker_snow_hawkeye',
                    icon: localIcon('execute'),
                    talents: [
                        emptyRow(),
                        emptyRow(),
                        emptyRow(),
                        emptyRow(),
                    ],
                },
                snow_shade: {
                    name: 'snow_shade',
                    l18n: 'CUSTOM_crystal_maiden_snow_walker_snow_shade',
                    icon: localIcon('speed'),
                    talents: [
                        emptyRow(),
                        emptyRow(),
                        emptyRow(),
                        emptyRow(),
                    ],
                },
            },
        },


    },
};
