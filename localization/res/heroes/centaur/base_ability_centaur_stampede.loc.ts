import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_centaur_stampede"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Debandada",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Stampede</font></b>\n \nO Centauro lidera todos os seus aliados em uma investida feroz, fazendo com que atravessem unidades na velocidade máxima, retardando as unidades inimigas que forem pisoteadas. Inimigos pisoteados sofrem dano baseado na Força do Centaur Warrunner. Cada inimigo só pode ser pisoteado uma vez.",
			[`${abilityName}_Lore`]: 				"O grande cinturão de Oxeme, que define Bradwarden como o maior guerreiro da sua espécie, estimula os seus colegas gladiadores a seguirem-no ao bárbaro combate.",
			[`${abilityName}_radius`]: 				"RAIO DO PISOTEAMENTO:",
			[`${abilityName}_duration`]: 				"DURAÇÃO DA INVESTIDA:",
			[`${abilityName}_strength_damage`]: 				"MULT. DO DANO (FOR):",
			[`${abilityName}_slow_duration`]: 				"DURAÇÃO DO RETARDO:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Stampede",
			[`${abilityName}_Description`]: 				"Centaur leads all allies into a vicious charge causing them to move through units at max speed and slow any enemy units they trample. Trampled enemies take damage based on Centaur Warrunner's strength. Each enemy can be trampled once.",
			[`${abilityName}_Lore`]: 				"The great belt of Omexe, which labels Bradwarden as the greatest warrior of his kind, incites his fellow gladiators to follow him into barbarous combat.",
			[`${abilityName}_radius`]: 				"TRAMPLE RADIUS:",
			[`${abilityName}_duration`]: 				"STAMPEDE DURATION:",
			[`${abilityName}_strength_damage`]: 				"STRENGTH MULTIPLIER DAMAGE:",
			[`${abilityName}_slow_duration`]: 				"SLOW DURATION:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Estampida",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Stampede</font></b>.\n\nCentaur lidera a todos los aliados en una feroz carga haciendo que se muevan a través de las unidades a máxima velocidad y ralenticen a los enemigos que pisoteen. Los enemigos pisoteados reciben daño según la fuerza de Warrunner. Cada enemigo solo puede ser pisoteado una vez.",
			[`${abilityName}_Lore`]: 				"El gran cinturón de Omexe, que identifica a Bradwarden como el mayor guerrero de su raza, incita a sus compañeros gladiadores a seguirlo en un combate salvaje.",
			[`${abilityName}_radius`]: 				"RADIO DE PISOTEO:",
			[`${abilityName}_duration`]: 				"DURACIÓN DE LA ESTAMPIDA:",
			[`${abilityName}_strength_damage`]: 				"MULTIPLICADOR DE DAÑO SEGÚN FUERZA:",
			[`${abilityName}_slow_duration`]: 				"DURACIÓN DE LA RALENTIZACIÓN:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Stampede",
			[`${abilityName}_Description`]: 				"Герой ведёт союзников в яростное наступление. Они проходят сквозь существ на максимальной скорости и втаптывают в землю всех врагов на пути, замедляя их и нанося им урон, зависящий от силы владельца способности. Каждого врага можно втоптать в землю лишь один раз.",
			[`${abilityName}_Lore`]: 				"Великий пояс Омекса, означающий величайшего воина своего вида, побуждает товарищей Брэдводена следовать за ним в самые жестокие схватки.",
			[`${abilityName}_radius`]: 				"РАДИУС ТОПОТА:",
			[`${abilityName}_duration`]: 				"ДЛИТЕЛЬНОСТЬ СПОСОБНОСТИ:",
			[`${abilityName}_strength_damage`]: 				"МНОЖИТЕЛЬ УРОНА ЗА СИЛУ:",
			[`${abilityName}_slow_duration`]: 				"ДЛИТЕЛЬНОСТЬ ЗАМЕДЛЕНИЯ:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"奔袭冲撞",
			[`${abilityName}_Description`]: 				"半人马战行者带领所有队友向胜利冲锋，所有友方英雄达到极限移动速度，并使踩到的敌人减速。每个敌人只会受到一次踩踏作用，并受到基于半人马战行者力量值的伤害。",
			[`${abilityName}_Lore`]: 				"欧梅克斯的巨大腰带，彰显着布拉德瓦登是同族中最伟大的战士，激励着他的格斗士同伴在野蛮的战斗中跟随他。",
			[`${abilityName}_radius`]: 				"踩踏作用范围：",
			[`${abilityName}_duration`]: 				"奔袭冲撞持续时间：",
			[`${abilityName}_strength_damage`]: 				"力量值伤害系数：",
			[`${abilityName}_slow_duration`]: 				"停滞持续时间：",
			},
        }
    }
}