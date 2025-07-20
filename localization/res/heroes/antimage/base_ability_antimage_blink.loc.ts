import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_antimage_blink"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Translocar",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Blink</font></b>\n \nTeletransporte a curta distância, permitindo ao Anti-Mage entrar e sair do combate.",
			[`${abilityName}_Lore`]: 				"Em seu encontro com os Deuses Mortos, o Anti-Mage aprendeu o valor da esquivez.",
			[`${abilityName}_Note0`]: 				"Você pode se Translocar para esquivar-se de projéteis.",
			[`${abilityName}_scepter_Description`]: 				"Após se <b><font color='#F2A93E'>Translocar</font></b>, a sua próxima <b><font color='#F2A93E'>Quebra de Mana</font></b> em até %empowered_mana_break_duration%s queimará mais %empowered_max_burn_pct_tooltip%%% do mana máximo e impedirá que o alvo regenere ou obtenha mana por uma curta duração. Este efeito não pode ser dissipado. Reduz o intervalo entre usos de <b><font color='#F2A93E'>Translocar</font></b> em %bonus_AbilityCooldown%s.",
			[`${abilityName}_empowered_mana_break_debuff_duration_tooltip`]: 				"DURAÇÃO DO EFEITO:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Blink",
			[`${abilityName}_Description`]: 				"Short distance teleportation that allows Anti-Mage to move in and out of combat.",
			[`${abilityName}_Lore`]: 				"In his encounter with the Dead Gods, Anti-Mage learned the value of being elusive.",
			[`${abilityName}_Note0`]: 				"You can use Blink to dodge incoming projectiles.",
			[`${abilityName}_scepter_Description`]: 				"After casting Blink, your next Mana Break within %empowered_mana_break_duration%s burns an additional %empowered_max_burn_pct_tooltip%%% max mana and prevents the target from regenerating or gaining mana for a short duration. This debuff is undispellable. Blink Cooldown reduced by %bonus_AbilityCooldown%s.",
			[`${abilityName}_empowered_mana_break_debuff_duration_tooltip`]: 				"DEBUFF DURATION:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Traslación",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Blink</font></b>.\n\nTeletransporte a corta distancia que le permite a Anti-Mage entrar y salir del combate.",
			[`${abilityName}_Lore`]: 				"En su encuentro contra los Dioses Muertos, Anti-Mage aprendió el valor de ser evasivo.",
			[`${abilityName}_Note0`]: 				"Puedes utilizar Traslación para esquivar proyectiles.",
			[`${abilityName}_scepter_Description`]: 				"Tras lanzar Traslación, tu próxima Ruptura de Maná dentro de %empowered_mana_break_duration% s quema un %empowered_max_burn_pct_tooltip% %% adicional del maná máximo e impide que el objetivo se regenere u obtenga maná durante un breve período de tiempo. Este efecto negativo no se puede disipar. El tiempo de recarga de Traslación se reduce %bonus_AbilityCooldown% s.",
			[`${abilityName}_empowered_mana_break_debuff_duration_tooltip`]: 				"DURACIÓN DEL EFECTO NEGATIVO:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Blink",
			[`${abilityName}_Description`]: 				"Перемещение на короткую дистанцию, позволяющее ворваться в схватку или быстро из неё сбежать.",
			[`${abilityName}_Lore`]: 				"В схватках с мёртвыми богами юный послушник познал важность неуловимости.",
			[`${abilityName}_Note0`]: 				"Позволяет сбить с цели многие снаряды.",
			[`${abilityName}_scepter_Description`]: 				"Уменьшает перезарядку этой способности на %bonus_AbilityCooldown% сек. В течение %empowered_mana_break_duration%s сек. после её применения следующая атака с эффектом Mana Break дополнительно сожжёт %empowered_max_burn_pct_tooltip%%% от максимальной маны и ненадолго запретит жертве восстанавливать её (этот эффект нельзя развеять).",
			[`${abilityName}_empowered_mana_break_debuff_duration_tooltip`]: 				"ДЛИТЕЛЬНОСТЬ ЭФФЕКТА:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"闪烁",
			[`${abilityName}_Description`]: 				"短距离传送，能让敌法师自由出入战场。",
			[`${abilityName}_Lore`]: 				"在与死亡之神遭遇时，敌法师明白了让人捉摸不定是多么重要。",
			[`${abilityName}_Note0`]: 				"闪烁可以躲避多种飞行过程中的攻击和技能弹道。",
			[`${abilityName}_scepter_Description`]: 				"施放闪烁后，%empowered_mana_break_duration%秒内下一次的法力损毁将额外燃烧%empowered_max_burn_pct_tooltip%%%最大魔法值，并且阻止目标在短时间内恢复或获得魔法。这个负面效果无法驱散。闪烁的冷却时间减少%bonus_AbilityCooldown%秒。",
			[`${abilityName}_empowered_mana_break_debuff_duration_tooltip`]: 				"负面状态持续时间：",
			},
        }
    }
}