import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_abaddon_curse_of_avernus"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Maldição de Averno",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Curse of Avernus</font></b>\n \nAbaddon golpeia um inimigo, afetando-o com uma maldição congelante que causa retardo e dano ao longo do tempo, além de conceder velocidade de ataque adicional àqueles que atacarem um alvo afetado. O dano ao longo do tempo é reduzido em %tower_dps_pct%%% contra estruturas.",
			[`${abilityName}_Lore`]: 				"Embora os batizados se fortaleçam com a Fonte, as bênçãos de Averno debilitam aqueles não iniciados.",
			[`${abilityName}_curse_duration`]: 				"DURAÇÃO:",
			[`${abilityName}_curse_slow`]: 				"%RETARDO:",
			[`${abilityName}_curse_dps`]: 				"DPS:",
			[`${abilityName}_curse_attack_speed`]: 				"VELOCIDADE DE ATAQUE:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Curse of Avernus",
			[`${abilityName}_Description`]: 				"Abaddon strikes an enemy, affecting them by a chilling curse, slowing them, causing them to take damage over time, and all attacks against them gain an attack speed boost. Damage over time component to buildings is reduced by %tower_dps_pct%%%.",
			[`${abilityName}_Lore`]: 				"While the baptized draw strength from the Font, the gifts of Avernus are debilitating to the uninitiated.",
			[`${abilityName}_curse_duration`]: 				"DURATION:",
			[`${abilityName}_curse_slow`]: 				"%SLOW:",
			[`${abilityName}_curse_dps`]: 				"DPS:",
			[`${abilityName}_curse_attack_speed`]: 				"ATTACK SPEED:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Maldición del Averno",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Curse of Avernus</font></b>.\n\nAbaddon ataca a un enemigo que se ve afectado por una maldición gélida, ralentizado y recibiendo daño con el tiempo, y todos los ataques contra él proporcionan un aumento en la velocidad de ataque. El daño con el tiempo a estructuras se reduce un %tower_dps_pct% %%.",
			[`${abilityName}_Lore`]: 				"Mientras que los bautizados sacan fuerza de la Fuente, los dones del Averno son debilitantes para los no iniciados.",
			[`${abilityName}_curse_duration`]: 				"DURACIÓN:",
			[`${abilityName}_curse_slow`]: 				"%RALENTIZACIÓN:",
			[`${abilityName}_curse_dps`]: 				"DPS:",
			[`${abilityName}_curse_attack_speed`]: 				"VELOCIDAD DE ATAQUE:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Curse of Avernus",
			[`${abilityName}_Description`]: 				"Атаки героя окутывают жертву ледяными чарами, которые замедляют её, наносят ей периодический урон и увеличивают скорость всех атак по ней. Наносит постройкам на %tower_dps_pct%%% меньше периодического урона.",
			[`${abilityName}_Lore`]: 				"Крещёные в купели черпают из неё силы, но остальных дары Аверно смертельно изнуряют.",
			[`${abilityName}_curse_duration`]: 				"ДЛИТЕЛЬНОСТЬ:",
			[`${abilityName}_curse_slow`]: 				"%ЗАМЕДЛЕНИЕ:",
			[`${abilityName}_curse_dps`]: 				"УРОН В СЕКУНДУ:",
			[`${abilityName}_curse_attack_speed`]: 				"ДОП. СКОРОСТЬ АТАКИ:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"魔霭诅咒",
			[`${abilityName}_Description`]: 				"亚巴顿打击一个敌人，使其受到寒心诅咒的作用，被减速，并且持续受到伤害，同时所有攻击目标的单位将提升攻击速度。对建筑的持续伤害减少%tower_dps_pct%%%。",
			[`${abilityName}_Lore`]: 				"受洗之人能从圣池中汲取能量，而魔霭的恩赐会让一无所知的人逐渐衰弱。",
			[`${abilityName}_curse_duration`]: 				"持续时间：",
			[`${abilityName}_curse_slow`]: 				"%移动速度减缓：",
			[`${abilityName}_curse_dps`]: 				"每秒伤害：",
			[`${abilityName}_curse_attack_speed`]: 				"攻击速度：",
			},
        }
    }
}