import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_abaddon_aphotic_shield"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Escudo Afótico",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Aphotic Shield</font></b>\n \nConvoca energias sombrias ao redor de uma unidade aliada, dissipando-a e criando uma barreira contra todo tipo de dano que absorve uma determinada quantidade de dano antes de expirar. Quando a barreira é destruída, ela explode e causa uma quantidade de dano igual à absorvida em uma área ao seu redor.\n\nTIPO DE DISSIPAÇÃO: Poderosa",
			[`${abilityName}_facet_abaddon_mephitic_shroud`]: 				"Aumenta o valor da barreira, mas não explode mais ao expirar. %absorb_to_damage%%% do dano absorvido é causado a inimigos próximos. Aumenta o intervalo entre usos.",
			[`${abilityName}_Shard_Description`]: 				"%absorb_to_damage%%% do dano absorvido é causado contra inimigos próximos.",
			[`${abilityName}_Lore`]: 				"As forças da neblina negra ascendem para absorver ataques da mesma forma que absorvem a luz.",
			[`${abilityName}_duration`]: 				"DURAÇÃO:",
			[`${abilityName}_damage_absorb`]: 				"BARREIRA CONTRA DANO:",
			[`${abilityName}_radius`]: 				"RAIO DA EXPLOSÃO:",
			[`${abilityName}_absorb_damage_aoe`]: 				"RAIO DO RETORNO DE DANO:",
			[`${abilityName}_Note0`]: 				"O dano máximo sempre será causado, seja por duração ou dano absorvido.",
			[`${abilityName}_Note1`]: 				"A explosão não atinge unidades escondidas na névoa de guerra.",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Aphotic Shield",
			[`${abilityName}_Description`]: 				"Summons dark energies around an ally unit, dispelling them and creating an all damage barrier that absorbs a set amount of damage before expiring. When the barrier is destroyed it will burst and deal damage equal to the amount it could absorb to an area around it.\n\nDISPEL TYPE: Strong Dispel",
			[`${abilityName}_facet_abaddon_mephitic_shroud`]: 				"Damage barrier amount increased, but no longer bursts upon expiration. %absorb_to_damage%%% of absorbed damage is dealt to nearby enemies. Increases cooldown.",
			[`${abilityName}_Shard_Description`]: 				"%absorb_to_damage%%% of absorbed damage is dealt to nearby enemies.",
			[`${abilityName}_Lore`]: 				"The powers of the black mist rise to absorb attacks like the black mist absorbs light.",
			[`${abilityName}_duration`]: 				"DURATION:",
			[`${abilityName}_damage_absorb`]: 				"DAMAGE BARRIER:",
			[`${abilityName}_radius`]: 				"BURST RADIUS:",
			[`${abilityName}_absorb_damage_aoe`]: 				"RETURN DAMAGE RADIUS:",
			[`${abilityName}_Note0`]: 				"The max damage is always dealt whether the barrier is destroyed by expiring or absorbing damage.",
			[`${abilityName}_Note1`]: 				"The explosion does not damage units hidden by the fog of war.",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Escudo Afótico",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Aphotic Shield</font></b>.\n\nInvoca energías oscuras alrededor de una unidad aliada, disipándola y creando una barrera contra todo daño que absorbe una cantidad fija de daño antes de disiparse. Cuando la barrera se destruye, explota e inflige en el área a su alrededor un daño igual a la cantidad que haya podido absorber.\n\nTIPO DE DISIPACIÓN: Fuerte.",
			[`${abilityName}_facet_abaddon_mephitic_shroud`]: 				"Aumenta la cantidad de daño que puede absorber la barrera, pero ya no explota tras expirar. Se inflige un %absorb_to_damage% %% del daño absorbido a los enemigos cercanos. Aumenta el tiempo de recarga.",
			[`${abilityName}_Shard_Description`]: 				"Inflige un %absorb_to_damage% %% del daño absorbido a los enemigos cercanos.",
			[`${abilityName}_Lore`]: 				"Los poderes de la niebla oscura se alzan para absorber los ataques igual que la niebla absorbe la luz.",
			[`${abilityName}_duration`]: 				"DURACIÓN:",
			[`${abilityName}_damage_absorb`]: 				"BARRERA DE DAÑO:",
			[`${abilityName}_radius`]: 				"RADIO DE EXPLOSIÓN:",
			[`${abilityName}_absorb_damage_aoe`]: 				"RADIO DEL DAÑO DEVUELTO:",
			[`${abilityName}_Note0`]: 				"El daño máximo siempre se inflige si la barrera se destruye al expirar o absorber daño.",
			[`${abilityName}_Note1`]: 				"La explosión no daña las unidades ocultas por la niebla de guerra.",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Aphotic Shield",
			[`${abilityName}_Description`]: 				"Окружает союзника барьером из тёмной энергии, который поглощает урон всех типов, а в момент создания применяет на цель развеивание. Если барьер пропадёт или его уничтожат, он взорвётся и нанесёт врагам вокруг урон, равный своему здоровью.\n\nТИП РАЗВЕИВАНИЯ: сильное",
			[`${abilityName}_facet_abaddon_mephitic_shroud`]: 				"Здоровье барьера увеличено, но он не взрывается в конце действия. %absorb_to_damage%%% от поглощённого урона отражается во врагов неподалёку. Увеличивает перезарядку.",
			[`${abilityName}_Shard_Description`]: 				"При поглощении урона %absorb_to_damage%%% от него наносится врагам рядом с целью.",
			[`${abilityName}_Lore`]: 				"Сила чёрного тумана поглощает удары так же, как он сам поглощает дневной свет.",
			[`${abilityName}_duration`]: 				"ДЛИТЕЛЬНОСТЬ:",
			[`${abilityName}_damage_absorb`]: 				"ЗДОРОВЬЕ БАРЬЕРА:",
			[`${abilityName}_radius`]: 				"РАДИУС ВЗРЫВА:",
			[`${abilityName}_absorb_damage_aoe`]: 				"РАДИУС ОТВЕТНОГО УРОНА:",
			[`${abilityName}_Note0`]: 				"Взрыв наносит максимальный урон вне зависимости от того, сколько урона поглотил барьер.",
			[`${abilityName}_Note1`]: 				"Взрыв щита не наносит урон существам в тумане войны.",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"无光之盾",
			[`${abilityName}_Description`]: 				"召唤黑暗能量环绕友方单位，驱散他们并创造一个全伤害护盾，护盾在消失前能吸收一定量的伤害。护盾消失或被摧毁后将会爆炸，对附近区域的单位造成伤害，伤害值为护盾的最大吸收量。\n\n驱散类型：强驱散",
			[`${abilityName}_facet_abaddon_mephitic_shroud`]: 				"伤害护盾数值提升，但是护盾被摧毁后不再爆炸。%absorb_to_damage%%%吸收伤害会反弹给附近的敌人。增加冷却时间。",
			[`${abilityName}_Shard_Description`]: 				"会对附近敌人造成吸收伤害的%absorb_to_damage%%%。",
			[`${abilityName}_Lore`]: 				"升腾的黑雾将敌人的招数一一吞噬，如同吞噬日光。",
			[`${abilityName}_duration`]: 				"持续时间：",
			[`${abilityName}_damage_absorb`]: 				"伤害护盾：",
			[`${abilityName}_radius`]: 				"爆炸作用范围：",
			[`${abilityName}_absorb_damage_aoe`]: 				"反弹伤害范围：",
			[`${abilityName}_Note0`]: 				"不论护盾因持续时间结束或吸收足够伤害后被摧毁都将造成最大伤害。",
			[`${abilityName}_Note1`]: 				"爆炸将不会对战争迷雾内单位造成伤害。",
			},
        }
    }
}