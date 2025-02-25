import { AbilityLocalizationMounted, Colors, L, Language, abilityValue, color, endcolor, ignore, ref, skill } from '../../../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `talent_crystal_maiden_frost_archmage_frost_blink`,
        name: L`Frost Teleportation`,
        description: L`When casting a ${skill('DOTA_Tooltip_ability_base_ability_crystal_maiden_crystal_nova')}, ${color(
            Colors.Ability
        )}teleport yourself${endcolor()} to the center of explosion`,

        ability_specials: [
            {
                ability_special: 'cooldown',
                text: L`${ref('DOTA_Tooltip_variable_COOLDOWN')}`,
                percentage: false,
            },
        ],
    };
}
