import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_leshrac_pulse_nova"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Pulso de Nova",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Pulse Nova</font></b>\n \nCria ondas de dano de energia ao redor de Leshrac, uma por segundo, que causam dano a unidades inimigas próximas. Drena mana de Leshrac a cada pulso.",
			[`${abilityName}_Lore`]: 				"Se necessário, o Espírito Atormentado pode manipular o próprio espaço-tempo, destruindo seres menores.",
			[`${abilityName}_radius`]: 				"RAIO:",
			[`${abilityName}_mana_cost_per_second`]: 				"MANA/SEGUNDO:",
			[`${abilityName}_damage`]: 				"DANO:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Pulse Nova",
			[`${abilityName}_Description`]: 				"Creates waves of damaging energy around Leshrac, one per second, to damage nearby enemy units. Drains Leshrac's mana with each pulse.",
			[`${abilityName}_Lore`]: 				"If necessary, the Tormented Soul can manipulate space time itself, ravaging lesser beings.",
			[`${abilityName}_radius`]: 				"RADIUS:",
			[`${abilityName}_mana_cost_per_second`]: 				"MANA/SEC:",
			[`${abilityName}_damage`]: 				"DAMAGE:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Ráfaga de Pulsaciones",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Pulse Nova</font></b>.\n\nCrea ondas de energía alrededor de Leshrac, una por segundo, para dañar a las unidades enemigas cercanas. Drena el maná de Leshrac con cada pulsación.",
			[`${abilityName}_Lore`]: 				"Si es necesario, el Alma Atormentada puede manipular el propio espacio-tiempo y arrasar a los seres inferiores.",
			[`${abilityName}_radius`]: 				"RADIO:",
			[`${abilityName}_mana_cost_per_second`]: 				"MANÁ POR SEGUNDO:",
			[`${abilityName}_damage`]: 				"DAÑO:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Pulse Nova",
			[`${abilityName}_Description`]: 				"Создаёт вокруг героя волны энергии, которые раз в секунду наносят урон вражеским существам поблизости. Каждая волна расходует ману владельца.",
			[`${abilityName}_Lore`]: 				"Если понадобится, истерзанная душа может управлять континуумом, уничтожая низших существ.",
			[`${abilityName}_radius`]: 				"РАДИУС:",
			[`${abilityName}_mana_cost_per_second`]: 				"МАНЫ В СЕКУНДУ:",
			[`${abilityName}_damage`]: 				"УРОН:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"脉冲新星",
			[`${abilityName}_Description`]: 				"拉席克在他周围创造破坏性的能量波，每秒对附近敌方单位造成伤害。每次脉冲都会消耗拉席克的魔法。",
			[`${abilityName}_Lore`]: 				"必要时，受折磨的灵魂能操纵时空本身，毁灭弱小的存在。",
			[`${abilityName}_radius`]: 				"作用范围：",
			[`${abilityName}_mana_cost_per_second`]: 				"每秒魔法消耗：",
			[`${abilityName}_damage`]: 				"伤害：",
			},
        }
    }
}