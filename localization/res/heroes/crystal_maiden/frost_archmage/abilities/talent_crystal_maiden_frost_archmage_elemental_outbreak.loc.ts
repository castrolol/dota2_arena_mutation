import { AbilityLocalizationMounted, Colors, L, Language, abilityValue, color, endcolor, ignore, skill } from '../../../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `talent_crystal_maiden_frost_archmage_elemental_outbreak`,
        name: L`Elemental Outbreak`,
        description: L`For each ${abilityValue('threshold')} of magical damage dealt, releases an Ice Orb that deals ${color(
            Colors.Magic
        )}magical damage based on your Intelligence${endcolor()} to the target the last target.`,
        notes: [
            L`The Ice Orb is released when the accumulated damage reaches the threshold.\n`,
            L`The Ice Orb doesn't trigger another ice orb.\n`,
            L`If target dies before the ice orb is released, another enemy nearby him will be the new target.`,
        ],
        ability_specials: [
            {
                ability_special: 'damage_per_int',
                text: L`INTELLIGENCE MULTIPLIER`,
                percentage: false,
            },
            {
                ability_special: 'threshold',
                text: L`DAMAGE THRESHOLD`,
                percentage: false,
            },
        ],
    };
}
