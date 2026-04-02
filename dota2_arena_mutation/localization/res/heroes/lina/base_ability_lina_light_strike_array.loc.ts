import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_lina_light_strike_array"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Impacto de Luz Solar",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Light Strike Array</font></b>\n \nInvoca uma coluna de fogo que causa dano e atordoa inimigos.",
			[`${abilityName}_Lore`]: 				"A essência de Lina a permite focar as energias do sol, fazendo com que o ar entre em combustão à sua vontade.",
			[`${abilityName}_Note0`]: 				"Impacto de Luz Solar destruirá árvores na sua área de efeito.",
			[`${abilityName}_light_strike_array_aoe`]: 				"RAIO:",
			[`${abilityName}_light_strike_array_stun_duration`]: 				"DURAÇÃO DO ATORDOAMENTO:",
			[`${abilityName}_light_strike_array_delay_time`]: 				"ATRASO DE LANÇAMENTO:",
			[`${abilityName}_light_strike_array_damage`]: 				"DANO:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Light Strike Array",
			[`${abilityName}_Description`]: 				"Summons a column of flames that damages and stuns enemies.",
			[`${abilityName}_Lore`]: 				"Lina's essence allows her to focus the sun's energies, causing air to combust at will.",
			[`${abilityName}_Note0`]: 				"Light Strike Array will destroy trees in its area of effect.",
			[`${abilityName}_light_strike_array_aoe`]: 				"RADIUS:",
			[`${abilityName}_light_strike_array_stun_duration`]: 				"STUN DURATION:",
			[`${abilityName}_light_strike_array_delay_time`]: 				"CAST DELAY:",
			[`${abilityName}_light_strike_array_damage`]: 				"DAMAGE:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Impacto de Luz Solar",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Light Strike Array</font></b>.\n\nInvoca una columna de llamas que daña y aturde a los enemigos.",
			[`${abilityName}_Lore`]: 				"La esencia de Lina le permite concentrar la energía del sol y hacer que el aire prenda a su voluntad.",
			[`${abilityName}_Note0`]: 				"Impacto de Luz Solar destruirá árboles en su área de efecto.",
			[`${abilityName}_light_strike_array_aoe`]: 				"RADIO:",
			[`${abilityName}_light_strike_array_stun_duration`]: 				"DURACIÓN DEL ATURDIMIENTO:",
			[`${abilityName}_light_strike_array_delay_time`]: 				"RETRASO DE LANZAMIENTO:",
			[`${abilityName}_light_strike_array_damage`]: 				"DAÑO:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Light Strike Array",
			[`${abilityName}_Description`]: 				"Призывает столб пламени, который оглушает врагов и наносит им урон.",
			[`${abilityName}_Lore`]: 				"Сущность волшебницы позволяет ей управлять энергией солнца, воспламеняя воздух взмахом рук.",
			[`${abilityName}_Note0`]: 				"Уничтожает деревья в зоне действия способности.",
			[`${abilityName}_light_strike_array_aoe`]: 				"РАДИУС:",
			[`${abilityName}_light_strike_array_stun_duration`]: 				"ДЛИТЕЛЬНОСТЬ ОГЛУШЕНИЯ:",
			[`${abilityName}_light_strike_array_delay_time`]: 				"ЗАДЕРЖКА:",
			[`${abilityName}_light_strike_array_damage`]: 				"УРОН:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"光击阵",
			[`${abilityName}_Description`]: 				"召唤柱状火焰伤害并眩晕敌人。",
			[`${abilityName}_Lore`]: 				"莉娜的精华让她能够集中太阳的能量，随时让空气燃烧。",
			[`${abilityName}_Note0`]: 				"光击阵将摧毁作用范围内的树木。",
			[`${abilityName}_light_strike_array_aoe`]: 				"作用范围：",
			[`${abilityName}_light_strike_array_stun_duration`]: 				"眩晕时间：",
			[`${abilityName}_light_strike_array_delay_time`]: 				"施法延迟：",
			[`${abilityName}_light_strike_array_damage`]: 				"伤害：",
			},
        }
    }
}