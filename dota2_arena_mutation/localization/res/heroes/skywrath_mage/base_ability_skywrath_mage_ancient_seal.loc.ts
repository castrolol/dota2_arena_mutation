import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_skywrath_mage_ancient_seal"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Selo Ancestral",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Ancient Seal</font></b>\n \nSela a unidade-alvo com uma runa ancestral, silenciando-a e fazendo com que sofra dano adicional de magias.",
			[`${abilityName}_Lore`]: 				"Todo aquele que for tocado pelo sagrado selo de Avilliva é condenado a sofrer em silêncio penitente.",
			[`${abilityName}_Note0`]: 				"A redução de resistência mágica não afeta criaturas.",
			[`${abilityName}_resist_debuff`]: 				"%AUMENTO DE DANO MÁGICO:",
			[`${abilityName}_seal_duration`]: 				"DURAÇÃO:",
			[`${abilityName}_scepter_description`]: 				"Quando o Skywrath Mage lançar um <b><font color='#F2A93E'>Selo Ancestral</font></b>, um alvo aleatório diferente em até %scepter_radius% unidades de distância do alvo original será atingido com a mesma habilidade. Prioriza heróis.",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Ancient Seal",
			[`${abilityName}_Description`]: 				"Skywrath Mage seals the targeted unit with an ancient rune, silencing it and causing it to take additional damage from spells.",
			[`${abilityName}_Lore`]: 				"A holy incantation, whosoever finds themselves touched by Avilliva's sigil must suffer in penitent silence.",
			[`${abilityName}_Note0`]: 				"The magic damage resistance reduction doesn't affect creeps.",
			[`${abilityName}_resist_debuff`]: 				"%INCREASED MAGIC DAMAGE:",
			[`${abilityName}_seal_duration`]: 				"DURATION:",
			[`${abilityName}_scepter_description`]: 				"Anytime Skywrath Mage casts Ancient Seal, a different random target within %scepter_radius% range of the original target will be affected by the same ability. Heroes will take priority.",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Sello Ancestral",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Ancient Seal</font></b>.\n\nSkywrath Mage sella a la unidad objetivo con una runa ancestral, silenciándola y haciendo que reciba daño adicional por hechizos.",
			[`${abilityName}_Lore`]: 				"Un encantamiento sagrado, todo aquel que sea tocado por el sigilo de Avilliva debe sufrir en silencio penitente.",
			[`${abilityName}_Note0`]: 				"La reducción de resistencia al daño mágico no afecta a creeps.",
			[`${abilityName}_resist_debuff`]: 				"%AUMENTO DE DAÑO MÁGICO:",
			[`${abilityName}_seal_duration`]: 				"DURACIÓN:",
			[`${abilityName}_scepter_description`]: 				"Cuando Skywrath Mage lance Sello Ancestral, un objetivo aleatorio distinto dentro de un alcance de %scepter_radius% unidades del objetivo original se verá afectado por la misma habilidad. Los héroes tendrán prioridad.",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Ancient Seal",
			[`${abilityName}_Description`]: 				"Оставляет печать древней руны на выбранном существе, запрещая ему применять способности и увеличивая магический урон по нему.",
			[`${abilityName}_Lore`]: 				"Всякий, кого коснётся священная печать Авилливы, должен перенести тягостное молчание.",
			[`${abilityName}_Note0`]: 				"Усиление магического урона не действует на крипов.",
			[`${abilityName}_resist_debuff`]: 				"%ДОП. МАГИЧЕСКИЙ УРОН:",
			[`${abilityName}_seal_duration`]: 				"ДЛИТЕЛЬНОСТЬ:",
			[`${abilityName}_scepter_description`]: 				"Каждое применение срабатывает на ещё одну случайную цель в радиусе %scepter_radius% от изначальной (в первую очередь на героев).",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"上古封印",
			[`${abilityName}_Description`]: 				"天怒法师利用上古符文将目标单位封印，目标单位将被沉默，受到魔法伤害时将承受额外伤害。",
			[`${abilityName}_Lore`]: 				"一个神圣的咒语，只要被亚未里亚的符印所包围就必然在无声的忏悔中受难。",
			[`${abilityName}_Note0`]: 				"减少魔法抗性的效果对非英雄单位无效。",
			[`${abilityName}_resist_debuff`]: 				"%魔法伤害加深：",
			[`${abilityName}_seal_duration`]: 				"持续时间：",
			[`${abilityName}_scepter_description`]: 				"天怒法师施放上古封印时，会随机对原目标附近%scepter_radius%范围内另一个敌人施放相同的技能。以英雄为首要目标。",
			},
        }
    }
}