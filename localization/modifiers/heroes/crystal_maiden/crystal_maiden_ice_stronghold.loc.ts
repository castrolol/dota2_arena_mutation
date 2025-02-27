import { L, Language, LocalizationModifierProperty, ModifierLocalizationMounted, putvar, ref } from '../../../loc_utils';

export default function (): ModifierLocalizationMounted[] {
    const modifiers: ModifierLocalizationMounted[] = [];

    modifiers.push({
        source: Language.Brazilian,
        modifier_classname: 'modifier_talent_crystal_maiden_frosty_fortress_brain_freeze',
        name: 'Congelar Cerebros',
        description: L`Ao usar ${ref("DOTA_Tooltip_ability_base_ability_crystal_maiden_crystal_nova")}, os inimgos terão seu cooldown reduzidos.`,
    });


    modifiers.push({
        source: Language.Brazilian,
        modifier_classname: 'modifier_talent_crystal_maiden_frosty_fortress_brain_freeze_debuff',
        name: L`Cerebro Congelado`,
        description: L`Seu cooldown foi reduzido em ${putvar(LocalizationModifierProperty.COOLDOWN_PERCENTAGE)}%.`,
    })

    modifiers.push({
        source: Language.Brazilian,
        modifier_classname: 'modifier_frostbite_amputation_ready',
        name: 'Amputação por Queimadura de Frio',
        description: L`Ao ser atacada, desarma-rá o atacante.`,
    });

    modifiers.push({
        source: Language.Brazilian,
        modifier_classname: 'modifier_frostbite_amputation_cooldown',
        name: L`${ref("DOTA_Tooltip_variable_COOLDOWN")}: Amputação por Queimadura de Frio`,
        description: L`A habilidade não surtirá efeito por um tempo.`,
    });


    modifiers.push({
        source: Language.Brazilian,
        modifier_classname: 'modifier_frostbite_amputation_debuff',
        name: L`Amputação por Queimadura de Frio`,
        description: L`Está desarmado.`,

    })

    modifiers.push({
        source: Language.Brazilian,
        modifier_classname: 'modifier_frosty_fortress_ice_block',
        name: L`Bloco de Gelo`,
        description: L`Está congelada e invulneravel.`,

    })

    return modifiers;
}
