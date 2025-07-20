import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_sand_king_scorpion_strike"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Ferroada",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Stinger</font></b>\n \nO Sand King ataca uma área, desferindo um ataque contra todos os inimigos na área de efeito e causando dano adicional. Inimigos em até %inner_radius% unidades de distância do centro sofrem mais %inner_radius_bonus_damage_pct%%% de dano. Aplica <b><font color='#F2A93E'>Finalização Cáustica</font></b> e um retardo a todos os inimigos atingidos.",
			[`${abilityName}_Lore`]: 				"Crixalis pode ser misericordioso, mas a alma das areias encontra poucos inimigos dignos de salvamento.",
			[`${abilityName}_attack_damage`]: 				"DANO ADICIONAL:",
			[`${abilityName}_radius`]: 				"RAIO:",
			[`${abilityName}_debuff_duration`]: 				"DURAÇÃO DO RETARDO:",
			[`${abilityName}_strike_slow`]: 				"%RETARDO DE MOV.:",
			[`${abilityName}_Facet_sand_king_pinpoint`]: 				"Cria uma explosão da Finalização Cáustica com %caustic_damage_pct%%% de dano em torno de cada herói inimigo atingido pelo raio interno da Ferroada. Não se aplica aos golpes criados pelo aprimoramento do Cetro de Aghanim.",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Stinger",
			[`${abilityName}_Description`]: 				"Sand King strikes an area, performing an attack on all enemies in the area of effect, dealing extra damage to each. Enemies within an innermost radius of %inner_radius% take %inner_radius_bonus_damage_pct%%% extra damage. Applies Caustic Finale and a slow to all enemies hit.",
			[`${abilityName}_Lore`]: 				"Crixalis is certainly capable of mercy, but the soul of the sand finds few foes worth sparing.",
			[`${abilityName}_attack_damage`]: 				"BONUS DAMAGE:",
			[`${abilityName}_radius`]: 				"RADIUS:",
			[`${abilityName}_debuff_duration`]: 				"SLOW DURATION:",
			[`${abilityName}_strike_slow`]: 				"%MOVEMENT SPEED SLOW:",
			[`${abilityName}_Facet_sand_king_pinpoint`]: 				"A Caustic Finale explosion that deals %caustic_damage_pct%%% damage is created around every enemy hero hit in Stinger's innermost radius. Does not apply to strikes created by Aghanim's Scepter upgrade.",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Aguijón",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Stinger</font></b>.\n\nSand King golpea una zona y ataca a todos los enemigos que se encuentren dentro del área de efecto, infligiéndoles daño adicional. Los enemigos en un radio interior de %inner_radius% reciben un %inner_radius_bonus_damage_pct% %% más de daño. Aplica Apoteosis Cáustica y una ralentización a todos los enemigos alcanzados.",
			[`${abilityName}_Lore`]: 				"Crixalis es muy capaz de tener piedad, pero el alma de la arena encuentra pocos enemigos que valga la pena salvar.",
			[`${abilityName}_attack_damage`]: 				"DAÑO ADICIONAL:",
			[`${abilityName}_radius`]: 				"RADIO:",
			[`${abilityName}_debuff_duration`]: 				"DURACIÓN DE LA RALENTIZACIÓN:",
			[`${abilityName}_strike_slow`]: 				"%RALENTIZACIÓN DE VELOCIDAD DE MOVIMIENTO:",
			[`${abilityName}_Facet_sand_king_pinpoint`]: 				"Se produce una explosión de Apoteosis Cáustica que inflige un %caustic_damage_pct% %% de daño alrededor de cada héroe enemigo alcanzado en el radio interior de Aguijón. No se aplica a los golpes creados con la mejora del cetro de Aghanim.",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Stinger",
			[`${abilityName}_Description`]: 				"Герой совершает атаку с дополнительным уроном по всем врагам вокруг указанной точки. Эта атака наносит на %inner_radius_bonus_damage_pct%%% больше урона в центральной области радиусом %inner_radius%. Накладывает на жертв эффект способности Caustic Finale и замедление.",
			[`${abilityName}_Lore`]: 				"Безусловно, Криксалис способен на милосердие, однако в глазах духа песков пощады достойны немногие.",
			[`${abilityName}_attack_damage`]: 				"ДОП. УРОН:",
			[`${abilityName}_radius`]: 				"РАДИУС:",
			[`${abilityName}_debuff_duration`]: 				"ДЛИТЕЛЬНОСТЬ ЗАМЕДЛЕНИЯ:",
			[`${abilityName}_strike_slow`]: 				"%ЗАМЕДЛЕНИЕ ПЕРЕДВИЖЕНИЯ:",
			[`${abilityName}_Facet_sand_king_pinpoint`]: 				"На месте каждого вражеского героя в центральной области происходит взрыв от способности Caustic Finale, который наносит %caustic_damage_pct%%% обычного урона. Этот эффект не распространяется на удары, вызванные улучшением от Aghanim's Scepter.",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"尾刺",
			[`${abilityName}_Description`]: 				"沙王袭击一片区域，对范围内所有敌人发动一次攻击，对每个敌人造成额外伤害。最中心%inner_radius%范围内敌人将受到%inner_radius_bonus_damage_pct%%%额外伤害。对所有击中的敌人施加腐尸毒和减速效果。",
			[`${abilityName}_Lore`]: 				"克里瑟历斯当然有怜悯之心，但是沙之魂并没有发现有多少敌人值得他的饶恕。",
			[`${abilityName}_attack_damage`]: 				"额外伤害：",
			[`${abilityName}_radius`]: 				"作用范围：",
			[`${abilityName}_debuff_duration`]: 				"减速持续时间：",
			[`${abilityName}_strike_slow`]: 				"%移动速度减缓：",
			[`${abilityName}_Facet_sand_king_pinpoint`]: 				"被尾刺的最中心范围击中的每个敌方英雄都会立刻产生一次腐尸毒的爆炸，造成%caustic_damage_pct%%%伤害。阿哈利姆神杖升级产生的尾刺不会施加。",
			},
        }
    }
}