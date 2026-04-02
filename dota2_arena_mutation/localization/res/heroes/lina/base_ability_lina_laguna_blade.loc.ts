import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_lina_laguna_blade"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Lâmina Laguna",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Laguna Blade</font></b>\n \nDispara um raio de eletricidade em uma unidade-alvo, causando dano gigantesco.",
			[`${abilityName}_Facet_lina_supercharge`]: 				"Usar a Lâmina Laguna sobrecarrega Lina temporariamente, concedendo acúmulos de Alma Ardente.",
			[`${abilityName}_shard_description`]: 				"%barrier_pct%%% do dano causado é convertido em uma barreira contra todo tipo de dano para Lina. A barreira dura %barrier_duration%s.",
			[`${abilityName}_Lore`]: 				"O ar ao redor de Lina se torna tão intensamente tórrido que escalda qualquer inimigo que se aproxime demais com um relâmpago fervente.",
			[`${abilityName}_Note0`]: 				"Lâmina Laguna tem um atraso de lançamento de %damage_delay% segundo antes de causar dano, permitindo que certas habilidades se esquivem do dano.",
			[`${abilityName}_damage`]: 				"DANO:",
			[`${abilityName}_supercharge_stacks`]: 				"ACÚMULOS DA SOBRECARGA:",
			[`${abilityName}_supercharge_duration`]: 				"DURAÇÃO DA SOBRECARGA:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Laguna Blade",
			[`${abilityName}_Description`]: 				"Fires off a bolt of lightning at a single enemy unit, dealing massive damage.",
			[`${abilityName}_Facet_lina_supercharge`]: 				"Casting Laguna Blade temporarily supercharges Lina, granting her stacks of Fiery Soul.",
			[`${abilityName}_shard_description`]: 				"%barrier_pct%%% of the damage dealt is converted to an all damage barrier for Lina. Barrier lasts for %barrier_duration%s.",
			[`${abilityName}_Lore`]: 				"The air around Lina becomes so intensely torrid that it scorches a foe that comes too close with white-hot lightning.",
			[`${abilityName}_Note0`]: 				"Laguna Blade has a %damage_delay% delay before the damage is applied after the spell is cast, allowing certain abilities to avoid the damage.",
			[`${abilityName}_damage`]: 				"DAMAGE:",
			[`${abilityName}_supercharge_stacks`]: 				"SUPERCHARGE STACKS:",
			[`${abilityName}_supercharge_duration`]: 				"SUPERCHARGE DURATION:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Hoja de Laguna",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Laguna Blade</font></b>.\n\nLanza un rayo a un único enemigo y le causa un enorme daño.",
			[`${abilityName}_Facet_lina_supercharge`]: 				"El lanzamiento de Hoja de Laguna sobrecarga a Lina temporalmente y le otorga acumulaciones de Alma Ígnea.",
			[`${abilityName}_shard_description`]: 				"Un %barrier_pct% %% del daño infligido se convierte en una barrera contra todo daño para Lina. La barrera dura %barrier_duration% s.",
			[`${abilityName}_Lore`]: 				"El aire alrededor de Lina se vuelve tan intensamente abrasador que chamusca a un adversario lo bastante incauto como para acercarse a un rayo.",
			[`${abilityName}_Note0`]: 				"Hoja de Laguna tiene un retraso de %damage_delay% s antes de aplicar el daño después de ser lanzada, permitiendo que ciertas habilidades eviten el daño.",
			[`${abilityName}_damage`]: 				"DAÑO:",
			[`${abilityName}_supercharge_stacks`]: 				"ACUMULACIONES DE LA SOBRECARGA:",
			[`${abilityName}_supercharge_duration`]: 				"DURACIÓN DE LA SOBRECARGA:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Laguna Blade",
			[`${abilityName}_Description`]: 				"Выпускает разряд молнии в одного врага, нанося сокрушительный урон.",
			[`${abilityName}_Facet_lina_supercharge`]: 				"Применение Laguna Blade озаряет владельца, давая ему эффекты способности Fiery Soul.",
			[`${abilityName}_shard_description`]: 				"%barrier_pct%%% нанесённого урона становятся барьером для владельца способности, поглощающим урон всех типов и действующим %barrier_duration% сек.",
			[`${abilityName}_Lore`]: 				"Воздух вокруг волшебницы становится таким горячим, что он обжигает молнией любого врага, подошедшего слишком близко.",
			[`${abilityName}_Note0`]: 				"Между применением способности и нанесением урона есть задержка в %damage_delay% сек., что даёт возможность избежать урона.",
			[`${abilityName}_damage`]: 				"УРОН:",
			[`${abilityName}_supercharge_stacks`]: 				"ЧИСЛО ЭФФЕКТОВ ОЗАРЕНИЯ:",
			[`${abilityName}_supercharge_duration`]: 				"ДЛИТЕЛЬНОСТЬ ОЗАРЕНИЯ:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"神灭斩",
			[`${abilityName}_Description`]: 				"对单个敌方单位射出闪电，造成大量伤害。",
			[`${abilityName}_Facet_lina_supercharge`]: 				"施放神灭斩会暂时让莉娜的能量达到顶峰，给予炽魂的叠加效果。",
			[`${abilityName}_shard_description`]: 				"造成伤害的%barrier_pct%%%会转化为莉娜身上的全伤害护盾。护盾持续%barrier_duration%秒。",
			[`${abilityName}_Lore`]: 				"莉娜身边的空气变得极度炙热，产生白热的闪电来灼烧过于接近的敌人。",
			[`${abilityName}_Note0`]: 				"神灭斩在技能施放到伤害生效有%damage_delay%秒延迟，因此有若干技能可以躲避该伤害。",
			[`${abilityName}_damage`]: 				"伤害：",
			[`${abilityName}_supercharge_stacks`]: 				"顶峰叠加层数：",
			[`${abilityName}_supercharge_duration`]: 				"顶峰持续时间：",
			},
        }
    }
}