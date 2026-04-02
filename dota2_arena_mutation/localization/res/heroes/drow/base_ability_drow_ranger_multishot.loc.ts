import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_drow_ranger_multishot"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Disparo Múltiplo",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Multishot</font></b>\n \nCANALIZADA — A Drow dispara uma enxurrada de flechas em ondas contínuas, causando dano adicional a inimigos atingidos e aplicando <b><font color='#F2A93E'>Flechas de Gelo</font></b>. Dura até %abilitychanneltime% segundos.",
			[`${abilityName}_Facet_drow_ranger_sidestep`]: 				"A Drow pode se mover lentamente e usar itens durante o Disparo Múltiplo.",
			[`${abilityName}_Lore`]: 				"Na infância da patrulheira, aprender a disparar múltiplas flechas de uma só vez era considerado uma mera distração. Na guerra dos Ancestrais, no entanto, tal habilidade tornou-se uma necessidade.",
			[`${abilityName}_wave_count`]: 				"QUANTIDADE DE ONDAS:",
			[`${abilityName}_multishot_movespeed`]: 				"%PENALIDADE DE VEL. DE MOV.:",
			[`${abilityName}_arrow_count_per_wave`]: 				"FLECHAS POR ONDA:",
			[`${abilityName}_arrow_damage_pct`]: 				"%DANO BASE ADICIONAL:",
			[`${abilityName}_arrow_range_multiplier`]: 				"MULTIPLICADOR DE ALCANCE:",
			[`${abilityName}_Note0`]: 				"O dano base das flechas ignora imunidade a magias.",
			[`${abilityName}_Note1`]: 				"O dano e retardo das <b><font color='#F2A93E'>Flechas de Gelo</font></b> não ignoram imunidade a magias.",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Multishot",
			[`${abilityName}_Description`]: 				"CHANNELED - Drow releases a flurry of arrows in continuous salvos, hitting enemies for extra damage and applying Frost Arrows. Lasts up to %abilitychanneltime% seconds.",
			[`${abilityName}_Facet_drow_ranger_sidestep`]: 				"Drow can move slowly and use items while casting Multishot.",
			[`${abilityName}_Lore`]: 				"In the ranger's youth, learning to fire multiple arrows at once was considered a distracting frivolity. In the war of the Ancients, such technique has become strange necessity.",
			[`${abilityName}_wave_count`]: 				"WAVE COUNT:",
			[`${abilityName}_multishot_movespeed`]: 				"%MOVEMENT SPEED PENALTY:",
			[`${abilityName}_arrow_count_per_wave`]: 				"ARROWS PER WAVE:",
			[`${abilityName}_arrow_damage_pct`]: 				"%ARROW BASE DAMAGE BONUS:",
			[`${abilityName}_arrow_range_multiplier`]: 				"ARROW RANGE MULTIPLIER:",
			[`${abilityName}_Note0`]: 				"Arrow base damage pierces magic immunity.",
			[`${abilityName}_Note1`]: 				"Frost Arrows' damage and slow do not pierce magic immunity.",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Multidisparo",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Multishot</font></b>.\n\nCANALIZADA: Drow lanza una ráfaga de flechas en salvas continuas, alcanzando a los enemigos con daño adicional y aplicando Flechas Gélidas. Dura hasta %abilitychanneltime% s.",
			[`${abilityName}_Facet_drow_ranger_sidestep`]: 				"Drow puede moverse lentamente y usar objetos mientras lanza Multidisparo.",
			[`${abilityName}_Lore`]: 				"En la juventud de Drow Ranger, aprender a disparar varias flechas a la vez se consideraba una frívola distracción. En la guerra de los Ancestros, tal técnica se ha convertido en una extraña necesidad.",
			[`${abilityName}_wave_count`]: 				"OLEADAS:",
			[`${abilityName}_multishot_movespeed`]: 				"%PENALIZACIÓN DE VELOCIDAD DE MOVIMIENTO:",
			[`${abilityName}_arrow_count_per_wave`]: 				"FLECHAS POR OLEADA:",
			[`${abilityName}_arrow_damage_pct`]: 				"%BONIFICACIÓN DE DAÑO BASE POR FLECHA:",
			[`${abilityName}_arrow_range_multiplier`]: 				"MULTIPLICADOR DE ALCANCE DE FLECHA:",
			[`${abilityName}_Note0`]: 				"El daño base de las flechas ignora la inmunidad mágica.",
			[`${abilityName}_Note1`]: 				"El daño y la ralentización de Flechas Gélidas no ignoran la inmunidad mágica.",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Multishot",
			[`${abilityName}_Description`]: 				"ПРЕРЫВАЕМАЯ — герой выпускает один залп стрел за другим, нанося врагам долю от базового урона и применяя на них способность Frost Arrows. Действует до %abilitychanneltime% сек.",
			[`${abilityName}_Facet_drow_ranger_sidestep`]: 				"Во время действия Multishot можно применять предметы и медленно передвигаться.",
			[`${abilityName}_Lore`]: 				"Когда лучница была юна, её попытки выпускать сразу несколько стрел считали пустой тратой времени. В войне Древних это умение стало вынужденной необходимостью.",
			[`${abilityName}_wave_count`]: 				"ЧИСЛО ВОЛН:",
			[`${abilityName}_multishot_movespeed`]: 				"%ЗАМЕДЛЕНИЕ ПЕРЕДВИЖЕНИЯ:",
			[`${abilityName}_arrow_count_per_wave`]: 				"СТРЕЛ В ВОЛНЕ:",
			[`${abilityName}_arrow_damage_pct`]: 				"%ДОЛЯ ОТ БАЗОВОГО УРОНА:",
			[`${abilityName}_arrow_range_multiplier`]: 				"МНОЖИТЕЛЬ ДАЛЬНОСТИ АТАКИ:",
			[`${abilityName}_Note0`]: 				"Базовый урон стрел проходит сквозь невосприимчивость к магии.",
			[`${abilityName}_Note1`]: 				"Замедление и дополнительный урон от Frost Arrows не проходят сквозь невосприимчивость к магии.",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"数箭齐发",
			[`${abilityName}_Description`]: 				"持续施法 - 卓尔游侠在最多%abilitychanneltime%秒内不断地射出阵阵箭矢，对击中的敌人造成额外伤害，并施加霜冻之箭效果。",
			[`${abilityName}_Facet_drow_ranger_sidestep`]: 				"卓尔游侠在施放数箭齐发时可以缓慢移动和使用物品。",
			[`${abilityName}_Lore`]: 				"在游侠的童年，学习同时射出多支箭矢被视为不够专心的轻浮行为。而在遗迹的大战中，这样的技巧奇特地成为了必要。",
			[`${abilityName}_wave_count`]: 				"波数：",
			[`${abilityName}_multishot_movespeed`]: 				"%移动速度惩罚：",
			[`${abilityName}_arrow_count_per_wave`]: 				"每波箭矢数：",
			[`${abilityName}_arrow_damage_pct`]: 				"%箭矢基础伤害加成：",
			[`${abilityName}_arrow_range_multiplier`]: 				"箭矢距离倍数：",
			[`${abilityName}_Note0`]: 				"箭矢的基础伤害无视减益免疫。",
			[`${abilityName}_Note1`]: 				"霜冻之箭的额外伤害和减速效果不无视减益免疫。",
			},
        }
    }
}