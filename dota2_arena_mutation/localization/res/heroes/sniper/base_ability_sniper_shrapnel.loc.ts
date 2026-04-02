import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_sniper_shrapnel"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Estilhaços",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Shrapnel</font></b>\n \nConsome uma carga para disparar uma bola de estilhaços que faz chover projéteis explosivos na área-alvo, fornecendo visão da mesma. Inimigos atingidos sofrerão dano e retardo de movimento. As cargas de Estilhaços são restauradas a cada %abilitychargerestoretime% segundos.",
			[`${abilityName}_Facet_sniper_scattershot`]: 				"Aumenta o retardo e o dano dos Estilhaços, mas reduz a duração.",
			[`${abilityName}_Lore`]: 				"O rifle modular do Kardel também dispara balas incendiárias, úteis para atacar locais entrincheirados.",
			[`${abilityName}_Note0`]: 				"O dano é causado 11 vezes, uma vez no lançamento da habilidade, e então a cada segundo.",
			[`${abilityName}_Note1`]: 				"Não afeta estruturas.",
			[`${abilityName}_Note2`]: 				"Fornece visão da área-alvo.",
			[`${abilityName}_slow_movement_speed`]: 				"%RETARDO DE MOV.:",
			[`${abilityName}_radius`]: 				"RAIO:",
			[`${abilityName}_duration`]: 				"DURAÇÃO:",
			[`${abilityName}_shrapnel_damage`]: 				"DANO:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Shrapnel",
			[`${abilityName}_Description`]: 				"Consumes a charge to launch a ball of shrapnel that showers the target area in explosive pellets. Enemies are subject to damage and slowed movement. Reveals the targeted area. Shrapnel charges restore every %abilitychargerestoretime% seconds.",
			[`${abilityName}_Facet_sniper_scattershot`]: 				"Shrapnel slow and damage are increased, but duration is decreased.",
			[`${abilityName}_Lore`]: 				"Kardel's modular rifle also fires incendiary rounds, useful for assaulting entrenched locations.",
			[`${abilityName}_Note0`]: 				"Damage is dealt 11 times, immediately at spell effect then every second.",
			[`${abilityName}_Note1`]: 				"Does not damage buildings.",
			[`${abilityName}_Note2`]: 				"Provides vision in the targeted area.",
			[`${abilityName}_slow_movement_speed`]: 				"%MOVEMENT SLOW:",
			[`${abilityName}_radius`]: 				"RADIUS:",
			[`${abilityName}_duration`]: 				"DURATION:",
			[`${abilityName}_shrapnel_damage`]: 				"DAMAGE:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Metralla",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Shrapnel</font></b>.\n\nConsume una carga para disparar una bola de metralla que riega el área objetivo con perdigones explosivos. Los enemigos reciben daño y son ralentizados. Revela el área objetivo. Las cargas de Metralla se recargan cada %abilitychargerestoretime% s.",
			[`${abilityName}_Facet_sniper_scattershot`]: 				"La ralentización y el daño de Metralla aumentan, pero su duración se reduce.",
			[`${abilityName}_Lore`]: 				"El rifle modular de Kardel también dispara munición incendiaria, útil para asaltar lugares atrincherados.",
			[`${abilityName}_Note0`]: 				"Inflige daño 11 veces: inmediatamente al empezar el efecto y luego una vez cada segundo.",
			[`${abilityName}_Note1`]: 				"No inflige daño a estructuras.",
			[`${abilityName}_Note2`]: 				"Proporciona visión en el área objetivo.",
			[`${abilityName}_slow_movement_speed`]: 				"%RALENTIZACIÓN DE MOVIMIENTO:",
			[`${abilityName}_radius`]: 				"RADIO:",
			[`${abilityName}_duration`]: 				"DURACIÓN:",
			[`${abilityName}_shrapnel_damage`]: 				"DAÑO:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Shrapnel",
			[`${abilityName}_Description`]: 				"Использует заряд шрапнели, покрывая указанную область дождём из разрывной дроби. Противники под ней получают урон и замедляются. Раскрывает туман войны в области действия. Заряд способности восстанавливается каждые %abilitychargerestoretime% секунд.",
			[`${abilityName}_Facet_sniper_scattershot`]: 				"Увеличивает замедление и урон способности Shrapnel, но уменьшает её длительность.",
			[`${abilityName}_Lore`]: 				"Универсальная винтовка Кардела способна стрелять зажигательными патронами, особенно эффективными в условиях позиционной войны.",
			[`${abilityName}_Note0`]: 				"Урон наносится 11 раз — в начале действия способности и каждую последующую секунду.",
			[`${abilityName}_Note1`]: 				"Не наносит урон строениям.",
			[`${abilityName}_Note2`]: 				"Раскрывает туман войны в области действия.",
			[`${abilityName}_slow_movement_speed`]: 				"%ЗАМЕДЛЕНИЕ ПЕРЕДВИЖЕНИЯ:",
			[`${abilityName}_radius`]: 				"РАДИУС:",
			[`${abilityName}_duration`]: 				"ДЛИТЕЛЬНОСТЬ:",
			[`${abilityName}_shrapnel_damage`]: 				"УРОН:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"榴霰弹",
			[`${abilityName}_Description`]: 				"消耗一点能量射出一发带有爆炸弹片的榴霰弹，在目标区域降下弹雨。区域内的敌军受到伤害并被减速。榴霰弹将给予目标区域的视野。榴霰弹的能量每过%abilitychargerestoretime%秒恢复1点。",
			[`${abilityName}_Facet_sniper_scattershot`]: 				"榴霰弹的减速和伤害提升，但是持续时间减少。",
			[`${abilityName}_Lore`]: 				"卡德尔的模块化步枪还能发射燃烧弹，对攻击战壕中的敌人很有用。",
			[`${abilityName}_Note0`]: 				"总共造成11次伤害，第一次在技能生效时，接下来每秒造成一次伤害。",
			[`${abilityName}_Note1`]: 				"不会对建筑造成伤害。",
			[`${abilityName}_Note2`]: 				"将拥有目标区域的视野。",
			[`${abilityName}_slow_movement_speed`]: 				"%移动速度减缓：",
			[`${abilityName}_radius`]: 				"作用范围：",
			[`${abilityName}_duration`]: 				"持续时间：",
			[`${abilityName}_shrapnel_damage`]: 				"伤害：",
			},
        }
    }
}