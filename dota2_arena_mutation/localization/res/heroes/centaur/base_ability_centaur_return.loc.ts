import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_centaur_return"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Retaliação",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Retaliate</font></b>\n \nO Centaur revida todos os ataques, causando dano de volta ao atacante. Retorna um valor fixo mais uma porcentagem da sua Força. Causa metade do dano contra torres.",
			[`${abilityName}_Lore`]: 				"Bradwarden não precisa se defender dos ataques dos adversários; a sua couraça serve como uma armadura.",
			[`${abilityName}_Note0`]: 				"Retaliação é ativada ao ser atingido pelo ataque.",
			[`${abilityName}_Note1`]: 				"Esta habilidade causa dano a torres.",
			[`${abilityName}_return_damage`]: 				"DANO REVIDADO:",
			[`${abilityName}_return_damage_str`]: 				"%RETORNO POR FORÇA:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Retaliate",
			[`${abilityName}_Description`]: 				"Centaur counters all attacks, dealing damage back to the attacker. Returns a fixed amount plus a percentage of your strength. Deals half damage to towers.",
			[`${abilityName}_Lore`]: 				"Bradwarden has no need to parry his opponent's attacks; his armor-like hide does it for him.",
			[`${abilityName}_Note0`]: 				"Retaliate triggers when the attack hits.",
			[`${abilityName}_Note1`]: 				"Retaliate deals damage to towers.",
			[`${abilityName}_return_damage`]: 				"RETURN DAMAGE:",
			[`${abilityName}_return_damage_str`]: 				"%STR RETURN DAMAGE:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Represaliar",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Retaliate</font></b>.\n\nCentaur contrarresta todos los ataques, dañando al atacante. Devuelve una cantidad fija más un porcentaje de tu fuerza. Inflige la mitad del daño a torres.",
			[`${abilityName}_Lore`]: 				"Bradwarden no necesita bloquear los ataques de su oponente; su dura piel lo hace por él.",
			[`${abilityName}_Note0`]: 				"Represaliar se activa cuando impacta el ataque.",
			[`${abilityName}_Note1`]: 				"Represaliar inflige daño a las torres.",
			[`${abilityName}_return_damage`]: 				"DAÑO DEVUELTO:",
			[`${abilityName}_return_damage_str`]: 				"%DAÑO DEVUELTO SEGÚN FUERZA:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Retaliate",
			[`${abilityName}_Description`]: 				"Каждая атака по герою наносит урон и атакующему. Помимо базового урона наносится дополнительный, зависящий от силы владельца способности. Наносит башням половину урона.",
			[`${abilityName}_Lore`]: 				"Брэдводену даже не нужно парировать атаки противника — его кожа, больше похожая на броню, сама отвечает на любое нападение.",
			[`${abilityName}_Note0`]: 				"Срабатывает при завершении атаки по владельцу способности.",
			[`${abilityName}_Note1`]: 				"Наносит урон башням.",
			[`${abilityName}_return_damage`]: 				"ОТВЕТНЫЙ УРОН:",
			[`${abilityName}_return_damage_str`]: 				"%МНОЖИТЕЛЬ УРОНА ЗА СИЛУ:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"反伤",
			[`${abilityName}_Description`]: 				"半人马战行者向攻击他的单位发出反击。反弹固定伤害加上自身力量的一定百分比。对防御塔的伤害减半。",
			[`${abilityName}_Lore`]: 				"布拉德瓦登无需回避对手的攻击；这由他那盔甲般的马皮负责。",
			[`${abilityName}_Note0`]: 				"反伤会在受到攻击时触发。",
			[`${abilityName}_Note1`]: 				"反伤能对防御塔造成伤害。",
			[`${abilityName}_return_damage`]: 				"反伤伤害：",
			[`${abilityName}_return_damage_str`]: 				"%力量伤害：",
			},
        }
    }
}