import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_crystal_maiden_crystal_nova"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Explosão Cristalina",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Crystal Nova</font></b>\n \nUma explosão de gelo que causa dano e retarda a velocidade de movimento dos inimigos na área-alvo.",
			[`${abilityName}_Lore`]: 				"A temperatura do ar no entorno da Rylai cai rapidamente, arrepiando todos em volta até a espinha.",
			[`${abilityName}_Note0`]: 				"A Explosão Cristalina concede visão da área alvejada durante a habilidade.",
			[`${abilityName}_duration`]: 				"DURAÇÃO:",
			[`${abilityName}_movespeed_slow`]: 				"%RETARDO DE MOV.:",
			[`${abilityName}_attackspeed_slow`]: 				"RETARDO DE ATAQUE:",
			[`${abilityName}_radius`]: 				"RAIO:",
			[`${abilityName}_nova_damage`]: 				"DANO:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Crystal Nova",
			[`${abilityName}_Description`]: 				"A burst of damaging frost slows enemy movement in the targeted area.",
			[`${abilityName}_Lore`]: 				"The air temperature around Rylai drops rapidly, chilling all around her to the core.",
			[`${abilityName}_Note0`]: 				"Crystal Nova provides vision in the targeted area for the duration.",
			[`${abilityName}_duration`]: 				"DURATION:",
			[`${abilityName}_movespeed_slow`]: 				"%MOVEMENT SLOW:",
			[`${abilityName}_attackspeed_slow`]: 				"ATTACK SLOW:",
			[`${abilityName}_radius`]: 				"RADIUS:",
			[`${abilityName}_nova_damage`]: 				"DAMAGE:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Explosión Cristalina",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Crystal Nova</font></b>.\n\nUna explosión de hielo dañino ralentiza la velocidad de movimiento de los enemigos en el área objetivo.",
			[`${abilityName}_Lore`]: 				"La temperatura del aire alrededor de Rylai desciende rápidamente, helando hasta los huesos a todo lo que se encuentra en torno a ella.",
			[`${abilityName}_Note0`]: 				"Explosión Cristalina proporciona visión del área objetivo mientras esté activa.",
			[`${abilityName}_duration`]: 				"DURACIÓN:",
			[`${abilityName}_movespeed_slow`]: 				"%RALENTIZACIÓN DE MOVIMIENTO:",
			[`${abilityName}_attackspeed_slow`]: 				"RALENTIZACIÓN DE ATAQUE:",
			[`${abilityName}_radius`]: 				"RADIO:",
			[`${abilityName}_nova_damage`]: 				"DAÑO:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Crystal Nova",
			[`${abilityName}_Description`]: 				"Обдаёт выбранную область морозным ветром, который наносит врагам урон и замедляет их передвижение.",
			[`${abilityName}_Lore`]: 				"Температура воздуха вокруг Рилай резко падает, насквозь промораживая всё вокруг неё.",
			[`${abilityName}_Note0`]: 				"Раскрывает туман войны в области действия.",
			[`${abilityName}_duration`]: 				"ДЛИТЕЛЬНОСТЬ:",
			[`${abilityName}_movespeed_slow`]: 				"%ЗАМЕДЛЕНИЕ ПЕРЕДВИЖЕНИЯ:",
			[`${abilityName}_attackspeed_slow`]: 				"ЗАМЕДЛЕНИЕ АТАКИ:",
			[`${abilityName}_radius`]: 				"РАДИУС:",
			[`${abilityName}_nova_damage`]: 				"УРОН:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"冰霜新星",
			[`${abilityName}_Description`]: 				"召唤具有破坏性的冰爆，降低目标区域内的敌人的移动速度。",
			[`${abilityName}_Lore`]: 				"莉莱周围的温度急剧下降，让附近的一切被急速冻结。",
			[`${abilityName}_Note0`]: 				"冰霜新星在持续时间内提供目标区域的视野。",
			[`${abilityName}_duration`]: 				"持续时间：",
			[`${abilityName}_movespeed_slow`]: 				"%移动速度减缓：",
			[`${abilityName}_attackspeed_slow`]: 				"攻击速度降低：",
			[`${abilityName}_radius`]: 				"作用范围：",
			[`${abilityName}_nova_damage`]: 				"伤害：",
			},
        }
    }
}