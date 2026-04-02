import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_skywrath_mage_mystic_flare"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Relâmpagos Místicos",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Mystic Flare</font></b>\n \nO Skywrath Mage usa a sua habilidade mágica suprema para invocar um campo místico preciso e violento que devasta os seus adversários. Causa dano gigantesco distribuído igualmente entre todos os heróis na área por %duration% segundos.",
			[`${abilityName}_Lore`]: 				"Somente os feiticeiros mais hábeis dos Celestifúrias poderiam transformar os céus em tamanha tempestade.",
			[`${abilityName}_Note0`]: 				"Os Relâmpagos Místicos só afetam heróis e não causam dano a criaturas heroicas.",
			[`${abilityName}_Note1`]: 				"Inimigos imunes a magia não contam na distribuição de dano.",
			[`${abilityName}_Note2`]: 				"<b><font color='#F2A93E'>Relâmpagos Místicos</font></b> causará dano a criaturas inimigas caso não haja heróis inimigos presentes.",
			[`${abilityName}_Note3`]: 				"Os Relâmpagos Místicos destruirão ilusões instantaneamente.",
			[`${abilityName}_radius`]: 				"RAIO:",
			[`${abilityName}_duration`]: 				"DURAÇÃO:",
			[`${abilityName}_damage`]: 				"DANO:",
			[`${abilityName}_scepter_description`]: 				"Quando o Skywrath Mage lançar <b><font color='#F2A93E'>Relâmpagos Místicos</font></b>, será criada outra instância de <b><font color='#F2A93E'>Relâmpagos Místicos</font></b> na posição de outro alvo aleatório em até %scepter_radius% unidades de distância do alvo original. Prioriza heróis.",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Mystic Flare",
			[`${abilityName}_Description`]: 				"Skywrath Mage uses his ultimate magical ability to conjure a precise and violent mystical field that lays waste to his adversaries. Deals massive damage distributed evenly among any Heroes in the area over %duration% seconds.",
			[`${abilityName}_Lore`]: 				"Only the most practiced of Skywrath sorcerers could hope to shape the skies into such a storm.",
			[`${abilityName}_Note0`]: 				"Mystic Flare only affects Heroes. Mystic Flare does not damage creep heroes.",
			[`${abilityName}_Note1`]: 				"Spell immune enemies do not count toward the damage distribution.",
			[`${abilityName}_Note2`]: 				"Mystic Flare will damage enemy creeps if no enemy heroes are present.",
			[`${abilityName}_Note3`]: 				"Mystic Flare will immediately destroy illusions.",
			[`${abilityName}_radius`]: 				"RADIUS:",
			[`${abilityName}_duration`]: 				"DURATION:",
			[`${abilityName}_damage`]: 				"DAMAGE:",
			[`${abilityName}_scepter_description`]: 				"When Skywrath Mage casts Mystic Flare, another Mystic Flare will be created on the position of a different random target enemy within %scepter_radius% range of the original target. Heroes will take priority.",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Destello Místico",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Mystic Flare</font></b>.\n\nSkywrath Mage usa su habilidad mágica definitiva para conjurar un preciso y violento campo místico que arrasa a sus adversarios. Inflige gran cantidad de daño repartido equitativamente entre los héroes en el área durante %duration% s.",
			[`${abilityName}_Lore`]: 				"Solo los Skywrath hechiceros más experimentados pueden aspirar a modificar los cielos y crear una tormenta así.",
			[`${abilityName}_Note0`]: 				"Destello Místico solo afecta a héroes; no daña a creeps héroes.",
			[`${abilityName}_Note1`]: 				"Los enemigos inmunes a hechizos no cuentan en la distribución del daño.",
			[`${abilityName}_Note2`]: 				"Destello Místico dañará a los creeps enemigos si no hay héroes enemigos presentes.",
			[`${abilityName}_Note3`]: 				"Destello Místico destruirá inmediatamente las ilusiones.",
			[`${abilityName}_radius`]: 				"RADIO:",
			[`${abilityName}_duration`]: 				"DURACIÓN:",
			[`${abilityName}_damage`]: 				"DAÑO:",
			[`${abilityName}_scepter_description`]: 				"Cuando Skywrath Mage lance Destello Místico, se creará otro Destello Místico en la posición de un enemigo aleatorio distinto dentro de un alcance de %scepter_radius% unidades del objetivo original. Los héroes tendrán prioridad.",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Mystic Flare",
			[`${abilityName}_Description`]: 				"Герой создаёт направленное поле сверхъестественной силы, сокрушая врагов. Поле наносит огромный урон, который равномерно распределяется между героями в области действия в течение %duration% сек.",
			[`${abilityName}_Lore`]: 				"Только самые опытные маги скайрасов могут разверзнуть в небесах такую бурю.",
			[`${abilityName}_Note0`]: 				"Эта способность действует только на героев и не наносит урона крипам-героям.",
			[`${abilityName}_Note1`]: 				"Невосприимчивые к магии враги не учитываются при распределении урона.",
			[`${abilityName}_Note2`]: 				"Наносит урон крипам, если в области действия нет вражеских героев.",
			[`${abilityName}_Note3`]: 				"Мгновенно уничтожает иллюзии.",
			[`${abilityName}_radius`]: 				"РАДИУС:",
			[`${abilityName}_duration`]: 				"ДЛИТЕЛЬНОСТЬ:",
			[`${abilityName}_damage`]: 				"УРОН:",
			[`${abilityName}_scepter_description`]: 				"Каждое применение срабатывает на ещё одну случайную цель в радиусе %scepter_radius% от изначальной (в первую очередь на героев).",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"神秘之耀",
			[`${abilityName}_Description`]: 				"天怒法师操控终极魔力，召唤精准致命的奥术力场毁灭对手。%duration%秒期间对范围内所有敌方英雄造成大量伤害，伤害由所有英雄平摊。",
			[`${abilityName}_Lore`]: 				"天怒一族中只有勤加修炼的法师才能将苍天塑造成这样的风暴。",
			[`${abilityName}_Note0`]: 				"神秘之耀只会作用于英雄。神秘之耀不会对类英雄单位造成伤害。",
			[`${abilityName}_Note1`]: 				"减益免疫状态下的敌人不会被均摊伤害。",
			[`${abilityName}_Note2`]: 				"神秘之耀在没有敌方英雄时将对敌方非英雄单位造成伤害。",
			[`${abilityName}_Note3`]: 				"神秘之耀会立刻摧毁幻象。",
			[`${abilityName}_radius`]: 				"作用范围：",
			[`${abilityName}_duration`]: 				"持续时间：",
			[`${abilityName}_damage`]: 				"伤害：",
			[`${abilityName}_scepter_description`]: 				"天怒法师施放神秘之耀时，原目标附近%scepter_radius%范围内另一个敌人的位置上也会产生一个神秘之耀。以英雄为首要目标。",
			},
        }
    }
}