import { AbilityLocalizationMounted, L, Language, ignore, skill } from '../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `talent_attributes_bonus_damage_reduction_int`,
        name: L`Damage Reduction`,
        description: L`Reduces damage taken.`,
        ability_specials: [
            {
                ability_special: 'damageReduction',
                text: L`DAMAGE REDUCTION`,
                percentage: true,
            }
        ],
    };
}
