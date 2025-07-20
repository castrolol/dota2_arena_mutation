import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_drow_ranger_marksmanship"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Pontaria",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Marksmanship</font></b>\n \nAs suas experiências em batalhas lhe dão a chance de disparar flechas com precisão e eficácia incríveis, atravessando a defesa inimiga e ignorando a sua armadura base. Não funciona caso haja heróis inimigos em um raio de %disable_range% unidades.",
			[`${abilityName}_Lore`]: 				"A Drow Ranger é a quintessência da proeza com um arco.",
			[`${abilityName}_Note0`]: 				"Acertos da <b><font color='#F2A93E'>Pontaria</font></b> têm Impacto Verdadeiro.",
			[`${abilityName}_chance`]: 				"%CHANCE:",
			[`${abilityName}_bonus_damage`]: 				"DANO FÍSICO ADICIONAL:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Marksmanship",
			[`${abilityName}_Description`]: 				"Drow's experiences in battle grant her a chance to launch arrows with incredible accuracy and effectiveness. Pierces through the enemy's defenses, ignoring their base armor. This ability is disabled if there is an enemy hero within %disable_range% range.",
			[`${abilityName}_Lore`]: 				"The Drow Ranger is the epitome of archery prowess.",
			[`${abilityName}_Note0`]: 				"Marksmanship procs have true strike.",
			[`${abilityName}_chance`]: 				"%CHANCE:",
			[`${abilityName}_bonus_damage`]: 				"BONUS PROC DAMAGE:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Puntería",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Marksmanship</font></b>.\n\nLa experiencia en batalla de Drow le da una probabilidad de lanzar flechas con una precisión y efectividad increíbles. Atraviesa las defensas del enemigo ignorando su armadura base. Esta habilidad se desactiva si hay un héroe enemigo dentro de un alcance de %disable_range%.",
			[`${abilityName}_Lore`]: 				"Drow Ranger es la personificación de la destreza en el tiro con arco.",
			[`${abilityName}_Note0`]: 				"Los efectos de Puntería tienen Ataque Certero.",
			[`${abilityName}_chance`]: 				"%PROBABILIDAD:",
			[`${abilityName}_bonus_damage`]: 				"DAÑO ADICIONAL POR ACTIVACIÓN:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Marksmanship",
			[`${abilityName}_Description`]: 				"Опыт в бою позволяет герою стрелять метче и эффективнее. С каждой атакой есть вероятность выпустить стрелу, игнорирующую базовую броню врага. Способность не действует, если в радиусе %disable_range% от её владельца есть вражеские герои.",
			[`${abilityName}_Lore`]: 				"Траксекс — воплощение мастерства стрельбы из лука.",
			[`${abilityName}_Note0`]: 				"Атакой под эффектом этой способности нельзя промахнуться.",
			[`${abilityName}_chance`]: 				"%ШАНС:",
			[`${abilityName}_bonus_damage`]: 				"ДОП. УРОН ПРИ СРАБАТЫВАНИИ:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"射手天赋",
			[`${abilityName}_Description`]: 				"卓尔游侠的战斗经验使她有概率发出极其精准高效的箭矢。箭矢将穿透敌人的防御，无视他们的基础护甲。如果%disable_range%范围内有敌方英雄，本技能没有效果。",
			[`${abilityName}_Lore`]: 				"卓尔游侠是弓箭手登峰造极的典型。",
			[`${abilityName}_Note0`]: 				"射手天赋的触发效果拥有克敌机先。",
			[`${abilityName}_chance`]: 				"%概率：",
			[`${abilityName}_bonus_damage`]: 				"额外触发伤害：",
			},
        }
    }
}