import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_windranger_windrun"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Correr nos Ventos",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Windrun</font></b>\n \nAumenta a velocidade de movimento e concede esquiva contra qualquer ataque físico.",
			[`${abilityName}_scepter_description`]: 				"<b><font color='#F2A93E'>Correr nos Ventos</font></b> reduz o dano físico sofrido em %physical_damage_pct%%% e concede uma invisibilidade que não é interrompida ao atacar ou usar habilidades.",
			[`${abilityName}_Lore`]: 				"Lyralei encanta rajadas de vento que lutam contra ataques iminentes.",
			[`${abilityName}_Note0`]: 				"Ativar Correr nos Ventos anulará os projéteis de ataque iminentes.",
			[`${abilityName}_evasion_pct_tooltip`]: 				"%ESQUIVA:",
			[`${abilityName}_duration`]: 				"DURAÇÃO:",
			[`${abilityName}_movespeed_bonus_pct`]: 				"%VEL. DE MOV. ADICIONAL:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Windrun",
			[`${abilityName}_Description`]: 				"Increases movement speed and adds evasion from all physical attacks.",
			[`${abilityName}_scepter_description`]: 				"Windrun reduces physical damage taken by %physical_damage_pct%%%, and grants invisibility that is not broken by attacking or casting spells.",
			[`${abilityName}_Lore`]: 				"Lyralei enchants gusts of winds to fight incoming attacks.",
			[`${abilityName}_Note0`]: 				"Activating Windrun will evade incoming projectiles.",
			[`${abilityName}_evasion_pct_tooltip`]: 				"%EVASION:",
			[`${abilityName}_duration`]: 				"DURATION:",
			[`${abilityName}_movespeed_bonus_pct`]: 				"%MOVE SPEED BONUS:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Correvientos",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Windrun</font></b>.\n\nAumenta la velocidad de movimiento y otorga Evasión contra todos los ataques físicos.",
			[`${abilityName}_scepter_description`]: 				"Correvientos reduce el daño físico recibido un %physical_damage_pct% %% y otorga invisibilidad que no se interrumpe al atacar o lanzar hechizos.",
			[`${abilityName}_Lore`]: 				"Lyralei encanta ráfagas de viento para defenderse de los ataques que recibe.",
			[`${abilityName}_Note0`]: 				"Activar Correvientos permite esquivar proyectiles.",
			[`${abilityName}_evasion_pct_tooltip`]: 				"%EVASIÓN:",
			[`${abilityName}_duration`]: 				"DURACIÓN:",
			[`${abilityName}_movespeed_bonus_pct`]: 				"%BONIFICACIÓN DE VELOCIDAD DE MOVIMIENTO:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Windrun",
			[`${abilityName}_Description`]: 				"Увеличивает скорость передвижения героя и позволяет ему уворачиваться от всех физических атак.",
			[`${abilityName}_scepter_description`]: 				"Уменьшает получаемый физический урон на %physical_damage_pct%%% и даёт невидимость, которая не прерывается атаками и применением заклинаний.",
			[`${abilityName}_Lore`]: 				"Лиралей зачаровывает порывы ветра, и они отражают удары по ней.",
			[`${abilityName}_Note0`]: 				"С помощью этой способности нельзя увернуться от снарядов, выпущенных до начала её действия.",
			[`${abilityName}_evasion_pct_tooltip`]: 				"%УКЛОНЕНИЕ:",
			[`${abilityName}_duration`]: 				"ДЛИТЕЛЬНОСТЬ:",
			[`${abilityName}_movespeed_bonus_pct`]: 				"%ДОП. СКОРОСТЬ ПЕРЕДВИЖЕНИЯ:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"风行",
			[`${abilityName}_Description`]: 				"提升移动速度，并闪避一切物理攻击。",
			[`${abilityName}_scepter_description`]: 				"风行使承受的物理伤害减少%physical_damage_pct%%%，并且自身获得隐身状态，攻击或施法都不会脱离隐身。",
			[`${abilityName}_Lore`]: 				"莱瑞蕾运用疾风之力抵御来临的攻击。",
			[`${abilityName}_Note0`]: 				"风行能够躲避在开启技能前产生的攻击弹道。",
			[`${abilityName}_evasion_pct_tooltip`]: 				"%闪避几率：",
			[`${abilityName}_duration`]: 				"持续时间：",
			[`${abilityName}_movespeed_bonus_pct`]: 				"%移动速度提升：",
			},
        }
    }
}