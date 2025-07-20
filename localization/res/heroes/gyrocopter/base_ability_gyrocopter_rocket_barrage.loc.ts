import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_gyrocopter_rocket_barrage"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Artilharia de Foguetes",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Rocket Barrage</font></b>\n \nLança uma rajada de foguetes em unidades inimigas próximas ao Gyrocopter. Dura %barrage_duration% segundos.",
			[`${abilityName}_facet_gyrocopter_afterburner`]: 				"Cada foguete da artilharia que atingir um herói inimigo aumenta a velocidade de movimento do Gyrocopter.",
			[`${abilityName}_Lore`]: 				"A nova aeronave de Aurel tem carga para foguetes aumentada, aprimorando sua habilidade de artilharia rápida.",
			[`${abilityName}_Note0`]: 				"Esta habilidade não pode atingir unidades fora da visão do Gyrocopter.",
			[`${abilityName}_Note1`]: 				"A Artilharia de Foguetes disparada de Mísseis Teleguiados não ativa Pós-combustão.",
			[`${abilityName}_rockets_per_second`]: 				"FOGUETES POR SEGUNDO:",
			[`${abilityName}_radius`]: 				"RAIO:",
			[`${abilityName}_rocket_damage`]: 				"DANO DO FOGUETE:",
			[`${abilityName}_bonus_movement_speed_per_hit`]: 				"VEL. DE MOV. POR ACERTO:",
			[`${abilityName}_bonus_movespeed_duration`]: 				"DURAÇÃO DA VEL. DE MOV.:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Rocket Barrage",
			[`${abilityName}_Description`]: 				"Launches a salvo of rockets at nearby enemy units in a radius around the Gyrocopter. Lasts %barrage_duration% seconds.",
			[`${abilityName}_facet_gyrocopter_afterburner`]: 				"Every successful hit of a Rocket Barrage rocket on an enemy hero increases Gyrocopter's movement speed.",
			[`${abilityName}_Lore`]: 				"Aurel's new craft has an increased payload for rockets, enhancing their rapid-fire capabilities.",
			[`${abilityName}_Note0`]: 				"Rocket Barrage can't hit units Gyrocopter has no vision over.",
			[`${abilityName}_Note1`]: 				"Rocket Barrage fired from Homing Missiles do not trigger Afterburner.",
			[`${abilityName}_rockets_per_second`]: 				"ROCKETS PER SECOND:",
			[`${abilityName}_radius`]: 				"RADIUS:",
			[`${abilityName}_rocket_damage`]: 				"ROCKET DAMAGE:",
			[`${abilityName}_bonus_movement_speed_per_hit`]: 				"MOVESPEED PER HIT:",
			[`${abilityName}_bonus_movespeed_duration`]: 				"MOVESPEED DURATION:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Andanada de Cohetes",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Rocket Barrage</font></b>.\n\nLanza una salva de cohetes a las unidades enemigas cercanas en un radio alrededor de Gyrocopter. Dura %barrage_duration% s.",
			[`${abilityName}_facet_gyrocopter_afterburner`]: 				"Cada impacto con éxito de Andanada de Cohetes sobre un héroe enemigo aumenta la velocidad de movimiento de Gyrocopter.",
			[`${abilityName}_Lore`]: 				"La nueva aeronave de Aurel tiene un mayor espacio de carga para cohetes, lo que mejora su capacidad de fuego rápido.",
			[`${abilityName}_Note0`]: 				"Andanada de Cohetes no puede impactar en unidades que Gyrocopter no pueda ver.",
			[`${abilityName}_Note1`]: 				"La Andanada de Cohetes disparada por Misil Buscador no activa Poscombustión.",
			[`${abilityName}_rockets_per_second`]: 				"COHETES POR SEGUNDO:",
			[`${abilityName}_radius`]: 				"RADIO:",
			[`${abilityName}_rocket_damage`]: 				"DAÑO DE LOS COHETES:",
			[`${abilityName}_bonus_movement_speed_per_hit`]: 				"VELOCIDAD DE MOVIMIENTO POR IMPACTO:",
			[`${abilityName}_bonus_movespeed_duration`]: 				"DURACIÓN DE LA VELOCIDAD DE MOVIMIENTO:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Rocket Barrage",
			[`${abilityName}_Description`]: 				"Герой обстреливает окружающих врагов ракетами в течение %barrage_duration% сек.",
			[`${abilityName}_facet_gyrocopter_afterburner`]: 				"Каждое попадание ракетой от Rocket Barrage по вражескому герою ускоряет передвижение владельца способности.",
			[`${abilityName}_Lore`]: 				"Расширенный отсек для ракет на новом вертолёте Аурела повышает его скорострельность.",
			[`${abilityName}_Note0`]: 				"Не наносит урона существам, которых не видно.",
			[`${abilityName}_Note1`]: 				"Эффект Afterburner не даётся за действие Rocket Barrage на ракете от Homing Missile.",
			[`${abilityName}_rockets_per_second`]: 				"РАКЕТ В СЕКУНДУ:",
			[`${abilityName}_radius`]: 				"РАДИУС:",
			[`${abilityName}_rocket_damage`]: 				"УРОН ЗА РАКЕТУ:",
			[`${abilityName}_bonus_movement_speed_per_hit`]: 				"ДОП. СКОРОСТЬ ЗА ПОПАДАНИЕ:",
			[`${abilityName}_bonus_movespeed_duration`]: 				"ДЛИТЕЛЬНОСТЬ УСКОРЕНИЯ:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"火箭弹幕",
			[`${abilityName}_Description`]: 				"向矮人直升机附近一定范围内的敌方单位齐射导弹。持续%barrage_duration%秒。",
			[`${abilityName}_facet_gyrocopter_afterburner`]: 				"火箭弹幕每次成功击中敌方英雄都会提升矮人直升机的移动速度。",
			[`${abilityName}_Lore`]: 				"奥雷尔的新飞行器有更大的火箭载弹量，增强了速射能力。",
			[`${abilityName}_Note0`]: 				"火箭弹幕不能伤害矮人直升机视野之外的单位。",
			[`${abilityName}_Note1`]: 				"追踪导弹发射的火箭弹幕不会触发加力燃烧器。",
			[`${abilityName}_rockets_per_second`]: 				"每秒发射导弹数：",
			[`${abilityName}_radius`]: 				"作用范围：",
			[`${abilityName}_rocket_damage`]: 				"火箭伤害：",
			[`${abilityName}_bonus_movement_speed_per_hit`]: 				"每次击中提升移动速度：",
			[`${abilityName}_bonus_movespeed_duration`]: 				"移速加成持续时间：",
			},
        }
    }
}