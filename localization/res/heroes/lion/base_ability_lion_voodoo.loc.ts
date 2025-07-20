import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_lion_voodoo"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Enfeitiçar",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Hex</font></b>\n \nTransforma a unidade inimiga alvo em um animal inofensivo, impedindo-a que ataque ou use habilidades.",
			[`${abilityName}_Lore`]: 				"Lion se vê compelido a compartilhar da sua transfiguração, distorcendo a essência dos que se opõem a ele.",
			[`${abilityName}_Note0`]: 				"Destrói ilusões instantaneamente.",
			[`${abilityName}_Note1`]: 				"O alvo terá uma velocidade de movimento base de %movespeed%, mas efeitos que fornecem velocidade de movimento máxima não serão desativados.",
			[`${abilityName}_duration`]: 				"DURAÇÃO:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Hex",
			[`${abilityName}_Description`]: 				"Transforms an enemy unit into a harmless beast, with all special abilities disabled.",
			[`${abilityName}_Lore`]: 				"Lion is compelled to share his transfiguration, twisting the essence of those who oppose him.",
			[`${abilityName}_Note0`]: 				"Instantly destroys illusions.",
			[`${abilityName}_Note1`]: 				"The target will have a base movement speed of %movespeed%, but buffs granting maximum movement speed won't be disabled.",
			[`${abilityName}_duration`]: 				"DURATION:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Maldición",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Hex</font></b>.\n\nTransforma a una unidad enemiga en una bestia inofensiva con todas las habilidades especiales desactivadas.",
			[`${abilityName}_Lore`]: 				"Lion se ve obligado a compartir su transfiguración, retorciendo la esencia de aquellos que se le oponen.",
			[`${abilityName}_Note0`]: 				"Destruye ilusiones instantáneamente.",
			[`${abilityName}_Note1`]: 				"El objetivo tendrá una velocidad de movimiento base de %movespeed%, pero los efectos positivos que proporcionen velocidad de movimiento máxima seguirán activos.",
			[`${abilityName}_duration`]: 				"DURACIÓN:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Hex",
			[`${abilityName}_Description`]: 				"Превращает врага в безобидную зверюшку, блокируя все его способности.",
			[`${abilityName}_Lore`]: 				"Демонолог вынужден разделять своё преобразование с несогласными, закручивая и их сущность.",
			[`${abilityName}_Note0`]: 				"Мгновенно уничтожает иллюзии.",
			[`${abilityName}_Note1`]: 				"Жертва имеет базовую скорость в %movespeed%, но не теряет эффекты, дающие максимальную скорость.",
			[`${abilityName}_duration`]: 				"ДЛИТЕЛЬНОСТЬ:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"妖术",
			[`${abilityName}_Description`]: 				"将一个敌方单位变成人畜无害的动物，受害者无法使用所有特殊能力。",
			[`${abilityName}_Lore`]: 				"莱恩被迫分享他的变形术，让反抗他的人扭曲了他们的精华。",
			[`${abilityName}_Note0`]: 				"即刻摧毁幻象。",
			[`${abilityName}_Note1`]: 				"目标的基础移动速度为%movespeed%，但是如果目标有满速状态则移速不受影响。",
			[`${abilityName}_duration`]: 				"持续时间：",
			},
        }
    }
}