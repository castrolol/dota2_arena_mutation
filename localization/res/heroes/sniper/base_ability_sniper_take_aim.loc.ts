import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_sniper_take_aim"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Melhorar Mira",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Tale Aim</font></b>\n \nAumenta o alcance de visão, a chance de <b><font color='#F2A93E'>Atirar na Cabeça</font></b> e o alcance de ataque. Enquanto ativa, retarda o seu movimento em %slow%%% e restringe a sua visão a um cone frontal.",
			[`${abilityName}_Facet_sniper_ghillie_suit`]: 				"Enquanto Melhorar Mira estiver ativada, os ataques do Sniper não o revelam na névoa de guerra.",
			[`${abilityName}_Lore`]: 				"Kardel sempre faz de tudo para manter-se o mais longe possível do perigo, ao mesmo tempo que cumpre o seu papel — mirar perfeitamente.",
			[`${abilityName}_duration`]: 				"DURAÇÃO:",
			[`${abilityName}_bonus_vision`]: 				"VISÃO ADICIONAL:",
			[`${abilityName}_headshot_chance`]: 				"%CHANCE DE ATIRAR NA CABEÇA:",
			[`${abilityName}_active_attack_range_bonus`]: 				"ALCANCE DE ATAQUE ADICIONAL:",
			[`${abilityName}_attack_speed`]: 				"VELOCIDADE DE ATAQUE:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Take Aim",
			[`${abilityName}_Description`]: 				"Increases vision range, Headshot chance, and attack range. Slows you by %slow%%% for the duration and restricts your vision to a frontal cone.",
			[`${abilityName}_Facet_sniper_ghillie_suit`]: 				"While Take Aim is active, Sniper's attacks do not reveal him from fog of war.",
			[`${abilityName}_Lore`]: 				"Kardel always takes it upon himself to stay as far from harm as he can while still performing his role - taking perfect aim.",
			[`${abilityName}_duration`]: 				"DURATION:",
			[`${abilityName}_bonus_vision`]: 				"BONUS VISION:",
			[`${abilityName}_headshot_chance`]: 				"%HEADSHOT CHANCE:",
			[`${abilityName}_active_attack_range_bonus`]: 				"BONUS ATTACK RANGE:",
			[`${abilityName}_attack_speed`]: 				"ATTACK SPEED:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Apuntar",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Take Aim</font></b>.\n\nAumenta el alcance de visión, la probabilidad de disparos a la cabeza y el alcance de ataque. Te ralentiza un %slow% %% mientras dure y restringe la visión a un cono frontal.",
			[`${abilityName}_Facet_sniper_ghillie_suit`]: 				"Mientras Apuntar esté activa, los ataques de Sniper no lo revelan en la niebla de guerra.",
			[`${abilityName}_Lore`]: 				"Kardel siempre procura mantenerse tan lejos del daño como sea posible mientras hace su trabajo: apuntar perfectamente.",
			[`${abilityName}_duration`]: 				"DURACIÓN:",
			[`${abilityName}_bonus_vision`]: 				"VISIÓN ADICIONAL:",
			[`${abilityName}_headshot_chance`]: 				"%PROBABILIDAD DE DISPARO A LA CABEZA:",
			[`${abilityName}_active_attack_range_bonus`]: 				"ALCANCE DE ATAQUE ADICIONAL:",
			[`${abilityName}_attack_speed`]: 				"VELOCIDAD DE ATAQUE:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Take Aim",
			[`${abilityName}_Description`]: 				"Увеличивает радиус обзора, дальность атаки и шанс срабатывания Headshot. Под действием этой способности герой передвигается на %slow%%% медленнее и видит только в конусе перед собой.",
			[`${abilityName}_Facet_sniper_ghillie_suit`]: 				"Атакуя под действием способности Take Aim, герой не становится виден в тумане войны.",
			[`${abilityName}_Lore`]: 				"Кардел всегда старается держаться от опасности как можно дальше, при этом не забывая о своей задаче: стрелять точно в цель.",
			[`${abilityName}_duration`]: 				"ДЛИТЕЛЬНОСТЬ:",
			[`${abilityName}_bonus_vision`]: 				"ДОП. ОБЗОР:",
			[`${abilityName}_headshot_chance`]: 				"%ШАНС СРАБАТЫВАНИЯ HEADSHOT:",
			[`${abilityName}_active_attack_range_bonus`]: 				"ДОП. ДАЛЬНОСТЬ АТАКИ:",
			[`${abilityName}_attack_speed`]: 				"ДОП. СКОРОСТЬ АТАКИ:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"瞄准",
			[`${abilityName}_Description`]: 				"提升视野距离，爆头几率和攻击距离。自身在持续时间内减速%slow%%%，并且视野限制在前方的锥形区域内。",
			[`${abilityName}_Facet_sniper_ghillie_suit`]: 				"开启瞄准后狙击手的攻击不会使他在战争迷雾中现形。",
			[`${abilityName}_Lore`]: 				"卡德尔总是保持自己待在远处的安全距离，同时他仍然可以作为狙击手进行完美的射击。",
			[`${abilityName}_duration`]: 				"持续时间：",
			[`${abilityName}_bonus_vision`]: 				"视野加成：",
			[`${abilityName}_headshot_chance`]: 				"%爆头几率：",
			[`${abilityName}_active_attack_range_bonus`]: 				"攻击距离加成：",
			[`${abilityName}_attack_speed`]: 				"攻击速度加成：",
			},
        }
    }
}