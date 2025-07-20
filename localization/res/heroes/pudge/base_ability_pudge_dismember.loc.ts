import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_pudge_dismember"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Desmembrar",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Dismember</font></b>\n \nCANALIZADA — Pudge devora uma unidade inimiga, desativando-a e causando dano com o tempo. O dano causado cura Pudge pela mesma quantidade e é aumentado pela sua Força. Pudge puxa a vítima a uma velocidade de %pull_units_per_second% unidades por segundo, até uma proximidade máxima de %pull_distance_limit% unidades.",
			[`${abilityName}_Facet_pudge_fresh_meat`]: 				"Desmembrar aumenta a Força ao causar dano a heróis.",
			[`${abilityName}_Lore`]: 				"\"Quando eu terminar de lidar com estes vermes, eles estarão prontos para uma torta!\"",
			[`${abilityName}_Note0`]: 				"Caso uma unidade fique invisível durante o <b><font color='#F2A93E'>Desmembramento</font></b>, ela continuará sob efeito de <b><font color='#F2A93E'>Desmembrar</font></b>.",
			[`${abilityName}_dismember_damage`]: 				"DANO POR SEGUNDO:",
			[`${abilityName}_strength_damage`]: 				"MULTIPLICADOR DE FORÇA:",
			[`${abilityName}_abilitychanneltime`]: 				"DURAÇÃO:",
			[`${abilityName}_AbilityCooldown`]: 				"INTERVALO ENTRE USOS:",
			[`${abilityName}_gluttony_strength_bonus`]: 				"AUMENTO DE FORÇA:",
			[`${abilityName}_glutton_strength_stack_duration`]: 				"DURAÇÃO DA FORÇA:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Dismember",
			[`${abilityName}_Description`]: 				"CHANNELED - Pudge chows down on an enemy unit, disabling it and dealing damage over time. Damage is increased by Pudge's Strength and heals him for the total amount. Pudge pulls the unit at a rate of %pull_units_per_second% units, up to a minimum of %pull_distance_limit% range.",
			[`${abilityName}_Facet_pudge_fresh_meat`]: 				"Dismember increases Strength when dealing damage to heroes.",
			[`${abilityName}_Lore`]: 				"'When I'm through with these vermin, they'll be fit for a pie!'",
			[`${abilityName}_Note0`]: 				"If a unit becomes invisible while Dismembered, it will still be under the effects of Dismember.",
			[`${abilityName}_dismember_damage`]: 				"DAMAGE PER SECOND:",
			[`${abilityName}_strength_damage`]: 				"STRENGTH MULTIPLIER:",
			[`${abilityName}_abilitychanneltime`]: 				"DURATION:",
			[`${abilityName}_AbilityCooldown`]: 				"COOLDOWN:",
			[`${abilityName}_gluttony_strength_bonus`]: 				"STRENGTH INCREASE:",
			[`${abilityName}_glutton_strength_stack_duration`]: 				"STRENGTH DURATION:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Descuartizar",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Dismember</font></b>.\n\nCANALIZADA: Pudge engulle a una unidad enemiga, la incapacita y le inflige daño con el tiempo. El daño aumenta en función a la fuerza de Pudge y Pudge se cura la misma cantidad. Pudge atrae al enemigo a una velocidad de %pull_units_per_second% unidades, hasta un mínimo de %pull_distance_limit% de alcance.",
			[`${abilityName}_Facet_pudge_fresh_meat`]: 				"Descuartizar aumenta la fuerza cuando inflige daño a héroes.",
			[`${abilityName}_Lore`]: 				"'¡Cuando termine con estas alimañas, estarán listas para hacer una tarta!'",
			[`${abilityName}_Note0`]: 				"Si una unidad se vuelve invisible en el proceso, seguirá estando bajo el efecto de Descuartizar.",
			[`${abilityName}_dismember_damage`]: 				"DAÑO POR SEGUNDO:",
			[`${abilityName}_strength_damage`]: 				"MULTIPLICADOR DE FUERZA:",
			[`${abilityName}_abilitychanneltime`]: 				"DURACIÓN:",
			[`${abilityName}_AbilityCooldown`]: 				"TIEMPO DE RECARGA:",
			[`${abilityName}_gluttony_strength_bonus`]: 				"AUMENTO DE LA FUERZA:",
			[`${abilityName}_glutton_strength_stack_duration`]: 				"DURACIÓN DE LA FUERZA:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Dismember",
			[`${abilityName}_Description`]: 				"ПРЕРЫВАЕМАЯ — герой заживо пожирает врага, оглушая его и нанося периодический урон, который зависит от силы владельца способности и излечивает его на столько же, сколько наносит урона. Жертва притягивается со скоростью %pull_units_per_second% единиц в секунду, пока расстояние не сократится до %pull_distance_limit% единиц.",
			[`${abilityName}_Facet_pudge_fresh_meat`]: 				"Способность Dismember увеличивает силу владельца, когда наносит урон героям.",
			[`${abilityName}_Lore`]: 				"«Есть с падалью одна загвоздка: час как поел - и опять голодный!»",
			[`${abilityName}_Note0`]: 				"Способность не прервётся, если её цель станет невидимой.",
			[`${abilityName}_dismember_damage`]: 				"УРОН В СЕКУНДУ:",
			[`${abilityName}_strength_damage`]: 				"МНОЖИТЕЛЬ СИЛЫ:",
			[`${abilityName}_abilitychanneltime`]: 				"ДЛИТЕЛЬНОСТЬ:",
			[`${abilityName}_AbilityCooldown`]: 				"ПЕРЕЗАРЯДКА:",
			[`${abilityName}_gluttony_strength_bonus`]: 				"УВЕЛИЧЕНИЕ СИЛЫ:",
			[`${abilityName}_glutton_strength_stack_duration`]: 				"ДЛИТЕЛЬНОСТЬ БОНУСА:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"肢解",
			[`${abilityName}_Description`]: 				"持续施法 - 帕吉撕咬一个敌方单位，使其失去行动能力并受到持续伤害。伤害量为基础伤害加上帕吉力量值的一定百分比，帕吉将回复与伤害量相等的生命。帕吉会将该单位以每秒%pull_units_per_second%的速度向自身牵引，最多牵引%pull_distance_limit%距离。",
			[`${abilityName}_Facet_pudge_fresh_meat`]: 				"肢解每次对英雄造成伤害时都会提升自身力量值。",
			[`${abilityName}_Lore`]: 				"“等我干掉这些蠢货以后，就可以把它们做成肉饼了！”",
			[`${abilityName}_Note0`]: 				"即使肢解的目标在受到作用的过程中隐身，还是不会脱离肢解的作用。",
			[`${abilityName}_dismember_damage`]: 				"每秒伤害：",
			[`${abilityName}_strength_damage`]: 				"力量值伤害系数：",
			[`${abilityName}_abilitychanneltime`]: 				"持续时间：",
			[`${abilityName}_AbilityCooldown`]: 				"冷却时间：",
			[`${abilityName}_gluttony_strength_bonus`]: 				"力量提升：",
			[`${abilityName}_glutton_strength_stack_duration`]: 				"力量持续时间：",
			},
        }
    }
}