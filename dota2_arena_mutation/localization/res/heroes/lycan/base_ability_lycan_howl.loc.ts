import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_lycan_howl"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Uivo",
			[`${abilityName}_Lore`]: 				"O horripilante lobo dá sinal aos oponentes que Perdivino está entre eles.",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Howl</font></b>\n \nApavora inimigos, reduzindo a armadura e o dano de ataque de todas as unidades inimigas em até %radius% unidades de distância do Lycan e os seus lobos. À noite, as reduções de armadura e dano de ataque do Uivo têm alcance global.",
			[`${abilityName}_Facet_lycan_alpha_wolves`]: 				"Nível máximo reduzido para %max_level%.",
			[`${abilityName}_howl_duration`]: 				"DURAÇÃO:",
			[`${abilityName}_attack_damage_reduction`]: 				"%REDUÇÃO DO DANO DE ATAQUE:",
			[`${abilityName}_armor`]: 				"REDUÇÃO DE ARMADURA:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Howl",
			[`${abilityName}_Lore`]: 				"Blood-curdling wolf cries signal to opponents that Banehallow is among them.",
			[`${abilityName}_Description`]: 				"Strikes fear into enemies, reducing armor and attack damage of all enemies within %radius% range of Lycan and his wolves. At night, Howl's armor and attack damage reductions are global.",
			[`${abilityName}_Facet_lycan_alpha_wolves`]: 				"Max level decreased to %max_level%.",
			[`${abilityName}_howl_duration`]: 				"DURATION:",
			[`${abilityName}_attack_damage_reduction`]: 				"%ATTACK DAMAGE REDUCTION:",
			[`${abilityName}_armor`]: 				"ARMOR REDUCTION:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Aullido",
			[`${abilityName}_Lore`]: 				"Los espeluznantes aullidos de los lobos indican a los adversarios que Banehallow está entre ellos.",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Howl</font></b>.\n\nProvoca temor a los enemigos, reduciendo la armadura y el daño de ataque de todos los adversarios que se encuentren en un alcance de %radius% de Lycan y sus lobos. De noche, las reducciones de armadura y de daño de ataque de Aullido son globales.",
			[`${abilityName}_Facet_lycan_alpha_wolves`]: 				"El nivel máximo se reduce a %max_level%.",
			[`${abilityName}_howl_duration`]: 				"DURACIÓN:",
			[`${abilityName}_attack_damage_reduction`]: 				"%REDUCCIÓN DE DAÑO DE ATAQUE:",
			[`${abilityName}_armor`]: 				"REDUCCIÓN DE ARMADURA:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Howl",
			[`${abilityName}_Lore`]: 				"Леденящий кровь вой даёт врагам знать: Бэйнхаллоу уже среди них.",
			[`${abilityName}_Description`]: 				"Нагоняет ужас в радиусе %radius% от владельца способности и его волков, уменьшая врагам броню и урон от атак. Ночью уменьшение брони и урона действует по всей карте.",
			[`${abilityName}_Facet_lycan_alpha_wolves`]: 				"Максимальный уровень уменьшен до %max_level%.",
			[`${abilityName}_howl_duration`]: 				"ДЛИТЕЛЬНОСТЬ:",
			[`${abilityName}_attack_damage_reduction`]: 				"%СНИЖЕНИЕ УРОНА ОТ АТАК:",
			[`${abilityName}_armor`]: 				"СНИЖЕНИЕ БРОНИ:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"嗥叫",
			[`${abilityName}_Lore`]: 				"毛骨悚然的狼嚎让敌人明白贝恩霍勒就在他们之中。",
			[`${abilityName}_Description`]: 				"使敌人感到害怕，狼人和精灵狼周围%radius%范围内所有敌人的护甲和攻击力降低。夜晚期间嗥叫的护甲和攻击力降低效果为全地图生效。",
			[`${abilityName}_Facet_lycan_alpha_wolves`]: 				"最高等级减少至%max_level%级。",
			[`${abilityName}_howl_duration`]: 				"持续时间：",
			[`${abilityName}_attack_damage_reduction`]: 				"%攻击力降低：",
			[`${abilityName}_armor`]: 				"护甲降低：",
			},
        }
    }
}