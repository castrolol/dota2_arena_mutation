import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_antimage_mana_void"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Vácuo de Mana",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Mana Void</font></b>\n \nCausa dano em uma área baseado nos pontos de mana faltantes na unidade-alvo, que é miniatordoada.",
			[`${abilityName}_Facet_antimage_mana_thirst`]: 				"Concede dano de ataque passivamente quando um herói inimigo estiver com menos de %min_bonus_pct%%% de mana. Quanto menos mana, maior o dano adicional.<br><br>Caso o mana do inimigo fique abaixo de %threshold_pct%%%, o Anti-Mage ganha o valor máximo de dano, além de visão e Visão Verdadeira daquele herói. Aplica-se a heróis inimigos em até %thirst_range% unidades de alcance. Acumulável.",
			[`${abilityName}_Lore`]: 				"Depois de pôr os seus inimigos de joelhos, Anti-Mage os pune pelo uso das artes arcanas.",
			[`${abilityName}_Note0`]: 				"O dano é calculado com base no mana do alvo, mas é aplicado a todos os inimigos na área de efeito.",
			[`${abilityName}_Note1`]: 				"Quebras desativam a visão e o dano de ataque adicionais da Sede de Mana.",
			[`${abilityName}_mana_void_damage_per_mana`]: 				"DANO:",
			[`${abilityName}_mana_void_ministun`]: 				"DURAÇÃO DO ATORDOAMENTO:",
			[`${abilityName}_mana_void_aoe_radius`]: 				"RAIO:",
			[`${abilityName}_bonus_attack_damage`]: 				"DANO DE ATAQUE MÁX. (SEDE DE MANA):",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Mana Void",
			[`${abilityName}_Description`]: 				"For each point of mana missing by the target unit, damage is dealt to it and surrounding enemies.  The main target is also mini-stunned.",
			[`${abilityName}_Facet_antimage_mana_thirst`]: 				"Passively grants attack damage when an enemy hero's mana falls below %min_bonus_pct%%%, with the bonuses increasing as their mana falls further.<br><br> If the enemies mana falls below %threshold_pct%%% Anti-Mage gains the maximum amount of damage, as well as vision and True Sight of that hero. Applies to enemy heroes within %thirst_range% range. Bonuses stack per hero.",
			[`${abilityName}_Lore`]: 				"After bringing enemies to their knees, Anti-Mage punishes them for their use of the arcane arts.",
			[`${abilityName}_Note0`]: 				"Damage is calculated based on the primary target's mana, but applied to all enemies within the area of effect.",
			[`${abilityName}_Note1`]: 				"Break disables Mana Thirst vision and attack bonuses.",
			[`${abilityName}_mana_void_damage_per_mana`]: 				"DAMAGE:",
			[`${abilityName}_mana_void_ministun`]: 				"STUN DURATION:",
			[`${abilityName}_mana_void_aoe_radius`]: 				"RADIUS:",
			[`${abilityName}_bonus_attack_damage`]: 				"MANA THIRST MAX ATTACK DAMAGE:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Vacío de Maná",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Mana Void</font></b>.\n\nInflige daño a la unidad objetivo y a los enemigos que la rodean por cada punto de maná que le falte a esta. El objetivo principal también queda miniaturdido.",
			[`${abilityName}_Facet_antimage_mana_thirst`]: 				"Otorga daño de ataque de forma pasiva cuando el maná de un héroe enemigo baja del %min_bonus_pct% %%, y las bonificaciones aumentan a medida que su maná sigue bajando.<br><br> Si el maná de los enemigos cae por debajo del %threshold_pct% %%, Anti-Mage obtiene la cantidad máxima de daño, así como visión y Visión Verdadera de ese héroe. Se aplica a los héroes enemigos en un alcance de %thirst_range%. Se acumulan bonificaciones por cada héroe.",
			[`${abilityName}_Lore`]: 				"Tras someter a sus enemigos, Anti-Mage les castiga por su uso de las artes arcanas.",
			[`${abilityName}_Note0`]: 				"El daño se calcula a partir del maná del objetivo principal, pero es infligido a todos los enemigos dentro del área de efecto.",
			[`${abilityName}_Note1`]: 				"Ruptura neutraliza la visión y las bonificaciones de ataque de Sed de Maná.",
			[`${abilityName}_mana_void_damage_per_mana`]: 				"DAÑO:",
			[`${abilityName}_mana_void_ministun`]: 				"DURACIÓN DEL ATURDIMIENTO:",
			[`${abilityName}_mana_void_aoe_radius`]: 				"RADIO:",
			[`${abilityName}_bonus_attack_damage`]: 				"DAÑO DE ATAQUE MÁXIMO POR SED DE MANÁ:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Mana Void",
			[`${abilityName}_Description`]: 				"Кратковременно оглушает вражескую цель, а затем наносит ей и всем окружающим её противникам урон, пропорциональный числу отсутствующей у неё маны.",
			[`${abilityName}_Facet_antimage_mana_thirst`]: 				"Пассивно увеличивает урон от атак, когда вражеский герой в радиусе %thirst_range% имеет меньше %min_bonus_pct%%% маны. Чем ниже уровень маны, тем сильнее эффект.<br><br> Если мана вражеского героя упадёт ниже %threshold_pct%%%, бонус к атаке станет максимальным, а самого героя станет видно, даже если он невидим. Бонусы от разных героев складываются.",
			[`${abilityName}_Lore`]: 				"Одолев врагов, борец с магией карает их за использование тайных искусств.",
			[`${abilityName}_Note0`]: 				"Урон зависит от количества маны у цели, но наносится всем противникам в радиусе действия способности.",
			[`${abilityName}_Note1`]: 				"Бонус к урону и обзор по врагам от Mana Thirst отключается истощением.",
			[`${abilityName}_mana_void_damage_per_mana`]: 				"УРОН ЗА ЕДИНИЦУ МАНЫ:",
			[`${abilityName}_mana_void_ministun`]: 				"ДЛИТЕЛЬНОСТЬ ОГЛУШЕНИЯ:",
			[`${abilityName}_mana_void_aoe_radius`]: 				"РАДИУС:",
			[`${abilityName}_bonus_attack_damage`]: 				"МАКС. БОНУС К АТАКЕ ЗА НЕХВАТКУ МАНЫ:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"法力虚空",
			[`${abilityName}_Description`]: 				"根据目标损失的魔法值，对目标和其周围的敌人造成伤害。所有受到伤害的单位都会被短暂眩晕。",
			[`${abilityName}_Facet_antimage_mana_thirst`]: 				"敌方英雄的魔法值低于%min_bonus_pct%%%时会被动提供攻击力，而且魔法值越低，提升效果越大。<br><br>如果敌人的魔法值低于%threshold_pct%%%，敌法师获得攻击力加成的最大值，以及该英雄的视野和真实视域。会施加给%thirst_range%范围内的敌方英雄。每个英雄提供的加成效果可以叠加。",
			[`${abilityName}_Lore`]: 				"敌人倒下之后，将因使用奥术而受到敌法师的惩戒。",
			[`${abilityName}_Note0`]: 				"伤害的计算根据主目标失去的魔法，但是对作用范围内所有敌人均有效。",
			[`${abilityName}_Note1`]: 				"破坏会使法力渴望的视野和攻击力加成失效。",
			[`${abilityName}_mana_void_damage_per_mana`]: 				"伤害系数：",
			[`${abilityName}_mana_void_ministun`]: 				"眩晕时间：",
			[`${abilityName}_mana_void_aoe_radius`]: 				"作用范围：",
			[`${abilityName}_bonus_attack_damage`]: 				"法力渴望攻击力加成上限：",
			},
        }
    }
}