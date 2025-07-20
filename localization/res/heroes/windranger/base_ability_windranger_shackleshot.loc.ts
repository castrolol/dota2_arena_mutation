import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_windranger_shackleshot"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Amarras",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Shackleshot</font></b>\n \nPrende o alvo a uma unidade inimiga ou árvore em uma linha diretamente atrás do alvo. Se não houver uma unidade ou árvore, o tempo de atordoamento é reduzido para %fail_stun_duration% segundo.",
			[`${abilityName}_Facet_windrunner_tangled`]: 				"As Amarras são aplicadas a todas as unidades e árvores atrás da unidade alvejada, e concedem dano de ataque adicional à Windranger para cada unidade e árvore adicional amarrada. Criaturas e árvores concedem menos dano adicional.",
			[`${abilityName}_Lore`]: 				"A variedade de habilidades com o arco da Windranger inclui uma flecha ligada a cordas grossas que amarram qualquer alvo que tente escapar.",
			[`${abilityName}_Note0`]: 				"Esta habilidade pode amarrar dois inimigos juntos, atordoando ambos.",
			[`${abilityName}_Note1`]: 				"Pode prender o alvo a uma unidade inimiga ou árvore em até %shackle_distance% unidades atrás dele.",
			[`${abilityName}_Note2`]: 				"Esta magia não pode ser anulada.",
			[`${abilityName}_stun_duration`]: 				"DURAÇÃO DAS AMARRAS:",
			[`${abilityName}_bonus_damage_per_hero`]: 				"DANO ADICIONAL POR HERÓI:",
			[`${abilityName}_bonus_damage_per_other_pct`]: 				"%DANO POR CRIATURA/ÁRVORE:",
			[`${abilityName}_damage_buff_duration`]: 				"DURAÇÃO DO DANO ADICIONAL:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Shackleshot",
			[`${abilityName}_Description`]: 				"Shackles the target to an enemy unit or tree in a line directly behind it.  If no unit or tree is present, the stun duration is reduced to %fail_stun_duration%.",
			[`${abilityName}_Facet_windrunner_tangled`]: 				"Shackleshot applies to all units and trees behind the target unit and grants Windranger bonus attack damage for each additional shackled unit and tree. Creeps and trees grant less bonus damage.",
			[`${abilityName}_Lore`]: 				"Windranger's variety of bow skills includes an arrow with thick ropes attached to encumber any escaping target.",
			[`${abilityName}_Note0`]: 				"This spell can shackle two enemies together, stunning them both.",
			[`${abilityName}_Note1`]: 				"Can shackle the target to an enemy unit or tree at most %shackle_distance% behind the target.",
			[`${abilityName}_Note2`]: 				"Shackleshot can be disjointed.",
			[`${abilityName}_stun_duration`]: 				"SHACKLE DURATION:",
			[`${abilityName}_bonus_damage_per_hero`]: 				"BONUS DAMAGE PER HERO:",
			[`${abilityName}_bonus_damage_per_other_pct`]: 				"%CREEP/TREE DAMAGE:",
			[`${abilityName}_damage_buff_duration`]: 				"DAMAGE BUFF DURATION:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Disparo Encadenador",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Shackleshot</font></b>.\n\nEncadena al objetivo a una unidad enemiga o un árbol directamente a sus espaldas. Si no hay unidades o árboles cerca, la duración del aturdimiento se reduce a %fail_stun_duration%.",
			[`${abilityName}_Facet_windrunner_tangled`]: 				"Disparo Encadenador se aplica a todas las unidades y árboles situados detrás de la unidad objetivo y otorga a Windranger daño de ataque adicional por cada unidad y árbol adicionales encadenados. Los creeps y los árboles otorgan menos daño adicional.",
			[`${abilityName}_Lore`]: 				"Las variadas habilidades con el arco de Windranger incluyen una flecha con cuerdas gruesas atadas para entorpecer a cualquier objetivo que intente escapar.",
			[`${abilityName}_Note0`]: 				"Este hechizo puede encadenar a dos enemigos entre sí y aturdirlos.",
			[`${abilityName}_Note1`]: 				"Puede encadenar al objetivo a una unidad enemiga o árbol hasta %shackle_distance% unidades detrás de él.",
			[`${abilityName}_Note2`]: 				"Disparo Encadenador se puede esquivar.",
			[`${abilityName}_stun_duration`]: 				"DURACIÓN DEL ENCADENAMIENTO:",
			[`${abilityName}_bonus_damage_per_hero`]: 				"DAÑO ADICIONAL POR HÉROE:",
			[`${abilityName}_bonus_damage_per_other_pct`]: 				"%DAÑO DE CREEPS/ÁRBOLES:",
			[`${abilityName}_damage_buff_duration`]: 				"DURACIÓN DEL EFECTO POSITIVO DE DAÑO:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Shackleshot",
			[`${abilityName}_Description`]: 				"Связывает цель с находящимся позади неё врагом или деревом. Если цель не будет с чем-либо связана, длительность оглушения сократится до %fail_stun_duration% сек.",
			[`${abilityName}_Facet_windrunner_tangled`]: 				"Также связывает всех существ и деревья позади цели. Увеличивает урон от атак владельца способности за каждое дополнительное существо и дерево (бонус за крипов и деревья меньше).",
			[`${abilityName}_Lore`]: 				"Мастерство владения луком позволяет Лиралей выпустить стрелу с толстой верёвкой, которая не даст жертве вырваться.",
			[`${abilityName}_Note0`]: 				"Может связать двух противников, оглушая обоих.",
			[`${abilityName}_Note1`]: 				"Связывает цель с вражеским существом или деревом на расстоянии до %shackle_distance%.",
			[`${abilityName}_Note2`]: 				"Снаряд этой способности можно сбить с цели.",
			[`${abilityName}_stun_duration`]: 				"ДЛИТЕЛЬНОСТЬ:",
			[`${abilityName}_bonus_damage_per_hero`]: 				"ДОП. УРОН ЗА ГЕРОЯ:",
			[`${abilityName}_bonus_damage_per_other_pct`]: 				"%ДОП. УРОН ЗА КРИПА/ДЕРЕВО:",
			[`${abilityName}_damage_buff_duration`]: 				"ДЛИТЕЛЬНОСТЬ ДОП. УРОНА:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"束缚击",
			[`${abilityName}_Description`]: 				"将目标束缚在正对其后的一个敌方单位或树上。若目标后面没有其它敌方单位或树木，则眩晕时间减少至%fail_stun_duration%秒。",
			[`${abilityName}_Facet_windrunner_tangled`]: 				"束缚击会对目标单位身后的所有单位和树木施加，每个额外束缚的单位和树木都会使风行者获得攻击力加成。非英雄单位和树木提供的攻击力加成较少。",
			[`${abilityName}_Lore`]: 				"风行者的诸多弓技中，有一种用密集的绳索来束缚目标，让其难以逃脱的箭矢。",
			[`${abilityName}_Note0`]: 				"该技能可以将两个敌人一起束缚，使他们同时眩晕。",
			[`${abilityName}_Note1`]: 				"束缚击能将目标束缚在身后最多%shackle_distance%距离的敌方单位或树木。",
			[`${abilityName}_Note2`]: 				"束缚击可以被躲避。",
			[`${abilityName}_stun_duration`]: 				"束缚时间：",
			[`${abilityName}_bonus_damage_per_hero`]: 				"每个英雄的攻击力加成：",
			[`${abilityName}_bonus_damage_per_other_pct`]: 				"%非英雄/树木攻击力：",
			[`${abilityName}_damage_buff_duration`]: 				"攻击力加成持续时间：",
			},
        }
    }
}