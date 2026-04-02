import { AbilityLocalizationMounted, L, Language, ignore, skill } from '../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `talent_attributes_bonus_block_physical_int`,
        name: L`Block Physical Damage`,
        description: L`Add a chance of blocking physical damage.`,
        ability_specials: [
            {
                ability_special: 'physicalBlockBonus',
                text: L`PHYSICAL BLOCK`,
                percentage: false,
            },
            {
                ability_special: 'physicalBlockChance',
                text: L`CHANCE OF BLOCKING`,
                percentage: true,
            }
        ],
    };
}
