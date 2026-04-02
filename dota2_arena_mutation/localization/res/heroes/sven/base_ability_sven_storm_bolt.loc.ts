import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_sven_storm_bolt"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Punho da Tempestade",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Storm Hammer</font></b>\n \nSven libera a sua manopla mágica que causa dano e atordoa unidades inimigas em uma pequena área ao redor do alvo.",
			[`${abilityName}_scepter_description`]: 				"Aumenta o alcance de uso e aplica uma dissipação básica no alvo. Pode ser usado em alvos invulneráveis. Com o uso alternativo ativado, causa %scepter_bonus_damage% de dano adicional e transporta Sven com o <b><font color='#F2A93E'>Punho da Tempestade</font></b>.",
			[`${abilityName}_Lore`]: 				"A manopla de ferro do Cavaleiro Rebelde, tomada da escola do seu pai, golpeia os seus inimigos até o fundo das suas almas.",
			[`${abilityName}_bolt_stun_duration`]: 				"DURAÇÃO DO ATORDOAMENTO:",
			[`${abilityName}_bolt_aoe`]: 				"RAIO:",
			[`${abilityName}_cast_range_bonus_scepter`]: 				"ALCANCE DE USO ADICIONAL:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Storm Hammer",
			[`${abilityName}_Description`]: 				"Sven unleashes his magical gauntlet that deals damage and stuns enemy units in a small area around the target.",
			[`${abilityName}_scepter_description`]: 				"Increases cast range and applies a basic dispel on the target. Can be cast on invulnerable targets. If alt-cast, it deals an additional %scepter_bonus_damage% damage and Sven travels with the Storm Hammer.",
			[`${abilityName}_Lore`]: 				"The Rogue Knight's iron gauntlet, taken from the school of his father, strikes his foes to their core.",
			[`${abilityName}_bolt_stun_duration`]: 				"STUN DURATION:",
			[`${abilityName}_bolt_aoe`]: 				"RADIUS:",
			[`${abilityName}_cast_range_bonus_scepter`]: 				"BONUS CAST RANGE:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Martillo de la Tormenta",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Storm Hammer</font></b>.\n\nSven libera su guantelete mágico que causa daño y aturde a las unidades enemigas en una pequeña área alrededor del objetivo.",
			[`${abilityName}_scepter_description`]: 				"Aumenta el alcance de lanzamiento y aplica una disipación básica sobre el objetivo. Se puede lanzar sobre objetivos invulnerables. Si se usa la habilidad alternativa, inflige %scepter_bonus_damage% de daño adicional y Sven viaja junto con el Martillo de la Tormenta.",
			[`${abilityName}_Lore`]: 				"El guantelete de hierro del Caballero Renegado, robado de la escuela de su padre, golpea a los adversarios en lo más profundo de su ser.",
			[`${abilityName}_bolt_stun_duration`]: 				"DURACIÓN DEL ATURDIMIENTO:",
			[`${abilityName}_bolt_aoe`]: 				"RADIO:",
			[`${abilityName}_cast_range_bonus_scepter`]: 				"ALCANCE DE LANZAMIENTO ADICIONAL:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Storm Hammer",
			[`${abilityName}_Description`]: 				"Герой высвобождает всю мощь своей магической рукавицы, нанося жертве и её союзникам в небольшой области урон и оглушая их.",
			[`${abilityName}_scepter_description`]: 				"Увеличивает дальность применения и применяет на цель нормальное развеивание. Позволяет применять способность на неуязвимые цели. Если включено альтернативное применение, герой полетит за снарядом, а способность нанесёт на %scepter_bonus_damage% урона больше.",
			[`${abilityName}_Lore`]: 				"Железная рукавица мятежного рыцаря, позаимствованная в отцовской школе, выбивает дух из любого врага.",
			[`${abilityName}_bolt_stun_duration`]: 				"ДЛИТЕЛЬНОСТЬ ОГЛУШЕНИЯ:",
			[`${abilityName}_bolt_aoe`]: 				"РАДИУС:",
			[`${abilityName}_cast_range_bonus_scepter`]: 				"ДОП. ДАЛЬНОСТЬ ПРИМЕНЕНИЯ:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"风暴之拳",
			[`${abilityName}_Description`]: 				"斯温用他充满魔力的手套对目标周围内所有敌人造成伤害和眩晕。",
			[`${abilityName}_scepter_description`]: 				"提升施法距离，并且对目标施加弱驱散效果。可以对无敌目标施放。技能设为多样施法后，额外造成%scepter_bonus_damage%点伤害并且斯温会跟随风暴之拳行进。",
			[`${abilityName}_Lore`]: 				"流浪剑客从他父亲的学校里取得的精铁护手能对敌人造成致命打击。",
			[`${abilityName}_bolt_stun_duration`]: 				"眩晕时间：",
			[`${abilityName}_bolt_aoe`]: 				"作用范围：",
			[`${abilityName}_cast_range_bonus_scepter`]: 				"施法距离加成：",
			},
        }
    }
}