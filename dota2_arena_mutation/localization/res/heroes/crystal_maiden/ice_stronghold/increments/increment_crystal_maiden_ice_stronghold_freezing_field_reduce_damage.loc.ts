import { AbilityLocalizationMounted, L, Language, ignore, skill } from '../../../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `increment_crystal_maiden_ice_stronghold_freezing_field_reduce_damage`,
        name: L`Damage Reduction`,
        description: L`When you're casting ${skill(
            'DOTA_Tooltip_ability_base_ability_crystal_maiden_freezing_field'
        )}, all enemies affected will have their spell ampllification and attack damage reduced.`,
        ability_specials: [
            {
                ability_special: 'magic_damage_reduction',
                text: L`SPELL REDUCTION`,
                percentage: true,
            },
            {
                ability_special: 'attack_damage_reduction',
                text: L`ATTACK REDUCTION`,
                percentage: true,
            },
        ],
    };
}
