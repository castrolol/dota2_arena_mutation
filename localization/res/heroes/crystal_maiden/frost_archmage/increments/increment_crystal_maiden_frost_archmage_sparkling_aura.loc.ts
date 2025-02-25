import { AbilityLocalizationMounted, Colors, L, Language, color, endcolor, ignore, ref, skill } from '../../../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `increment_crystal_maiden_frost_archmage_sparkling_aura`,
        name: L`${ref("DOTA_Tooltip_ability_base_ability_crystal_maiden_brilliance_aura")}: Sparkling Aura`,
        description: L`${skill("DOTA_Tooltip_ability_base_ability_crystal_maiden_brilliance_aura")} provides to you spell amplification based on a percentage of your mana regeneration.`,
        ability_specials: [
            {
                ability_special: 'regen_to_amp',
                text: L`PERCENTAGE OF REGENERATION`,
                percentage: true,
            },
        ],
    };
}
