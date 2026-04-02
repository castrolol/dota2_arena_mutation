import { AbilityLocalizationMounted, L, Language, dot, ignore, skill } from '../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `talent_attributes_bonus_dot_defense_uni`,
        name: L`Resistence to Damage per Second`,
        description: L`Reduce incoming ${dot("DoT")} damage.`,
        ability_specials: [
            {
                ability_special: 'dotDefense',
                text: L`REDUCTION`,
                percentage: true,
            }
        ],
    };
}
