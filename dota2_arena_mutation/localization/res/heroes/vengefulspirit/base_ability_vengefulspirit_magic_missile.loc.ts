import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_vengefulspirit_magic_missile"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Míssil Mágico",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Magic Missile</font></b>\n \nDispara um míssil mágico em uma unidade inimiga, atordoando-a e causando dano.",
			[`${abilityName}_Facet_vengefulspirit_avenging_missile`]: 				"O Míssil Mágico causa %damage_per_lasthit% de dano adicional para cada criatura morta pelo inimigo.",
			[`${abilityName}_shard_description`]: 				"Ao atingir um inimigo, rebate para outra unidade (priorizando heróis) dentro de %bounce_range_pct%%% do alcance de uso atual do <b><font color='#F2A93E'>Míssil Mágico</font></b> a partir do alvo primário.",
			[`${abilityName}_Lore`]: 				"O míssil mágico, técnica simples dos Celestifúria, é a ferramenta primária de vingança da Shendel.",
			[`${abilityName}_magic_missile_stun`]: 				"DURAÇÃO DO ATORDOAMENTO:",
			[`${abilityName}_magic_missile_damage`]: 				"DANO:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Magic Missile",
			[`${abilityName}_Description`]: 				"Fires a magic missile at an enemy unit, stunning and dealing damage.",
			[`${abilityName}_Facet_vengefulspirit_avenging_missile`]: 				"Magic Missile deals %damage_per_lasthit% bonus damage for every creep the enemy has killed.",
			[`${abilityName}_shard_description`]: 				"Bounces once on an enemy, prioritizing heroes, within %bounce_range_pct%%% of Magic Missile's current cast range from the first target.",
			[`${abilityName}_Lore`]: 				"A simple Skywrath technique, the magic missile is Shendel's primary tool for vengeance.",
			[`${abilityName}_magic_missile_stun`]: 				"STUN DURATION:",
			[`${abilityName}_magic_missile_damage`]: 				"DAMAGE:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Misil Mágico",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Magic Missile</font></b>.\n\nDispara un misil mágico contra la unidad objetivo, aturdiéndola e infligiéndole daño.",
			[`${abilityName}_Facet_vengefulspirit_avenging_missile`]: 				"Misil Mágico inflige %damage_per_lasthit% de daño adicional por cada creep que haya matado el enemigo.",
			[`${abilityName}_shard_description`]: 				"Rebota una vez sobre un enemigo que se encuentre dentro de un %bounce_range_pct% %% del alcance de lanzamiento actual de Misil Mágico desde el primer objetivo, priorizando a los héroes.",
			[`${abilityName}_Lore`]: 				"El misil mágico, una técnica simple de los Furia Celeste, es el arma principal de Shendel para vengarse.",
			[`${abilityName}_magic_missile_stun`]: 				"DURACIÓN DEL ATURDIMIENTO:",
			[`${abilityName}_magic_missile_damage`]: 				"DAÑO:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Magic Missile",
			[`${abilityName}_Description`]: 				"Выпускает во врага магический снаряд, который оглушает и наносит урон.",
			[`${abilityName}_Facet_vengefulspirit_avenging_missile`]: 				"Урон способности Magic Missile увеличивается на %damage_per_lasthit% за каждого крипа, добитого целью.",
			[`${abilityName}_shard_description`]: 				"Снаряд отскакивает в ещё одного врага (в первую очередь в героев) в радиусе, равном %bounce_range_pct%%% от текущей дальности применения способности.",
			[`${abilityName}_Lore`]: 				"Простейший скайрасский приём — магический снаряд — основной инструмент мести Шендел.",
			[`${abilityName}_magic_missile_stun`]: 				"ДЛИТЕЛЬНОСТЬ ОГЛУШЕНИЯ:",
			[`${abilityName}_magic_missile_damage`]: 				"УРОН:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"魔法箭",
			[`${abilityName}_Description`]: 				"向一个敌方单位射出魔法箭，眩晕并造成伤害。",
			[`${abilityName}_Facet_vengefulspirit_avenging_missile`]: 				"魔法箭造成额外伤害，敌人每击杀一个非英雄单位为%damage_per_lasthit%点额外伤害。",
			[`${abilityName}_shard_description`]: 				"可以对敌人弹射一次，以英雄优先，弹射距离为主目标的%bounce_range_pct%%%魔法箭施法距离内。",
			[`${abilityName}_Lore`]: 				"魔法箭是天怒一族的简朴战技，现在也是仙德尔莎主要的复仇工具。",
			[`${abilityName}_magic_missile_stun`]: 				"眩晕持续时间：",
			[`${abilityName}_magic_missile_damage`]: 				"伤害：",
			},
        }
    }
}