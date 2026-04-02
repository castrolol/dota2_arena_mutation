import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_lina_dragon_slave"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Dragão Escravo",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Dragon Slave</font></b>\n \nCanaliza o hálito de um dragão, liberando uma onda de fogo que queima todos os inimigos no seu caminho.",
			[`${abilityName}_Lore`]: 				"Nas terras áridas e chamuscadas de Misrule, Lina aprendeu a manipular o sopro escaldante da Serpe do Deserto como uma forma de entretenimento.",
			[`${abilityName}_Note0`]: 				"Dragão Escravo pode atingir unidades que estão a até 1225 unidades de distância.",
			[`${abilityName}_Note1`]: 				"Não ativa bloqueio nem reflexão de habilidades.",
			[`${abilityName}_dragon_slave_damage`]: 				"DANO:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Dragon Slave",
			[`${abilityName}_Description`]: 				"Lina channels the breath of a dragon, sending out a wave of fire that scorches every enemy in its path.",
			[`${abilityName}_Lore`]: 				"In the scorched barren of Misrule, Lina learned to manipulate the fiery breath of the Desert Wyrm as a form of entertainment.",
			[`${abilityName}_Note0`]: 				"Dragon Slave can hit units up to 1225 units away.",
			[`${abilityName}_Note1`]: 				"Does not trigger spell block or spell reflect.",
			[`${abilityName}_dragon_slave_damage`]: 				"DAMAGE:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Esclavo Dracónico",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Dragon Slave</font></b>.\n\nLina canaliza el aliento de un dragón y lanza una oleada de fuego que abrasa a todos los enemigos a su paso.",
			[`${abilityName}_Lore`]: 				"En la tierra quemada de Misrule, Lina aprendió a manipular el ardiente aliento de los Wyrm del desierto como entretenimiento.",
			[`${abilityName}_Note0`]: 				"Esclavo Dracónico puede impactar en enemigos a un máximo de 1225 unidades de distancia.",
			[`${abilityName}_Note1`]: 				"No activa el bloqueo ni el reflejo de hechizos.",
			[`${abilityName}_dragon_slave_damage`]: 				"DAÑO:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Dragon Slave",
			[`${abilityName}_Description`]: 				"Герой высвобождает дыхание дракона, сжигающее всех врагов на своём пути.",
			[`${abilityName}_Lore`]: 				"Борясь со скукой в выжженных пустошах Мизрула, волшебница научилась управлять пламенем пустынного дракона.",
			[`${abilityName}_Note0`]: 				"Задевает существ на расстоянии до 1225 единиц.",
			[`${abilityName}_Note1`]: 				"Эту способность нельзя заблокировать или отразить.",
			[`${abilityName}_dragon_slave_damage`]: 				"УРОН:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"龙破斩",
			[`${abilityName}_Description`]: 				"莉娜引导龙的吐息，放出一波火焰，烧焦所有波及的敌人。",
			[`${abilityName}_Lore`]: 				"在纷争之国的荒焦之地，为了娱乐，莉娜学会了操纵沙漠飞龙的火焰吐息。",
			[`${abilityName}_Note0`]: 				"龙破斩最远能伤害1225距离外的单位。",
			[`${abilityName}_Note1`]: 				"不会触发法术抵抗或法术反弹。",
			[`${abilityName}_dragon_slave_damage`]: 				"伤害：",
			},
        }
    }
}