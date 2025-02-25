import { AbilityLocalizationMounted, Colors, L, Language, color, endcolor, ignore, ref, skill } from '../../../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `increment_crystal_maiden_frost_archmage_quick_advantage`,
        name: L`${ref("DOTA_Tooltip_ability_base_ability_crystal_maiden_crystal_nova")}: Quick Advantage`,
        description: L`${skill("DOTA_Tooltip_ability_base_ability_crystal_maiden_crystal_nova")} deals extra damage to targets based on the difference of your movement speed and the target's movement speed.`,
        ability_specials: [
            {
                ability_special: 'damage_percent',
                text: L`PERCENTAGE OF DIFFERENCE`,
                percentage: true,
            },
        ],
    };
}
