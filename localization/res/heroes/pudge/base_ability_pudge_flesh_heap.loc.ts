import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_pudge_flesh_heap"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Escudo de Carne",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Meat Shield</font></b>\n \nPudge se cobre com uma camada de carne que bloqueia qualquer tipo de dano, de qualquer fonte.",
			[`${abilityName}_Lore`]: 				"O Açougueiro dá um novo significado às palavras \"escudo de corpos\".",
			[`${abilityName}_damage_block`]: 				"BLOQUEIO DE DANO:",
			[`${abilityName}_duration`]: 				"DURAÇÃO:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Meat Shield",
			[`${abilityName}_Description`]: 				"Pudge covers himself with a layer of flesh that blocks damage of any type taken from any source.",
			[`${abilityName}_Lore`]: 				"The Butcher gives new meaning to the words 'meat shield.'",
			[`${abilityName}_damage_block`]: 				"DAMAGE BLOCK:",
			[`${abilityName}_duration`]: 				"DURATION:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Escudo Cárnico",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Meat Shield</font></b>.\n\nPudge se cubre a sí mismo con una capa de carne que bloquea el daño que recibe de cualquier origen.",
			[`${abilityName}_Lore`]: 				"El Carnicero le da un nuevo significado a la expresión «escudo humano».",
			[`${abilityName}_damage_block`]: 				"BLOQUEO DE DAÑO:",
			[`${abilityName}_duration`]: 				"DURACIÓN:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Meat Shield",
			[`${abilityName}_Description`]: 				"Герой покрывает себя слоем плоти, который блокирует часть любого получаемого урона.",
			[`${abilityName}_Lore`]: 				"Мясник не понаслышке знает, каково это — быть толстокожим.",
			[`${abilityName}_damage_block`]: 				"БЛОК УРОНА:",
			[`${abilityName}_duration`]: 				"ДЛИТЕЛЬНОСТЬ:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"肉盾",
			[`${abilityName}_Description`]: 				"帕吉用一层血肉包裹自己，可以格挡所有来源的所有类型伤害。",
			[`${abilityName}_Lore`]: 				"屠夫赋予“肉盾”这个词新的含义。",
			[`${abilityName}_damage_block`]: 				"伤害格挡：",
			[`${abilityName}_duration`]: 				"持续时间：",
			},
        }
    }
}