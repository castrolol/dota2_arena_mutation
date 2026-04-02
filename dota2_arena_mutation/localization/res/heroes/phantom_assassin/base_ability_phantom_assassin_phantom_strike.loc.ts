import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_phantom_assassin_phantom_strike"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Ataque Fantasma",
			[`${abilityName}_Description`]: 				"Em inglês: <font color='#F2A93E'>Phantom Strike</font>\n \nTeletransporta-se a uma unidade, seja ela aliada ou inimiga, e fornece bônus de velocidade de ataque ao atacar no caso de ser inimiga.",
			[`${abilityName}_Lore`]: 				"O véu de seda da Mortred é a última coisa que o seu alvo desafortunado vê.",
			[`${abilityName}_duration`]: 				"DURAÇÃO:",
			[`${abilityName}_bonus_attack_speed`]: 				"VEL. DE ATAQUE ADICIONAL:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Phantom Strike",
			[`${abilityName}_Description`]: 				"Teleports to a unit, friendly or enemy, and grants bonus attack speed while attacking if it's an enemy unit.",
			[`${abilityName}_Lore`]: 				"Mortred's silken veil is the last thing her unfortunate target sees.",
			[`${abilityName}_duration`]: 				"DURATION:",
			[`${abilityName}_bonus_attack_speed`]: 				"BONUS ATTACK SPEED:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Golpe Fantasmal",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Phantom Strike</font></b>.\n \nTe teletransporta hasta una unidad, aliada o enemiga, y te otorga velocidad de ataque adicional en el segundo caso.",
			[`${abilityName}_Lore`]: 				"El velo de seda de Mortred es lo último que ve su desafortunado objetivo.",
			[`${abilityName}_duration`]: 				"DURACIÓN:",
			[`${abilityName}_bonus_attack_speed`]: 				"VELOCIDAD DE ATAQUE ADICIONAL:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Phantom Strike",
			[`${abilityName}_Description`]: 				"Герой телепортируется к выбранному существу и, если это противник, получает дополнительную скорость атаки.",
			[`${abilityName}_Lore`]: 				"Шёлковая вуаль Мортред — это последнее, что увидит её несчастная цель.",
			[`${abilityName}_duration`]: 				"ДЛИТЕЛЬНОСТЬ:",
			[`${abilityName}_bonus_attack_speed`]: 				"ДОП. СКОРОСТЬ АТАКИ:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"幻影突袭",
			[`${abilityName}_Description`]: 				"传送到一个单位身旁，敌我皆可，如果目标是敌方单位将进行攻击并获得攻速加成。",
			[`${abilityName}_Lore`]: 				"茉崔蒂的真丝面纱是她倒霉的目标临终所见之物。",
			[`${abilityName}_duration`]: 				"持续时间：",
			[`${abilityName}_bonus_attack_speed`]: 				"攻速提升：",
			},
        }
    }
}