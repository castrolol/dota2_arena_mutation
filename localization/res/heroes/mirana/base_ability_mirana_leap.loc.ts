import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_mirana_leap"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Salto",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Leap</font></b>\n \nSalta em direção à batalha, se inspirando com um feroz rugido que fornece velocidades de ataque e de movimento adicionais. O bônus de velocidade dura %leap_bonus_duration% segundos.",
			[`${abilityName}_shard_description`]: 				"Concede +%additional_charges% acúmulo de <b><font color='#F2A93E'>Salto</font></b>. Ataques durante o efeito do <b><font color='#F2A93E'>Salto</font></b> causam %crit_damage_pct%%% de acerto crítico.",
			[`${abilityName}_Facet_mirana_leaps_and_bounds`]: 				"Ao aterrissar do Salto, enraíza alvos em uma área de %root_radius% unidades durante %root_duration%s.",
			[`${abilityName}_Lore`]: 				"Ninguém falha em reconhecer a icônica fera branca de Mirana no calor da batalha.",
			[`${abilityName}_leap_distance`]: 				"DISTÂNCIA:",
			[`${abilityName}_leap_speedbonus`]: 				"%VEL. DE MOV. ADICIONAL:",
			[`${abilityName}_leap_speedbonus_as`]: 				"VEL. DE ATAQUE ADICIONAL:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Leap",
			[`${abilityName}_Description`]: 				"Mirana leaps forward into battle, empowering herself with a ferocious roar that grants bonus attack and movement speed. Speed bonus lasts %leap_bonus_duration% seconds.",
			[`${abilityName}_shard_description`]: 				"Grants +%additional_charges% Leap charge. Attacks during the Leap buff critically strike for %crit_damage_pct%%% damage.",
			[`${abilityName}_Facet_mirana_leaps_and_bounds`]: 				"Upon landing, Leap roots targets in a %root_radius% radius for %root_duration%s.",
			[`${abilityName}_Lore`]: 				"None can fail to recognize Mirana's iconic white beast in the heat of battle.",
			[`${abilityName}_leap_distance`]: 				"DISTANCE:",
			[`${abilityName}_leap_speedbonus`]: 				"%MOVEMENT BONUS:",
			[`${abilityName}_leap_speedbonus_as`]: 				"ATTACK SPEED BONUS:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Brinco",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Leap</font></b>.\n\nMirana se lanza a la batalla y se potencia a sí misma con un feroz rugido que otorga velocidad de ataque y movimiento adicional. La bonificación de velocidad dura %leap_bonus_duration% s.",
			[`${abilityName}_shard_description`]: 				"Otorga +%additional_charges% carga para Brinco. Los ataques durante el efecto positivo de Brinco infligen un %crit_damage_pct% %% de daño crítico.",
			[`${abilityName}_Facet_mirana_leaps_and_bounds`]: 				"Al aterrizar, Brinco inmoviliza a los objetivos en un radio de %root_radius% durante %root_duration% s.",
			[`${abilityName}_Lore`]: 				"Nadie deja de reconocer la emblemática bestia blanca de Mirana en el fragor de la batalla.",
			[`${abilityName}_leap_distance`]: 				"DISTANCIA:",
			[`${abilityName}_leap_speedbonus`]: 				"%BONIFICACIÓN DE MOVIMIENTO:",
			[`${abilityName}_leap_speedbonus_as`]: 				"BONIFICACIÓN DE VELOCIDAD DE ATAQUE:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Leap",
			[`${abilityName}_Description`]: 				"Герой совершает прыжок вперёд, воодушевляясь свирепым рыком своего питомца, что даёт ему дополнительную скорость атаки и передвижения на %leap_bonus_duration% сек.",
			[`${abilityName}_shard_description`]: 				"Увеличивает число зарядов на %additional_charges%. Атаки под эффектом этой способности наносят %crit_damage_pct%%% критического урона.",
			[`${abilityName}_Facet_mirana_leaps_and_bounds`]: 				"Накладывает оцепенение на существ в радиусе %root_radius% вокруг конечной точки прыжка. Действует %root_duration% сек.",
			[`${abilityName}_Lore`]: 				"Знаменитого белого зверя принцессы в гуще битвы узнает любой.",
			[`${abilityName}_leap_distance`]: 				"ДАЛЬНОСТЬ ПРЫЖКА:",
			[`${abilityName}_leap_speedbonus`]: 				"%ДОП. СКОРОСТЬ:",
			[`${abilityName}_leap_speedbonus_as`]: 				"БОНУС К СКОРОСТИ АТАКИ:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"跳跃",
			[`${abilityName}_Description`]: 				"米拉娜的坐骑向前跳跃加入战斗，发出一声凶狠的咆哮鼓舞它的主人，提升攻击和移动速度。速度加成持续%leap_bonus_duration%秒。",
			[`${abilityName}_shard_description`]: 				"现在提供+%additional_charges% 跳跃能量点数。跳跃的加成状态期间的攻击都会触发致命一击，造成%crit_damage_pct%%%伤害",
			[`${abilityName}_Facet_mirana_leaps_and_bounds`]: 				"落地时跳跃会缠绕米拉娜附近%root_radius%范围内的目标，持续%root_duration%秒。",
			[`${abilityName}_Lore`]: 				"在战斗最激烈的时候，没人会注意不到米拉娜标志性的白色野兽。",
			[`${abilityName}_leap_distance`]: 				"距离：",
			[`${abilityName}_leap_speedbonus`]: 				"%移动速度加成：",
			[`${abilityName}_leap_speedbonus_as`]: 				"攻击速度加成：",
			},
        }
    }
}