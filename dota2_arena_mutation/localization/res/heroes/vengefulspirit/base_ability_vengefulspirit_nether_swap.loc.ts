import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_vengefulspirit_nether_swap"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Troca das Profundezas",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Nether Swap</font></b>\n \nTroca instantaneamente de posição com um herói-alvo, seja aliado ou inimigo, interrompendo qualquer habilidade canalizada. Inimigos trocados sofrem dano, enquanto a Vengeful Spirit e aliados ganham uma barreira contra dano.",
			[`${abilityName}_Lore`]: 				"O martírio é um pequeno preço a se pagar pela vingança.",
			[`${abilityName}_Note0`]: 				"Pode ser usada em unidades imunes a magias.",
			[`${abilityName}_Note1`]: 				"As árvores próximas da Vengeful Spirit e o alvo serão destruídas ao lançar a habilidade.",
			[`${abilityName}_Note2`]: 				"Habilidades sendo canalizadas são interrompidas pela Troca das Profundezas.",
			[`${abilityName}_damage_reduction_duration`]: 				"DURAÇÃO DO ESCUDO:",
			[`${abilityName}_damage`]: 				"DANO/ESCUDO:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Nether Swap",
			[`${abilityName}_Description`]: 				"Instantaneously swaps positions with a target Hero, friend or enemy. Nether Swap interrupts channeling abilities on the target. Enemy Swapped units take damage. Vengeful Spirit and allied swapped units gain a barrier equal to the damage dealt.",
			[`${abilityName}_Lore`]: 				"Martyrdom is a small price to pay for vengeance.",
			[`${abilityName}_Note0`]: 				"Works on Spell Immune units.",
			[`${abilityName}_Note1`]: 				"Trees near Vengeful Spirit and the target will be destroyed when the spell is cast.",
			[`${abilityName}_Note2`]: 				"Channeling spells are interrupted by Nether Swap.",
			[`${abilityName}_damage_reduction_duration`]: 				"SHIELD DURATION:",
			[`${abilityName}_damage`]: 				"DAMAGE/SHIELD:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Intercambio Abisal",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Nether Swap</font></b>.\n\nIntercambia posiciones instantáneamente con el héroe objetivo, amigo o enemigo. Intercambio Abisal interrumpe las habilidades canalizadas del objetivo. Las unidades enemigas afectadas por Intercambio Abisal reciben daño, y Vengeful Spirit y las unidades aliadas en las que se use dicha habilidad obtienen una barrera que es igual al daño infligido.",
			[`${abilityName}_Lore`]: 				"El martirio es un pequeño precio a cambio de la venganza.",
			[`${abilityName}_Note0`]: 				"Funciona en unidades inmunes a hechizos.",
			[`${abilityName}_Note1`]: 				"Los árboles cerca de Vengeful Spirit y el objetivo son destruidos al lanzar el hechizo.",
			[`${abilityName}_Note2`]: 				"Intercambio Abisal interrumpe los hechizos canalizados.",
			[`${abilityName}_damage_reduction_duration`]: 				"DURACIÓN DEL ESCUDO:",
			[`${abilityName}_damage`]: 				"DAÑO/ESCUDO:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Nether Swap",
			[`${abilityName}_Description`]: 				"Мгновенно меняется местами с выбранным героем, останавливая его прерываемые заклинания. Если целью был враг, то способность нанесёт ему урон, а если союзник — даст ему барьер, здоровье которого равно урону способности. Владелец способности получает такой же барьер вне зависимости от цели.",
			[`${abilityName}_Lore`]: 				"Мученичество — совсем не большое воздаяние за месть.",
			[`${abilityName}_Note0`]: 				"Действует на существ, невосприимчивых к магии.",
			[`${abilityName}_Note1`]: 				"Уничтожает деревья рядом с героями, поменявшимися местами.",
			[`${abilityName}_Note2`]: 				"Останавливает прерываемые заклинания.",
			[`${abilityName}_damage_reduction_duration`]: 				"ДЛИТЕЛЬНОСТЬ БАРЬЕРА:",
			[`${abilityName}_damage`]: 				"УРОН/БАРЬЕР:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"移形换位",
			[`${abilityName}_Description`]: 				"与一个目标英雄瞬间交换位置，不论敌我。移形换位会打断目标的持续施法。敌方英雄被交换后受到伤害。复仇之魂和被交换的友方英雄都会获得等同于造成伤害的护盾。",
			[`${abilityName}_Lore`]: 				"牺牲只是为了复仇付出的小小代价。",
			[`${abilityName}_Note0`]: 				"对减益免疫单位有效。",
			[`${abilityName}_Note1`]: 				"技能施放后复仇之魂和目标附近的树木将会被摧毁。",
			[`${abilityName}_Note2`]: 				"移形换位能够打断持续施法。",
			[`${abilityName}_damage_reduction_duration`]: 				"护盾持续时间：",
			[`${abilityName}_damage`]: 				"伤害/护盾：",
			},
        }
    }
}