import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_lycan_feral_impulse"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Impulso Feroz",
			[`${abilityName}_Facet_lycan_alpha_wolves`]: 				"Nível máximo reduzido para %max_level%.",
			[`${abilityName}_Lore`]: 				"A sua simbiose animalesca com a espécie canina dá a Perdivino reflexos e capacidades de caça melhoradas.",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Feral Impulse</font></b>\n \nAumenta a regeneração de vida e o dano causado pelo usuário e por todas as unidades sob o seu controle.",
			[`${abilityName}_bonus_damage`]: 				"%DANO ADICIONAL:",
			[`${abilityName}_bonus_hp_regen`]: 				"REGEN. DE VIDA ADICIONAL:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Feral Impulse",
			[`${abilityName}_Facet_lycan_alpha_wolves`]: 				"Max level decreased to %max_level%.",
			[`${abilityName}_Lore`]: 				"His animalistic symbiosis with canine kind gives Banehallow enhanced reflexes and hunting capabilities.",
			[`${abilityName}_Description`]: 				"Increases the HP regeneration and damage of Lycan and all units under his control.",
			[`${abilityName}_bonus_damage`]: 				"%BONUS DAMAGE:",
			[`${abilityName}_bonus_hp_regen`]: 				"BONUS HP REGEN:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Impulso Feral",
			[`${abilityName}_Facet_lycan_alpha_wolves`]: 				"El nivel máximo se reduce a %max_level%.",
			[`${abilityName}_Lore`]: 				"Su simbiosis animalística con la especie canina le otorga a Banehallow reflejos mejorados y habilidades de caza.",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Feral Impulse</font></b>.\n\nAumenta la regeneración de vida y el daño de Lycan y todas las unidades bajo su control.",
			[`${abilityName}_bonus_damage`]: 				"%DAÑO ADICIONAL:",
			[`${abilityName}_bonus_hp_regen`]: 				"REGENERACIÓN DE VIDA ADICIONAL:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Feral Impulse",
			[`${abilityName}_Facet_lycan_alpha_wolves`]: 				"Максимальный уровень уменьшен до %max_level%.",
			[`${abilityName}_Lore`]: 				"Звериный симбиоз с волчьим родом даёт Бейнхаллоу улучшенные рефлексы и способности для охоты.",
			[`${abilityName}_Description`]: 				"Увеличивает урон и восстановление здоровья у героя и всех подконтрольных ему существ.",
			[`${abilityName}_bonus_damage`]: 				"%ДОПОЛНИТЕЛЬНЫЙ УРОН:",
			[`${abilityName}_bonus_hp_regen`]: 				"ВОССТАНОВЛЕНИЕ ЗДОРОВЬЯ:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"野性驱使",
			[`${abilityName}_Facet_lycan_alpha_wolves`]: 				"最高等级减少至%max_level%级。",
			[`${abilityName}_Lore`]: 				"贝恩霍勒与犬类野兽的共生强化了他的反应和狩猎能力。",
			[`${abilityName}_Description`]: 				"提升狼人和所有他控制的单位的生命恢复和攻击力。",
			[`${abilityName}_bonus_damage`]: 				"%攻击力提升：",
			[`${abilityName}_bonus_hp_regen`]: 				"额外生命恢复：",
			},
        }
    }
}