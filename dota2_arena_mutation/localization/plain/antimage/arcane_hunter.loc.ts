import { L, Language, PlainLocalizationMounted } from '../../loc_utils';

export default function plainLocs(): PlainLocalizationMounted[] {
    return [
        {
            source: Language.English,
            items: [
                { key: 'CUSTOM_antimage_arcane_hunter', value: L`Arcane Hunter` },
                { key: 'CUSTOM_antimage_arcane_hunter_mana_hunter', value: L`Mana Hunter` },
                { key: 'CUSTOM_antimage_arcane_hunter_deposed_arcanist', value: L`Deposed Arcanist` },
                
                { key: 'CUSTOM_antimage_shadow_rogue', value: L`Shadow's Rogue` },
                { key: 'CUSTOM_antimage_shadow_rogue_shadow_dancer', value: L`Shadow Dancer` },
                { key: 'CUSTOM_antimage_shadow_rogue_undercovered_illusionist', value: L`Undercovered Illusionist` },
                
                { key: 'CUSTOM_antimage_mana_addict', value: L`Mana Addict` },
                { key: 'CUSTOM_antimage_mana_addict_thirsty_for_mana', value: L`Thirsty for Mana` },
                { key: 'CUSTOM_antimage_mana_addict_corrupted_by_void', value: L`Corrupted by Void` },
            ],
        } 
    ];
}
