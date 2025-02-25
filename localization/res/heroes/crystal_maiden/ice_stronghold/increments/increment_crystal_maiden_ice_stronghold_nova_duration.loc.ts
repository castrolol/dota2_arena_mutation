import { AbilityLocalizationMounted, L, Language, ignore, skill } from '../../../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `increment_crystal_maiden_ice_stronghold_nova_duration`,
        name: L`Increase Duration`,
        description: L`Increases the duration of ${skill(
            'DOTA_Tooltip_ability_base_ability_crystal_maiden_crystal_nova'
        )}'s debuff.`,
        ability_specials: [
            {
                ability_special: 'extra_nova_duration',
                text: L`EXTRA DURATION`,
                percentage: false,
            }
        ],
    };
}
