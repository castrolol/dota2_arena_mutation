import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_bristleback_quill_spray"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Rajada de Espinhos",
			[`${abilityName}_abilitydraft_note`]: 				"<span class=\"ADBlue\">Fragmento:</span> acesse a <span class=\"ADWhite\"><b>Bola de Pelos</b></span> ao alternar o uso automático da <span class=\"ADWhite\"><b>Rajada de Espinhos</b></span>.<br><br><span class=\"ADWarning\">Requer <b>Gosma Nasal Viscosa</b> para funcionar com a <b>Bola de Pelos</b>.</span>",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Quill Spray</font></b>\n \nBorrifa os inimigos com espinhos, causando dano em uma área de efeito em volta do Bristleback. Causa dano extra para cada vez que uma unidade for atingida pela Rajada de Espinhos nos últimos %quill_stack_duration% segundos.",
			[`${abilityName}_Lore`]: 				"A honra de um guerreiro pode ser afiada. Assim como os seus espinhos.",
			[`${abilityName}_Note0`]: 				"O dano não é reduzido por habilidades de bloqueio de dano.",
			[`${abilityName}_radius`]: 				"RAIO:",
			[`${abilityName}_quill_base_damage`]: 				"DANO BASE DOS ESPINHOS:",
			[`${abilityName}_quill_stack_damage`]: 				"DANO ACUMULADO DOS ESPINHOS:",
			[`${abilityName}_quill_stack_duration`]: 				"DURAÇÃO DO ACÚMULO:",
			[`${abilityName}_max_damage`]: 				"DANO MÁXIMO:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Quill Spray",
			[`${abilityName}_abilitydraft_note`]: 				"<span class=\"ADBlue\">Shard:</span> Access  <span class=\"ADWhite\"><b>Hairball</b></span> by toggling auto-cast on <span class=\"ADWhite\"><b>Quill Spray</b></span>.<br><br><span class=\"ADWarning\">Must draft <b>Nasal Goo</b> for it to work with <b>Hairball</b>.</span>",
			[`${abilityName}_Description`]: 				"Sprays enemy units with quills dealing damage in an area of effect around Bristleback.  Deals bonus damage for every time a unit was hit by Quill Spray in the last %quill_stack_duration% seconds.",
			[`${abilityName}_Lore`]: 				"An enforcer's honor can be a prickly thing.  So can his quills.",
			[`${abilityName}_Note0`]: 				"Quill Spray damage is not reduced by damage block abilities.",
			[`${abilityName}_radius`]: 				"RADIUS:",
			[`${abilityName}_quill_base_damage`]: 				"QUILL BASE DAMAGE:",
			[`${abilityName}_quill_stack_damage`]: 				"QUILL STACK DAMAGE:",
			[`${abilityName}_quill_stack_duration`]: 				"STACK DURATION:",
			[`${abilityName}_max_damage`]: 				"MAX DAMAGE:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Lluvia de Espinas",
			[`${abilityName}_abilitydraft_note`]: 				"<span class=\"ADBlue\">Fragmento:</span> Accede a <span class=\"ADWhite\"><b>Bola de Pelo</b></span> activando el lanzamiento automático en <span class=\"ADWhite\"><b>Lluvia de Espinas</b></span>.<br><br><span class=\"ADWarning\">Se debe seleccionar <b>Viscosidad Nasal</b> para que esta funcione con <b>Bola de Pelo</b>.</span>",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Quill Spray</font></b>.\n\nRocía a las unidades enemigas con espinas, infligiendo daño en un área alrededor de Bristleback. Inflige daño adicional por cada vez que una unidad haya sido rociada por Lluvia de Espinas en los últimos %quill_stack_duration% s.",
			[`${abilityName}_Lore`]: 				"El honor de un matón puede ser un asunto espinoso. Lo mismo ocurre con sus púas.",
			[`${abilityName}_Note0`]: 				"El daño de Lluvia de Espinas no se puede reducir con habilidades de bloqueo de daño.",
			[`${abilityName}_radius`]: 				"RADIO:",
			[`${abilityName}_quill_base_damage`]: 				"DAÑO BASE DE LAS ESPINAS:",
			[`${abilityName}_quill_stack_damage`]: 				"DAÑO POR ACUMULACIÓN DE ESPINAS:",
			[`${abilityName}_quill_stack_duration`]: 				"DURACIÓN DE LAS ACUMULACIONES:",
			[`${abilityName}_max_damage`]: 				"DAÑO MÁXIMO:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Quill Spray",
			[`${abilityName}_abilitydraft_note`]: 				"<span class=\"ADBlue\">Aghanim's Shard:</span> способность <span class=\"ADWhite\"><b>Hairball</b></span> появляется при включении автоматического применения <span class=\"ADWhite\"><b>Quill Spray</b>.</span><br><br><span class=\"ADWarning\"><b>Hairball</b> не будет применять эффекты способности <b>Viscous Nasal Goo</b>, если она не выбрана.</span>",
			[`${abilityName}_Description`]: 				"Выпускает во все стороны иглы, нанося урон всем врагам вокруг себя. Жертвы получают дополнительный урон за каждое попадание иглами за последние %quill_stack_duration% сек.",
			[`${abilityName}_Lore`]: 				"Честь вышибалы — острый вопрос. Как и его шипы.",
			[`${abilityName}_Note0`]: 				"Урон от этой способности не уменьшается способностями, блокирующими урон.",
			[`${abilityName}_radius`]: 				"РАДИУС:",
			[`${abilityName}_quill_base_damage`]: 				"БАЗОВЫЙ УРОН:",
			[`${abilityName}_quill_stack_damage`]: 				"ДОПОЛНИТЕЛЬНЫЙ УРОН:",
			[`${abilityName}_quill_stack_duration`]: 				"ДЛИТЕЛЬНОСТЬ ОДНОГО ЭФФЕКТА:",
			[`${abilityName}_max_damage`]: 				"МАКСИМАЛЬНЫЙ УРОН:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"刺针扫射",
			[`${abilityName}_abilitydraft_note`]: 				"<span class=\"ADBlue\">魔晶：</span> <span class=\"ADWhite\"><b>刺针扫射</b></span>开启自动施放后施放效果为<span class=\"ADWhite\"><b>毛团</b></span>。<br><br><span class=\"ADWarning\">必须拥有<b>粘稠鼻液</b>才能使<b>毛团</b>具有鼻液效果。</span>",
			[`${abilityName}_Description`]: 				"将尖刺喷射向敌人，对钢背兽附近的敌人造成伤害。任何单位最近%quill_stack_duration%秒内每次受到刺针扫射的打击都会受到额外伤害。",
			[`${abilityName}_Lore`]: 				"执法者的荣誉维护起来非常棘手。他的刺针也是。",
			[`${abilityName}_Note0`]: 				"刺针扫射的伤害不能被伤害格挡类技能减免。",
			[`${abilityName}_radius`]: 				"作用范围：",
			[`${abilityName}_quill_base_damage`]: 				"刺针直接伤害：",
			[`${abilityName}_quill_stack_damage`]: 				"刺针叠加伤害：",
			[`${abilityName}_quill_stack_duration`]: 				"伤害叠加持续时间：",
			[`${abilityName}_max_damage`]: 				"伤害上限：",
			},
        }
    }
}