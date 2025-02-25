import { AbilityLocalizationMounted, L, Language, ignore, skill } from '../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `talent_attributes_bonus_spell_amp_plus_int`,
        name: L`Spell Amplification Plus`,
        description: L`Increases spell amplification.`,
        ability_specials: [
            {
                ability_special: 'spellAmplification',
                text: L`Amplification`,
                percentage: true,
            }
        ],
    };
}
