const { writeFile, mkdir, readFile } = require("fs/promises")
const path = require("path")
const valveKV = require("valve-kv") 
const updateLocs = require("./update_locs")

let files = null;

function treatValues(langName) {
    const data = valveKV.deserializeFile(path.join(__dirname, "../../../dota_vpk_updates/resource/localization", `abilities_${langName}.txt`))
    const tokens = data.lang.Tokens
    const keys = Object.keys(tokens)
    return {
        tokens, keys
    }
}

async function loadOriginalValues() {
    if (!files) {

        files = {
            "Language.Brazilian": treatValues("brazilian"),
            "Language.English": treatValues("english"),
            "Language.Spanish": treatValues("spanish"),
            "Language.Russian": treatValues("russian"),
            "Language.Schinese": treatValues("schinese"),
        }

    }
    return files;

}

async function createAll() {
    const files = await loadOriginalValues()


    for (let hero in abilities) {
        for (let abilityPair of abilities[hero]) {
            const [ability, original] = abilityPair
            console.log(ability, original)
            let lines = []
            const removePart = `base_ability_${hero}_`
            const baseName = ability.replace(removePart, "")
            let tokenName = `DOTA_Tooltip_ability_${hero}_${baseName}`
            if (original) {
                tokenName = `DOTA_Tooltip_ability_${original}`
            }

            lines.push(`import { AbilityLocalizationMounted, L, Language, ignore } from "../../../loc_utils";`)
            lines.push(``)
            lines.push(``)
            lines.push(`export default function ability(): AbilityLocalizationMounted {`)
            lines.push(`    const abilityName = "DOTA_Tooltip_ability_${ability}"`)
            lines.push(`    return {`)
            lines.push(`        isToken: true,`)
            lines.push(`        langs: {`)


            for (let lang in files) {

                const langData = files[lang]

                lines.push(`			[${lang}]: {							`)

                const keys = langData.keys.filter(x => x.startsWith(tokenName))
                if (!keys.length) {
                    throw new Error("Erro")
                }
                for (let key of keys) {
                    const name = "`${abilityName}" + key.replace(tokenName, "") + "`"
                    lines.push(`			[${name}]: 				"${langData.tokens[key].split('"').join('\\"').split("\n").join("\\n")}",`)
                }

                lines.push(`			},`)
            }

            lines.push(`        }`)
            lines.push(`    }`)
            lines.push(`}`)

            const content = lines.join("\n")
            await mkdir(path.join(__dirname, `../localization/res/heroes/${hero}`), { recursive: true })
            await writeFile(path.join(__dirname, `../localization/res/heroes/${hero}/${ability}.loc.ts`), content)
        }
    }

    await updateLocs()
}





