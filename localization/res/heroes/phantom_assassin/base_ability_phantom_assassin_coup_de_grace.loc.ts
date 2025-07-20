import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_phantom_assassin_coup_de_grace"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Coup de Grace",
			[`${abilityName}_Facet_phantom_assassin_methodical`]: 				"Ativa Coup de Grace a cada %attacks_to_proc% ataques contra o mesmo herói ou %attacks_to_proc_creeps% ataques contra demais unidades. Adagas Sufocantes contam como %two_tooltip% ataques.",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Coup de Grace</font></b>\n \nA Phantom Assassin aperfeiçoa as suas habilidades de combate, tendo assim a chance de obter um <b><font color=\"#8ceeb\">Foco Mortal</font></b> a cada ataque. Ao atacar com o <b><font color=\"#8ceeb\">Foco Mortal</font></b>, a Phantom Assassin consumirá o efeito para garantir um acerto crítico. A <font color='#F2A93E'>Adaga Sufocante</font> tem uma chance adicional de ativar <b><font color=\"#8ceeb\">Foco Mortal</font></b>.",
			[`${abilityName}_Lore`]: 				"Um golpe divino, Mortred honra o seu adversário ao escolhê-lo para a morte.",
			[`${abilityName}_crit_chance`]: 				"%CHANCE DE FOCO MORTAL:",
			[`${abilityName}_attacks_to_proc`]: 				"ATAQUES PARA ATIVAR:",
			[`${abilityName}_crit_bonus`]: 				"%DANO CRÍTICO:",
			[`${abilityName}_duration`]: 				"DURAÇÃO DO FOCO MORTAL:",
			[`${abilityName}_dagger_crit_chance`]: 				"%CHANCE DE FOCO MORTAL (ADAGA):",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Coup de Grace",
			[`${abilityName}_Facet_phantom_assassin_methodical`]: 				"Coup de Grace procs every %attacks_to_proc% attacks on the same hero or %attacks_to_proc_creeps% attacks on non hero units. Stifling Dagger counts as %two_tooltip% attacks.",
			[`${abilityName}_Description`]: 				"Phantom Assassin refines her combat abilities, acquiring a chance of gaining Deadly Focus with each attack. When attacking with Deadly Focus, Phantom Assassin will consume the buff and guarantee a critical hit. Stifling Dagger has a bonus chance to cause Deadly Focus.",
			[`${abilityName}_Lore`]: 				"A divine strike, Mortred honors her opponent by choosing them for death.",
			[`${abilityName}_crit_chance`]: 				"%CHANCE OF DEADLY FOCUS:",
			[`${abilityName}_attacks_to_proc`]: 				"ATTACKS TO TRIGGER:",
			[`${abilityName}_crit_bonus`]: 				"%CRITICAL DAMAGE:",
			[`${abilityName}_duration`]: 				"DEADLY FOCUS DURATION:",
			[`${abilityName}_dagger_crit_chance`]: 				"%DAGGER CHANCE OF DEADLY FOCUS:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Golpe de Gracia",
			[`${abilityName}_Facet_phantom_assassin_methodical`]: 				"Hay una probabilidad de activación de Golpe de Gracia cada %attacks_to_proc% ataques al mismo héroe o cada %attacks_to_proc_creeps% ataques a unidades que no sean héroes. Daga Sofocante cuenta como %two_tooltip% ataques.",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Coup de Grace</font></b>.\n\nPhantom Assassin refina sus habilidades de combate y adquiere una probabilidad de obtener Concentración Letal. Si Phantom Assassin ataca con Concentración Letal, consumirá los efectos positivos e infligirá un impacto crítico garantizado. La habilidad Daga Sofocante tiene una probabilidad adicional de causar Concentración Letal.",
			[`${abilityName}_Lore`]: 				"Un golpe divino, Mortred enaltece a su oponente al elegirlo para morir.",
			[`${abilityName}_crit_chance`]: 				"%PROB. DE CONCENTRACIÓN LETAL:",
			[`${abilityName}_attacks_to_proc`]: 				"ATAQUES PARA ACTIVAR:",
			[`${abilityName}_crit_bonus`]: 				"%DAÑO CRÍTICO:",
			[`${abilityName}_duration`]: 				"DURACIÓN DE CONCENTRACIÓN LETAL:",
			[`${abilityName}_dagger_crit_chance`]: 				"%PROB. DE CONCENTRACIÓN LETAL CON DAGA:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Coup de Grace",
			[`${abilityName}_Facet_phantom_assassin_methodical`]: 				"Coup de Grace срабатывает каждые несколько атак по одному и тому же существу. Героям нужно %attacks_to_proc% атак, а прочим существам — %attacks_to_proc_creeps%. Кинжал от Stifling Dagger считается за %two_tooltip% атаки.",
			[`${abilityName}_Description`]: 				"Герой оттачивает свои боевые навыки, с каждой атакой имея шанс войти в состояние смертельного фокуса. В нём следующая атака гарантированно нанесёт критический урон и снимет фокус. Способность Stifling Dagger даёт фокус с повышенной вероятностью.",
			[`${abilityName}_Lore`]: 				"Погибнуть от судьбоносного удара Мортред — честь для её врагов.",
			[`${abilityName}_crit_chance`]: 				"%ШАНС ФОКУСА ОТ АТАКИ:",
			[`${abilityName}_attacks_to_proc`]: 				"ЧИСЛО АТАК ДЛЯ СРАБАТЫВАНИЯ:",
			[`${abilityName}_crit_bonus`]: 				"%КРИТИЧЕСКИЙ УРОН:",
			[`${abilityName}_duration`]: 				"ДЛИТЕЛЬНОСТЬ ФОКУСА:",
			[`${abilityName}_dagger_crit_chance`]: 				"%ШАНС ФОКУСА ОТ КИНЖАЛА:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"恩赐解脱",
			[`${abilityName}_Facet_phantom_assassin_methodical`]: 				"每攻击同个英雄%attacks_to_proc%次触发恩赐解脱，或者攻击同个非英雄单位%attacks_to_proc_creeps%次触发。窒碍短匕计为%two_tooltip%次攻击。",
			[`${abilityName}_Description`]: 				"幻影刺客的战斗技能得到精进，每次攻击时有几率获得致命专注。攻击时若带有致命专注，幻影刺客会消耗该效果，并且必定产生一次致命一击。窒碍短匕拥有额外几率获得致命专注。",
			[`${abilityName}_Lore`]: 				"神圣的一击，茉崔蒂通过赐予对手死亡来向他们致以敬意。",
			[`${abilityName}_crit_chance`]: 				"%致命专注几率：",
			[`${abilityName}_attacks_to_proc`]: 				"触发所需攻击次数：",
			[`${abilityName}_crit_bonus`]: 				"%致命一击伤害：",
			[`${abilityName}_duration`]: 				"致命专注持续时间：",
			[`${abilityName}_dagger_crit_chance`]: 				"%短匕致命专注几率：",
			},
        }
    }
}