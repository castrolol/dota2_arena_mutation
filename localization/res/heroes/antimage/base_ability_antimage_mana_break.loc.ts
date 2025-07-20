import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_antimage_mana_break"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Quebra de Mana",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Mana Break</font></b>\n \nQueima o mana de um adversário a cada ataque e causa dano proporcional ao mana queimado.",
			[`${abilityName}_Lore`]: 				"Uma técnica modificada dos costumes pacíficos dos monges Turstarkuri é usar a energia mágica contra o seu dono.",
			[`${abilityName}_Note0`]: 				"Quebra de Mana tem %illusion_percentage%%% de efeito quando ativada por ilusões.",
			[`${abilityName}_mana_per_hit`]: 				"MANA QUEIMADO POR ACERTO:",
			[`${abilityName}_mana_per_hit_pct`]: 				"%MÁX. DE MANA POR ACERTO:",
			[`${abilityName}_percent_damage_per_burn`]: 				"%MANA QUEIMADO COMO DANO:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Mana Break",
			[`${abilityName}_Description`]: 				"Burns an opponent's mana on each attack and deals damage equal to a percentage of the mana burnt.",
			[`${abilityName}_Lore`]: 				"A modified technique of the Turstarkuri monks' peaceful ways is to turn magical energies on their owner.",
			[`${abilityName}_Note0`]: 				"Mana Break has %illusion_percentage%%% effect if caused by illusions.",
			[`${abilityName}_mana_per_hit`]: 				"MANA BURNED PER HIT:",
			[`${abilityName}_mana_per_hit_pct`]: 				"%MAX MANA BURNED PER HIT:",
			[`${abilityName}_percent_damage_per_burn`]: 				"%MANA BURNED AS DAMAGE:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Ruptura de Maná",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Mana Break</font></b>.\n\nQuema el maná de un oponente con cada ataque e inflige daño igual a un porcentaje del maná quemado.",
			[`${abilityName}_Lore`]: 				"Una técnica modificada de las artes pacíficas de los monjes Turstarkuri es volver las energías mágicas contra su propietario.",
			[`${abilityName}_Note0`]: 				"Ruptura de Maná tiene un %illusion_percentage% %% de efecto si la causan ilusiones.",
			[`${abilityName}_mana_per_hit`]: 				"MANÁ QUEMADO POR IMPACTO:",
			[`${abilityName}_mana_per_hit_pct`]: 				"%MANÁ MÁXIMO QUEMADO POR IMPACTO:",
			[`${abilityName}_percent_damage_per_burn`]: 				"%MANÁ QUEMADO COMO DAÑO:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Mana Break",
			[`${abilityName}_Description`]: 				"Каждая атака сжигает ману цели и наносит ей урон, равный доле от сожжённой маны.",
			[`${abilityName}_Lore`]: 				"Изменённый приём турстаркурийских монахов, обращающий волшебную энергию против самого чародея.",
			[`${abilityName}_Note0`]: 				"Иллюзии дают %illusion_percentage%%% от эффекта этой способности.",
			[`${abilityName}_mana_per_hit`]: 				"СЖИГАНИЕ МАНЫ ЗА АТАКУ:",
			[`${abilityName}_mana_per_hit_pct`]: 				"%СЖИГАЕМАЯ ДОЛЯ ОТ МАКС. МАНЫ:",
			[`${abilityName}_percent_damage_per_burn`]: 				"%УРОН ОТ СОЖЖЁННОЙ МАНЫ:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"法力损毁",
			[`${abilityName}_Description`]: 				"每次攻击损毁目标魔法值，并造成相当于损毁魔法值一定百分比的伤害。",
			[`${abilityName}_Lore`]: 				"一种格斗技巧，改良自星隐寺僧侣们的温和招式，可以让魔法能量反噬其拥有者。",
			[`${abilityName}_Note0`]: 				"幻象继承的法力损毁效果为%illusion_percentage%%%。",
			[`${abilityName}_mana_per_hit`]: 				"每次攻击损毁魔法：",
			[`${abilityName}_mana_per_hit_pct`]: 				"%每次攻击损毁最大魔法值：",
			[`${abilityName}_percent_damage_per_burn`]: 				"%损毁魔法值伤害系数：",
			},
        }
    }
}