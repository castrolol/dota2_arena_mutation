import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_sven_great_cleave"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Grande Transposição",
			[`${abilityName}_Description`]: 				"Em inglês: <font color='#F2A93E'>Great Cleave</font>\n \nSven golpeia com muita força, transpondo o seu dano de ataque a unidades inimigas próximas.",
			[`${abilityName}_Lore`]: 				"Os Cavaleiros da Vigília ainda buscam recuperar a perdida Lâmina Exilada de Sven, uma arma capaz de abrir grandes caminhos através de guerreiros mais fracos.",
			[`${abilityName}_great_cleave_damage`]: 				"%DANO TRANSPOSTO:",
			[`${abilityName}_cleave_distance`]: 				"DISTÂNCIA DA TRANSPOSIÇÃO:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Great Cleave",
			[`${abilityName}_Description`]: 				"Sven strikes with great force, cleaving all nearby enemy units with his attack.",
			[`${abilityName}_Lore`]: 				"The Vigil Knights still seek to reclaim the stolen Outcast Blade from Sven, a weapon capable of cutting wide swaths through lesser warriors.",
			[`${abilityName}_great_cleave_damage`]: 				"%CLEAVE DAMAGE:",
			[`${abilityName}_cleave_distance`]: 				"CLEAVE DISTANCE:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Gran Hendidura",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Great Cleave</font></b>.\n\nSven golpea con gran fuerza y alcanza a todas las unidades enemigas cercanas con su ataque.",
			[`${abilityName}_Lore`]: 				"Los Caballeros de la Vigilia aún tratan de recuperar la Hoja del Exiliado robada por Sven, un arma capaz de hacer estragos entre los guerreros inferiores.",
			[`${abilityName}_great_cleave_damage`]: 				"%DAÑO POR HENDIDURA:",
			[`${abilityName}_cleave_distance`]: 				"DISTANCIA DE HENDIDURA:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Great Cleave",
			[`${abilityName}_Description`]: 				"Могучие атаки героя прорубают жертву, поражая всех врагов перед ним.",
			[`${abilityName}_Lore`]: 				"Вигильские рыцари до сих пор надеются вернуть Клинок изгоя, украденный мятежным послушником, ведь это оружие способно прорубать целые ряды слабых воинов.",
			[`${abilityName}_great_cleave_damage`]: 				"%ПРОРУБАЮЩИЙ УРОН:",
			[`${abilityName}_cleave_distance`]: 				"ДАЛЬНОСТЬ ПРОРУБАНИЯ:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"巨力挥舞",
			[`${abilityName}_Description`]: 				"斯温以巨力攻击，并对所有附近的敌方单位造成分裂攻击伤害。",
			[`${abilityName}_Lore`]: 				"守夜骑士团仍然在试图从斯温那里取回被偷走的弃誓之刃，一把能在低阶战士中杀出条大路的利剑。",
			[`${abilityName}_great_cleave_damage`]: 				"%分裂伤害：",
			[`${abilityName}_cleave_distance`]: 				"分裂距离：",
			},
        }
    }
}