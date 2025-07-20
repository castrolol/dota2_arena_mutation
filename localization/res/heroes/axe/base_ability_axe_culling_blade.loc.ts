import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_axe_culling_blade"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Lâmina de Abate",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Culling Blade</font></b>\n \nO Axe encontra fraquezas e golpeia, causando dano puro. Quando um herói inimigo for morto pela Lâmina de Abate, o intervalo entre usos da habilidade é zerado, e todas as unidades aliadas próximas ganham velocidade de movimento e armadura.",
			[`${abilityName}_Note0`]: 				"Mortes com a <b><font color='#F2A93E'>Lâmina de Abate</font></b> não podem ser evitadas por outras habilidades, como <b><font color='#F2A93E'>Cova Rasa</font></b>.",
			[`${abilityName}_Lore`]: 				"Mogul Khan é a encarnação da batalha e da fúria, jogando-se em uma fatalidade macabra contra aqueles que ousam engajar-se numa batalha com o Axe.",
			[`${abilityName}_damage`]: 				"DANO:",
			[`${abilityName}_speed_bonus`]: 				"%BÔNUS DE VELOCIDADE POR ABATE:",
			[`${abilityName}_armor_bonus`]: 				"ARMADURA ADICIONAL POR VÍTIMA:",
			[`${abilityName}_speed_aoe`]: 				"RAIO DO EFEITO POR VÍTIMA:",
			[`${abilityName}_speed_duration`]: 				"DURAÇÃO DO EFEITO POR VÍTIMA:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Culling Blade",
			[`${abilityName}_Description`]: 				"Axe spots a weakness and strikes, dealing pure damage. When an enemy hero is killed with Culling Blade, its cooldown is reset, and all nearby allied units gain bonus movement speed and armor.",
			[`${abilityName}_Note0`]: 				"Culling Blade death cannot be prevented with other abilities like Shallow Grave.",
			[`${abilityName}_Lore`]: 				"Mogul Khan is the embodiment of battle and fury, launching into a gruesome fatality against those who dare engage the Axe in combat.",
			[`${abilityName}_damage`]: 				"DAMAGE:",
			[`${abilityName}_speed_bonus`]: 				"%KILL MOVE SPEED BONUS:",
			[`${abilityName}_armor_bonus`]: 				"KILL ARMOR BONUS:",
			[`${abilityName}_speed_aoe`]: 				"KILL BUFF RADIUS:",
			[`${abilityName}_speed_duration`]: 				"KILL BUFF DURATION:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Hoja Selectiva",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Culling Blade</font></b>.\n\nAxe detecta las debilidades y ataca, infligiendo daño puro. Cuando un héroe enemigo es asesinado con Hoja Selectiva, el tiempo de recarga se reinicia y las unidades aliadas cercanas obtienen velocidad de movimiento y armadura adicionales.",
			[`${abilityName}_Note0`]: 				"Las muertes causadas por Hoja Selectiva no se pueden evitar con otras habilidades como Tumba Vacía.",
			[`${abilityName}_Lore`]: 				"Mogul Khan es la personificación de la batalla y la furia, lanzándose a una muerte horrible contra aquellos que se atrevan a enfrentarse a Axe en combate.",
			[`${abilityName}_damage`]: 				"DAÑO:",
			[`${abilityName}_speed_bonus`]: 				"%BONIF. DE VELOCIDAD DE MOVIMIENTO POR VÍCTIMA:",
			[`${abilityName}_armor_bonus`]: 				"BONIFICACIÓN DE ARMADURA POR VÍCTIMA:",
			[`${abilityName}_speed_aoe`]: 				"RADIO DE EF. POSITIVO POR VÍCTIMA:",
			[`${abilityName}_speed_duration`]: 				"DURACIÓN DEL EF. POSITIVO POR VÍCTIMA:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Culling Blade",
			[`${abilityName}_Description`]: 				"Герой находит слабую точку врага и наносит ему чистый урон. Если убить этой способностью вражеского героя, её перезарядка сбрасывается, а все союзники поблизости временно получат дополнительную скорость передвижения и броню.",
			[`${abilityName}_Note0`]: 				"Убийство этой способностью нельзя предотвратить другими способностями наподобие Shallow Grave.",
			[`${abilityName}_Lore`]: 				"Словно воплощение самой яростной битвы, Могул-хан жестоко расправляется с теми, кто осмелился дать ему бой.",
			[`${abilityName}_damage`]: 				"УРОН:",
			[`${abilityName}_speed_bonus`]: 				"%ДОП. СКОРОСТЬ ПЕРЕДВИЖЕНИЯ:",
			[`${abilityName}_armor_bonus`]: 				"БОНУС К БРОНЕ:",
			[`${abilityName}_speed_aoe`]: 				"РАДИУС БОНУСА СОЮЗНИКАМ:",
			[`${abilityName}_speed_duration`]: 				"ДЛИТЕЛЬНОСТЬ БОНУСА:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"淘汰之刃",
			[`${abilityName}_Description`]: 				"斧王洞察到弱点并出击，造成纯粹伤害。淘汰之刃击杀敌方英雄时将重置冷却时间，而附近所有友军单位获得移动速度和护甲加成。",
			[`${abilityName}_Note0`]: 				"淘汰之刃的斩杀效果无法被薄葬等技能阻止。",
			[`${abilityName}_Lore`]: 				"蒙哥可汗是战斗与狂怒的化身，胆敢与斧王为敌者只有死路一条。",
			[`${abilityName}_damage`]: 				"伤害：",
			[`${abilityName}_speed_bonus`]: 				"%斩杀后移动速度加成：",
			[`${abilityName}_armor_bonus`]: 				"击杀护甲加成：",
			[`${abilityName}_speed_aoe`]: 				"斩杀后效果范围：",
			[`${abilityName}_speed_duration`]: 				"斩杀后效果持续时间：",
			},
        }
    }
}