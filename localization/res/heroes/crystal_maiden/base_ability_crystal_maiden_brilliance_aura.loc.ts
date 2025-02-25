import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_crystal_maiden_brilliance_aura"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Aura Arcana",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Arcane Aura</font></b>\n \nConcede regeneração de mana adicional a todas unidades aliadas no mapa. Aliados em um raio de %proximity_bonus_radius% unidades em torno da Crystal Maiden recebem %proximity_bonus_factor%x a regeneração de mana.",
			[`${abilityName}_Lore`]: 				"Temperaturas baixas promovem a essência da magia, fazendo com que a presença de Rylai permita o uso abundante delas.",
			[`${abilityName}_proximity_bonus_radius`]: 				"RAIO:",
			[`${abilityName}_base_mana_regen`]: 				"REGENERAÇÃO DE MANA:",
			[`${abilityName}_proximity_mana_regen_tooltip`]: 				"REGEN. DE MANA (ALIADOS PRÓXIMOS):",
			[`${abilityName}_mana_battery_mana_pct`]: 				"%MANA GASTO CONCEDIDO:",
			[`${abilityName}_Facet_crystal_maiden_cold_comfort`]: 				"Sempre que a Crystal Maiden usar uma habilidade, aliados próximos regeneram mana proporcionalmente ao seu custo de mana.",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Arcane Aura",
			[`${abilityName}_Description`]: 				"Gives additional mana regeneration to all friendly units on the map. Allies within a %proximity_bonus_radius% radius of Crystal Maiden receive %proximity_bonus_factor%x the mana regeneration.",
			[`${abilityName}_Lore`]: 				"Cold temperatures promote the essence of magic, causing Rylai's presence to allow spell usage in abundance.",
			[`${abilityName}_proximity_bonus_radius`]: 				"RADIUS:",
			[`${abilityName}_base_mana_regen`]: 				"MANA REGEN:",
			[`${abilityName}_proximity_mana_regen_tooltip`]: 				"CLOSE MANA REGEN:",
			[`${abilityName}_mana_battery_mana_pct`]: 				"%MANA SPENT GRANTED:",
			[`${abilityName}_Facet_crystal_maiden_cold_comfort`]: 				"Every time Crystal Maiden casts a spell, allies close to her receive mana equal to a percentage of the spell's mana cost.",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Aura Arcana",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Arcane Aura</font></b>.\n\nOtorga regeneración adicional de maná a todas las unidades aliadas del mapa. Los aliados que se encuentren dentro de un radio de %proximity_bonus_radius% de Crystal Maiden reciben %proximity_bonus_factor% veces más regeneración de maná.",
			[`${abilityName}_Lore`]: 				"Las bajas temperaturas promueven la esencia de la magia y hacen que la presencia de Rylai permita el uso de hechizos en abundancia.",
			[`${abilityName}_proximity_bonus_radius`]: 				"RADIO:",
			[`${abilityName}_base_mana_regen`]: 				"REGENERACIÓN DE MANÁ:",
			[`${abilityName}_proximity_mana_regen_tooltip`]: 				"REGENERACIÓN DE MANÁ EN ALIADOS CERCANOS:",
			[`${abilityName}_mana_battery_mana_pct`]: 				"%MANÁ GASTADO OTORGADO:",
			[`${abilityName}_Facet_crystal_maiden_cold_comfort`]: 				"Cada vez que Crystal Maiden lanza un hechizo, los aliados que estén junto a ella reciben una cantidad de maná que es un porcentaje del coste de maná del hechizo.",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Arcane Aura",
			[`${abilityName}_Description`]: 				"Увеличивает восстановление маны у всех союзников на карте. Действует в %proximity_bonus_factor% раза сильнее на союзников в радиусе %proximity_bonus_radius%.",
			[`${abilityName}_Lore`]: 				"Холод — сущность магии, поэтому присутствие ледяной волшебницы Рилай позволяет союзникам использовать магию в избытке.",
			[`${abilityName}_proximity_bonus_radius`]: 				"РАДИУС:",
			[`${abilityName}_base_mana_regen`]: 				"ВОССТАНОВЛЕНИЕ МАНЫ:",
			[`${abilityName}_proximity_mana_regen_tooltip`]: 				"ВОССТАНОВЛЕНИЕ МАНЫ ПОБЛИЗОСТИ:",
			[`${abilityName}_mana_battery_mana_pct`]: 				"%ПЕРЕДАЧА РАСХОДУЕМОЙ МАНЫ:",
			[`${abilityName}_Facet_crystal_maiden_cold_comfort`]: 				"Когда владелец этой способности применяет заклинание, доля от расходуемой маны передаётся каждому союзнику поблизости.",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"奥术光环",
			[`${abilityName}_Description`]: 				"地图上所有友方单位获得额外魔法恢复。水晶室女附近%proximity_bonus_radius%范围内友军获得%proximity_bonus_factor%倍魔法恢复。",
			[`${abilityName}_Lore`]: 				"低温提升了魔法精华，莉莱的出现能够让盟友更频繁的使用魔法而不必担心消耗。",
			[`${abilityName}_proximity_bonus_radius`]: 				"作用范围：",
			[`${abilityName}_base_mana_regen`]: 				"魔法恢复：",
			[`${abilityName}_proximity_mana_regen_tooltip`]: 				"近距离魔法恢复：",
			[`${abilityName}_mana_battery_mana_pct`]: 				"%获得已消耗魔法：",
			[`${abilityName}_Facet_crystal_maiden_cold_comfort`]: 				"每次水晶室女施放技能时，附近的友军都会回复魔法，数值为该技能耗魔的一定百分比。",
			},
        }
    }
}