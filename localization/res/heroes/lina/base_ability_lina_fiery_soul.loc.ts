import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_lina_fiery_soul"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Alma Ardente",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Fiery Soul</font></b>\n \nFornece velocidades de ataque e movimento adicionais sempre que Lina atingir um inimigo com uma habilidade. Múltiplas instâncias se acumulam. Dura %fiery_soul_stack_duration% segundos.",
			[`${abilityName}_Lore`]: 				"O dançar das chamas se incorpora à natureza lúdica de Lina, trazendo à tona a sua verdadeira personalidade ardente.",
			[`${abilityName}_Note0`]: 				"A duração é reiniciada sempre que atingir um adversário com uma habilidade.",
			[`${abilityName}_Note1`]: 				"Usar itens não ativará esta habilidade.",
			[`${abilityName}_fiery_soul_attack_speed_bonus`]: 				"VEL. DE ATAQUE ADICIONAL:",
			[`${abilityName}_fiery_soul_move_speed_bonus`]: 				"%VEL. DE MOV. ADICIONAL:",
			[`${abilityName}_fiery_soul_max_stacks`]: 				"MÁXIMO DE ACÚMULOS:",
			[`${abilityName}_fiery_soul_stack_duration`]: 				"DURAÇÃO:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Fiery Soul",
			[`${abilityName}_Description`]: 				"Grants bonus attack and movement speed each time Lina hits an enemy with a spell. Stacks with itself. Lasts %fiery_soul_stack_duration% seconds.",
			[`${abilityName}_Lore`]: 				"Dancing flames embody Lina's playful nature, bringing out her true blazing self.",
			[`${abilityName}_Note0`]: 				"Duration refreshes each time an opponent is hit with a spell.",
			[`${abilityName}_Note1`]: 				"Using items does not trigger Fiery Soul.",
			[`${abilityName}_fiery_soul_attack_speed_bonus`]: 				"ATTACK SPEED BONUS:",
			[`${abilityName}_fiery_soul_move_speed_bonus`]: 				"%MOVE SPEED BONUS:",
			[`${abilityName}_fiery_soul_max_stacks`]: 				"MAX STACKS:",
			[`${abilityName}_fiery_soul_stack_duration`]: 				"DURATION:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Alma Ígnea",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Fiery Soul</font></b>.\n\nOtorga velocidad de movimiento y ataque adicional cada vez que Lina alcanza a un enemigo con un hechizo. Es acumulable. Dura %fiery_soul_stack_duration% s.",
			[`${abilityName}_Lore`]: 				"Las llamas danzantes encarnan la naturaleza juguetona de Lina y muestran su verdadero ser ardiente.",
			[`${abilityName}_Note0`]: 				"La duración se restablece cada vez que un oponente es alcanzado por un hechizo.",
			[`${abilityName}_Note1`]: 				"Utilizar objetos no activa Alma Ígnea.",
			[`${abilityName}_fiery_soul_attack_speed_bonus`]: 				"BONIFICACIÓN DE VELOCIDAD DE ATAQUE:",
			[`${abilityName}_fiery_soul_move_speed_bonus`]: 				"%BONIFICACIÓN DE VELOCIDAD DE MOVIMIENTO:",
			[`${abilityName}_fiery_soul_max_stacks`]: 				"ACUMULACIONES MÁXIMAS:",
			[`${abilityName}_fiery_soul_stack_duration`]: 				"DURACIÓN:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Fiery Soul",
			[`${abilityName}_Description`]: 				"Увеличивает скорость атаки и передвижения всякий раз, когда герой попадает способностью по врагу. Эффекты способности складываются друг с другом. Действует %fiery_soul_stack_duration% сек.",
			[`${abilityName}_Lore`]: 				"Пляшущие языки огня воплощают игривую натуру волшебницы, высвобождая её внутреннее пламя.",
			[`${abilityName}_Note0`]: 				"Попадание любой способности по врагу обновляет время действия этой.",
			[`${abilityName}_Note1`]: 				"Не срабатывает от использования предметов.",
			[`${abilityName}_fiery_soul_attack_speed_bonus`]: 				"ДОП. СКОРОСТЬ АТАКИ:",
			[`${abilityName}_fiery_soul_move_speed_bonus`]: 				"%ДОП. СКОРОСТЬ ПЕРЕДВИЖЕНИЯ:",
			[`${abilityName}_fiery_soul_max_stacks`]: 				"МАКС. ЭФФЕКТОВ:",
			[`${abilityName}_fiery_soul_stack_duration`]: 				"ДЛИТЕЛЬНОСТЬ:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"炽魂",
			[`${abilityName}_Description`]: 				"莉娜每次利用技能击中一个敌人都会使她获得攻击和移动速度加成。可以叠加。持续%fiery_soul_stack_duration%秒。",
			[`${abilityName}_Lore`]: 				"舞动的火焰体现了莉娜爱玩的天性，展示了她真实炙热的自我。",
			[`${abilityName}_Note0`]: 				"每次技能击中敌人时都会刷新持续时间。",
			[`${abilityName}_Note1`]: 				"使用物品不会触发炽魂。",
			[`${abilityName}_fiery_soul_attack_speed_bonus`]: 				"攻击速度提升：",
			[`${abilityName}_fiery_soul_move_speed_bonus`]: 				"%移动速度提升：",
			[`${abilityName}_fiery_soul_max_stacks`]: 				"最大叠加数：",
			[`${abilityName}_fiery_soul_stack_duration`]: 				"持续时间：",
			},
        }
    }
}