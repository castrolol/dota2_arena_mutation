import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_leshrac_split_earth"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Dividir a Terra",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Split Earth</font></b>\n \nDivide a terra abaixo dos inimigos. Causa dano e atordoa por pouco tempo.",
			[`${abilityName}_shard_description`]: 				"Faz com que <b><font color='#F2A93E'>Dividir a Terra</font></b> se repita mais %shard_max_count% vezes no mesmo lugar. Cada divisão adicional ocorre %shard_secondary_delay% segundos depois e com raio %shard_radius_increase% unidades maior que o último. A área de repetição é visível às duas equipes.",
			[`${abilityName}_Lore`]: 				"Deformando a natureza conforme a sua vontade hedionda, a terra modificada consome os desafortunados que cruzam o caminho de Leshrac.",
			[`${abilityName}_Note0`]: 				"Dividir a Terra destruirá árvores na sua área de efeito.",
			[`${abilityName}_Note1`]: 				"Há um atraso de %delay% segundo antes do efeito ser aplicado.",
			[`${abilityName}_radius`]: 				"RAIO:",
			[`${abilityName}_duration`]: 				"DURAÇÃO DO ATORDOAMENTO:",
			[`${abilityName}_delay`]: 				"ATRASO PARA ATORDOAR:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Split Earth",
			[`${abilityName}_Description`]: 				"Splits the earth under enemies. Deals damage and stuns for a short duration.",
			[`${abilityName}_shard_description`]: 				"Causes Split Earth to repeat in the same location %shard_max_count% additional times, with a %shard_secondary_delay% second delay between each one. Each time the radius increases by %shard_radius_increase%. Split Earth echo location is visible to both teams.",
			[`${abilityName}_Lore`]: 				"Twisting nature to his vile will, the shifting earth consumes those unlucky enough to cross Leshrac's path.",
			[`${abilityName}_Note0`]: 				"Split Earth will destroy trees in its area of effect.",
			[`${abilityName}_Note1`]: 				"There is a %delay% second delay before the effect is applied.",
			[`${abilityName}_radius`]: 				"RADIUS:",
			[`${abilityName}_duration`]: 				"STUN DURATION:",
			[`${abilityName}_delay`]: 				"STUN DELAY:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Dividir la Tierra",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Split Earth</font></b>.\n\nDivide la tierra bajo los enemigos. Inflige daño y aturde durante unos breves instantes.",
			[`${abilityName}_shard_description`]: 				"Hace que Dividir la Tierra se repita en la misma ubicación %shard_max_count% veces adicionales, con %shard_secondary_delay% s de retraso entre cada una. Cada vez el radio aumenta en %shard_radius_increase%. La ubicación del temblor de Dividir la Tierra es visible para ambos equipos.",
			[`${abilityName}_Lore`]: 				"Manipulando la naturaleza a su perversa voluntad, la tierra en movimiento consume a aquellos que tienen la mala suerte de cruzarse en el camino de Leshrac.",
			[`${abilityName}_Note0`]: 				"Dividir la Tierra destruirá árboles en su área de efecto.",
			[`${abilityName}_Note1`]: 				"Hay un retraso de %delay% s hasta que se aplica el efecto.",
			[`${abilityName}_radius`]: 				"RADIO:",
			[`${abilityName}_duration`]: 				"DURACIÓN DEL ATURDIMIENTO:",
			[`${abilityName}_delay`]: 				"RETRASO DEL ATURDIMIENTO:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Split Earth",
			[`${abilityName}_Description`]: 				"Раскалывает землю под врагами. Наносит урон и ненадолго оглушает.",
			[`${abilityName}_shard_description`]: 				"Способность срабатывает в том же месте ещё %shard_max_count% раза с промежутком в %shard_secondary_delay% сек. При каждом срабатывании радиус увеличивается на %shard_radius_increase%. Область повторного срабатывания видят обе команды.",
			[`${abilityName}_Lore`]: 				"Обращая природу нечистой воле мученика, сотрясающаяся земля погребает несчастных, вставших на его пути.",
			[`${abilityName}_Note0`]: 				"Уничтожает деревья в зоне действия способности.",
			[`${abilityName}_Note1`]: 				"Задержка перед оглушением — %delay% секунды.",
			[`${abilityName}_radius`]: 				"РАДИУС:",
			[`${abilityName}_duration`]: 				"ДЛИТЕЛЬНОСТЬ ОГЛУШЕНИЯ:",
			[`${abilityName}_delay`]: 				"ЗАДЕРЖКА:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"撕裂大地",
			[`${abilityName}_Description`]: 				"撕裂敌人脚下的大地。造成伤害和短暂的眩晕。",
			[`${abilityName}_shard_description`]: 				"撕裂大地在相同地点再重复%shard_max_count%次，重复间隔为%shard_secondary_delay%秒。每次作用范围增加%shard_radius_increase%。撕裂大地的重复地点对双方队伍可见。",
			[`${abilityName}_Lore`]: 				"拉席克用他恶毒的意志扭曲大自然，撕裂大地摧毁那些挡他路的倒霉鬼。",
			[`${abilityName}_Note0`]: 				"撕裂大地将摧毁作用范围内的树木。",
			[`${abilityName}_Note1`]: 				"技能经过%delay%秒延迟后生效。",
			[`${abilityName}_radius`]: 				"作用范围：",
			[`${abilityName}_duration`]: 				"眩晕时间：",
			[`${abilityName}_delay`]: 				"眩晕延迟：",
			},
        }
    }
}