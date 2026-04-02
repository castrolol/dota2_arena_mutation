import { AbilityLocalizationMounted, Colors, L, Language, color, endcolor, ignore, ref, skill } from '../../../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `increment_crystal_maiden_frost_archmage_frostbite_slow`,
        name: L`Frostbite: Slow`,
        description: L`${skill('DOTA_Tooltip_ability_base_ability_crystal_maiden_frostbite')} slows the target, but ${color(
            Colors.Danger
        )}doesn't freeze it anymore${endcolor()}`,
        ability_specials: [
            {
                ability_special: 'slow_amount',
                text: L`SLOW AMOUNT`,
                percentage: true,
            },
        ],
    };
}
