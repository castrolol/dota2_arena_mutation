import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_skywrath_mage_arcane_bolt"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Energia Arcana",
			[`${abilityName}_Description`]: 				"Em inglês: <font color='#F2A93E'>Arcane Bolt</font>\n \nLança uma lenta esfera de energia arcana, causando dano a uma unidade inimiga com base na Inteligência do Skywrath Mage.",
			[`${abilityName}_Lore`]: 				"Em meio ao encanto infinito do Ninho Arrepiante, somente os calmos e inteligentes conseguem sobreviver.",
			[`${abilityName}_Note0`]: 				"O projétil se move lentamente (500 unidades por segundo) e fornece 325 unidades de visão ao seu redor. Ao atingir o alvo, revelará a área por 3,34 segundos.",
			[`${abilityName}_Note1`]: 				"Esta magia não pode ser anulada.",
			[`${abilityName}_bolt_damage`]: 				"DANO BASE:",
			[`${abilityName}_int_multiplier`]: 				"MULTIPLICADOR DE INTELIGÊNCIA:",
			[`${abilityName}_shard_description`]: 				"Quando o Skywrath Mage lançar uma <b><font color='#F2A93E'>Energia Arcana</font></b>, %total_bolt_count% esferas são criadas — uma em direção ao alvo original e outra em um inimigo aleatório em até %extra_bolt_search_radius% unidades de distância do alvo original. Prioriza heróis.",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Arcane Bolt",
			[`${abilityName}_Description`]: 				"Skywrath Mage launches a slow-moving bolt of arcane magic, dealing damage to an enemy unit based on Skywrath Mage's intelligence.",
			[`${abilityName}_Lore`]: 				"Within the Ghastly Eyrie's endless intrigue, only the clever and calm can hope to survive.",
			[`${abilityName}_Note0`]: 				"The projectile moves very slowly (500 ms), providing 325 vision around it.  Upon impact, it will reveal the target area for 3.34 seconds.",
			[`${abilityName}_Note1`]: 				"Arcane Bolt cannot be disjointed.",
			[`${abilityName}_bolt_damage`]: 				"BASE DAMAGE:",
			[`${abilityName}_int_multiplier`]: 				"INT DAMAGE MULTIPLIER:",
			[`${abilityName}_shard_description`]: 				"When Skywrath Mage casts Arcane Bolt, %total_bolt_count% bolts are created, one aimed at the original target, and the other at a random enemy within %extra_bolt_search_radius% range of the original target. Heroes will take priority.",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Proyectil Arcano",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Arcane Bolt</font></b>.\n\nSkywrath Mage lanza un proyectil de magia arcana que se mueve lentamente, infligiendo daño a una unidad enemiga según la inteligencia de Skywrath Mage.",
			[`${abilityName}_Lore`]: 				"Dentro de las infinitas intrigas del Nido Espectral, solo los más inteligentes y serenos pueden aspirar a sobrevivir.",
			[`${abilityName}_Note0`]: 				"El proyectil se mueve muy lentamente (500 de velocidad), proporcionando 325 de visión a su alrededor. Al impactar, revelará la zona objetivo durante 3,34 segundos.",
			[`${abilityName}_Note1`]: 				"Proyectil Arcano no se puede esquivar.",
			[`${abilityName}_bolt_damage`]: 				"DAÑO BASE:",
			[`${abilityName}_int_multiplier`]: 				"MULTIPLICADOR DE DAÑO SEGÚN INTELIGENCIA:",
			[`${abilityName}_shard_description`]: 				"Cuando Skywrath Mage lance Proyectil Arcano, se crearán %total_bolt_count% proyectiles. Uno irá dirigido al objetivo original, y el otro, a un enemigo aleatorio que se encuentre en un radio de %extra_bolt_search_radius% del objetivo original. Los héroes tendrán prioridad.",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Arcane Bolt",
			[`${abilityName}_Description`]: 				"Герой выпускает во врага медленный заряд магической энергии, который наносит урон, зависящий от интеллекта владельца способности.",
			[`${abilityName}_Lore`]: 				"Среди бесконечных интриг Жуткого гнезда лишь умный и спокойный может надеяться на выживание.",
			[`${abilityName}_Note0`]: 				"Снаряд двигается с небольшой скоростью в 500, даёт обзор в 325 единиц и показывает область вокруг цели в течение 3,34 секунды после попадания.",
			[`${abilityName}_Note1`]: 				"Снаряд этой способности нельзя сбить с цели.",
			[`${abilityName}_bolt_damage`]: 				"БАЗОВЫЙ УРОН:",
			[`${abilityName}_int_multiplier`]: 				"МНОЖИТЕЛЬ ИНТЕЛЛЕКТА:",
			[`${abilityName}_shard_description`]: 				"Каждое применение создаёт %total_bolt_count% снаряда, один из которых летит в изначальную цель, а другой — в случайного врага в радиусе %extra_bolt_search_radius% от неё (в первую очередь в героев).",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"奥法鹰隼",
			[`${abilityName}_Description`]: 				"天怒法师施放出缓慢移动的奥术鹰群，对敌方单位造成基于天怒法师智力值的伤害。",
			[`${abilityName}_Lore`]: 				"面对苍白之巢内无穷的诡计，只有沉稳的聪明人才能幸存。",
			[`${abilityName}_Note0`]: 				"鹰群移动得非常缓慢（500移速），提供325范围的视野。击中目标后，将给予目标区域的视野，持续3.34秒。",
			[`${abilityName}_Note1`]: 				"奥法鹰隼无法被躲避。",
			[`${abilityName}_bolt_damage`]: 				"基础伤害：",
			[`${abilityName}_int_multiplier`]: 				"智力伤害系数：",
			[`${abilityName}_shard_description`]: 				"天怒法师施放奥法鹰隼时，会产生%total_bolt_count%个鹰隼，其中一个飞往原目标，而另一个飞往原目标附近%extra_bolt_search_radius%范围内一个随机敌人。以英雄为首要目标。",
			},
        }
    }
}