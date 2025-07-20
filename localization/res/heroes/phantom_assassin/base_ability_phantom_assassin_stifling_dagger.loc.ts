import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_phantom_assassin_stifling_dagger"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Adaga Sufocante",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Stifling Dagger</font></b>\n \nLança uma adaga que retarda o movimento da unidade inimiga, causando %base_damage%+%attack_factor_tooltip%%% do dano de ataque do usuário como ataque físico, além de aplicar os efeitos de ataque dos seus itens e habilidades.",
			[`${abilityName}_Facet_phantom_assassin_sweet_release`]: 				"Sempre que uma unidade for atingida (mas não morta) por uma Adaga Sufocante, ela recebe um efeito acumulável durante %dagger_recast_time%s. Quando uma unidade morrer, para cada acúmulo do efeito, uma Adaga Sufocante é lançada contra uma unidade próxima, com %dagger_secondary_reduce%%% dos valores de dano e duração do retardo. Prioriza heróis.",
			[`${abilityName}_Note0`]: 				"Se um efeito de ataque é baseado em chances, a chance de ser aplicado será a mesma chance de ocorrer.",
			[`${abilityName}_Note1`]: 				"Inimigos imunes a magias não são afetados pelo retardo da <b><font color='#F2A93E'>Adaga Sufocante</font></b>.",
			[`${abilityName}_Note2`]: 				"A Adaga Sufocante concede visão em volta da sua localização durante o trajeto e ao atingir o alvo.",
			[`${abilityName}_Lore`]: 				"A primeira habilidade aprendida pelas Irmãs do Véu frequentemente sinaliza um golpe vindo na sua direção.",
			[`${abilityName}_move_slow`]: 				"%RETARDO DE MOV.:",
			[`${abilityName}_duration`]: 				"DURAÇÃO DO RETARDO:",
			[`${abilityName}_base_damage`]: 				"DANO BASE:",
			[`${abilityName}_attack_factor_tooltip`]: 				"%DANO DO ATAQUE:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Stifling Dagger",
			[`${abilityName}_Description`]: 				"Throws a dagger slowing the enemy unit's movement speed, dealing %base_damage%+%attack_factor_tooltip%%% of Phantom Assassin's attack damage as physical damage and applying attack effects from items and abilities.",
			[`${abilityName}_Facet_phantom_assassin_sweet_release`]: 				"Whenever a unit is non-fatally hit by Stifling Dagger, they receive a stacking debuff that lasts for %dagger_recast_time% seconds. When a unit dies, a Stifling Dagger with %dagger_secondary_reduce%%% damage and slow duration values is cast on a random nearby unit for every stack of the debuff, prioritizing heroes.",
			[`${abilityName}_Note0`]: 				"If an attack effect is chance-based, the chance of its application will be the same as its chance to occur.",
			[`${abilityName}_Note1`]: 				"Spell-immune enemies are not affected by Stifling Dagger's slow.",
			[`${abilityName}_Note2`]: 				"Stifling Dagger grants vision around its location while it travels and upon impact.",
			[`${abilityName}_Lore`]: 				"The first skill learned by the Sisters of the Veil often signals an incoming hit.",
			[`${abilityName}_move_slow`]: 				"%MOVE SLOW:",
			[`${abilityName}_duration`]: 				"SLOW DURATION:",
			[`${abilityName}_base_damage`]: 				"BASE DAMAGE:",
			[`${abilityName}_attack_factor_tooltip`]: 				"%ATTACK DAMAGE:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Daga Sofocante",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Stifling Dagger</font></b>.\n\nLanza una daga que ralentiza la velocidad de movimiento de la unidad enemiga, causando %base_damage% + un %attack_factor_tooltip% %% de daño de ataque de Phantom Assassin como daño físico. Se aplican los efectos de ataque de los objetos y habilidades.",
			[`${abilityName}_Facet_phantom_assassin_sweet_release`]: 				"Cada vez que una unidad es golpeada de manera no letal por Daga Sofocante, recibe un efecto negativo acumulable que dura %dagger_recast_time% s. Cuando una unidad muere, se lanza una Daga Sofocante con un %dagger_secondary_reduce% %% de daño y de duración de la ralentización sobre una unidad cercana aleatoria por cada acumulación del efecto negativo, priorizando a los héroes.",
			[`${abilityName}_Note0`]: 				"Si el efecto de ataque se basa en una probabilidad, tendrá la misma de activarse que de ocurrir.",
			[`${abilityName}_Note1`]: 				"Los enemigos inmunes a los hechizos no se ven afectados por la ralentización de Daga Sofocante.",
			[`${abilityName}_Note2`]: 				"Daga Sofocante otorga visión alrededor de su ubicación mientras se desplaza y al impactar.",
			[`${abilityName}_Lore`]: 				"El primer hechizo aprendido por las Hermanas del Velo suele avisar de un golpe inminente.",
			[`${abilityName}_move_slow`]: 				"%RALENTIZACIÓN DE MOVIMIENTO:",
			[`${abilityName}_duration`]: 				"DURACIÓN DE LA RALENTIZACIÓN:",
			[`${abilityName}_base_damage`]: 				"DAÑO BASE:",
			[`${abilityName}_attack_factor_tooltip`]: 				"%DAÑO DE ATAQUE:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Stifling Dagger",
			[`${abilityName}_Description`]: 				"Бросает кинжал, который замедляет скорость передвижения врага, наносит ему физический урон в размере %base_damage% + %attack_factor_tooltip%%% от атаки героя, а также накладывает эффекты предметов и способностей.",
			[`${abilityName}_Facet_phantom_assassin_sweet_release`]: 				"Если урон от кинжала не смертельный, он также накладывает на жертву складывающийся отрицательный эффект, действующий %dagger_recast_time% сек. Когда жертва погибает, за каждый такой эффект в случайных существ неподалёку (в первую очередь в героев) вылетает по кинжалу, который наносит %dagger_secondary_reduce%%% урона и замедляет на %dagger_secondary_reduce%%% длительности.",
			[`${abilityName}_Note0`]: 				"Эффекты атаки срабатывают с обычной для них вероятностью.",
			[`${abilityName}_Note1`]: 				"Не замедляет врагов, невосприимчивых к магии.",
			[`${abilityName}_Note2`]: 				"Способность даёт обзор вокруг кинжала во время полёта и после попадания по цели.",
			[`${abilityName}_Lore`]: 				"Первый навык, изучаемый Сёстрами вуали, часто предвещает скорый удар.",
			[`${abilityName}_move_slow`]: 				"%ЗАМЕДЛЕНИЕ ПЕРЕДВИЖЕНИЯ:",
			[`${abilityName}_duration`]: 				"ДЛИТЕЛЬНОСТЬ ЗАМЕДЛЕНИЯ:",
			[`${abilityName}_base_damage`]: 				"БАЗОВЫЙ УРОН:",
			[`${abilityName}_attack_factor_tooltip`]: 				"%УРОН ОТ АТАКИ:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"窒碍短匕",
			[`${abilityName}_Description`]: 				"对敌方单位掷出一把匕首，减缓其移动速度，并造成物理伤害，数值为%base_damage%+幻影刺客攻击伤害的%attack_factor_tooltip%%%，同时继承物品和技能的攻击效果。",
			[`${abilityName}_Facet_phantom_assassin_sweet_release`]: 				"只要窒碍短匕击中敌人后没有致死，那就会留下一个可叠加的负面状态，持续%dagger_recast_time%秒。只要该单位阵亡，每有一层叠加效果就对目标附近的随机敌人放出一把窒碍短匕，以英雄优先，伤害和减速时间的数值为%dagger_secondary_reduce%%%。",
			[`${abilityName}_Note0`]: 				"如果攻击效果为几率触发，匕首的触发几率与原几率相同。",
			[`${abilityName}_Note1`]: 				"减益免疫下的敌人不会受到窒碍短匕的减速影响。",
			[`${abilityName}_Note2`]: 				"窒碍短匕在行进途中和击中目标时都会提供附近的视野。",
			[`${abilityName}_Lore`]: 				"魅影之纱成员学习到的第一个技能，中招就意味着下一次攻击要来了。",
			[`${abilityName}_move_slow`]: 				"%移动速度减缓：",
			[`${abilityName}_duration`]: 				"减速持续时间：",
			[`${abilityName}_base_damage`]: 				"基础伤害：",
			[`${abilityName}_attack_factor_tooltip`]: 				"%攻击伤害：",
			},
        }
    }
}