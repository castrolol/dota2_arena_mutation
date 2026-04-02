import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";


export default function ability(): AbilityLocalizationMounted {
    const abilityName = "DOTA_Tooltip_ability_base_ability_lion_impale"
    return {
        isToken: true,
        langs: {
			[Language.Brazilian]: {							
			[`${abilityName}`]: 				"Espinho de Terra",
			[`${abilityName}_Description`]: 				"Em inglês: <b><font color='#F2A93E'>Earth Spike</font></b>\n \nEspinhos rochosos emergem da terra em uma linha reta. Unidades inimigas são lançadas ao ar, sofrendo dano e sendo atordoadas ao atingirem o chão.",
			[`${abilityName}_Lore`]: 				"O Bruxo Demoníaco exercita o seu pacto demoníaco, abrindo uma fissura do inferno.",
			[`${abilityName}_Note0`]: 				"Os espinhos movem-se a %speed% unidades por segundo.",
			[`${abilityName}_Note1`]: 				"Não ativa bloqueio nem reflexão de habilidades.",
			[`${abilityName}_duration`]: 				"DURAÇÃO DO ATORDOAMENTO:",
			[`${abilityName}_damage`]: 				"DANO:",
			},
			[Language.English]: {							
			[`${abilityName}`]: 				"Earth Spike",
			[`${abilityName}_Description`]: 				"Rock spikes burst from the earth along a straight path. Enemy units are hurled into the air, then are stunned and take damage when they fall.",
			[`${abilityName}_Lore`]: 				"The Demon Witch exercises his demonic covenant, opening a fissure from hell.",
			[`${abilityName}_Note0`]: 				"The spikes move at %speed% units per second.",
			[`${abilityName}_Note1`]: 				"Does not trigger spell block or spell reflect.",
			[`${abilityName}_duration`]: 				"STUN DURATION:",
			[`${abilityName}_damage`]: 				"DAMAGE:",
			},
			[Language.Spanish]: {							
			[`${abilityName}`]: 				"Púa Terrenal",
			[`${abilityName}_Description`]: 				"En inglés: <b><font color='#F2A93E'>Earth Spike</font></b>.\n\nPúas de roca surgen de la tierra a lo largo de una trayectoria recta. Las unidades enemigas salen volando por los aires y quedan aturdidas y reciben daño cuando caen.",
			[`${abilityName}_Lore`]: 				"El Brujo Demoníaco ejerce su pacto demoníaco, abriendo una fisura del infierno.",
			[`${abilityName}_Note0`]: 				"Las púas se mueven a %speed% unidades por segundo.",
			[`${abilityName}_Note1`]: 				"No activa el bloqueo ni el reflejo de hechizos.",
			[`${abilityName}_duration`]: 				"DURACIÓN DEL ATURDIMIENTO:",
			[`${abilityName}_damage`]: 				"DAÑO:",
			},
			[Language.Russian]: {							
			[`${abilityName}`]: 				"Earth Spike",
			[`${abilityName}_Description`]: 				"Из земли прорывается полоса каменных шипов. Они подбрасывают врагов в воздух, а по приземлении оглушают их и наносят урон.",
			[`${abilityName}_Lore`]: 				"Демонолог осуществляет свой демонический завет, открывая трещину в ад.",
			[`${abilityName}_Note0`]: 				"Скорость шипов — %speed% единиц в секунду.",
			[`${abilityName}_Note1`]: 				"Эту способность нельзя заблокировать или отразить.",
			[`${abilityName}_duration`]: 				"ДЛИТЕЛЬНОСТЬ ОГЛУШЕНИЯ:",
			[`${abilityName}_damage`]: 				"УРОН:",
			},
			[Language.Schinese]: {							
			[`${abilityName}`]: 				"裂地尖刺",
			[`${abilityName}_Description`]: 				"岩石尖刺在地上沿一条直线穿刺而出。敌方单位被抛向空中，落地时被眩晕并受到伤害。",
			[`${abilityName}_Lore`]: 				"恶魔巫师使用他的恶魔契约，打开一条来自地狱的裂缝。",
			[`${abilityName}_Note0`]: 				"尖刺的移动速度是每秒%speed%码。",
			[`${abilityName}_Note1`]: 				"不会触发法术抵抗或法术反弹。",
			[`${abilityName}_duration`]: 				"眩晕持续时间：",
			[`${abilityName}_damage`]: 				"伤害：",
			},
        }
    }
}