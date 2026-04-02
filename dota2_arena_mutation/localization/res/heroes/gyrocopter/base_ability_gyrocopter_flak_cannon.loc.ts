import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_gyrocopter_flak_cannon"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Canhão Antiaéreo",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Flak Cannon</font></b>\n \nOs ataques do Gyrocopter atingem todas as unidades inimigas em uma área ao seu redor por um número limitado de ataques. Somente o alvo principal dos ataques sofrerá efeitos de ataque, como golpes críticos. Dura %abilityduration% segundos ou até todos os ataques serem usados.",
			[`${abilityName}_scepter_description`]: 				"Adiciona uma artilharia lateral que ataca unidades inimigas próximas ao Gyrocopter aleatoriamente. Enquanto o Canhão Antiaéreo estiver ativo, a artilharia lateral ataca duas unidades. Prioriza as unidades mais distantes dentro do alcance.",
			[`${abilityName}_Lore`]: 				"Este Gyrocopter recentemente renovado possui armamentos suficientes anexados para atacar em todas as direções.",
			[`${abilityName}_Note0`]: 				"O alcance de ataque do ataque primário não é alterado.",
			[`${abilityName}_Note1`]: 				"Quebras desativam a Artilharia Lateral.",
			[`${abilityName}_radius`]: 				"RAIO:",
			[`${abilityName}_max_attacks`]: 				"MÁXIMO DE ATAQUES:",
			[`${abilityName}_bonus_night_vision`]: 				"VISÃO NOTURNA ADICIONAL:",
			[`${abilityName}_sidegunner_fire_rate`]: 				"TAXA DE DISPARO DA ART. LATERAL:",
			[`${abilityName}_sidegunner_radius`]: 				"ALCANCE DA ART. LATERAL:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Flak Cannon",
			[`${abilityName}_Description`]: 				"Gyrocopter's attacks hit all enemy units in an area around it for a limited number of attacks.  Only the main target of attacks will receive attack bonuses such as Critical Strike.  Lasts %abilityduration% seconds or until the attacks are used.",
			[`${abilityName}_scepter_description`]: 				"Adds a Side Gunner that at random attacks enemy units near Gyrocopter. When Flak Cannon is active, side gunner attacks 2 units instead. Prioritizes furthest unit away within its range.",
			[`${abilityName}_Lore`]: 				"This newly revamped Gyrocopter has attached enough armaments to assault in a 360 degree radius.",
			[`${abilityName}_Note0`]: 				"Attack range for the primary attack is unchanged.",
			[`${abilityName}_Note1`]: 				"Break disables Side Gunner.",
			[`${abilityName}_radius`]: 				"RADIUS:",
			[`${abilityName}_max_attacks`]: 				"MAX ATTACKS:",
			[`${abilityName}_bonus_night_vision`]: 				"BONUS NIGHT VISION:",
			[`${abilityName}_sidegunner_fire_rate`]: 				"SIDE GUNNER FIRE RATE:",
			[`${abilityName}_sidegunner_radius`]: 				"SIDE GUNNER ATTACK RADIUS:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Cañón Antiaéreo",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Flak Cannon</font></b>.\n\nLos ataques de Gyrocopter impactan en todos los enemigos en un área a su alrededor durante un número determinado de ataques. Solo el objetivo principal de los ataques recibirá bonificaciones de ataque como Impacto Crítico. Dura %abilityduration% s o hasta que se usen todos los ataques.",
			[`${abilityName}_scepter_description`]: 				"Añade un Artillero Lateral que ataca aleatoriamente a las unidades enemigas cercanas a Gyrocopter. Cuando Cañón Antiaéreo está activo, el Artillero Lateral ataca a 2 unidades en su lugar. Prioriza a la unidad más alejada dentro de su alcance.",
			[`${abilityName}_Lore`]: 				"Este nuevo y mejorado girocóptero tiene suficientes armas instaladas como para asaltar en un radio de 360 grados.",
			[`${abilityName}_Note0`]: 				"El alcance del ataque principal no cambia.",
			[`${abilityName}_Note1`]: 				"Ruptura neutraliza Artillero Lateral.",
			[`${abilityName}_radius`]: 				"RADIO:",
			[`${abilityName}_max_attacks`]: 				"ATAQUES MÁXIMOS:",
			[`${abilityName}_bonus_night_vision`]: 				"VISIÓN NOCTURNA ADICIONAL:",
			[`${abilityName}_sidegunner_fire_rate`]: 				"CADENCIA DE TIRO DE ARTILLERO LATERAL:",
			[`${abilityName}_sidegunner_radius`]: 				"RADIO DE ATAQUE DE ARTILLERO LATERAL:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Flak Cannon",
			[`${abilityName}_Description`]: 				"Несколько следующих атак героя сопровождаются залпами по всем врагам в области вокруг него. Эффекты атаки (например, критический урон) действуют только на основную цель. Неиспользованные залпы пропадают через %abilityduration% сек.",
			[`${abilityName}_scepter_description`]: 				"Добавляет автоматическую турель, которая стреляет по случайному врагу неподалёку. Во время действия способности Flak Cannon турель атакует сразу двух врагов. Выбирает самую далёкую цель в радиусе действия.",
			[`${abilityName}_Lore`]: 				"Арсенал обновлённого летательного аппарата Аурела позволяет стрелять на все 360 градусов.",
			[`${abilityName}_Note0`]: 				"Дальность атаки по основной цели не изменяется.",
			[`${abilityName}_Note1`]: 				"Автоматическая турель отключается истощением.",
			[`${abilityName}_radius`]: 				"РАДИУС:",
			[`${abilityName}_max_attacks`]: 				"ЧИСЛО ЗАЛПОВ:",
			[`${abilityName}_bonus_night_vision`]: 				"ДОП. НОЧНОЙ ОБЗОР:",
			[`${abilityName}_sidegunner_fire_rate`]: 				"ИНТЕРВАЛ АТАКИ ТУРЕЛИ:",
			[`${abilityName}_sidegunner_radius`]: 				"РАДИУС АТАКИ ТУРЕЛИ:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"高射火炮",
			[`${abilityName}_Description`]: 				"矮人直升机的攻击会击中目标周围一定范围内的所有敌人，持续一定次数的攻击。只有主要目标会受到致命一击等攻击特效。持续%abilityduration%秒或攻击次数耗尽。",
			[`${abilityName}_scepter_description`]: 				"增加侧翼机枪，对矮人直升机附近的随机敌方单位发动攻击。开启高射火炮时，侧面机枪会攻击2个单位。优先攻击最远的单位。",
			[`${abilityName}_Lore`]: 				"这架新近改造的旋翼机装备了足够的弹药，可以攻击360度全范围内的敌人。",
			[`${abilityName}_Note0`]: 				"对主目标的攻击距离没有改变。",
			[`${abilityName}_Note1`]: 				"破坏会使侧翼机枪失效。",
			[`${abilityName}_radius`]: 				"作用范围：",
			[`${abilityName}_max_attacks`]: 				"最多攻击次数：",
			[`${abilityName}_bonus_night_vision`]: 				"额外夜间视野：",
			[`${abilityName}_sidegunner_fire_rate`]: 				"侧翼机枪攻击间隔：",
			[`${abilityName}_sidegunner_radius`]: 				"侧翼机枪攻击范围：",
			},
        }
    }
}