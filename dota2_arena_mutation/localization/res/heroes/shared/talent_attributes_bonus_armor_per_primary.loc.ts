import { AbilityLocalizationMounted, L, Language, ignore, ref, skill } from '../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `talent_attributes_bonus_armor_per_primary`,
        name: L`ARMOR PER PRIMARY ATTRIBUTE`,
        description: L`Increases armor based on your primary attribute.`,
        ability_specials: [
            {
                ability_special: 'armorPerPrimary',
                text: L`ARMOR PER PRIMARY ATTRIBUTE`,
                percentage: false,
            }
        ],
    };
}
