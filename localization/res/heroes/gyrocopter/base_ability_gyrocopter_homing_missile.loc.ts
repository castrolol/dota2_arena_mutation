import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_gyrocopter_homing_missile"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Míssil Teleguiado",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Homing Missile</font></b>\n \nLança um míssil teleguiado que segue a unidade inimiga alvo. O míssil ganha velocidade com o tempo, causando dano e atordoamento no impacto com o alvo. Unidades inimigas podem destruir o míssil antes que ele alcance o seu alvo.",
			[`${abilityName}_shard_description`]: 				"<b><font color='#F2A93E'>Mísseis Teleguiados</font></b> passam a disparar o nível atual de <b><font color='#F2A93E'>Artilharia de Foguetes</font></b> em uma área de efeito de %shard_radius% unidades após %shard_delay% segundo do seu lançamento. A artilharia prioriza o alvo do míssil.",
			[`${abilityName}_Lore`]: 				"O maior míssil que Aurel conseguiu anexar à sua nave, A Bomba possui aerodinâmica e explosivos cuidadosamente calculados para causar impacto máximo.",
			[`${abilityName}_Note0`]: 				"As torres causam metade do dano ao míssil.",
			[`${abilityName}_Note1`]: 				"O efeito de mira só é visível aos aliados.",
			[`${abilityName}_Note2`]: 				"O míssil persegue e atinge unidades invisíveis.",
			[`${abilityName}_hits_to_kill_tooltip`]: 				"ATAQUES PARA DESTRUIR:",
			[`${abilityName}_tower_hits_to_kill_tooltip`]: 				"ATAQUES DE TORRE PARA DESTRUIR:",
			[`${abilityName}_stun_duration`]: 				"DURAÇÃO DO ATORDOAMENTO:",
			[`${abilityName}_hit_damage`]: 				"DANO:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Homing Missile",
			[`${abilityName}_Description`]: 				"Fires a homing missile to seek the targeted enemy unit. The missile gains speed over time, dealing damage and stunning when it impacts the target. Enemy units can destroy the missile before it reaches its target.",
			[`${abilityName}_shard_description`]: 				"Homing Missiles now constantly fires the current level of Rocket Barrage in a %shard_radius% area of effect after %shard_delay% second of being cast. This Rocket Barrage prioritizes the Homing Missile target.",
			[`${abilityName}_Lore`]: 				"The biggest missile Aurel could possibly attach to his craft, The Bomb has carefully calculated aerodynamics and explosives for maximum impact.",
			[`${abilityName}_Note0`]: 				"Towers do half damage to the missile.",
			[`${abilityName}_Note1`]: 				"The crosshair effect is visible to allies only.",
			[`${abilityName}_Note2`]: 				"The missile will follow and hit invisible units.",
			[`${abilityName}_hits_to_kill_tooltip`]: 				"HITS TO DESTROY:",
			[`${abilityName}_tower_hits_to_kill_tooltip`]: 				"TOWER HITS TO DESTROY:",
			[`${abilityName}_stun_duration`]: 				"STUN DURATION:",
			[`${abilityName}_hit_damage`]: 				"DAMAGE:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Misil Buscador",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Homing Missile</font></b>.\n\nDispara un misil buscador que persigue a la unidad enemiga objetivo. El misil gana velocidad con el tiempo, infligiendo daño y aturdiendo al objetivo al impactar. Las unidades enemigas pueden destruir el misil antes de que alcance su objetivo.",
			[`${abilityName}_shard_description`]: 				"Misil Buscador ahora dispara constantemente el nivel actual de Andanada de Cohetes en un área de efecto de %shard_radius% %shard_delay% s después de lanzarla. Dicha Andanada de Cohetes prioriza el objetivo de Misil Buscador.",
			[`${abilityName}_Lore`]: 				"El misil más grande que Aurel pudo cargar en su aeronave, La Bomba, tiene la aerodinámica y los explosivos calculados para producir el mayor impacto.",
			[`${abilityName}_Note0`]: 				"Las torres infligen la mitad de daño al misil.",
			[`${abilityName}_Note1`]: 				"El efecto del punto de mira solo es visible para los aliados.",
			[`${abilityName}_Note2`]: 				"Los misiles rastrearán y alcanzarán a unidades invisibles.",
			[`${abilityName}_hits_to_kill_tooltip`]: 				"GOLPES PARA DESTRUIR:",
			[`${abilityName}_tower_hits_to_kill_tooltip`]: 				"GOLPES DE LA TORRE PARA DESTRUIR:",
			[`${abilityName}_stun_duration`]: 				"DURACIÓN DEL ATURDIMIENTO:",
			[`${abilityName}_hit_damage`]: 				"DAÑO:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Homing Missile",
			[`${abilityName}_Description`]: 				"Запускает во врага самонаводящуюся ракету. Она постепенно набирает скорость, а при столкновении с целью оглушает её и наносит урон. Враги могут уничтожить ракету, пока она летит к цели.",
			[`${abilityName}_shard_description`]: 				"Через %shard_delay% сек. после применения вокруг самонаводящейся ракеты начинается обстрел способностью Rocket Barrage текущего уровня. Радиус обстрела: %shard_radius%. В первую очередь обстреливается цель ракеты.",
			[`${abilityName}_Lore`]: 				"Самый большой снаряд, какой Аурел смог прицепить к своему вертолёту — Бомба™, сочетающая тщательно рассчитанную аэродинамику и взрывчатку, давая на выходе максимальный результат.",
			[`${abilityName}_Note0`]: 				"Башни наносят ракете только половину урона.",
			[`${abilityName}_Note1`]: 				"Метка над жертвой видна только союзникам.",
			[`${abilityName}_Note2`]: 				"Ракета действует и на невидимые цели.",
			[`${abilityName}_hits_to_kill_tooltip`]: 				"АТАК ДЛЯ УНИЧТОЖЕНИЯ:",
			[`${abilityName}_tower_hits_to_kill_tooltip`]: 				"АТАК БАШНИ ДЛЯ УНИЧТОЖЕНИЯ:",
			[`${abilityName}_stun_duration`]: 				"ДЛИТЕЛЬНОСТЬ ОГЛУШЕНИЯ:",
			[`${abilityName}_hit_damage`]: 				"УРОН:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"追踪导弹",
			[`${abilityName}_Description`]: 				"发射一枚会自动定位目标单位的追踪导弹。导弹发射后持续增加飞行速度，击中目标时造成伤害及眩晕。敌方单位可在导弹接近前将其击落。",
			[`${abilityName}_shard_description`]: 				"追踪导弹现在从施放%shard_delay%秒后开始不断发射%shard_radius%作用范围的火箭弹幕。火箭弹幕优先以追踪导弹的目标为目标。",
			[`${abilityName}_Lore`]: 				"奥雷尔的飞行器上所能装载的最大的导弹，为了实现最佳效果，他对空气动力学和爆炸物进行精心计算才得到了炸蛋™。",
			[`${abilityName}_Note0`]: 				"防御塔对导弹造成半额伤害。",
			[`${abilityName}_Note1`]: 				"准星效果仅对队友可见。",
			[`${abilityName}_Note2`]: 				"导弹会跟随并击中隐身单位。",
			[`${abilityName}_hits_to_kill_tooltip`]: 				"摧毁所需次数：",
			[`${abilityName}_tower_hits_to_kill_tooltip`]: 				"摧毁所需防御塔攻击次数：",
			[`${abilityName}_stun_duration`]: 				"眩晕时间：",
			[`${abilityName}_hit_damage`]: 				"伤害：",
			},
        }
    }
}