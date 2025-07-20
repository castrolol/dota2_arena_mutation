import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_gyrocopter_call_down"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Lançamento Aéreo",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Call Down</font></b>\n \nLança um ataque de %total_strikes% mísseis aéreos que retardam e causam dano a unidades inimigas na área-alvo. Cada míssil atingirá o chão a uma distância de %strike_separation% unidades do anterior.",
			[`${abilityName}_facet_gyrocopter_secondary_strikes`]: 				"Reduz o atraso entre impactos em %bonus_strike_delay%s. Qualquer herói inimigo atingido por um míssil do Lançamento Aéreo será marcado, e outro míssil rastreado com um raio de impacto de %tracking_strike_radius% unidades será disparado contra ele, causando %tracking_missile_damage%%% de dano.",
			[`${abilityName}_Lore`]: 				"\"Olha a explosão...\"",
			[`${abilityName}_Note0`]: 				"O indicador visual só é visível aos aliados.",
			[`${abilityName}_damage`]: 				"DANO DO MÍSSIL:",
			[`${abilityName}_slow`]: 				"%RETARDO DO MÍSSIL:",
			[`${abilityName}_slow_duration`]: 				"DURAÇÃO DO RETARDO:",
			[`${abilityName}_radius`]: 				"RAIO:",
			[`${abilityName}_strike_delay`]: 				"INTERVALO ENTRE IMPACTOS:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Call Down",
			[`${abilityName}_Description`]: 				"Call down %total_strikes% aerial missile strikes that slow and damage enemy units in a target area. Each strike is %strike_separation% distance from the previous one.",
			[`${abilityName}_facet_gyrocopter_secondary_strikes`]: 				"The delay between hits is decreased by %bonus_strike_delay%s. Any enemy hero hit by a call down missile strike will be marked, and another, tracking missile strike that has a %tracking_strike_radius% impact radius will be fired at them. This missile deals %tracking_missile_damage%%% damage.",
			[`${abilityName}_Lore`]: 				"'Bombs Away!'",
			[`${abilityName}_Note0`]: 				"The visual indicator is visible to allies only.",
			[`${abilityName}_damage`]: 				"MISSILE DAMAGE:",
			[`${abilityName}_slow`]: 				"%MISSILE SLOW:",
			[`${abilityName}_slow_duration`]: 				"SLOW DURATION:",
			[`${abilityName}_radius`]: 				"RADIUS:",
			[`${abilityName}_strike_delay`]: 				"TIME BETWEEN STRIKES:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Bombardeo",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Call Down</font></b>.\n\nLanza %total_strikes% ataques con misiles aéreos que ralentizan y dañan a las unidades enemigas en el área objetivo. Cada ataque se hace a %strike_separation% de distancia del anterior.",
			[`${abilityName}_facet_gyrocopter_secondary_strikes`]: 				"El retraso entre sus disparos se reduce en %bonus_strike_delay% s. Cada héroe enemigo impactado por un misil de Bombardeo quedará marcado, y se le dispara un segundo misil rastreador con un radio de impacto de %tracking_strike_radius%. Este segundo misil inflige un %tracking_missile_damage% %% de daño.",
			[`${abilityName}_Lore`]: 				"'¡Bombas fuera!'",
			[`${abilityName}_Note0`]: 				"El indicador visual solo es visible para los aliados.",
			[`${abilityName}_damage`]: 				"DAÑO POR MISIL:",
			[`${abilityName}_slow`]: 				"%RALENTIZACIÓN POR MISIL:",
			[`${abilityName}_slow_duration`]: 				"DURACIÓN DE LA RALENTIZACIÓN:",
			[`${abilityName}_radius`]: 				"RADIO:",
			[`${abilityName}_strike_delay`]: 				"INTERVALO ENTRE ATAQUES:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Call Down",
			[`${abilityName}_Description`]: 				"Герой вызывает %total_strikes% воздушных удара, каждый из которых наносит урон врагам в области действия и замедляет их. Каждый снаряд падает на расстоянии %strike_separation% от предыдущего.",
			[`${abilityName}_facet_gyrocopter_secondary_strikes`]: 				"Задержка между ударами уменьшается на %bonus_strike_delay%. По каждому задетому вражескому герою вызывается дополнительный самонаводящийся удар, наносящий %tracking_missile_damage%%% урона в радиусе %tracking_strike_radius%.",
			[`${abilityName}_Lore`]: 				"«Бомбы пошли!»",
			[`${abilityName}_Note0`]: 				"Наземная метка, указывающая область действия, видна только союзникам.",
			[`${abilityName}_damage`]: 				"УРОН:",
			[`${abilityName}_slow`]: 				"%ЗАМЕДЛЕНИЕ:",
			[`${abilityName}_slow_duration`]: 				"ДЛИТЕЛЬНОСТЬ ЗАМЕДЛЕНИЯ:",
			[`${abilityName}_radius`]: 				"РАДИУС:",
			[`${abilityName}_strike_delay`]: 				"ИНТЕРВАЛ УДАРОВ:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"召唤飞弹",
			[`${abilityName}_Description`]: 				"召唤%total_strikes%波防空导弹，对目标区域内的敌方单位造成减速和伤害。每次打击与上一次间隔%strike_separation%距离。",
			[`${abilityName}_facet_gyrocopter_secondary_strikes`]: 				"每次打击的间隔减少%bonus_strike_delay%秒。被飞弹击中的敌方英雄都会被标记，朝他们发射一枚具有%tracking_strike_radius%作用范围的追踪飞弹。这枚飞弹造成%tracking_missile_damage%%%伤害。",
			[`${abilityName}_Lore`]: 				"“开始轰炸！”",
			[`${abilityName}_Note0`]: 				"视觉指示范围仅对队友可见。",
			[`${abilityName}_damage`]: 				"导弹伤害：",
			[`${abilityName}_slow`]: 				"%导弹减速：",
			[`${abilityName}_slow_duration`]: 				"减速持续时间：",
			[`${abilityName}_radius`]: 				"作用范围：",
			[`${abilityName}_strike_delay`]: 				"打击间隔：",
			},
        }
    }
}