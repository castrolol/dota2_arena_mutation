import { writeFile } from 'fs/promises';
import { Language } from './ability.types'
import { buildAndAbilityString, buildAndTranslateAbilityString, buildAndTranslateModifierString, buildModifierString, buildPlainString } from './build_string';
import { getAbilities, getModifiers, getPlain } from './external-abilities'
import { LanguagesManager } from './engine/languages-manager';

const delay = (ms: number) => new Promise(r => setTimeout(r, ms))

async function create() {
    const languages: Language[] = [];

    for (let languageKey in Language) {
        if (languageKey.toLocaleLowerCase() === "none") continue
        const lang = Language[languageKey] as Language
        languages.push(lang)
    }

    const languagesManager = new LanguagesManager(languages)

    const abilities = getAbilities()
    const modifiers = getModifiers()
    const plains = getPlain()

    for (let abilityGetter of abilities) {

        const ability = abilityGetter()

        if (ability.isToken) {
            await languagesManager.update(ability.langs)
            continue;
        }

        const items = buildAndAbilityString(ability)
        for (let key in items) {
            const value = items[key]

            await languagesManager.consumeAllLangs(ability.source, key, value)
            //await languagesManager.consume(ability.source, key, value)
        }
    }

    for (let modifier of modifiers) {
        if ("isToken" in modifier) {
            console.log("Updating pre-translated modifier")
            await languagesManager.update(modifier.langs)
            continue;
        }

        const items = buildModifierString(modifier)
        for (let key in items) {
            const value = items[key]

            await languagesManager.consumeAllLangs(modifier.source, key, value)
           // await languagesManager.consume(modifier.source, key, value, true)
        }


    }

    for (let plain of plains) {
        if ("isToken" in plain) {
            console.log("Updating pre-translated modifier")
            await languagesManager.update(plain.langs)
            continue;
        }

        const items = buildPlainString(plain)
        for (let key in items) {
            const value = items[key]

            await languagesManager.consumeAllLangs(plain.source, key, value.value, false, value.ignore )
            //await languagesManager.consume(plain.source, key, value.value, false, value.ignore )
        }


    }

    languagesManager.saveRaw()

    languagesManager.compile("../dota2_arena_mutation/game/resource", "addon_{lang}.txt")

}


create()