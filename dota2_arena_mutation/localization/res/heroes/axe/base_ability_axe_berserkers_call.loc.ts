import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_axe_berserkers_call"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Grito do Furioso",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Berserker's Call</font></b>\n \nO Axe provoca unidades inimigas próximas, forçando-as a atacá-lo enquanto ele ganha armadura adicional até o fim da duração.",
			[`${abilityName}_shard_description`]: 				"O <b><font color='#F2A93E'>Grito do Furioso</font></b> aplica <b><font color='#F2A93E'>Fome de Batalha</font></b> às unidades afetadas.",
			[`${abilityName}_facet_axe_call_out`]: 				"O Grito do Furioso concede armadura adicional para o Axe e aumenta a velocidade de ataque de unidades afetadas.",
			[`${abilityName}_abilitydraft_note`]: 				"<span class=\"ADWarning\">Requer <b>Fome de Batalha</b> para que o aprimoramento do Cetro funcione.</span>",
			[`${abilityName}_Lore`]: 				"O grito de guerra do Mogul Khan desafia os seus oponentes a participarem de uma batalha invencível com o Axe.",
			[`${abilityName}_radius`]: 				"RAIO:",
			[`${abilityName}_bonus_armor`]: 				"ARMADURA ADICIONAL:",
			[`${abilityName}_duration`]: 				"DURAÇÃO:",
			[`${abilityName}_bonus_attack_speed`]: 				"VEL. DE ATAQUE ADICIONAL P/ INIMIGOS:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Berserker's Call",
			[`${abilityName}_Description`]: 				"Axe taunts nearby enemy units, forcing them to attack him while he gains bonus armor during the duration.",
			[`${abilityName}_shard_description`]: 				"Berserker's Call applies Battle Hunger to affected units.",
			[`${abilityName}_facet_axe_call_out`]: 				"Berserker's Call gives Axe increased bonus armor and increases the attack speed of the affected units.",
			[`${abilityName}_abilitydraft_note`]: 				"<span class=\"ADWarning\">Must draft <b>Battle Hunger</b> for Scepter upgrade to work.</span>",
			[`${abilityName}_Lore`]: 				"Mogul Khan's warcry taunts opponents into engaging in an unconquerable battle with the Axe.",
			[`${abilityName}_radius`]: 				"RADIUS:",
			[`${abilityName}_bonus_armor`]: 				"BONUS ARMOR:",
			[`${abilityName}_duration`]: 				"DURATION:",
			[`${abilityName}_bonus_attack_speed`]: 				"ENEMY ATTACK SPEED BONUS:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Llamada del Berserker",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Berserker's Call</font></b>.\n\nAxe provoca a las unidades enemigas cercanas, que se ven forzadas a atacarlo, y recibe armadura adicional mientras dure el efecto.",
			[`${abilityName}_shard_description`]: 				"Llamada del Berserker aplica Sed de Batalla a las unidades afectadas.",
			[`${abilityName}_facet_axe_call_out`]: 				"Llamada del Berserker le da a Axe armadura adicional y aumenta la velocidad de ataque de las unidades afectadas.",
			[`${abilityName}_abilitydraft_note`]: 				"<span class=\"ADWarning\">Se debe seleccionar <b>Sed de Batalla</b> para que la mejora con el Cetro de Aghanim funcione.</span>",
			[`${abilityName}_Lore`]: 				"El grito de guerra de Mogul Khan obliga a sus oponentes a enfrentarse en una batalla inconquistable contra Axe.",
			[`${abilityName}_radius`]: 				"RADIO:",
			[`${abilityName}_bonus_armor`]: 				"ARMADURA ADICIONAL:",
			[`${abilityName}_duration`]: 				"DURACIÓN:",
			[`${abilityName}_bonus_attack_speed`]: 				"BONIF. DE VELOCIDAD DE ATAQUE DE ENEMIGOS:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Berserker's Call",
			[`${abilityName}_Description`]: 				"Герой бросает вызов ближайшим врагам, заставляя их атаковать его, а также получает бонус к броне на время действия способности.",
			[`${abilityName}_shard_description`]: 				"Применяет на жертв эффект способности Battle Hunger.",
			[`${abilityName}_facet_axe_call_out`]: 				"Способность даёт больше брони и увеличивает скорость атаки жертв.",
			[`${abilityName}_abilitydraft_note`]: 				"<span class=\"ADWarning\">Для полного эффекта Aghanim's Scepter нужно выбрать способность <b>Battle Hunger</b>.</span>",
			[`${abilityName}_Lore`]: 				"Могучий рёв Могул-хана вынуждает врагов вступить в заведомо проигранную схватку.",
			[`${abilityName}_radius`]: 				"РАДИУС:",
			[`${abilityName}_bonus_armor`]: 				"ДОП. БРОНЯ:",
			[`${abilityName}_duration`]: 				"ДЛИТЕЛЬНОСТЬ:",
			[`${abilityName}_bonus_attack_speed`]: 				"ДОП. СКОРОСТЬ АТАКИ ЖЕРТВ:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"狂战士之吼",
			[`${abilityName}_Description`]: 				"斧王嘲讽附近的敌方单位，强迫他们攻击自己，同时获得额外护甲。",
			[`${abilityName}_shard_description`]: 				"狂战士之吼会对作用下单位施加战斗饥渴。",
			[`${abilityName}_facet_axe_call_out`]: 				"狂战士之吼提供的护甲更高，而且增加了受作用单位的攻击速度。",
			[`${abilityName}_abilitydraft_note`]: 				"<span class=\"ADWarning\">必须拥有<b>战斗饥渴</b>才会具有神杖升级效果。</span>",
			[`${abilityName}_Lore`]: 				"蒙哥可汗的狂吼嘲讽使敌人不得不与他作战。",
			[`${abilityName}_radius`]: 				"作用范围：",
			[`${abilityName}_bonus_armor`]: 				"护甲提升：",
			[`${abilityName}_duration`]: 				"持续时间：",
			[`${abilityName}_bonus_attack_speed`]: 				"敌人攻击速度加成：",
			},
        }
    }
}