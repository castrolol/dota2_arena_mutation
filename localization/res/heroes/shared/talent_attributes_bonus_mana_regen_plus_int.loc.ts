import { AbilityLocalizationMounted, L, Language, ignore, skill } from '../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `talent_attributes_bonus_mana_regen_plus_int`,
        name: L`Mana Regeneration Plus`,
        description: L`Increases mana regeneration.`,
        ability_specials: [
            {
                ability_special: 'manaRegen',
                text: L`AMOUNT`,
                percentage: false,
            }
        ],
    };
}
