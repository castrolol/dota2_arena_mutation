import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_abaddon_mist_coil"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Espiral da Neblina",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Mist Coil</font></b>\n \nAbaddon lança uma espiral de neblina que pode causar dano a uma unidade inimiga ou cura a uma unidade aliada ao custo de parte da sua vida.",
			[`${abilityName}_facet_abaddon_mists_of_fate`]: 				"Faz com que a Espiral da Neblina também cause %damage_percentage_on_perform_attack%%% de dano de ataque e aplique efeitos de itens e habilidades. Aumenta o dano a si próprio ao alvejar inimigos.",
			[`${abilityName}_Lore`]: 				"Um misterioso vapor da Fonte de Averno agora infunde o hálito de Abaddon, que o lança à sua vontade.",
			[`${abilityName}_target_damage`]: 				"DANO/CURA:",
			[`${abilityName}_self_damage`]: 				"%DANO A SI:",
			[`${abilityName}_self_damage_enemy_target`]: 				"%DANO A SI (CONTRA INIMIGOS):",
			[`${abilityName}_Note0`]: 				"Abaddon não pode se matar com esta habilidade.",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Mist Coil",
			[`${abilityName}_Description`]: 				"Abaddon releases a coil of deathly mist that can damage an enemy unit or heal a friendly unit at the cost of some of Abaddon's health.",
			[`${abilityName}_facet_abaddon_mists_of_fate`]: 				"Mist Coil also deals %damage_percentage_on_perform_attack%%% attack damage and applies effects from items and abilities. Self Damage increased when targeting enemies.",
			[`${abilityName}_Lore`]: 				"A mysterious vapor from the Font of Avernus now infuses the breath of Abaddon, who releases it at will.",
			[`${abilityName}_target_damage`]: 				"DAMAGE/HEAL:",
			[`${abilityName}_self_damage`]: 				"%SELF DAMAGE:",
			[`${abilityName}_self_damage_enemy_target`]: 				"%SELF DAMAGE (ENEMY CAST):",
			[`${abilityName}_Note0`]: 				"Abaddon can not kill himself with this skill.",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Espiral de Niebla",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Mist Coil</font></b>.\n\nAbaddon libera una espiral de niebla mortal que puede dañar a una unidad enemiga o curar a una unidad aliada a cambio de parte de la vida de Abaddon.",
			[`${abilityName}_facet_abaddon_mists_of_fate`]: 				"Espiral de Niebla también inflige un %damage_percentage_on_perform_attack% %% de daño de ataque y aplica efectos de objetos y habilidades. El daño autoinfligido aumenta al tener enemigos como objetivo.",
			[`${abilityName}_Lore`]: 				"Un misterioso vapor procedente de la Fuente del Averno ahora llena el aliento de Abaddon, quien lo libera a su voluntad.",
			[`${abilityName}_target_damage`]: 				"DAÑO/CURACIÓN:",
			[`${abilityName}_self_damage`]: 				"%DAÑO AUTOINFLIGIDO:",
			[`${abilityName}_self_damage_enemy_target`]: 				"%DAÑO AUTOINFLIGIDO (CONTRA ENEMIGOS):",
			[`${abilityName}_Note0`]: 				"Abaddon no puede matarse a sí mismo con esta habilidad.",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Mist Coil",
			[`${abilityName}_Description`]: 				"Ценой собственного здоровья герой выпускает смертельный туман, который наносит урон врагу или лечит союзника.",
			[`${abilityName}_facet_abaddon_mists_of_fate`]: 				"Способность дополнительно наносит %damage_percentage_on_perform_attack%%% урона от атаки и накладывает эффекты атаки от предметов и способностей. Наносит владельцу дополнительный урон, если применяется на врага.",
			[`${abilityName}_Lore`]: 				"Дыхание лорда Аверно преисполнено загадочными испарениями купели, подчиняющимися его воле.",
			[`${abilityName}_target_damage`]: 				"УРОН/ЛЕЧЕНИЕ:",
			[`${abilityName}_self_damage`]: 				"%УРОН СЕБЕ:",
			[`${abilityName}_self_damage_enemy_target`]: 				"%УРОН СЕБЕ (ВРАЖЕСКАЯ ЦЕЛЬ):",
			[`${abilityName}_Note0`]: 				"Этой способностью нельзя совершить самоубийство.",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"迷雾缠绕",
			[`${abilityName}_Description`]: 				"亚巴顿以自身的部分生命为代价，释放出一团致命迷雾，可以对敌方单位造成伤害，或者治疗友方单位。",
			[`${abilityName}_facet_abaddon_mists_of_fate`]: 				"迷雾缠绕还会造成%damage_percentage_on_perform_attack%%%攻击伤害，并且施加物品和技能的效果。对敌人施放时自身伤害增加。",
			[`${abilityName}_Lore`]: 				"亚巴顿的气息中充盈着来自魔霭圣池的神秘之汽，他能随意将其释放。",
			[`${abilityName}_target_damage`]: 				"伤害/治疗：",
			[`${abilityName}_self_damage`]: 				"%对自身伤害：",
			[`${abilityName}_self_damage_enemy_target`]: 				"%自身伤害（对敌人施放）：",
			[`${abilityName}_Note0`]: 				"亚巴顿不能使用此技能自杀。",
			},
        }
    }
}