import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_vengefulspirit_wave_of_terror"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Onda Aterrorizante",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Wave of Terror</font></b>\n \nSolta um grito malévolo que concede visão pelo caminho percorrido, enfraquecendo o dano de ataque total e a armadura de inimigos atingidos.",
			[`${abilityName}_Lore`]: 				"A voz assombrosa de Shendel indica a aproximação da sua vingança.",
			[`${abilityName}_armor_reduction`]: 				"REDUÇÃO DE ARMADURA:",
			[`${abilityName}_attack_reduction`]: 				"%REDUÇÃO DO DANO DE ATAQUE:",
			[`${abilityName}_abilityduration`]: 				"DURAÇÃO DO EFEITO:",
			[`${abilityName}_vision_duration`]: 				"DURAÇÃO DA VISÃO:",
			[`${abilityName}_damage`]: 				"DANO:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Wave of Terror",
			[`${abilityName}_Description`]: 				"Vengeful Spirit lets loose a wicked cry, weakening the total attack damage and armor of enemies, and giving vision of the path ahead.",
			[`${abilityName}_Lore`]: 				"Shendel's haunting voice hints at her approaching vindication.",
			[`${abilityName}_armor_reduction`]: 				"ARMOR REDUCTION:",
			[`${abilityName}_attack_reduction`]: 				"%ATTACK DAMAGE REDUCTION:",
			[`${abilityName}_abilityduration`]: 				"DEBUFF DURATION:",
			[`${abilityName}_vision_duration`]: 				"VISION DURATION:",
			[`${abilityName}_damage`]: 				"DAMAGE:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Oleada de Terror",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Wave of Terror</font></b>.\n\nVengeful Spirit desata un grito perverso, debilitando el daño de ataque total y la armadura de sus enemigos y otorgándole visión del recorrido.",
			[`${abilityName}_Lore`]: 				"La inquietante voz de Shendel anuncia la llegada de su venganza.",
			[`${abilityName}_armor_reduction`]: 				"REDUCCIÓN DE ARMADURA:",
			[`${abilityName}_attack_reduction`]: 				"%REDUCCIÓN DE DAÑO DE ATAQUE:",
			[`${abilityName}_abilityduration`]: 				"DURACIÓN DEL EFECTO NEGATIVO:",
			[`${abilityName}_vision_duration`]: 				"DURACIÓN DE LA VISIÓN:",
			[`${abilityName}_damage`]: 				"DAÑO:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Wave of Terror",
			[`${abilityName}_Description`]: 				"Герой издаёт жуткий клич, раскрывая туман войны и ослабляя броню и атаки врагов.",
			[`${abilityName}_Lore`]: 				"Душераздирающий голос Шендел предупреждает о её приближении.",
			[`${abilityName}_armor_reduction`]: 				"СНИЖЕНИЕ БРОНИ:",
			[`${abilityName}_attack_reduction`]: 				"%СНИЖЕНИЕ УРОНА ОТ АТАК:",
			[`${abilityName}_abilityduration`]: 				"ДЛИТЕЛЬНОСТЬ ЭФФЕКТА:",
			[`${abilityName}_vision_duration`]: 				"ДЛИТЕЛЬНОСТЬ ОБЗОРА:",
			[`${abilityName}_damage`]: 				"УРОН:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"恐怖波动",
			[`${abilityName}_Description`]: 				"复仇之魂放出邪恶的嚎叫，削弱敌人的总攻击力和护甲，并打开前方经过路径的视野。",
			[`${abilityName}_Lore`]: 				"仙德尔莎那挥之不去的低语暗示着她的裁决将至。",
			[`${abilityName}_armor_reduction`]: 				"护甲削弱：",
			[`${abilityName}_attack_reduction`]: 				"%攻击力降低：",
			[`${abilityName}_abilityduration`]: 				"负面效果持续时间：",
			[`${abilityName}_vision_duration`]: 				"视野持续时间：",
			[`${abilityName}_damage`]: 				"伤害：",
			},
        }
    }
}