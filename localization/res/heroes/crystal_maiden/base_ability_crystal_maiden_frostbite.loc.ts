import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_crystal_maiden_frostbite"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Congelamento",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Frostbite</font></b>\n \nCobre uma unidade em gelo, impedindo que se movimente ou ataque, enquanto causa dano com o tempo. Causa %creep_multiplier%x o dano contra criaturas não Ancestrais.",
			[`${abilityName}_Lore`]: 				"Rylai canaliza os ventos da Geleira Coração Azul, aprisionando os atacantes em espessos blocos de gelo.",
			[`${abilityName}_Note0`]: 				"O Congelamento é considerado um enraizamento.",
			[`${abilityName}_damage_per_second`]: 				"DANO POR SEGUNDO:",
			[`${abilityName}_duration`]: 				"DURAÇÃO:",
			[`${abilityName}_tick_rate`]: 				"INTERVALO DE DANO:",
			[`${abilityName}_abilitydraft_note`]: 				"<span class=\"ADBlue\">Fragmento:</span> acesse o <span class=\"ADWhite\"><b>Clone Cristalino</b></span> ao alternar o uso automático do <span class=\"ADWhite\"><b>Congelamento</b></span>.",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Frostbite",
			[`${abilityName}_Description`]: 				"Encases an enemy unit in ice, prohibiting movement and attack, while dealing damage over time. Deals %creep_multiplier%x damage to non-ancient creeps.",
			[`${abilityName}_Lore`]: 				"Rylai channels winds from the Blueheart Glacier, imprisoning attackers in thick blocks of ice.",
			[`${abilityName}_Note0`]: 				"Frostbite is considered a root.",
			[`${abilityName}_damage_per_second`]: 				"DAMAGE PER SECOND:",
			[`${abilityName}_duration`]: 				"DURATION:",
			[`${abilityName}_tick_rate`]: 				"DAMAGE INTERVAL:",
			[`${abilityName}_abilitydraft_note`]: 				"<span class=\"ADBlue\">Shard:</span> Access <span class=\"ADWhite\"><b>Crystal Clone</b></span> by toggling auto-cast on <span class=\"ADWhite\"><b>Frostbite</b></span>.",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Congelación",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Frostbite</font></b>.\n\nRecubre a una unidad enemiga con hielo, impidiendo que se mueva o ataque e infligiéndole daño con el tiempo. Inflige %creep_multiplier% veces el daño a los creeps que no sean ancestrales.",
			[`${abilityName}_Lore`]: 				"Rylai canaliza los vientos del Glaciar del Corazón Azul, aprisionando a sus atacantes en gruesos bloques de hielo.",
			[`${abilityName}_Note0`]: 				"Congelación inmoviliza a los enemigos.",
			[`${abilityName}_damage_per_second`]: 				"DAÑO POR SEGUNDO:",
			[`${abilityName}_duration`]: 				"DURACIÓN:",
			[`${abilityName}_tick_rate`]: 				"INTERVALOS DE DAÑO:",
			[`${abilityName}_abilitydraft_note`]: 				"<span class=\"ADBlue\">Fragmento:</span> Accede a <span class=\"ADWhite\"><b>Clon de Cristal</b></span> activando el lanzamiento automático en <span class=\"ADWhite\"><b>Congelación</b></span>.",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Frostbite",
			[`${abilityName}_Description`]: 				"Заковывает противника в лёд, нанося ему периодический урон и запрещая двигаться и атаковать. Наносит в %creep_multiplier% раза больше урона всем крипам, кроме древних.",
			[`${abilityName}_Lore`]: 				"Рилай призывает холодный ветер с айсберга Голубого Сердца, который заточает противника в ледяную глыбу.",
			[`${abilityName}_Note0`]: 				"Накладывает эффект оцепенения.",
			[`${abilityName}_damage_per_second`]: 				"УРОН В СЕКУНДУ:",
			[`${abilityName}_duration`]: 				"ДЛИТЕЛЬНОСТЬ:",
			[`${abilityName}_tick_rate`]: 				"ИНТЕРВАЛ УРОНА:",
			[`${abilityName}_abilitydraft_note`]: 				"<span class=\"ADBlue\">Aghanim's Shard:</span> способность <span class=\"ADWhite\"><b>Crystal Clone</b></span> появляется при включении автоматического применения <span class=\"ADWhite\"><b>Frostbite</b></span>.",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"冰封禁制",
			[`${abilityName}_Description`]: 				"操控冰霜包围一个敌方单位，禁止移动和攻击，并持续造成伤害。对非远古的普通单位施放将造成%creep_multiplier%倍伤害。",
			[`${abilityName}_Lore`]: 				"莉莱引来蓝心冰川的寒风，将动手的敌人封锁在冰块里。",
			[`${abilityName}_Note0`]: 				"冰封禁制为缠绕效果。",
			[`${abilityName}_damage_per_second`]: 				"每秒伤害：",
			[`${abilityName}_duration`]: 				"持续时间：",
			[`${abilityName}_tick_rate`]: 				"伤害间隔：",
			[`${abilityName}_abilitydraft_note`]: 				"<span class=\"ADBlue\">魔晶：</span> <span class=\"ADWhite\"><b>冰封禁制</b></span>开启自动施放后施放效果为<span class=\"ADWhite\"><b>冰晶克隆</b></span>。",
			},
        }
    }
}