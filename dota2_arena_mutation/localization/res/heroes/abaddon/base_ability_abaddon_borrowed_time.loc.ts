import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_abaddon_borrowed_time"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Tempo Emprestado",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Borrowed Time</font></b>\n \nQuando ativada, dissipa você, e qualquer dano causado a você na verdade concederá cura. Se a habilidade não estiver no intervalo entre usos, ela será ativada automaticamente quando a sua vida ficar abaixo de %hp_threshold%.\n\nTIPO DE DISSIPAÇÃO: Poderosa",
			[`${abilityName}_facet_abaddon_mephitic_shroud`]: 				"Enquanto o Tempo Emprestado estiver ativo, Abaddon e inimigos em um raio de %immolate_aoe% unidades sofrem %immolate_damage% de dano por segundo.",
			[`${abilityName}_Lore`]: 				"Sendo a mais antinatural de todas as dádivas da Fonte de Averno, este é um poder que desafia a compreensão dos mortais. O que deveria ferir, cura; e o que deveria matar, rejuvenesce as forças.",
			[`${abilityName}_hp_threshold`]: 				"LIMIAR DE VIDA:",
			[`${abilityName}_duration`]: 				"DURAÇÃO:",
			[`${abilityName}_ally_threshold_scepter`]: 				"LIMIAR DE DANO:",
			[`${abilityName}_scepter_description`]: 				"Aumenta a duração. Enquanto <b><font color='#F2A93E'>Tempo Emprestado</font></b> estiver ativo, sempre que um aliado sofrer mais de %ally_threshold_scepter% de dano dentro do alcance de uso da <b><font color='#F2A93E'>Espiral da Neblina</font></b>, uma espiral será disparada automaticamente naquele aliado.",
			[`${abilityName}_Note0`]: 				"Pode ser ativada enquanto Abaddon está desativado, mas não enquanto silenciado. A ativação passiva ainda ocorre enquanto silenciado.",
			[`${abilityName}_Note1`]: 				"O <b><font color='#F2A93E'>Escudo Afótico</font></b> não bloqueia dano causado a Abaddon quando esta habilidade estiver ativada, permitindo que ele se cure.",
			[`${abilityName}_Note2`]: 				"Quebras impedem a ativação automática do Tempo Emprestado.",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Borrowed Time",
			[`${abilityName}_Description`]: 				"When activated, dispels you and all damage dealt to you will heal instead of harm. If the ability is not on cooldown, it will automatically activate if your health falls below %hp_threshold%.\n\nDISPEL TYPE: Strong Dispel",
			[`${abilityName}_facet_abaddon_mephitic_shroud`]: 				"While Borrowed Time is active, Abaddon and enemies within %immolate_aoe% radius take %immolate_damage% damage per second.",
			[`${abilityName}_Lore`]: 				"The most unnatural of all the gifts of the Font of Avernus, this power defies mortal understanding.  What should hurt, instead heals; and what should kill gives strength anew.",
			[`${abilityName}_hp_threshold`]: 				"HEALTH THRESHOLD:",
			[`${abilityName}_duration`]: 				"DURATION:",
			[`${abilityName}_ally_threshold_scepter`]: 				"DAMAGE THRESHOLD:",
			[`${abilityName}_scepter_description`]: 				"Increases duration. While Borrowed Time is active, anytime an ally takes more than %ally_threshold_scepter% damage while within Mist Coil's cast range of Abaddon, an individual Mist Coil will automatically fire towards that ally.",
			[`${abilityName}_Note0`]: 				"Borrowed Time can be manually activated while Abaddon is disabled, but not while silenced.  The passive activation can still occur while silenced.",
			[`${abilityName}_Note1`]: 				"Aphotic Shield does not block any damage to Abaddon when Borrowed Time is active, allowing him to heal.",
			[`${abilityName}_Note2`]: 				"Break prevents Borrowed Time from automatically activating.",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Tiempo Prestado",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Borrowed Time</font></b>.\n\nAl activarlo, disipa los efectos negativos y cualquier daño que recibas te curará en vez de dañarte. Si la habilidad no está en recarga, se activará automáticamente si tu vida baja de %hp_threshold%.\n\nTIPO DE DISIPACIÓN: Fuerte.",
			[`${abilityName}_facet_abaddon_mephitic_shroud`]: 				"Cuando la habilidad Tiempo Prestado está activa, Abaddon y los enemigos que se encuentren en un radio de %immolate_aoe% reciben %immolate_damage% de daño por segundo.",
			[`${abilityName}_Lore`]: 				"La más antinatural de todas las bendiciones de la Fuente del Averno, este poder desafía al conocimiento mortal. Lo que debería herir, cura; y lo que debería matar otorga fuerzas renovadas.",
			[`${abilityName}_hp_threshold`]: 				"UMBRAL DE VIDA:",
			[`${abilityName}_duration`]: 				"DURACIÓN:",
			[`${abilityName}_ally_threshold_scepter`]: 				"UMBRAL DE DAÑO:",
			[`${abilityName}_scepter_description`]: 				"Aumenta la duración. Mientras Tiempo Prestado esté activa, cada vez que un aliado reciba más de %ally_threshold_scepter% de daño en el alcance de lanzamiento de Espiral de Niebla alrededor de Abaddon, se lanzará automáticamente una Espiral de Niebla individual hacia dicho aliado.",
			[`${abilityName}_Note0`]: 				"Tiempo Prestado se puede activar mientras Abaddon está incapacitado pero no mientras está silenciado. La activación pasiva aún puede ocurrir cuando esté silenciado.",
			[`${abilityName}_Note1`]: 				"Escudo Afótico no bloquea ningún daño a Abaddon cuando Tiempo Prestado está activa, lo que le permite curarse.",
			[`${abilityName}_Note2`]: 				"Ruptura impide que Tiempo Prestado se active automáticamente.",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Borrowed Time",
			[`${abilityName}_Description`]: 				"Применяет на владельца развеивание и следующие несколько секунд обращает весь получаемый им урон в лечение. Если способность готова, то она сработает автоматически, как только здоровье владельца упадёт ниже %hp_threshold%.\n\nТИП РАЗВЕИВАНИЯ: сильное",
			[`${abilityName}_Lore`]: 				"Эта сила, самая противоестественная из всех даров купели Аверно, бросает вызов пониманию смертных. Что должно ранить — лечит, а что должно убить — даёт свежие силы.",
			[`${abilityName}_hp_threshold`]: 				"ПОРОГ ЗДОРОВЬЯ:",
			[`${abilityName}_duration`]: 				"ДЛИТЕЛЬНОСТЬ:",
			[`${abilityName}_ally_threshold_scepter`]: 				"УРОН ДЛЯ ЛЕЧЕНИЯ:",
			[`${abilityName}_scepter_description`]: 				"Увеличивает длительность. Во время действия способность Mist Coil автоматически срабатывает на союзников в радиусе её применения, когда они получают более %ally_threshold_scepter% урона.",
			[`${abilityName}_Note0`]: 				"Эту способность можно применить, если ваш герой выведен из строя, но не когда он обезмолвлен. Автоматическое применение срабатывает даже под безмолвием.",
			[`${abilityName}_Note1`]: 				"Щит не блокирует урон при действии способности Borrowed Time.",
			[`${abilityName}_Note2`]: 				"Автоматическое срабатывание способности отключается истощением.",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"回光返照",
			[`${abilityName}_Description`]: 				"启动后驱散自身，所有受到的伤害转而产生治疗效果。只要技能不在冷却中，在生命值低于%hp_threshold%点时技能会自动启动。\n\n驱散类型：强驱散",
			[`${abilityName}_facet_abaddon_mephitic_shroud`]: 				"回光返照生效时亚巴顿和%immolate_aoe%范围内的敌人每秒会受到%immolate_damage%点伤害。",
			[`${abilityName}_Lore`]: 				"魔霭圣池中最为扭曲的馈赠，凡人对死亡的认知在此力量前显得异常可笑。敌之尖刀，我之伤药；死地后生，回光返照。",
			[`${abilityName}_hp_threshold`]: 				"生命临界值：",
			[`${abilityName}_duration`]: 				"持续时间：",
			[`${abilityName}_ally_threshold_scepter`]: 				"伤害临界值：",
			[`${abilityName}_scepter_description`]: 				"提升持续时间。启动回光返照后，亚巴顿附近迷雾缠绕的施法距离内友方英雄受到的伤害超过%ally_threshold_scepter%点时亚巴顿就会自动对其施放迷雾缠绕。",
			[`${abilityName}_Note0`]: 				"在亚巴顿受到眩晕作用时依然可以手动开启回光返照，但是受到沉默作用时不可以。不过被沉默时被动效果依然能生效。",
			[`${abilityName}_Note1`]: 				"无光之盾在回光返照生效期间不会吸收伤害，因此也不会影响治疗效果。",
			[`${abilityName}_Note2`]: 				"破坏会使回光返照无法自动触发。",
			},
        }
    }
}