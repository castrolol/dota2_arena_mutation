import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_axe_battle_hunger"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Fome de Batalha",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Battle Hunger</font></b>\n \nEnfurece uma unidade inimiga, fazendo-a sofrer dano com o tempo até que mate outra unidade ou a duração acabe. Parte do dano é proporcional à armadura do Axe. O inimigo também sofre retardo caso esteja se afastando do Axe.",
			[`${abilityName}_shard_Description`]: 				"É possível acumular instâncias de <b><font color='#F2A93E'>Fome de Batalha</font></b> em um mesmo alvo.",
			[`${abilityName}_Note0`]: 				"A destruição de estruturas também removerá o efeito negativo.",
			[`${abilityName}_Lore`]: 				"Heróis comuns não aguentam a fúria de batalha do Mogul Khan, que lhes causa dano até que se satisfaça.",
			[`${abilityName}_duration`]: 				"DURAÇÃO:",
			[`${abilityName}_slow`]: 				"%RETARDO DE MOV.:",
			[`${abilityName}_damage_per_second`]: 				"DANO POR SEGUNDO:",
			[`${abilityName}_armor_multiplier`]: 				"MULTIPLICADOR DE ARMADURA:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Battle Hunger",
			[`${abilityName}_Description`]: 				"Enrages an enemy unit, causing it to take damage over time until it kills another unit or the duration ends. The damage is increased by a factor of Axe's armor. The enemy is also slowed as long as they are facing away from Axe.",
			[`${abilityName}_shard_Description`]: 				"Multiple instances of Battle Hunger can stack on a single target.",
			[`${abilityName}_Note0`]: 				"Destroying buildings will also remove the debuff.",
			[`${abilityName}_Lore`]: 				"Ordinary heroes cannot withstand Mogul Khan's rage for battle, such that it injures them until it is satisfied.",
			[`${abilityName}_duration`]: 				"DURATION:",
			[`${abilityName}_slow`]: 				"%MOVEMENT SLOW:",
			[`${abilityName}_damage_per_second`]: 				"DAMAGE PER SECOND:",
			[`${abilityName}_armor_multiplier`]: 				"ARMOR MULTIPLIER:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Sed de Batalla",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Battle Hunger</font></b>.\n\nEnfurece a una unidad enemiga, haciendo que reciba daño con el tiempo hasta que mate a otra unidad o termine el efecto. El daño aumenta en proporción a la armadura de Axe. El enemigo también es ralentizado siempre y cuando esté de espaldas a Axe.",
			[`${abilityName}_shard_Description`]: 				"Se pueden acumular varias instancias de Sed de Batalla en un solo objetivo.",
			[`${abilityName}_Note0`]: 				"Destruir estructuras también eliminará el efecto negativo.",
			[`${abilityName}_Lore`]: 				"Los héroes ordinarios no pueden soportar la furia de batalla de Mogul Khan,  hasta el punto de dañarles hasta saciarla.",
			[`${abilityName}_duration`]: 				"DURACIÓN:",
			[`${abilityName}_slow`]: 				"%RALENTIZACIÓN DE MOVIMIENTO:",
			[`${abilityName}_damage_per_second`]: 				"DAÑO POR SEGUNDO:",
			[`${abilityName}_armor_multiplier`]: 				"MULTIPLICADOR DE ARMADURA:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Battle Hunger",
			[`${abilityName}_Description`]: 				"Приводит врага в бешенство, нанося ему урон, пока он кого-нибудь не убьёт или действие способности не закончится. Урон от способности увеличивается в зависимости от брони владельца способности. Скорость передвижения жертвы уменьшается, когда она не смотрит в сторону владельца способности.",
			[`${abilityName}_shard_Description`]: 				"Эффекты от нескольких применений этой способности на одну и ту же цель складываются.",
			[`${abilityName}_Note0`]: 				"Эффект этой способности также снимется, если разрушить постройку.",
			[`${abilityName}_Lore`]: 				"Обычные герои не могут сопротивляться ярости Могул-хана, и она калечит их, пока они не выместят ее на ком-нибудь.",
			[`${abilityName}_duration`]: 				"ДЛИТЕЛЬНОСТЬ:",
			[`${abilityName}_slow`]: 				"%ЗАМЕДЛЕНИЕ ПЕРЕДВИЖЕНИЯ:",
			[`${abilityName}_damage_per_second`]: 				"УРОН В СЕКУНДУ:",
			[`${abilityName}_armor_multiplier`]: 				"МНОЖИТЕЛЬ БРОНИ:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"战斗饥渴",
			[`${abilityName}_Description`]: 				"激怒一个敌方单位，使他受到持续伤害，直到他杀死一个单位或者持续时间结束。伤害量会根据斧王的护甲而增加。敌人只要背朝斧王还将被减速。",
			[`${abilityName}_shard_Description`]: 				"多个战斗饥渴效果可以叠加在单个目标身上。",
			[`${abilityName}_Note0`]: 				"摧毁建筑也能移除该状态效果。",
			[`${abilityName}_Lore`]: 				"通常英雄都无法抵挡蒙哥可汗的战斗狂怒，他们会一直受伤，直到蒙哥可汗的狂怒平息。",
			[`${abilityName}_duration`]: 				"持续时间：",
			[`${abilityName}_slow`]: 				"%移动速度减缓：",
			[`${abilityName}_damage_per_second`]: 				"每秒伤害：",
			[`${abilityName}_armor_multiplier`]: 				"护甲倍数：",
			},
        }
    }
}