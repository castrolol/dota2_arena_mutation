import { AbilityLocalizationMounted, Colors, L, Language, color, endcolor, ignore, skill } from '../../../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `increment_crystal_maiden_frost_archmage_ice_burn`,
        name: L`Ice Burn`,
        description: L`When you inflicts ${color(Colors.Magic)}magical damage${endcolor()} to an unit, applies a debuff that causes ${color(Colors.Ability)}extra damage${endcolor()} on next ${color(Colors.Magic)}magical damage${endcolor()} that you make and renews the duration.`,
        ability_specials: [
            {
                ability_special: 'damage_extra',
                text: L`EXTRA DAMAGE`,
                percentage: false,
            },
            {
                ability_special: 'debuff_duration',
                text: L`DURATION`,
                percentage: false,
            },
        ],
    };
}
