import { AbilityLocalizationMounted, Colors, L, Language, color, endcolor, ignore, ref, skill } from '../../../../../loc_utils';

export default function ability(): AbilityLocalizationMounted {
    return {
        source: Language.English,
        ability_classname: `talent_crystal_maiden_frosty_fortress_heavy_frost_armor`,
        name: L`Heavy Frost Armor`,
        lore: L`Metal is for dummies, use ice baby!`,
        description: L`You can cast ${color(Colors.Ability)} ${ref("DOTA_Tooltip_ability_base_ability_crystal_maiden_frostbite")} ${endcolor()} on youserlf or allies to increase armor and reducing movespeed.`,
        ability_specials: [
            {
                ability_special: 'armor',
                text: L`ARMOR BONUS`,
                percentage: false,
            },
            {
                ability_special: 'slow',
                text: L`MOVE SPEED SLOW`,
                percentage: true,
            },
            {
                ability_special: 'buff_duration',
                text: L`DURATION`,
                percentage: false,
            }
        ],
    };
}