const abilities = {
    centaur: [
        ["base_ability_centaur_double_edge", undefined],
        ["base_ability_centaur_hoof_stomp", undefined],
        ["base_ability_centaur_return", undefined],
        ["base_ability_centaur_stampede", undefined],

    ],
    crystal_maiden: [
        ["base_ability_crystal_maiden_crystal_nova", undefined],
        ["base_ability_crystal_maiden_frostbite", undefined],
        ["base_ability_crystal_maiden_brilliance_aura", undefined],
        ["base_ability_crystal_maiden_brilliance_aura_active", "crystal_maiden_brilliance_aura"],
        ["base_ability_crystal_maiden_freezing_field", undefined],
    ],
    drow: [
        ["base_ability_drow_ranger_frost_arrows", undefined],
        ["base_ability_drow_ranger_marksmanship", undefined],
        ["base_ability_drow_ranger_multishot", undefined],
        ["base_ability_drow_ranger_multishot_field", "drow_ranger_multishot"],
        ["base_ability_drow_ranger_wave_of_silence", undefined],
    ],
    pudge: [
        ["base_ability_pudge_meat_hook", undefined],
        ["base_ability_pudge_rot", undefined],
        ["base_ability_pudge_flesh_heap", undefined],
        ["base_ability_pudge_dismember", undefined],
    ],
    skywrath_mage: [
        ["base_ability_skywrath_mage_arcane_bolt", undefined],
        ["base_ability_skywrath_mage_concussive_shot", undefined],
        ["base_ability_skywrath_mage_ancient_seal", undefined],
        ["base_ability_skywrath_mage_mystic_flare", undefined],
    ],
    windranger: [
        ["base_ability_windranger_focus_fire", "windrunner_focusfire"],
        ["base_ability_windranger_powershot", "windrunner_powershot"],
        ["base_ability_windranger_shackleshot", "windrunner_shackleshot"],
        ["base_ability_windranger_windrun", "windrunner_windrun"]
    ],
    lycan: [
        ["base_ability_lycan_summon_wolves", undefined],
        ["base_ability_lycan_howl", undefined],
        ["base_ability_lycan_feral_impulse", undefined],
        ["base_ability_lycan_shapeshift", undefined],
    ],
    axe: [
        ["base_ability_axe_berserkers_call", undefined],
        ["base_ability_axe_battle_hunger", undefined],
        ["base_ability_axe_counter_helix", undefined],
        ["base_ability_axe_culling_blade", undefined],
    ],
    antimage: [
        ["base_ability_antimage_mana_break", undefined],
        ["base_ability_antimage_blink", undefined],
        ["base_ability_antimage_counterspell", undefined],
        ["base_ability_antimage_mana_void", undefined],
    ],
    phantom_assassin: [
        ["base_ability_phantom_assassin_stifling_dagger", undefined],
        ["base_ability_phantom_assassin_phantom_strike", undefined],
        ["base_ability_phantom_assassin_blur", undefined],
        ["base_ability_phantom_assassin_coup_de_grace", undefined],
    ],
    sniper: [
        ["base_ability_sniper_shrapnel", undefined],
        ["base_ability_sniper_headshot", undefined],
        ["base_ability_sniper_take_aim", undefined],
        ["base_ability_sniper_assassinate", undefined],
    ],
    bristleback: [
        ["base_ability_bristleback_viscous_nasal_goo", undefined],
        ["base_ability_bristleback_quill_spray", undefined],
        ["base_ability_bristleback_bristleback", undefined],
        ["base_ability_bristleback_warpath", undefined],
    ],
    sven: [
        ["base_ability_sven_storm_bolt", undefined],
        ["base_ability_sven_great_cleave", undefined],
        ["base_ability_sven_warcry", undefined],
        ["base_ability_sven_gods_strength", undefined],
    ],
    sand_king: [
        ["base_ability_sand_king_sand_storm", "sandking_sand_storm"],
        ["base_ability_sand_king_scorpion_strike", "sandking_scorpion_strike"],
        ["base_ability_sand_king_burrowstrike", "sandking_burrowstrike"],
        ["base_ability_sand_king_epicenter", "sandking_epicenter"],
    ],
    abaddon: [
        ["base_ability_abaddon_aphotic_shield", undefined],
        ["base_ability_abaddon_mist_coil", "abaddon_death_coil"],
        ["base_ability_abaddon_curse_of_avernus", "abaddon_frostmourne"],
        ["base_ability_abaddon_borrowed_time", undefined],
    ],
    lion: [
        ["base_ability_lion_impale", undefined],
        ["base_ability_lion_voodoo", undefined],
        ["base_ability_lion_mana_drain", undefined],
        ["base_ability_lion_finger_of_death", undefined],
    ],
    lina: [
        ["base_ability_lina_dragon_slave", undefined],
        ["base_ability_lina_light_strike_array", undefined],
        ["base_ability_lina_fiery_soul", undefined],
        ["base_ability_lina_laguna_blade", undefined],
    ],
    leshrac: [
        ["base_ability_leshrac_split_earth", undefined],
        ["base_ability_leshrac_diabolic_edict", undefined],
        ["base_ability_leshrac_lightning_storm", undefined],
        ["base_ability_leshrac_pulse_nova", undefined],
    ],
    mirana: [
        ["base_ability_mirana_starfall", undefined],
        ["base_ability_mirana_arrow", undefined],
        ["base_ability_mirana_leap", undefined],
        ["base_ability_mirana_invis", undefined],
    ],
    vengefulspirit: [
        ["base_ability_vengefulspirit_magic_missile", undefined],
        ["base_ability_vengefulspirit_wave_of_terror", undefined],
        ["base_ability_vengefulspirit_command_aura", undefined],
        ["base_ability_vengefulspirit_nether_swap", undefined],
    ],
    gyrocopter: [
        ["base_ability_gyrocopter_rocket_barrage", undefined],
        ["base_ability_gyrocopter_homing_missile", undefined],
        ["base_ability_gyrocopter_flak_cannon", undefined],
        ["base_ability_gyrocopter_call_down", undefined],
    ]
}

createAll()
