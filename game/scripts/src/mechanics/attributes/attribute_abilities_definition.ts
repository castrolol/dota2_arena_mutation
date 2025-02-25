import { ChangeAttributeValue } from '../../heroes/static_definitions';
import { AttributeBonusParams } from '../custom_ability_attributes_bonus';
import './talent_attributes_base';

type AttributeAbilityDefinition = {
    name: string;
    AbilityTextureName: string;
    MaxLevel: `${number}`;
    AbilityValues: Partial<Record<keyof AttributeBonusParams, string>>;
    AbilityCooldown?: string;
};

export const $_CUSTOM_ABILITY_GENERIC_SPELL_AMP_UNI_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_spell_amp_uni',
    AbilityTextureName: 'custom_spell_amp_uni',
    MaxLevel: '4',
    AbilityValues: {
        spellAmplification: '5 10 15 20',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_SPELL_AMP_INT_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_spell_amp_int',
    AbilityTextureName: 'custom_spell_amp_int',
    MaxLevel: '4',
    AbilityValues: {
        spellAmplification: '4 7 12 18',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_SPELL_AMP_PLUS_INT_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_spell_amp_plus_int',
    AbilityTextureName: 'custom_spell_amp_plus_int',
    MaxLevel: '3',
    AbilityValues: {
        spellAmplification: '5 11 18',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_ATTACK_SPEED_AGI_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_attack_speed_agi',
    AbilityTextureName: 'custom_spell_attack_speed_agi',
    MaxLevel: '4',
    AbilityValues: {
        attackSpeedBonus: '7 14 21 28',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_ATTACK_SPEED_UNI_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_attack_speed_uni',
    AbilityTextureName: 'custom_spell_attack_speed_uni',
    MaxLevel: '4',
    AbilityValues: {
        attackSpeedBonus: '5 10 15 20',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_BLOCK_PHYSICAL_INT_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_block_physical_int',
    AbilityTextureName: 'custom_spell_block_physical_int',
    MaxLevel: '4',
    AbilityValues: {
        physicalBlockBonus: '15 30 45 60',
        physicalBlockChance: '60 60 60 100',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_BLOCK_MAGICAL_INT_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_block_magical_int',
    AbilityTextureName: 'custom_spell_block_magical_int',
    MaxLevel: '4',
    AbilityValues: {
        magicalBlockBonus: '60 80 100 150',
        magicalBlockChance: '17 17 17 25',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_DEFENSE_BONUS_STR_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_defense_bonus_str',
    AbilityTextureName: 'custom_spell_defense_bonus_str',
    MaxLevel: '4',
    AbilityValues: {
        armorBonus: '2 4 6 10',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_DEFENSE_BONUS_PLUS_STR_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_defense_bonus_plus_str',
    AbilityTextureName: 'custom_spell_defense_bonus_plus_str',
    MaxLevel: '3',
    AbilityValues: {
        armorBonus: '5 10 15',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_DEFENSE_BONUS_INT_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_defense_bonus_int',
    AbilityTextureName: 'custom_spell_defense_bonus_int',
    MaxLevel: '4',
    AbilityValues: {
        armorBonus: '1.5 2.25 3.5 5',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_DEFENSE_BONUS_PLUS_INT_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_defense_bonus_plus_int',
    AbilityTextureName: 'custom_spell_defense_bonus_plus_int',
    MaxLevel: '3',
    AbilityValues: {
        armorBonus: '3 6 12',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_LIFE_BOOST_STR_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_life_boost_str',
    AbilityTextureName: 'custom_spell_life_boost_str',
    MaxLevel: '3',
    AbilityValues: {
        healthBonus: '300 600 1200',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_LIFE_BOOST_INT_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_life_boost_int',
    AbilityTextureName: 'custom_spell_life_boost_int',
    MaxLevel: '3',
    AbilityValues: {
        healthBonus: '150 300 600',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_LIFE_REGEN_STR_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_life_regen_str',
    AbilityTextureName: 'custom_spell_life_regen_str',
    MaxLevel: '4',
    AbilityValues: {
        healthRegen: '5 7.5 10 13',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_LIFE_REGEN_INT_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_life_regen_int',
    AbilityTextureName: 'custom_spell_life_regen_int',
    MaxLevel: '4',
    AbilityValues: {
        healthRegen: '3 4.5 6 7.5',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_LIFESTEAL_STR_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_lifesteal_str',
    AbilityTextureName: 'custom_spell_lifesteal_str',
    MaxLevel: '4',
    AbilityValues: {
        lifesteal: '10 20 30 40',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_LIFESTEAL_UNI_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_lifesteal_uni',
    AbilityTextureName: 'custom_spell_lifesteal_uni',
    MaxLevel: '4',
    AbilityValues: {
        lifesteal: '3 7 11 16',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_MAGIC_BONUS_AGI_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_magic_bonus_agi',
    AbilityTextureName: 'custom_spell_magic_bonus_agi',
    MaxLevel: '4',
    AbilityValues: {
        magicDamagePerAgi: '0.075 0.15 0.225 0.3',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_MAGIC_BONUS_INT_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_magic_bonus_int',
    AbilityTextureName: 'custom_spell_magic_bonus_int',
    MaxLevel: '4',
    AbilityValues: {
        magicDamagePerInt: '0.075 0.15 0.225 0.3',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_MAGIC_BONUS_STR_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_magic_bonus_str',
    AbilityTextureName: 'custom_spell_magic_bonus_str',
    MaxLevel: '4',
    AbilityValues: {
        magicDamagePerStr: '0.075 0.15 0.225 0.3',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_STATUS_RESISTANCE_STR_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_status_resistance_str',
    AbilityTextureName: 'custom_spell_status_resistance_str',
    MaxLevel: '4',
    AbilityValues: {
        statusResistance: '6 12 18 24',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_STATUS_RESISTANCE_INT_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_status_resistance_int',
    AbilityTextureName: 'custom_spell_status_resistance_int',
    MaxLevel: '4',
    AbilityValues: {
        statusResistance: '6 12 18 24',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_SLOW_RESISTANCE_INT_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_slow_resistance_int',
    AbilityTextureName: 'custom_spell_slow_resistance_int',
    MaxLevel: '4',
    AbilityValues: {
        slowResistance: '6 12 18 24',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_MAGIC_DEFENSE_BONUS_STR_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_magic_defense_bonus_str',
    AbilityTextureName: 'custom_spell_magic_defense_bonus_str',
    MaxLevel: '4',
    AbilityValues: {
        magicDefenseBonus: '4 7 10 15',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_MAGIC_DEFENSE_BONUS_INT_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_magic_defense_bonus_int',
    AbilityTextureName: 'custom_spell_magic_defense_bonus_int',
    MaxLevel: '4',
    AbilityValues: {
        magicDefenseBonus: '3.5 5.25 7 10',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_MAGIC_DEFENSE_BONUS_PLUS_INT_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_magic_defense_bonus_plus_int',
    AbilityTextureName: 'custom_spell_magic_defense_bonus_plus_int',
    MaxLevel: '3',
    AbilityValues: {
        magicDefenseBonus: '5 8 12',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_MAGIC_LIFESTEAL_INT_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_magic_lifesteal_int',
    AbilityTextureName: 'custom_spell_magic_lifesteal_int',
    MaxLevel: '4',
    AbilityValues: {
        spellLifesteal: '10 15 20 30',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_MAGIC_LIFESTEAL_UNI_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_magic_lifesteal_uni',
    AbilityTextureName: 'custom_spell_magic_lifesteal_uni',
    MaxLevel: '4',
    AbilityValues: {
        spellLifesteal: '3 7 12 16',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_MANA_BOOST_INT_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_mana_boost_int',
    AbilityTextureName: 'custom_spell_mana_boost_int',
    MaxLevel: '3',
    AbilityValues: {
        manaBonus: '100 300 700',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_MANA_BOOST_LESSER_INT_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_mana_boost_lesser_int',
    AbilityTextureName: 'custom_spell_mana_boost_lesser_int',
    MaxLevel: '4',
    AbilityValues: {
        manaBonus: '75 200 300 500',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_MANA_REGEN_INT_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_mana_regen_int',
    AbilityTextureName: 'custom_spell_mana_regen_int',
    MaxLevel: '3',
    AbilityValues: {
        manaRegen: '4 9 12',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_MANA_REGEN_PLUS_INT_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_mana_regen_plus_int',
    AbilityTextureName: 'custom_spell_mana_regen_plus_int',
    MaxLevel: '3',
    AbilityValues: {
        manaBonusPercentage: '2 3 4',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_MANA_REGEN_LESSER_INT_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_mana_regen_lesser_str',
    AbilityTextureName: 'custom_spell_mana_regen_lesser_str',
    MaxLevel: '4',
    AbilityValues: {
        manaRegen: '3 6 9 12',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_GOLD_PER_MINUTE_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_gold_per_minute',
    AbilityTextureName: 'custom_spell_gold_per_minute',
    MaxLevel: '4',
    AbilityValues: {
        goldPerMinute: '30 60 90 120',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_PHYSICAL_BONUS_AGI_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_physical_bonus_agi',
    AbilityTextureName: 'custom_spell_physical_bonus_agi',
    MaxLevel: '4',
    AbilityValues: {
        physicalBonusPerAgi: '0.075 0.15 0.225 0.3',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_PHYSICAL_BONUS_INT_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_physical_bonus_int',
    AbilityTextureName: 'custom_spell_physical_bonus_int',
    MaxLevel: '4',
    AbilityValues: {
        physicalBonusPerInt: '0.075 0.15 0.225 0.3',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_PHYSICAL_BONUS_STR_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_physical_bonus_str',
    AbilityTextureName: 'custom_spell_physical_bonus_str',
    MaxLevel: '4',
    AbilityValues: {
        physicalBonusPerStr: '0.075 0.15 0.225 0.3',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_STATS_AGI_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_stats_agi',
    AbilityTextureName: 'custom_spell_stats_agi',
    MaxLevel: '4',
    AbilityValues: {
        agiBonus: '3 6 12 18',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_STATS_INT_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_stats_int',
    AbilityTextureName: 'custom_spell_stats_int',
    MaxLevel: '4',
    AbilityValues: {
        intBonus: '3 6 12 18',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_STATS_STR_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_stats_str',
    AbilityTextureName: 'custom_spell_stats_str',
    MaxLevel: '4',
    AbilityValues: {
        strBonus: '3 6 9 12',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_STATS_UNI_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_stats_uni',
    AbilityTextureName: 'custom_spell_stats_uni',
    MaxLevel: '4',
    AbilityValues: {
        agiBonus: '3 6 12 18',
        intBonus: '3 6 12 18',
        strBonus: '3 6 12 18',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_STATS_PERCENTAGE_STR_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_stats_percentage_str',
    AbilityTextureName: 'custom_spell_stats_percentage_str',
    MaxLevel: '4',
    AbilityValues: {
        strBonusPercentage: '5 10 15 20',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_STATS_INT_TO_STR_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_stats_int_to_str',
    AbilityTextureName: 'custom_spell_stats_int_to_str',
    MaxLevel: '4',
    AbilityValues: {
        intToStrPercentage: '8.75 17.5 26.25 35',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_HP_REGEN_AMP_INT_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_hp_regen_amp_int',
    AbilityTextureName: 'custom_spell_hp_regen_amp_int',
    MaxLevel: '4',
    AbilityValues: {
        intToStrPercentage: '5 10 15 30',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_STATS_PLUS_STR_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_stats_plus_str',
    AbilityTextureName: 'custom_spell_stats_plus_str',
    MaxLevel: '4',
    AbilityValues: {
        strBonus: '8 15 24 40',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_MOVESPEED_AGI_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_movespeed_agi',
    AbilityTextureName: 'custom_spell_movespeed_agi',
    MaxLevel: '3',
    AbilityValues: {
        movespeedBonus: '15 25 35',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_MOVESPEED_UNI_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_movespeed_uni',
    AbilityTextureName: 'custom_spell_movespeed_uni',
    MaxLevel: '3',
    AbilityValues: {
        movespeedBonus: '10 18 24',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_EVASION_AGI_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_evasion_agi',
    AbilityTextureName: 'custom_spell_evasion_agi',
    MaxLevel: '3',
    AbilityValues: {
        evasionBonus: '6 13 20',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_EVASION_UNI_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_evasion_uni',
    AbilityTextureName: 'custom_spell_evasion_uni',
    MaxLevel: '3',
    AbilityValues: {
        evasionBonus: '3 9 16',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_ITEM_COOLDOWN_REDUCTION_AGI_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_item_cooldown_reduction_agi',
    AbilityTextureName: 'custom_spell_item_cooldown_reduction_agi',
    MaxLevel: '3',
    AbilityValues: {
        cooldownItemReduction: '5 8 14',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_DAMAGE_REDUCTION_STR_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_damage_reduction_str',
    AbilityTextureName: 'custom_spell_damage_reduction_str',
    MaxLevel: '3',
    AbilityValues: {
        damageReduction: '4 8 12',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_DAMAGE_REDUCTION_INT_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_damage_reduction_int',
    AbilityTextureName: 'custom_spell_damage_reduction_int',
    MaxLevel: '3',
    AbilityValues: {
        damageReduction: '2 3.5 5 8',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_COOLDOWN_REDUCTION_INT_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_cooldown_reduction_int',
    AbilityTextureName: 'custom_spell_cooldown_reduction_int',
    MaxLevel: '3',
    AbilityValues: {
        cooldownSpellReduction: '5 12 20',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_MULTIPLE_ATTACK_AGI_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_multiple_attack_agi',
    AbilityTextureName: 'custom_spell_multiple_attack_agi',
    MaxLevel: '3',
    AbilityCooldown: '13 10 10',
    AbilityValues: {
        extraAttacks: '1 1 2',
        extraAttackCooldown: '13 10 10',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_REFLECT_STR_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_reflect_str',
    AbilityTextureName: 'custom_spell_reflect_str',
    MaxLevel: '3',
    AbilityValues: {
        reflectBonus: '8 15 21',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_REFLECT_INT_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_reflect_int',
    AbilityTextureName: 'custom_spell_reflect_int',
    MaxLevel: '4',
    AbilityValues: {
        reflectBonus: '5 7.5 11 16',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_REFLECT_UNI_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_reflect_uni',
    AbilityTextureName: 'custom_spell_reflect_uni',
    MaxLevel: '3',
    AbilityValues: {
        reflectBonus: '5 11 18',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_CHANCE_OF_DISARM_INT_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_chance_of_disarm_int',
    AbilityTextureName: 'custom_spell_chance_of_disarm_int',
    MaxLevel: '3',
    AbilityValues: {
        disarmChance: '7 12 17',
        disarmDuration: '0.7 1 1.4',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_CHANGE_ATTR_STR_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_change_attr_str',
    AbilityTextureName: 'custom_spell_change_attr_str',
    MaxLevel: '1',
    AbilityValues: {
        changeMainAttribute: ChangeAttributeValue.Strengh,
    },
};

export const $_CUSTOM_ABILITY_GENERIC_DOT_AMPLIFY_UNI_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_dot_amplify_uni',
    AbilityTextureName: 'custom_spell_dot_amplify_uni',
    MaxLevel: '3',
    AbilityValues: {
        dotAmplify: '6 9 12',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_DOT_AMPLIFY_PLUS_UNI_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_dot_amplify_plus_uni',
    AbilityTextureName: 'custom_spell_dot_amplify_plus_uni',
    MaxLevel: '3',
    AbilityValues: {
        dotAmplify: '9 13 18',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_AOE_INCREASE_UNI_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_aoe_increase_uni',
    AbilityTextureName: 'custom_spell_aoe_increase_uni',
    MaxLevel: '3',
    AbilityValues: {
        aoeBonus: '50 75 125',
    },
};

export const $_CUSTOM_ABILITY_GENERIC_DOT_DEFENSE_UNI_DEFINITION: AttributeAbilityDefinition = {
    name: 'talent_attributes_bonus_dot_defense_uni',
    AbilityTextureName: 'custom_spell_dot_defense_uni',
    MaxLevel: '3',
    AbilityValues: {
        dotDefense: '5 10 15',
    },
};

export const attributeAbilities = {
    attributes_bonus_aoe_increase_uni: 'talent_attributes_bonus_aoe_increase_uni',
    attributes_bonus_dot_defense_uni: 'talent_attributes_bonus_dot_defense_uni',
    attributes_bonus_dot_amplify_uni: 'talent_attributes_bonus_dot_amplify_uni',
    attributes_bonus_dot_amplify_plus_uni: 'talent_attributes_bonus_dot_amplify_plus_uni',
    attributes_bonus_change_attr_str: 'talent_attributes_bonus_change_attr_str',
    attributes_bonus_spell_amp_uni: 'talent_attributes_bonus_spell_amp_uni',
    attributes_bonus_spell_amp_int: 'talent_attributes_bonus_spell_amp_int',
    attributes_bonus_spell_amp_plus_int: 'talent_attributes_bonus_spell_amp_plus_int',
    attributes_bonus_attack_speed_agi: 'talent_attributes_bonus_attack_speed_agi',
    attributes_bonus_attack_speed_uni: 'talent_attributes_bonus_attack_speed_uni',
    attributes_bonus_defense_bonus_str: 'talent_attributes_bonus_defense_bonus_str',
    attributes_bonus_defense_bonus_plus_str: 'talent_attributes_bonus_defense_bonus_plus_str',
    attributes_bonus_defense_bonus_int: 'talent_attributes_bonus_defense_bonus_int',
    attributes_bonus_defense_bonus_plus_int: 'talent_attributes_bonus_defense_bonus_plus_int',
    attributes_bonus_life_boost_str: 'talent_attributes_bonus_life_boost_str',
    attributes_bonus_life_boost_int: 'talent_attributes_bonus_life_boost_int',
    attributes_bonus_life_regen_str: 'talent_attributes_bonus_life_regen_str',
    attributes_bonus_life_regen_int: 'talent_attributes_bonus_life_regen_int',
    attributes_bonus_chance_of_disarm_int: 'talent_attributes_bonus_chance_of_disarm_int',
    attributes_bonus_block_magical_int: 'talent_attributes_bonus_block_magical_int',
    attributes_bonus_block_physical_int: 'talent_attributes_bonus_block_physical_int',
    attributes_bonus_lifesteal_str: 'talent_attributes_bonus_lifesteal_str',
    attributes_bonus_lifesteal_uni: 'talent_attributes_bonus_lifesteal_uni',
    attributes_bonus_magic_bonus_agi: 'talent_attributes_bonus_magic_bonus_agi',
    attributes_bonus_magic_bonus_int: 'talent_attributes_bonus_magic_bonus_int',
    attributes_bonus_magic_bonus_str: 'talent_attributes_bonus_magic_bonus_str',
    attributes_bonus_magic_defense_bonus_str: 'talent_attributes_bonus_magic_defense_bonus_str',
    attributes_bonus_magic_defense_bonus_int: 'talent_attributes_bonus_magic_defense_bonus_int',
    attributes_bonus_magic_defense_bonus_plus_int: 'talent_attributes_bonus_magic_defense_bonus_plus_int',
    attributes_bonus_magic_lifesteal_int: 'talent_attributes_bonus_magic_lifesteal_int',
    attributes_bonus_magic_lifesteal_uni: 'talent_attributes_bonus_magic_lifesteal_uni',
    attributes_bonus_mana_boost_int: 'talent_attributes_bonus_mana_boost_int',
    attributes_bonus_mana_regen_int: 'talent_attributes_bonus_mana_regen_int',
    attributes_bonus_mana_boost_lesser_int: 'talent_attributes_bonus_mana_boost_lesser_int',
    attributes_bonus_status_resistance_str: 'talent_attributes_bonus_status_resistance_str',
    attributes_bonus_status_resistance_int: 'talent_attributes_bonus_status_resistance_int',
    attributes_bonus_slow_resistance_int: 'talent_attributes_bonus_slow_resistance_int',
    attributes_bonus_mana_regen_plus_int: 'talent_attributes_bonus_mana_regen_plus_int',
    attributes_bonus_mana_regen_lesser_str: 'talent_attributes_bonus_mana_regen_lesser_str',
    attributes_bonus_gold_per_minute: 'talent_attributes_bonus_gold_per_minute',
    attributes_bonus_physical_bonus_agi: 'talent_attributes_bonus_physical_bonus_agi',
    attributes_bonus_physical_bonus_int: 'talent_attributes_bonus_physical_bonus_int',
    attributes_bonus_physical_bonus_str: 'talent_attributes_bonus_physical_bonus_str',
    attributes_bonus_stats_agi: 'talent_attributes_bonus_stats_agi',
    attributes_bonus_stats_int: 'talent_attributes_bonus_stats_int',
    attributes_bonus_stats_str: 'talent_attributes_bonus_stats_str',
    attributes_bonus_stats_percentage_str: 'talent_attributes_bonus_stats_percentage_str',
    attributes_bonus_stats_int_to_str: 'talent_attributes_bonus_stats_int_to_str',
    attributes_bonus_hp_regen_amp_int: 'talent_attributes_bonus_hp_regen_amp_int',
    attributes_bonus_stats_uni: 'talent_attributes_bonus_stats_uni',
    attributes_bonus_stats_plus_str: 'talent_attributes_bonus_stats_plus_str',
    attributes_bonus_movespeed_agi: 'talent_attributes_bonus_movespeed_agi',
    attributes_bonus_movespeed_uni: 'talent_attributes_bonus_movespeed_uni',
    attributes_bonus_evasion_agi: 'talent_attributes_bonus_evasion_agi',
    attributes_bonus_evasion_uni: 'talent_attributes_bonus_evasion_uni',
    attributes_bonus_item_cooldown_reduction_agi: 'talent_attributes_bonus_item_cooldown_reduction_agi',
    attributes_bonus_damage_reduction_str: 'talent_attributes_bonus_damage_reduction_str',
    attributes_bonus_damage_reduction_int: 'talent_attributes_bonus_damage_reduction_int',
    attributes_bonus_cooldown_reduction_int: 'talent_attributes_bonus_cooldown_reduction_int',
    attributes_bonus_multiple_attack_agi: 'talent_attributes_bonus_multiple_attack_agi',
    attributes_bonus_reflect_str: 'talent_attributes_bonus_reflect_str',
    attributes_bonus_reflect_int: 'talent_attributes_bonus_reflect_int',
    attributes_bonus_reflect_uni: 'talent_attributes_bonus_reflect_uni',
};
