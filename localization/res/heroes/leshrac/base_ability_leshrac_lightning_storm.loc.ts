import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_leshrac_lightning_storm"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Tempestade de Raios",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Lightning Storm</font></b>\n \nInvoca uma tempestade de raios que atinge a unidade inimiga alvo e, em seguida, ataca qualquer unidade inimiga próxima. Inimigos atingidos sofrerão retardo da velocidade de movimento.",
			[`${abilityName}_Lore`]: 				"A maestria do Espírito Atormentado com os elementos é evidente nas gigantescas tempestades que derrubam exércitos à sua frente.",
			[`${abilityName}_damage`]: 				"DANO:",
			[`${abilityName}_jump_count`]: 				"RAIOS:",
			[`${abilityName}_movespeed_slow`]: 				"%RETARDO DE MOV.:",
			[`${abilityName}_slow_duration`]: 				"DURAÇÃO DO RETARDO:",
			[`${abilityName}_radius`]: 				"RAIO DE SALTO DO RAIO:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Lightning Storm",
			[`${abilityName}_Description`]: 				"Summons a lightning storm that blasts the target enemy unit, then strikes any nearby enemy units. Struck enemies have their move speed slowed.",
			[`${abilityName}_Lore`]: 				"The Tormented Soul's mastery of the elements is evident in the massive storms that strike down armies before him.",
			[`${abilityName}_damage`]: 				"DAMAGE:",
			[`${abilityName}_jump_count`]: 				"LIGHTNING STRIKES:",
			[`${abilityName}_movespeed_slow`]: 				"%MOVEMENT SLOW:",
			[`${abilityName}_slow_duration`]: 				"SLOW DURATION:",
			[`${abilityName}_radius`]: 				"LIGHTNING JUMP RADIUS:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Tormenta Eléctrica",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Lightning Storm</font></b>.\n\nInvoca una tormenta eléctrica que impacta en la unidad enemiga objetivo y luego alcanza a las unidades enemigas cercanas. Los enemigos afectados ven reducida su velocidad de movimiento.",
			[`${abilityName}_Lore`]: 				"El dominio de los elementos por el Alma Atormentada se hace evidente cuando las fuertes tormentas fulminan a los ejércitos que se encuentran ante él.",
			[`${abilityName}_damage`]: 				"DAÑO:",
			[`${abilityName}_jump_count`]: 				"RAYOS:",
			[`${abilityName}_movespeed_slow`]: 				"%RALENTIZACIÓN DE MOVIMIENTO:",
			[`${abilityName}_slow_duration`]: 				"DURACIÓN DE LA RALENTIZACIÓN:",
			[`${abilityName}_radius`]: 				"RADIO DE SALTO DEL RAYO:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Lightning Storm",
			[`${abilityName}_Description`]: 				"Призывает шквал молний, которые бьют и замедляют передвижение сначала выбранного противника, а затем и соседних с ним.",
			[`${abilityName}_Lore`]: 				"Мастерство подчинять силы природы позволяет истерзанной душе призывать массивные бури, сокрушающие целые армии.",
			[`${abilityName}_damage`]: 				"УРОН:",
			[`${abilityName}_jump_count`]: 				"УДАРОВ МОЛНИИ:",
			[`${abilityName}_movespeed_slow`]: 				"%ЗАМЕДЛЕНИЕ ПЕРЕДВИЖЕНИЯ:",
			[`${abilityName}_slow_duration`]: 				"ДЛИТЕЛЬНОСТЬ ЗАМЕДЛЕНИЯ:",
			[`${abilityName}_radius`]: 				"РАДИУС СКАЧКА МОЛНИИ:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"闪电风暴",
			[`${abilityName}_Description`]: 				"召唤一片闪电风暴攻击目标敌方单位，并跳跃到附近的敌方单位。被攻击的敌人将会被降低移动速度。",
			[`${abilityName}_Lore`]: 				"受折磨的灵魂用来击倒敌人的闪电风暴展现出他对操控元素的精通。",
			[`${abilityName}_damage`]: 				"伤害：",
			[`${abilityName}_jump_count`]: 				"闪电跳跃次数：",
			[`${abilityName}_movespeed_slow`]: 				"%移动速度减缓：",
			[`${abilityName}_slow_duration`]: 				"减速持续时间：",
			[`${abilityName}_radius`]: 				"闪电跳跃范围：",
			},
        }
    }
}