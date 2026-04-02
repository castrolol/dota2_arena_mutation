import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_centaur_hoof_stomp"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Pisão",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Hoof Stomp</font></b>\n \nApós uma breve preparação, o Centaur Warrunner bate no chão, atordoando e causando dano a unidades inimigas próximas. Durante a preparação, ele pode se mover, mas não atacar.",
			[`${abilityName}_Lore`]: 				"Quando o casco poderoso do Warrunner toca no solo, os tremores podem ser sentidos a distâncias longínquas.",
			[`${abilityName}_radius`]: 				"RAIO:",
			[`${abilityName}_stun_duration`]: 				"DURAÇÃO DO ATORDOAMENTO:",
			[`${abilityName}_stomp_damage`]: 				"DANO:",
			[`${abilityName}_windup_time`]: 				"TEMPO DE PREPARAÇÃO:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Hoof Stomp",
			[`${abilityName}_Description`]: 				"After a brief windup, Centaur Warrunner slams the ground, stunning and damaging nearby enemy units. During the delay, he is disarmed but can move.",
			[`${abilityName}_Lore`]: 				"When the mighty hoof of the Warrunner touches soil, the tremors are felt far and wide.",
			[`${abilityName}_radius`]: 				"RADIUS:",
			[`${abilityName}_stun_duration`]: 				"STUN DURATION:",
			[`${abilityName}_stomp_damage`]: 				"STOMP DAMAGE:",
			[`${abilityName}_windup_time`]: 				"WINDUP TIME:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Pisotón",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Hoof Stomp</font></b>.\n\nTras cargar brevemente, Centaur Warrunner golpea el suelo aturdiendo y dañando a las unidades enemigas cercanas. Durante la pausa, queda desarmado, pero puede moverse.",
			[`${abilityName}_Lore`]: 				"Cuando las poderosas pezuñas del Guerrero Galopante tocan el suelo, los tremores son perceptibles desde cualquier rincón.",
			[`${abilityName}_radius`]: 				"RADIO:",
			[`${abilityName}_stun_duration`]: 				"DURACIÓN DEL ATURDIMIENTO:",
			[`${abilityName}_stomp_damage`]: 				"DAÑO DEL PISOTÓN:",
			[`${abilityName}_windup_time`]: 				"TIEMPO DE CARGA:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Hoof Stomp",
			[`${abilityName}_Description`]: 				"После небольшой задержки герой бьёт по земле, оглушая ближайших врагов и нанося им урон. Во время задержки герой не может атаковать, но может передвигаться.",
			[`${abilityName}_Lore`]: 				"Когда кентавр бьет своим могучим копытом по земле, за далекие километры с домов сыпется пыль.",
			[`${abilityName}_radius`]: 				"РАДИУС:",
			[`${abilityName}_stun_duration`]: 				"ДЛИТЕЛЬНОСТЬ ОГЛУШЕНИЯ:",
			[`${abilityName}_stomp_damage`]: 				"УРОН:",
			[`${abilityName}_windup_time`]: 				"ЗАДЕРЖКА:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"马蹄践踏",
			[`${abilityName}_Description`]: 				"经过短暂的蓄力后，半人马战行者猛踏地面，眩晕并伤害身边的敌方单位。在延迟期间，他被缴械，但可以移动。",
			[`${abilityName}_Lore`]: 				"当战行者健壮的马蹄碰到了土壤，大地的震颤各处都能感受到。",
			[`${abilityName}_radius`]: 				"范围：",
			[`${abilityName}_stun_duration`]: 				"眩晕持续时间：",
			[`${abilityName}_stomp_damage`]: 				"践踏伤害：",
			[`${abilityName}_windup_time`]: 				"蓄力时间：",
			},
        }
    }
}