import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_drow_ranger_wave_of_silence"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Rajada de Vento",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Gust</font></b>\n \nLibera uma onda que silencia e arremessa unidades inimigas para trás, revelando inimigos invisíveis. A distância do arremesso é proporcional à proximidade da unidade à Drow Ranger.",
			[`${abilityName}_Lore`]: 				"Traxex é amante da tranquilidade do combate físico, aproveitando-se da sua linhagem Drow para interromper qualquer encantamento de magos adversários.",
			[`${abilityName}_wave_width`]: 				"LARGURA:",
			[`${abilityName}_silence_duration`]: 				"DURAÇÃO DO SILENCIAMENTO:",
			[`${abilityName}_knockback_duration`]: 				"DURAÇÃO DO ARREMESSO:",
			[`${abilityName}_knockback_distance_max`]: 				"ARREMESSO MÁXIMO:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Gust",
			[`${abilityName}_Description`]: 				"Releases a wave that silences and knocks back and reveals invisible enemy units. Knockback distance is relative to how close they are to Drow.",
			[`${abilityName}_Lore`]: 				"Traxex is rather fond of the tranquility of physical combat, calling on her Drow heritage to end the incantations of opposing magi.",
			[`${abilityName}_wave_width`]: 				"WIDTH:",
			[`${abilityName}_silence_duration`]: 				"SILENCE DURATION:",
			[`${abilityName}_knockback_duration`]: 				"KNOCKBACK DURATION:",
			[`${abilityName}_knockback_distance_max`]: 				"KNOCKBACK MAX:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Ráfaga",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Gust</font></b>.\n\nLibera una onda que silencia, hace retroceder y revela a las unidades enemigas invisibles. La distancia de retroceso es proporcional a cuán cerca estén de Drow.",
			[`${abilityName}_Lore`]: 				"Traxex se siente bastante orgullosa de la tranquilidad del combate físico, recurriendo a su herencia Drow para poner fin a los conjuros de los magos enemigos.",
			[`${abilityName}_wave_width`]: 				"AMPLITUD:",
			[`${abilityName}_silence_duration`]: 				"DURACIÓN DEL SILENCIO:",
			[`${abilityName}_knockback_duration`]: 				"DURACIÓN DEL RETROCESO:",
			[`${abilityName}_knockback_distance_max`]: 				"RETROCESO MÁXIMO:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Gust",
			[`${abilityName}_Description`]: 				"Выпускает волну, которая отбрасывает вражеских существ и запрещает им применять способности, а также раскрывает невидимость. Чем ближе был враг, тем дальше его отбросит.",
			[`${abilityName}_Lore`]: 				"Траксекс предпочитает тишину физического боя и, взывая к корням своей приёмной расы, запрещает использовать на поле боя любую магию.",
			[`${abilityName}_wave_width`]: 				"ШИРИНА:",
			[`${abilityName}_silence_duration`]: 				"ДЛИТЕЛЬНОСТЬ:",
			[`${abilityName}_knockback_duration`]: 				"ДЛИТЕЛЬНОСТЬ ТОЛЧКА:",
			[`${abilityName}_knockback_distance_max`]: 				"МАКС. ДАЛЬНОСТЬ ТОЛЧКА:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"狂风",
			[`${abilityName}_Description`]: 				"释放一阵狂风，沉默敌方单位并将其击退，同时使隐身敌人显形。击退距离与敌人和卓尔游侠的距离成反比。",
			[`${abilityName}_Lore`]: 				"崔希丝特别中意肉搏中蕴含的静谧，因此她运用卓尔人的天赋终结敌人的魔法。",
			[`${abilityName}_wave_width`]: 				"作用宽度：",
			[`${abilityName}_silence_duration`]: 				"沉默持续时间：",
			[`${abilityName}_knockback_duration`]: 				"击退持续时间：",
			[`${abilityName}_knockback_distance_max`]: 				"最大击退距离：",
			},
        }
    }
}