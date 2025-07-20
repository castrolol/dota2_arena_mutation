import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_sven_gods_strength"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Força Divina",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>God's Strength</font></b>\n \nSven canaliza a sua força rebelde, recebendo dano adicional e resistência a retardos por %abilityduration% segundos.",
			[`${abilityName}_Lore`]: 				"Com a força que despedaçou o Elmo Sagrado, o Cavaleiro Rebelde se mantém imponente no combate corpo a corpo.",
			[`${abilityName}_Note0`]: 				"O dano extra é baseado no dano base e no atributo primário do Sven.",
			[`${abilityName}_gods_strength_damage`]: 				"%DANO ADICIONAL:",
			[`${abilityName}_bonus_slow_resistance`]: 				"%RESISTÊNCIA A RETARDOS:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"God's Strength",
			[`${abilityName}_Description`]: 				"Sven channels his rogue strength, granting bonus damage and slow resistance for %abilityduration% seconds.",
			[`${abilityName}_Lore`]: 				"With the strength that shattered the Sacred Helm, the Rogue Knight stands unopposed in melee combat.",
			[`${abilityName}_Note0`]: 				"The bonus damage is based on base damage and the primary attribute of Sven.",
			[`${abilityName}_gods_strength_damage`]: 				"%BONUS DAMAGE:",
			[`${abilityName}_bonus_slow_resistance`]: 				"%SLOW RESISTANCE:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Fuerza Divina",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>God's Strength</font></b>.\n\nSven canaliza su fuerza interior, obteniendo daño adicional y resistencia a la ralentización durante %abilityduration% s.",
			[`${abilityName}_Lore`]: 				"Con la fuerza que destrozó el Yelmo Sagrado, el Caballero Renegado no tiene rival en un combate cuerpo a cuerpo.",
			[`${abilityName}_Note0`]: 				"El daño adicional se basa en el daño base y el atributo principal de Sven.",
			[`${abilityName}_gods_strength_damage`]: 				"%DAÑO ADICIONAL:",
			[`${abilityName}_bonus_slow_resistance`]: 				"%RESISTENCIA A LA RALENTIZACIÓN:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"God's Strength",
			[`${abilityName}_Description`]: 				"Герой концентрирует свою неконтролируемую мощь, получая бонус к урону и сопротивлению замедлениям на %abilityduration% сек.",
			[`${abilityName}_Lore`]: 				"Наделённый силой, сокрушившей Священный шлем, мятежный рыцарь непобедим в ближнем бою.",
			[`${abilityName}_Note0`]: 				"Дополнительный урон подсчитывается на основе базового урона и основной характеристики.",
			[`${abilityName}_gods_strength_damage`]: 				"%ДОПОЛНИТЕЛЬНЫЙ УРОН:",
			[`${abilityName}_bonus_slow_resistance`]: 				"%СОПРОТИВЛЕНИЕ ЗАМЕДЛЕНИЯМ:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"神之力量",
			[`${abilityName}_Description`]: 				"斯温爆发出他流浪剑客的力量，获得攻击力加成和减速抗性，持续%abilityduration%秒。",
			[`${abilityName}_Lore`]: 				"凭借能够击碎神圣之盔的力量，流浪剑客在近身肉搏中未尝一败。",
			[`${abilityName}_Note0`]: 				"额外攻击力是基于斯温的基础攻击力和主属性数值。",
			[`${abilityName}_gods_strength_damage`]: 				"%攻击力加成：",
			[`${abilityName}_bonus_slow_resistance`]: 				"%减速抗性：",
			},
        }
    }
}