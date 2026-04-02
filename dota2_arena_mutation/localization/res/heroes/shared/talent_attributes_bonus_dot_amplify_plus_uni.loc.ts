import { AbilityLocalizationMounted, L, Language, dot, ignore, skill } from '../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `talent_attributes_bonus_dot_amplify_plus_uni`,
        name: L`Amplify Damage per Second - Plus`,
        description: L`Amplifies ${dot("DoT")} damage.`,
        ability_specials: [
            {
                ability_special: 'dotAmplify',
                text: L`AMPLIFICATION`,
                percentage: true,
            }
        ],
    };
}
