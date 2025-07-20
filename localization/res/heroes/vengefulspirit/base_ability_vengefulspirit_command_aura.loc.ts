import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_vengefulspirit_command_aura"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Aura da Vingança",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Vengeance Aura</font></b>\n \nA presença da Vengeful Spirit aumenta o dano causado por heróis aliados próximos.",
			[`${abilityName}_scepter_description`]: 				"Ao morrer, cria uma ilusão resistente da Vengeful Spirit, que causa dano completo, sofre dano adicional e pode usar todas as suas habilidades, além de compartilhar a XP obtida. Caso a ilusão esteja viva quando a Vengeful Spirit renascer, ela assumirá o seu lugar. Ilusões resistentes não são mortas instantaneamente por habilidades.",
			[`${abilityName}_Lore`]: 				"Mesmo que não compartilhem de sua paixão insaciável por vingança, seus aliados são influenciados pelo seu fanatismo em combate.",
			[`${abilityName}_Note0`]: 				"Quebras desativam a aura de dano.",
			[`${abilityName}_bonus_base_damage`]: 				"%DANO BASE ADICIONAL:",
			[`${abilityName}_aura_radius`]: 				"RAIO:",
			[`${abilityName}_scepter_illusion_damage_in_pct`]: 				"%DANO SOFRIDO (ILUSÃO):",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Vengeance Aura",
			[`${abilityName}_Description`]: 				"Vengeful Spirit's presence increases the damage of nearby friendly heroes.",
			[`${abilityName}_scepter_description`]: 				"Upon death, creates a strong illusion of Vengeful Spirit that deals full damage, takes increased damage, and can cast all of her spells. If the illusion is alive when Vengeful Spirit respawn, she will take its place. XP earned by her illusion is given to her. Strong Illusions are not instantly killed by spells.",
			[`${abilityName}_Lore`]: 				"Although they may not share her undying passion for revenge, allies do draw on her fanaticism in combat.",
			[`${abilityName}_Note0`]: 				"Break disables the damage aura.",
			[`${abilityName}_bonus_base_damage`]: 				"%BASE DAMAGE BONUS:",
			[`${abilityName}_aura_radius`]: 				"RADIUS:",
			[`${abilityName}_scepter_illusion_damage_in_pct`]: 				"%ILLUSION DAMAGE TAKEN:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Aura Vengativa",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Vengeance Aura</font></b>.\n\nLa presencia de Vengeful Spirit aumenta el daño de los héroes aliados cercanos.",
			[`${abilityName}_scepter_description`]: 				"Al morir, crea una ilusión fuerte de Vengeful Spirit que inflige daño completo, recibe daño aumentado y puede lanzar todos los hechizos de ella. Si la ilusión está viva cuando Vengeful Spirit reaparece, ocupará su lugar. La EXP obtenida por su ilusión se concede a Vengeful Spirit. Las ilusiones fuertes no son asesinadas instantáneamente por los hechizos.",
			[`${abilityName}_Lore`]: 				"Aunque puede que no compartan su pasión desenfrenada por la venganza, sus aliados se inspiran en su fanatismo en combate.",
			[`${abilityName}_Note0`]: 				"Ruptura neutraliza el aura de daño.",
			[`${abilityName}_bonus_base_damage`]: 				"%BONIFICACIÓN DE DAÑO BASE:",
			[`${abilityName}_aura_radius`]: 				"RADIO:",
			[`${abilityName}_scepter_illusion_damage_in_pct`]: 				"%DAÑO RECIBIDO POR LA ILUSIÓN:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Vengeance Aura",
			[`${abilityName}_Description`]: 				"Присутствие героя увеличивает урон союзных героев неподалёку.",
			[`${abilityName}_scepter_description`]: 				"При гибели владельца создаёт на его месте иллюзию, которая является сильной (не умирает от заклинаний, мгновенно убивающих иллюзии) и может применять его способности. Иллюзия наносит полный урон, а получает — увеличенный. Если она жива в момент возрождения владельца, он займёт её место. Опыт, который зарабатывает иллюзия, передаётся владельцу.",
			[`${abilityName}_Lore`]: 				"Отнюдь не все разделяют всепоглощающую жажду мести, однако чрезмерный фанатизм воодушевляет на подвиги.",
			[`${abilityName}_Note0`]: 				"Аура, увеличивающая урон, отключается истощением.",
			[`${abilityName}_bonus_base_damage`]: 				"%ДОП. БАЗОВЫЙ УРОН:",
			[`${abilityName}_aura_radius`]: 				"РАДИУС:",
			[`${abilityName}_scepter_illusion_damage_in_pct`]: 				"%УРОН ПО ИЛЛЮЗИИ:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"复仇光环",
			[`${abilityName}_Description`]: 				"复仇之魂的存在提升了附近友方英雄的攻击力。",
			[`${abilityName}_scepter_description`]: 				"死亡时产生一个复仇之魂的强幻象，继承全额攻击力，承受的伤害增加，可以施放自己的所有技能。复仇之魂复活时若幻象依然存在，则自身会直接将其取代。幻象获得的经验将给予英雄。强幻象不会被相关技能秒杀。",
			[`${abilityName}_Lore`]: 				"尽管盟友可能不会理解她对于复仇那无休止的热爱，但作战时他们还是会利用她的狂热。",
			[`${abilityName}_Note0`]: 				"破坏会使攻击力光环失效。",
			[`${abilityName}_bonus_base_damage`]: 				"%基础攻击力加成：",
			[`${abilityName}_aura_radius`]: 				"作用范围：",
			[`${abilityName}_scepter_illusion_damage_in_pct`]: 				"%幻象承受伤害：",
			},
        }
    }
}