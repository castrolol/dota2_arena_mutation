import { AbilityLocalizationMounted, Colors, L, Language, color, endcolor, ignore, ref, skill } from '../../../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `talent_crystal_maiden_ice_stronghold_nova_revenge`,
        name: L`Crystal Revenge`,
        lore: L`Every action has a reaction.`,
        description: L`When attacked casts a ${skill(
            'DOTA_Tooltip_ability_base_ability_crystal_maiden_crystal_nova'
        )} to attacker with a ${color(Colors.Info)}smaller radius${endcolor()}.\n\n${color(Colors.Info)}This effect has a cooldown${endcolor()}`,
        ability_specials: [
            {
                ability_special: 'cooldown',
                text: L`${ref("DOTA_Tooltip_variable_COOLDOWN")}`,
                percentage: false,
            },
            {
                ability_special: 'radius',
                text: L`${ref("DOTA_Tooltip_variable_RADIUS")}`,
                percentage: true,
            },
        ],
    };
}
