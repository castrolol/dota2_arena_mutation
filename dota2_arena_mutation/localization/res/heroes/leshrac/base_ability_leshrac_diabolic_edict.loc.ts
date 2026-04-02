import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_leshrac_diabolic_edict"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Decreto Diabólico",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Diabolic Edict</font></b>\n \nSatura a área ao redor de Leshrac com explosões mágicas que causam dano puro a unidades e estruturas inimigas. Quanto menos unidades estiverem disponíveis para serem atacadas, mais dano essas unidades sofrerão.",
			[`${abilityName}_Facet_leshrac_misanthropy`]: 				"O <b><font color='#F2A93E'>Decreto Diabólico</font></b> atinge os inimigos com uma maior taxa de explosões, mas não afeta estruturas.",
			[`${abilityName}_Lore`]: 				"Energia cronótica se rompe de um plano a outro, evaporando tudo o que toca.",
			[`${abilityName}_Note0`]: 				"As explosões continuarão mesmo caso Leshrac morra.",
			[`${abilityName}_radius`]: 				"RAIO:",
			[`${abilityName}_num_explosions`]: 				"EXPLOSÕES:",
			[`${abilityName}_damage`]: 				"DANO POR EXPLOSÃO:",
			[`${abilityName}_targets`]: 				"ALVOS POR EXPLOSÃO:",
			[`${abilityName}_AbilityDuration`]: 				"DURAÇÃO:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Diabolic Edict",
			[`${abilityName}_Description`]: 				"Saturates the area around Leshrac with magical explosions that deal pure damage to enemy units and buildings.  The fewer units available to attack, the more damage those units will take.",
			[`${abilityName}_Facet_leshrac_misanthropy`]: 				"Diabolic Edict hits enemies with an increased explosion rate but it no longer damages buildings.",
			[`${abilityName}_Lore`]: 				"Chronoptic energy bursts from one plane to the other, evaporating anything it touches.",
			[`${abilityName}_Note0`]: 				"The explosions will continue even if Leshrac is killed.",
			[`${abilityName}_radius`]: 				"RADIUS:",
			[`${abilityName}_num_explosions`]: 				"EXPLOSIONS:",
			[`${abilityName}_damage`]: 				"DAMAGE PER EXPLOSION:",
			[`${abilityName}_targets`]: 				"TARGETS PER EXPLOSION:",
			[`${abilityName}_AbilityDuration`]: 				"DURATION:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Decreto Diabólico",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Diabolic Edict</font></b>.\n\nSatura el área alrededor de Leshrac con explosiones mágicas que causan daño puro a unidades y estructuras. Cuantas menos unidades haya a las que atacar, más daño recibirán esas unidades.",
			[`${abilityName}_Facet_leshrac_misanthropy`]: 				"Las explosiones de Decreto Diabólico golpean a los enemigos más rápidamente, pero ya no dañan las estructuras.",
			[`${abilityName}_Lore`]: 				"La energía cronóptica irrumpe de un plano a otro y evapora cualquier cosa que toque.",
			[`${abilityName}_Note0`]: 				"Las explosiones continuarán incluso si Leshrac es asesinado.",
			[`${abilityName}_radius`]: 				"RADIO:",
			[`${abilityName}_num_explosions`]: 				"EXPLOSIONES:",
			[`${abilityName}_damage`]: 				"DAÑO POR EXPLOSIÓN:",
			[`${abilityName}_targets`]: 				"OBJETIVOS POR EXPLOSIÓN:",
			[`${abilityName}_AbilityDuration`]: 				"DURACIÓN:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Diabolic Edict",
			[`${abilityName}_Description`]: 				"Окружает героя магическими взрывами, которые наносят чистый урон врагам и постройкам. Чем меньше рядом врагов, тем больше урона они получат.",
			[`${abilityName}_Facet_leshrac_misanthropy`]: 				"Частота взрывов у Diabolic Edict увеличена, но они не наносят урон постройкам.",
			[`${abilityName}_Lore`]: 				"Энергия хроноптики прорывается из одного измерения в другое, испаряя всё, чего коснется.",
			[`${abilityName}_Note0`]: 				"Способность продолжает действовать, даже если герой умер.",
			[`${abilityName}_radius`]: 				"РАДИУС:",
			[`${abilityName}_num_explosions`]: 				"ВЗРЫВОВ:",
			[`${abilityName}_damage`]: 				"УРОН ЗА ВЗРЫВ:",
			[`${abilityName}_targets`]: 				"ЧИСЛО ЦЕЛЕЙ ВЗРЫВА:",
			[`${abilityName}_AbilityDuration`]: 				"ДЛИТЕЛЬНОСТЬ:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"恶魔敕令",
			[`${abilityName}_Description`]: 				"使拉席克周围的区域充满魔法性爆炸，对敌方单位和建筑造成纯粹伤害。范围内的敌人越少，他们受到的伤害就越高。",
			[`${abilityName}_Facet_leshrac_misanthropy`]: 				"恶魔敕令以更高的爆炸速度击中敌人，但是不再对建筑造成伤害。",
			[`${abilityName}_Lore`]: 				"古老的能量从一个位面向另一个位面爆发，将触碰到的一切化为灰烬。",
			[`${abilityName}_Note0`]: 				"即使拉席克死亡，爆炸还是会在原地继续。",
			[`${abilityName}_radius`]: 				"作用范围：",
			[`${abilityName}_num_explosions`]: 				"爆炸次数：",
			[`${abilityName}_damage`]: 				"每次爆炸造成伤害：",
			[`${abilityName}_targets`]: 				"每次爆炸作用目标数：",
			[`${abilityName}_AbilityDuration`]: 				"持续时间：",
			},
        }
    }
}