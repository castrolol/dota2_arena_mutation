import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_bristleback_viscous_nasal_goo"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Gosma Nasal Viscosa",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Viscous Nasal Goo</font></b>\n \nCobre o alvo em ranho, reduzindo a sua armadura e velocidade de movimento por %goo_duration% segundos. Múltiplos lançamentos acumulam e reiniciam a duração.",
			[`${abilityName}_Facet_bristleback_snot_rocket`]: 				"Aumenta a quantidade máxima de acúmulos e a redução de armadura.",
			[`${abilityName}_Lore`]: 				"Após pegar um resfriado enquanto estava preso na neve, o Bristleback usou isso para a sua vantagem.",
			[`${abilityName}_base_armor`]: 				"PERDA DE ARMADURA BASE:",
			[`${abilityName}_armor_per_stack`]: 				"REDUÇÃO DE ARMADURA POR ACÚMULO:",
			[`${abilityName}_base_move_slow`]: 				"%RETARDO BASE DE MOV.:",
			[`${abilityName}_move_slow_per_stack`]: 				"%RETARDO DE MOVIMENTO POR ACÚMULO:",
			[`${abilityName}_stack_limit`]: 				"LIMITE DE ACÚMULOS:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Viscous Nasal Goo",
			[`${abilityName}_Description`]: 				"Covers a target in snot, causing it to have reduced armor and movement speed for %goo_duration% seconds.  Multiple casts stack and refresh the duration.",
			[`${abilityName}_Facet_bristleback_snot_rocket`]: 				"Max stacks and armor reduction per stack increased.",
			[`${abilityName}_Lore`]: 				"Having caught a cold while stuck in the snow, Bristleback turns it to his advantage.",
			[`${abilityName}_base_armor`]: 				"BASE ARMOR LOSS:",
			[`${abilityName}_armor_per_stack`]: 				"ARMOR LOSS PER STACK:",
			[`${abilityName}_base_move_slow`]: 				"%BASE MOVEMENT SLOW:",
			[`${abilityName}_move_slow_per_stack`]: 				"%MOVE SLOW PER STACK:",
			[`${abilityName}_stack_limit`]: 				"STACK LIMIT:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Viscosidad Nasal",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Viscous Nasal Goo</font></b>.\n\nCubre a un objetivo con mocos, haciendo que pierda armadura y velocidad de movimiento durante %goo_duration% s. Múltiples lanzamientos se acumulan y restablecen la duración.",
			[`${abilityName}_Facet_bristleback_snot_rocket`]: 				"Aumenta las acumulaciones máximas y la reducción de armadura por acumulación.",
			[`${abilityName}_Lore`]: 				"Habiéndose resfriado tras caer en la nieve, Bristleback ahora lo utiliza a su favor.",
			[`${abilityName}_base_armor`]: 				"PÉRDIDA DE ARMADURA BASE:",
			[`${abilityName}_armor_per_stack`]: 				"PÉRDIDA DE ARMADURA POR ACUMULACIÓN:",
			[`${abilityName}_base_move_slow`]: 				"%RALENTIZACIÓN DE MOVIMIENTO BASE:",
			[`${abilityName}_move_slow_per_stack`]: 				"%RALENTIZACIÓN DE MOVIMIENTO POR ACUMULACIÓN:",
			[`${abilityName}_stack_limit`]: 				"LÍMITE DE ACUMULACIONES:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Viscous Nasal Goo",
			[`${abilityName}_Description`]: 				"Обильно сморкается на жертву, снижая её броню и скорость передвижения на %goo_duration% сек. Эффекты способности складываются, а время действия обновляется с каждым её применением.",
			[`${abilityName}_Facet_bristleback_snot_rocket`]: 				"Максимум эффектов и снижение брони за эффект увеличены.",
			[`${abilityName}_Lore`]: 				"Простуду, подхваченную в снегах, Ригварл делает своим преимуществом.",
			[`${abilityName}_base_armor`]: 				"БАЗОВОЕ СНИЖЕНИЕ БРОНИ:",
			[`${abilityName}_armor_per_stack`]: 				"СНИЖЕНИЕ БРОНИ ЗА ЭФФЕКТ:",
			[`${abilityName}_base_move_slow`]: 				"%БАЗОВОЕ ЗАМЕДЛЕНИЕ ПЕРЕДВИЖЕНИЯ:",
			[`${abilityName}_move_slow_per_stack`]: 				"%ЗАМЕДЛЕНИЕ ЗА ЭФФЕКТ:",
			[`${abilityName}_stack_limit`]: 				"МАКСИМУМ ЭФФЕКТОВ:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"粘稠鼻液",
			[`${abilityName}_Description`]: 				"用鼻涕包裹一个敌方单位，降低护甲和移动速度，持续%goo_duration%秒。多次施放的效果会叠加，并且刷新持续时间。",
			[`${abilityName}_Facet_bristleback_snot_rocket`]: 				"提升了最大叠加层数和每层护甲降低。",
			[`${abilityName}_Lore`]: 				"被大雪困住的时候着了凉，但是钢背兽让这为他所用。",
			[`${abilityName}_base_armor`]: 				"基础降低护甲：",
			[`${abilityName}_armor_per_stack`]: 				"叠加护甲降低：",
			[`${abilityName}_base_move_slow`]: 				"%初始移动速度减缓：",
			[`${abilityName}_move_slow_per_stack`]: 				"%每层叠加移速减缓：",
			[`${abilityName}_stack_limit`]: 				"叠加层数上限：",
			},
        }
    }
}