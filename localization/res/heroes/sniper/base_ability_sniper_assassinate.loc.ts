import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_sniper_assassinate"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Assassinar",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Assassinate</font></b>\n \nO Sniper trava a sua mira em uma unidade inimiga alvo e, após um curto período, dispara uma bala devastadora que causa miniatordoamento e dano a longa distância. Sempre que o Sniper mata um herói inimigo, esta habilidade é restaurada.",
			[`${abilityName}_scepter_description`]: 				"Faz com que <b><font color='#F2A93E'>Assassinar</font></b> dispare mais rapidamente e atordoe o alvo.",
			[`${abilityName}_Lore`]: 				"Para cumprir a profecia e retornar à sua aldeia natal, Kardel deve dar outro disparo tão perfeito quanto aquele no dia do seu teste ancestral.",
			[`${abilityName}_Note0`]: 				"O efeito da mira só é visível para os aliados.",
			[`${abilityName}_Note1`]: 				"Invisibilidade não anulará o projétil.",
			[`${abilityName}_damage`]: 				"DANO:",
			[`${abilityName}_abilitycastpoint`]: 				"DURAÇÃO DA MIRA:",
			[`${abilityName}_scepter_stun_duration`]: 				"DURAÇÃO DO ATORDOAMENTO:",
			[`${abilityName}_scepter_cast_point`]: 				"DURAÇÃO DA MIRA:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Assassinate",
			[`${abilityName}_Description`]: 				"Sniper locks onto a target enemy unit and, after a short aiming duration, fires a devastating shot that deals Sniper's attack damage plus bonus damage at long range and mini-stuns the target. Whenever Sniper kills an enemy hero, Assassinate is refreshed.",
			[`${abilityName}_scepter_description`]: 				"Causes Assassinate to fire quicker and stun the enemy target.",
			[`${abilityName}_Lore`]: 				"In order to fulfill the prophecy and return to his home town, Kardel must make another shot as perfect as the one on the day of his ancient test.",
			[`${abilityName}_Note0`]: 				"Crosshair effect is only visible to allies.",
			[`${abilityName}_Note1`]: 				"Invisibility doesn't disjoint the projectile.",
			[`${abilityName}_damage`]: 				"DAMAGE:",
			[`${abilityName}_abilitycastpoint`]: 				"AIM DURATION:",
			[`${abilityName}_scepter_stun_duration`]: 				"STUN DURATION:",
			[`${abilityName}_scepter_cast_point`]: 				"AIM DURATION:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Asesinar",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Assassinate</font></b>.\n\nSniper apunta a una unidad enemiga objetivo y, tras apuntar por un instante, realiza un disparo devastador que inflige el daño de ataque de Sniper, además de daño adicional a gran distancia, y miniaturde al objetivo. Cada vez que Sniper mate a un héroe enemigo, Assassinate volverá a estar disponible.",
			[`${abilityName}_scepter_description`]: 				"Hace que Asesinar dispare más rápido y aturda al objetivo enemigo.",
			[`${abilityName}_Lore`]: 				"Para cumplir la profecía y regresar a su pueblo natal, Kardel debe realizar otro disparo tan perfecto como el del día de su prueba ancestral.",
			[`${abilityName}_Note0`]: 				"El efecto del punto de mira solo es visible para los aliados.",
			[`${abilityName}_Note1`]: 				"La invisibilidad no esquiva el proyectil.",
			[`${abilityName}_damage`]: 				"DAÑO:",
			[`${abilityName}_abilitycastpoint`]: 				"DURACIÓN DE APUNTADO:",
			[`${abilityName}_scepter_stun_duration`]: 				"DURACIÓN DEL ATURDIMIENTO:",
			[`${abilityName}_scepter_cast_point`]: 				"DURACIÓN DE APUNTADO:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Assassinate",
			[`${abilityName}_Description`]: 				"Герой с огромного расстояния целится во вражеское существо и после небольшой задержки совершает сокрушительный выстрел, ненадолго оглушающий цель и наносящий как базовый урон, так и урон от атаки героя. Когда владелец этой способности убивает героя, её перезарядка сбрасывается.",
			[`${abilityName}_scepter_description`]: 				"Способность применяется быстрее и оглушает жертву.",
			[`${abilityName}_Lore`]: 				"Чтобы осуществить пророчество и вернуться в родной город, Кардел должен быть уверен, что следующий выстрел будет столь же метким, как и тот, что он совершил в далёкий день своего испытания.",
			[`${abilityName}_Note0`]: 				"Значок прицела виден только союзникам.",
			[`${abilityName}_Note1`]: 				"Снаряд этой способности нельзя сбить с цели невидимостью.",
			[`${abilityName}_damage`]: 				"УРОН:",
			[`${abilityName}_abilitycastpoint`]: 				"ВРЕМЯ ПОДГОТОВКИ:",
			[`${abilityName}_scepter_stun_duration`]: 				"ДЛИТЕЛЬНОСТЬ ОГЛУШЕНИЯ:",
			[`${abilityName}_scepter_cast_point`]: 				"ВРЕМЯ ПОДГОТОВКИ:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"暗杀",
			[`${abilityName}_Description`]: 				"狙击手锁定一个目标敌方单位，经过短时间瞄准后从远距离射出一发毁灭性的子弹，对目标造成狙击手的攻击伤害 + 额外伤害及短暂眩晕。每当狙击手击杀敌方英雄时就会重置暗杀的冷却时间。",
			[`${abilityName}_scepter_description`]: 				"暗杀释放得更快，并眩晕敌方目标。",
			[`${abilityName}_Lore`]: 				"为了完成预言然后返回家乡，卡德尔必须和参加古老考验那天一样，做出完美的射击。",
			[`${abilityName}_Note0`]: 				"准星效果只对队友可见。",
			[`${abilityName}_Note1`]: 				"隐身不能躲避该技能弹道。",
			[`${abilityName}_damage`]: 				"攻击力：",
			[`${abilityName}_abilitycastpoint`]: 				"瞄准持续时间：",
			[`${abilityName}_scepter_stun_duration`]: 				"眩晕时间：",
			[`${abilityName}_scepter_cast_point`]: 				"瞄准持续时间：",
			},
        }
    }
}