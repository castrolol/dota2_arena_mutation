import { attributeAbilities } from "../../mechanics/attributes/attribute_abilities_definition";
import { HeroDefinition, localIcon, makeHero18n, makel18n, talentsFor } from "../static_definitions";
import { base_ability_antimage_blink } from "./abilities/base_ability_antimage_blink";
import { base_ability_antimage_counterspell } from "./abilities/base_ability_antimage_counterspell";
import { base_ability_antimage_mana_break } from "./abilities/base_ability_antimage_mana_break";
import { base_ability_antimage_mana_void } from "./abilities/base_ability_antimage_mana_void";
import ShadowRogue from "./shadow_rogue";

const heroName = "antimage";

export const HERO: HeroDefinition = {
    name: makeHero18n(heroName),


    abilities: {
        slot1: base_ability_antimage_blink.name,
        slot2: base_ability_antimage_counterspell.name,
        slot3: base_ability_antimage_mana_break.name,
        slot6: base_ability_antimage_mana_void.name,
    },

    classes: {
        arcane_hunter: {
            name: 'arcane_hunter',
            l18n: 'CUSTOM_antimage_arcane_hunter',
            icon: {
                icon: 'chen',
                type: 'local',
            },
            color: 'blue_1',
            paths: {
                mana_hunter: {
                    name: 'mana_hunter',
                    l18n: 'CUSTOM_antimage_arcane_hunter_mana_hunter',
                    icon: {
                        icon: 'mana',
                        type: 'local',
                    },
                    talents: [
                        [null, null, null, null],
                        [null, null, null, null],
                        [null, null, null, null],
                        [null, null, null, null],
                    ],
                },
                deposed_arcanist: {
                    name: 'deposed_arcanist',
                    l18n: 'CUSTOM_antimage_arcane_hunter_deposed_arcanist',
                    icon: {
                        icon: 'overshadow',
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

        shadow_rogue: {
            name: ShadowRogue.name,
            l18n: makel18n(heroName, ShadowRogue.name),
            icon: localIcon("skull"),
            color: 'purple_0',
            paths: {
                shadow_dancer: {
                    name: ShadowRogue.ShadowDancer.name,
                    l18n: makel18n(heroName, ShadowRogue.name, ShadowRogue.ShadowDancer.name),
                    icon: localIcon("spectre"),
                    talents: talentsFor(
                        ShadowRogue.ShadowDancer,
                        [
                            ["shadow", "bodyguard_of_shadow", null, null],
                            [null, null, null, null],
                            [null, null, null, null],
                            [null, null, null, null],
                        ]
                    ),
                },
                undercovered_illusionist: {
                    name: 'undercovered_illusionist',
                    l18n: 'CUSTOM_antimage_shadow_rogue_undercovered_illusionist',
                    icon: {
                        icon: 'illusion',
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


        mana_addict: {
            name: 'mana_addict',
            l18n: 'CUSTOM_antimage_mana_addict',
            icon: {
                icon: 'potion',
                type: 'file',
            },
            color: 'cyan_0',
            paths: {
                thirsty_for_mana: {
                    name: 'thirsty_for_mana',
                    l18n: 'CUSTOM_antimage_mana_addict_thirsty_for_mana',
                    icon: {
                        icon: 'spinning',
                        type: 'local',
                    },
                    talents: [
                        [null, null, null, null],
                        [null, null, null, null],
                        [null, null, null, null],
                        [null, null, null, null],
                    ],
                },
                corrupted_by_void: {
                    name: 'corrupted_by_void',
                    l18n: 'CUSTOM_antimage_mana_addict_corrupted_by_void',
                    icon: {
                        icon: 'demon',
                        type: 'file',
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
