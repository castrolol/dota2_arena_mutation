import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_lion_mana_drain"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Drenagem de Mana",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Mana Drain</font></b>\n \nCANALIZADA — Canaliza uma energia mágica, sugando o mana e causando retardo a inimigos ao longo do tempo. Caso o inimigo esteja sem mana, o retardo é aumentado em %movespeed_bonus_when_empty_pct%%%.<br><br>Pode alvejar aliados para concedê-los mana e velocidade de movimento em uma taxa de %ally_pct%%%.",
			[`${abilityName}_Facet_lion_essence_eater`]: 				"A Drenagem de Mana causa dano equivalente a %damage_pct%%% do mana roubado.",
			[`${abilityName}_shard_description`]: 				"Faz com que a <b><font color='#F2A93E'>Drenagem de Mana</font></b> afete até %shard_bonus_targets% inimigos adicionais e aumenta a distância de quebra. Lion se torna imune a efeitos e tem %magic_resist%%% de resistência mágica durante a canalização.",
			[`${abilityName}_Lore`]: 				"Magos menos experientes não são nada além de uma fonte de restauração mágica para o Bruxo Demoníaco.",
			[`${abilityName}_Note0`]: 				"Impede que inimigos fiquem invisíveis.",
			[`${abilityName}_duration`]: 				"TEMPO DE CANALIZAÇÃO:",
			[`${abilityName}_mana_per_second`]: 				"MANA POR SEGUNDO:",
			[`${abilityName}_break_distance`]: 				"DISTÂNCIA DE QUEBRA:",
			[`${abilityName}_movespeed`]: 				"%ALTERAÇÃO DA VEL. DE MOV.:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Mana Drain",
			[`${abilityName}_Description`]: 				"CHANNELED - Channels magical energy, taking mana and slowing enemies over time. If the enemy has no mana remaining, the slow is increased by %movespeed_bonus_when_empty_pct%%%. <br><br> Can target allies to give them mana and movement speed at a %ally_pct%%% rate.",
			[`${abilityName}_Facet_lion_essence_eater`]: 				"Mana Drain deals damage equal to %damage_pct%%% of mana stolen.",
			[`${abilityName}_shard_description`]: 				"Causes Mana Drain to affect up to %shard_bonus_targets% additional enemies and increases break distance. Lion becomes Debuff Immune with %magic_resist%%% magic resistance while channeling.",
			[`${abilityName}_Lore`]: 				"Lesser magi are nothing more than a source of magical restoration for the Demon Witch.",
			[`${abilityName}_Note0`]: 				"Prevents heroes from going invisible.",
			[`${abilityName}_duration`]: 				"CHANNEL TIME:",
			[`${abilityName}_mana_per_second`]: 				"MANA PER SECOND:",
			[`${abilityName}_break_distance`]: 				"BREAK DISTANCE:",
			[`${abilityName}_movespeed`]: 				"%MOVEMENT SLOW/BONUS:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Drenaje de Maná",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Mana Drain</font></b>.\n\nCANALIZADA: Canaliza energía mágica, roba maná y ralentiza a los enemigos con el tiempo. Si al enemigo no le queda maná, la ralentización aumenta un %movespeed_bonus_when_empty_pct% %%. Puede usar a los aliados como objetivo para proporcionarles maná y velocidad de movimiento en un %ally_pct% %%.",
			[`${abilityName}_Facet_lion_essence_eater`]: 				"Drenaje de Maná inflige el daño equivalente a un %damage_pct% %% del maná robado.",
			[`${abilityName}_shard_description`]: 				"Hace que Drenaje de Maná afecte hasta a %shard_bonus_targets% enemigos adicionales y aumenta la distancia de ruptura. Lion se vuelve inmune a los efectos negativos con un %magic_resist% %% de resistencia a la magia al canalizar.",
			[`${abilityName}_Lore`]: 				"Los magos inferiores no son nada más que una fuente de restauración mágica para el Brujo Demoníaco.",
			[`${abilityName}_Note0`]: 				"Evita que los héroes se vuelvan invisibles.",
			[`${abilityName}_duration`]: 				"TIEMPO DE CANALIZACIÓN:",
			[`${abilityName}_mana_per_second`]: 				"MANÁ POR SEGUNDO:",
			[`${abilityName}_break_distance`]: 				"DISTANCIA DE RUPTURA:",
			[`${abilityName}_movespeed`]: 				"%RALENTIZACIÓN/BONIFICACIÓN DE MOVIMIENTO:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Mana Drain",
			[`${abilityName}_Description`]: 				"ПРЕРЫВАЕМАЯ — создаёт магическую связь с противником, забирая себе его ману и замедляя его передвижение. Если у жертвы не осталось маны, замедление увеличивается на %movespeed_bonus_when_empty_pct%%%. <br><br> Можно применить на союзника, чтобы передавать ему свою ману и ускорить его передвижение на %ally_pct%%%.",
			[`${abilityName}_Facet_lion_essence_eater`]: 				"Способность наносит урон в размере %damage_pct%%% от поглощаемой маны.",
			[`${abilityName}_shard_description`]: 				"Увеличивает число целей способности на %shard_bonus_targets%. Также увеличивает расстояние разрыва. Владелец способности на время её применения становится невосприимчивым к эффектам и получает +%magic_resist%%% к сопротивлению магии.",
			[`${abilityName}_Lore`]: 				"Младшие маги — не более чем источник магической силы для демонолога.",
			[`${abilityName}_Note0`]: 				"Не позволяет жертвам уйти в невидимость.",
			[`${abilityName}_duration`]: 				"ДЛИТЕЛЬНОСТЬ:",
			[`${abilityName}_mana_per_second`]: 				"МАНЫ В СЕКУНДУ:",
			[`${abilityName}_break_distance`]: 				"РАССТОЯНИЕ РАЗРЫВА:",
			[`${abilityName}_movespeed`]: 				"%ЗАМЕДЛЕНИЕ/УСКОРЕНИЕ ПЕРЕДВИЖЕНИЯ:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"法力吸取",
			[`${abilityName}_Description`]: 				"持续施法 - 引导魔法能量，持续吸取魔法并减缓敌人的移动速度。如果敌人没有魔法剩余，减速效果提升%movespeed_bonus_when_empty_pct%%%。<br><br>可以对友军施放，给予他们%ally_pct%%%魔法和移动速度。",
			[`${abilityName}_Facet_lion_essence_eater`]: 				"法力吸取会造成%damage_pct%%%吸魔量的伤害。",
			[`${abilityName}_shard_description`]: 				"法力吸取可以作用最多%shard_bonus_targets%个额外敌人，并且断裂距离增加。持续施法期间莱恩为减益免疫状态，并且获得%magic_resist%%%魔法抗性。",
			[`${abilityName}_Lore`]: 				"对恶魔巫师来说，较为弱小的法师只不过是他回复魔力的来源。",
			[`${abilityName}_Note0`]: 				"阻止英雄进入隐身状态。",
			[`${abilityName}_duration`]: 				"持续时间：",
			[`${abilityName}_mana_per_second`]: 				"每秒抽取魔法值：",
			[`${abilityName}_break_distance`]: 				"中断距离：",
			[`${abilityName}_movespeed`]: 				"%移动速度减缓/加成：",
			},
        }
    }
}