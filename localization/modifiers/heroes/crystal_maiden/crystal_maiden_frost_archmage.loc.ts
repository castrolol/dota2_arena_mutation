import { L, Language, LocalizationModifierProperty, ModifierLocalizationMounted, putvar, ref } from '../../../loc_utils';

export default function (): ModifierLocalizationMounted[] {
    const modifiers: ModifierLocalizationMounted[] = [];

    modifiers.push({
        source: Language.Brazilian,
        modifier_classname: 'modifier_increment_crystal_maiden_frost_archmage_sparkling_aura',
        name: 'Amplificão de Feitiços',
        description: L`Recebendo ${putvar(LocalizationModifierProperty.SPELL_AMPLIFY_PERCENTAGE)}% de amplificação de feitiços baseado na regeneração de mana.`,
    });


    modifiers.push({
        source: Language.Brazilian,
        modifier_classname: 'modifier_talent_crystal_maiden_frost_archmage_frost_blink_cooldown',
        name: L`${ref("DOTA_Tooltip_variable_COOLDOWN")}: ${ref("DOTA_Tooltip_Ability_talent_crystal_maiden_frost_archmage_frost_blink")}`,
        description: L`O efeito de ${ref("DOTA_Tooltip_Ability_talent_crystal_maiden_frost_archmage_frost_blink")} ainda não pode ser usado.`,

    })

    return modifiers;
}
