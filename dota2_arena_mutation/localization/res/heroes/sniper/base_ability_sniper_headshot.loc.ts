import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_sniper_headshot"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Atirar na Cabeça",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Headshot</font></b>\n \nO Sniper aumenta a sua precisão, ganhando a chance de causar dano adicional e arremessar os seus inimigos para trás. A distância do arremesso aumenta conforme a proximidade do inimigo ao Sniper. Tiros na cabeça retardam brevemente as velocidades de movimento e ataque de inimigos em %slow%%%.",
			[`${abilityName}_Lore`]: 				"Os simples disparos em perseguidores-do-penhasco durante a sua infância foram totalmente refinados em perfeitas habilidades contra os combatentes inimigos.",
			[`${abilityName}_proc_chance`]: 				"%CHANCE:",
			[`${abilityName}_knockback_distance`]: 				"DISTÂNCIA MÁX. DO ARREMESSO:",
			[`${abilityName}_slow_duration`]: 				"DURAÇÃO DO RETARDO:",
			[`${abilityName}_damage`]: 				"DANO:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Headshot",
			[`${abilityName}_Description`]: 				"Sniper increases his accuracy, giving him a chance to deal extra damage and knock back his enemies. Knockback distance increases based on how close the enemy is to Sniper. Headshots briefly slow enemy movement and attack speed by %slow%%%.",
			[`${abilityName}_Lore`]: 				"Taking potshots at steepstalkers in his childhood has been thoroughly refined into perfect leads on enemy combatants.",
			[`${abilityName}_proc_chance`]: 				"%CHANCE:",
			[`${abilityName}_knockback_distance`]: 				"MAX KNOCKBACK DISTANCE:",
			[`${abilityName}_slow_duration`]: 				"SLOW DURATION:",
			[`${abilityName}_damage`]: 				"DAMAGE:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Disparo a la Cabeza",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Headshot</font></b>.\n\nSniper aumenta su precisión, lo que le da una probabilidad de infligir daño adicional y hacer retroceder a sus enemigos. La distancia de retroceso aumenta en función de lo cerca que esté el enemigo de Sniper. Los Disparos a la Cabeza ralentizan brevemente la velocidad de movimiento y de ataque de los enemigos un %slow% %%.",
			[`${abilityName}_Lore`]: 				"Las prácticas de tiro con acechacantilados en su juventud le han permitido afinar su puntería y realizar disparos certeros sobre combatientes enemigos.",
			[`${abilityName}_proc_chance`]: 				"%PROBABILIDAD:",
			[`${abilityName}_knockback_distance`]: 				"DISTANCIA DE RETROCESO MÁXIMA:",
			[`${abilityName}_slow_duration`]: 				"DURACIÓN DE LA RALENTIZACIÓN:",
			[`${abilityName}_damage`]: 				"DAÑO:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Headshot",
			[`${abilityName}_Description`]: 				"Герой стреляет точнее, отчего каждая его атака может нанести дополнительный урон, оттолкнуть жертву и ненадолго замедлить её передвижение и атаку на %slow%%%. Чем ближе цель атаки, тем больше дальность отталкивания.",
			[`${abilityName}_Lore`]: 				"Охотясь на горных тварей, юный Кардел научился идеально отслеживать траекторию передвижения врагов.",
			[`${abilityName}_proc_chance`]: 				"%ШАНС:",
			[`${abilityName}_knockback_distance`]: 				"МАКС. ДАЛЬНОСТЬ ОТТАЛКИВАНИЯ:",
			[`${abilityName}_slow_duration`]: 				"ДЛИТЕЛЬНОСТЬ ЗАМЕДЛЕНИЯ:",
			[`${abilityName}_damage`]: 				"УРОН:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"爆头",
			[`${abilityName}_Description`]: 				"狙击手提高他的精确度，有一定概率造成额外伤害并击退敌人。敌人距离狙击手越近，击退距离越远。爆头会短暂地降低敌人%slow%%%移动和攻击速度。",
			[`${abilityName}_Lore`]: 				"童年时对潜行兽的胡乱射击现在被练就成攻击敌人的技术。",
			[`${abilityName}_proc_chance`]: 				"%概率：",
			[`${abilityName}_knockback_distance`]: 				"最远击退距离：",
			[`${abilityName}_slow_duration`]: 				"减速持续时间：",
			[`${abilityName}_damage`]: 				"伤害：",
			},
        }
    }
}