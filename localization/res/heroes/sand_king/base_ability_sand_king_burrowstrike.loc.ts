import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_sand_king_burrowstrike"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Golpe Subterrâneo",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Burrowstrike</font></b>\n \nO Sand King mergulha no chão e escava para a frente, causando dano e atordoamento a unidades inimigas acima dele ao emergir. Aplica <b><font color='#F2A93E'>Finalização Cáustica</font></b> nos heróis atingidos.<br><br>Pode ser colocado em uso alternativo para usar imediatamente na direção desejada, sem andar até o local alvejado.",
			[`${abilityName}_Lore`]: 				"Crixalis geralmente espera o momento certo, enterrando-se embaixo da superfície para emboscar os seus adversários.",
			[`${abilityName}_burrow_duration`]: 				"DURAÇÃO DO ATORDOAMENTO:",
			[`${abilityName}_Note0`]: 				"Não ativa bloqueio nem reflexão de habilidades.",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Burrowstrike",
			[`${abilityName}_Description`]: 				"Sand King burrows into the ground and tunnels forward, damaging and stunning enemy units above him as he resurfaces. Adds Caustic Finale poison to heroes hit<br><br> Can be put on alt-cast to immediately cast in the desired direction, without walking towards the targeted location.",
			[`${abilityName}_Lore`]: 				"Crixalis often lies in wait, burrowing under the surface to ambush his adversaries.",
			[`${abilityName}_burrow_duration`]: 				"STUN DURATION:",
			[`${abilityName}_Note0`]: 				"Does not trigger spell block or spell reflect.",
			[`${abilityName}_Facet_sand_king_deeper_underground`]: 				"Burrowstrike becomes a vector-targeted ability, allowing Sand King to create a secondary burrowstrike past his initial target location. The secondary burrowstrike distance and damage can be up to %underground_distance_pct%%% of a normal burrowstrike.",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Asalto Subterráneo",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Burrowstrike</font></b>.\n\nSand King se entierra en el suelo y se abre paso dañando y aturdiendo a las unidades enemigas en la superficie cuando resurge. Añade el veneno de Apoteosis Cáustica a los héroes alcanzados.<br><br> Se puede poner como lanzamiento alternativo para que se lance inmediatamente en la dirección deseada, sin tener que caminar hacia la ubicación objetivo.",
			[`${abilityName}_Lore`]: 				"Crixalis a menudo espera acechante, enterrándose bajo la superficie para emboscar a sus adversarios.",
			[`${abilityName}_burrow_duration`]: 				"DURACIÓN DEL ATURDIMIENTO:",
			[`${abilityName}_Note0`]: 				"No activa el bloqueo ni el reflejo de hechizos.",
			[`${abilityName}_Facet_sand_king_deeper_underground`]: 				"Asalto Subterráneo se convierte en una habilidad vectorizada, lo que permite a Sand King crear un asalto subterráneo secundario más allá de la ubicación objetivo inicial. La distancia y el daño del asalto secundario pueden llegar al %underground_distance_pct% %% de un asalto subterráneo normal.",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Burrowstrike",
			[`${abilityName}_Description`]: 				"Герой погружается в землю и прорывается вперёд, оглушая врагов на пути и нанося им урон. Накладывает эффект способности Caustic Finale на задетых героев.<br><br>Если включено альтернативное применение, способность мгновенно применяется в указанную сторону, а не в выбранную точку.",
			[`${abilityName}_Lore`]: 				"Криксалис часто устраивает засады на неприятелей, выжидая их под песком.",
			[`${abilityName}_burrow_duration`]: 				"ДЛИТЕЛЬНОСТЬ ОГЛУШЕНИЯ:",
			[`${abilityName}_Note0`]: 				"Эту способность нельзя заблокировать или отразить.",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"掘地穿刺",
			[`${abilityName}_Description`]: 				"沙王钻入地面挖掘隧道前进，穿出地面时伤害并眩晕上方的敌方单位。对击中的英雄施加腐尸毒。<br><br>可以设为多样施法，直接朝指定方向立刻施放，不需要走向目标地点。",
			[`${abilityName}_Lore`]: 				"克里瑟历斯经常钻入地下埋伏，等待伏击敌人。",
			[`${abilityName}_burrow_duration`]: 				"眩晕时间：",
			[`${abilityName}_Note0`]: 				"不会触发法术抵抗或法术反弹。",
			[`${abilityName}_Facet_sand_king_deeper_underground`]: 				"掘地穿刺变成以矢量为目标的技能，使沙王可以在经过初始目标地点时产生第二个掘地穿刺。第二个掘地穿刺的距离和伤害最高为普通掘地穿刺的%underground_distance_pct%%%。",
			},
        }
    }
}