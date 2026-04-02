import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_mirana_invis"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Sombra Lunar",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Moonlight Shadow</font></b>\n \nTorna Mirana e todos os heróis aliados invisíveis, concedendo velocidade de movimento adicional. Mirana causa mais dano por toda a duração. Se um herói for revelado, a invisibilidade ainda será restaurada após o tempo de desvanecimento enquanto a Sombra Lunar estiver em efeito.",
			[`${abilityName}_Lore`]: 				"O seu pacto com Selemene permite à Mirana eclipsar o solo, envolvendo os seus aliados com um manto de sombras.",
			[`${abilityName}_Note0`]: 				"Unidades afetadas não atacarão inimigos automaticamente.",
			[`${abilityName}_fade_delay`]: 				"ATRASO DE DESVANECIMENTO:",
			[`${abilityName}_duration`]: 				"DURAÇÃO:",
			[`${abilityName}_bonus_movement_speed`]: 				"%VEL. DE MOV. ADICIONAL:",
			[`${abilityName}_bonus_outgoing_damage_pct`]: 				"%DANO ADICIONAL CAUSADO:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Moonlight Shadow",
			[`${abilityName}_Description`]: 				"Turns Mirana and all allied heroes invisible and grants bonus movement speed. Mirana gains bonus outgoing damage during the duration. If a hero is revealed, invisibility will restore after the fade delay as long as Moonlight Shadow's duration has not expired.",
			[`${abilityName}_Lore`]: 				"Her tenure with Selemene allows Mirana to eclipse the ground, wrapping her allies in a cloak of shadows.",
			[`${abilityName}_Note0`]: 				"Units affected will not auto attack enemies.",
			[`${abilityName}_fade_delay`]: 				"FADE DELAY:",
			[`${abilityName}_duration`]: 				"DURATION:",
			[`${abilityName}_bonus_movement_speed`]: 				"%MOVEMENT SPEED:",
			[`${abilityName}_bonus_outgoing_damage_pct`]: 				"%SELF OUTGOING DAMAGE BONUS:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Sombra a la Luz de la Luna",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Moonlight Shadow</font></b>.\n\nMirana y todos los héroes aliados se vuelven invisibles y otorga velocidad de movimiento adicional. Mirana inflige daño adicional mientras dure el efecto. Si un héroe es revelado, la invisibilidad se restaura tras un breve retraso siempre y cuando la duración de Sombra a la Luz de la Luna no haya terminado.",
			[`${abilityName}_Lore`]: 				"Su trato con Selemene le permite a Mirana eclipsar el terreno, envolviendo a sus aliados en un manto de sombras.",
			[`${abilityName}_Note0`]: 				"Las unidades afectadas no atacarán automáticamente a los enemigos.",
			[`${abilityName}_fade_delay`]: 				"RETRASO DE DESVANECIMIENTO:",
			[`${abilityName}_duration`]: 				"DURACIÓN:",
			[`${abilityName}_bonus_movement_speed`]: 				"%VELOCIDAD DE MOVIMIENTO:",
			[`${abilityName}_bonus_outgoing_damage_pct`]: 				"%BONIFICACIÓN DE DAÑO INFLIGIDO:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Moonlight Shadow",
			[`${abilityName}_Description`]: 				"Делает всех героев в команде невидимыми и ускоряет их передвижение, а также увеличивает урон, наносимый владельцем способности. Раскрытая невидимость восстановится после задержки, если способность ещё действует.",
			[`${abilityName}_Lore`]: 				"Положение принцессы на службе Селемине позволяет ей призвать затмение, закутывающее её союзников в плащи теней.",
			[`${abilityName}_Note0`]: 				"Существа под действием этой способности не атакуют врагов автоматически.",
			[`${abilityName}_fade_delay`]: 				"ЗАДЕРЖКА ДО НЕВИДИМОСТИ:",
			[`${abilityName}_duration`]: 				"ДЛИТЕЛЬНОСТЬ:",
			[`${abilityName}_bonus_movement_speed`]: 				"%УСКОРЕНИЕ ПЕРЕДВИЖЕНИЯ:",
			[`${abilityName}_bonus_outgoing_damage_pct`]: 				"%ДОП. УРОН ВЛАДЕЛЬЦА:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"月之暗面",
			[`${abilityName}_Description`]: 				"让米拉娜和所有己方英雄进入隐身状态。米拉娜在持续时间内获得伤害输出加成。只要还在月光阴影的持续时间内，即使隐身被打破也会在短时间内重新淡入隐身。",
			[`${abilityName}_Lore`]: 				"作为赛莉蒙妮的代言人，米拉娜能将月蚀之暗投向大地，将她和她的友军隐藏在阴影中。",
			[`${abilityName}_Note0`]: 				"受到作用的单位会自动停止攻击敌人。",
			[`${abilityName}_fade_delay`]: 				"渐隐延迟：",
			[`${abilityName}_duration`]: 				"持续时间：",
			[`${abilityName}_bonus_movement_speed`]: 				"%移动速度加成：",
			[`${abilityName}_bonus_outgoing_damage_pct`]: 				"%自身伤害输出加成：",
			},
        }
    }
}