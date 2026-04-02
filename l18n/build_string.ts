import { AbilityLocalizationMounted, AbilityLocalizationMountedToTranslate, AbilitySpecialLocalization, AbilitySpecialLocalizationMounted, Language, ModifierLocalizationMounted, ModifierLocalizationMountedToTranslate, PlainLocalizationMounted, ValueProvider, unwrap } from "./ability.types";
import { translate } from "./translate";

export async function buildAndTranslateAbilityString(ability_raw: AbilityLocalizationMountedToTranslate, language: Language): Promise<Record<string, string>> {

    const ability_string = `DOTA_Tooltip_Ability_${ability_raw.ability_classname}`;
    let ability_name = await translate(ability_raw.name, ability_raw.source, language);
    let ability_description = await translate(ability_raw.description, ability_raw.source, language);
    let ability_lore = await translate(ability_raw.lore, ability_raw.source, language);
    let ability_notes: string[] = []
    if (ability_raw.notes) {
        for (let note of ability_raw.notes) {
            let _note = await translate(note, ability_raw.source, language)
            _note = transformString(_note, false)
            ability_notes.push(_note)
        }
    }
    let scepter_description = await translate(ability_raw.scepter_description, ability_raw.source, language);
    let shard_description = await translate(ability_raw.shard_description, ability_raw.source, language);
    let ability_specials: AbilitySpecialLocalization[] = []

    if (ability_raw.ability_specials) {
        for (let special of ability_raw.ability_specials) {
            let text = await translate(special.text, ability_raw.source, language) ?? ""
            text = transformString(text, false)
            const item: AbilitySpecialLocalization = {
                ability_special: special.ability_special,
                text,
                percentage: special.percentage,
                item_stat: special.item_stat,
            }
            ability_specials.push(item)
        }
    }
    ability_name = transformString(ability_name, false)
    ability_description = transformString(ability_description, false)
    ability_lore = transformString(ability_lore, false)
    scepter_description = transformString(scepter_description, false)
    shard_description = transformString(shard_description, false)



    const tokens: Record<string, string> = {}

    // Add name localization
    if (ability_name) {
        tokens[ability_string] = ability_name;
    }

    // Add description localization
    if (ability_description) {
        ability_description = transformString(ability_description, false);
        tokens[`${ability_string}_description`] = ability_description;
    }

    // Lore, if any
    if (ability_lore) {
        const transformed_lore = transformString(ability_lore, false);
        tokens[`${ability_string}_Lore`] = transformed_lore;
    }

    // Notes, if any
    if (ability_notes) {
        let counter = 0;
        for (const note of ability_notes) {
            const transformed_note = transformString(note, false);
            tokens[`${ability_string}_Note${counter}`] = transformed_note;

            counter++;
        }
    }

    // Scepter, if any
    if (scepter_description) {
        const ability_scepter_description = transformString(scepter_description, false);
        tokens[`${ability_string}_scepter_description`] = ability_scepter_description;
    }

    // Shard, if any
    if (shard_description) {
        const ability_shard_description = transformString(shard_description, false);
        tokens[`${ability_string}_shard_description`] = ability_shard_description;
    }

    // Ability specials, if any
    if (ability_specials) {
        for (const ability_special of ability_specials) {
            // Construct the ability special
            let ability_special_text = "";

            if (ability_special.percentage) {
                ability_special_text = "%";
            }
            else if (ability_special.item_stat) {
                ability_special_text = "+$"
            }

            ability_special_text += ability_special.text;

            tokens[`${ability_string}_${ability_special.ability_special}`] = ability_special_text;
        }
    }

    return tokens;
}

export async function buildAndTranslateModifierString(modifier: ModifierLocalizationMountedToTranslate, language: Language): Promise<Record<string, string>> {

    const modifier_string = `DOTA_Tooltip_${modifier.modifier_classname}`;

    const tokens: Record<string, string> = {}

    let modifier_name = await translate(modifier.name, modifier.source, language);
    let modifier_description = await translate(modifier.description, modifier.source, language);

    tokens[`${modifier_string}`] = transformString(modifier_name, true);
    tokens[`${modifier_string}_description`] = transformString(modifier_description, true);

    return tokens;
}


export function buildModifierString(modifier: ModifierLocalizationMountedToTranslate): Record<string, (string | ValueProvider[])> {

    const modifier_string = `DOTA_Tooltip_${modifier.modifier_classname}`;

    const tokens: Record<string, (string | ValueProvider[])> = {}

    let modifier_name = modifier.name
    let modifier_description = modifier.description

    tokens[`${modifier_string}`] = modifier_name!
    tokens[`${modifier_string}_description`] = modifier_description!

    return tokens;
}

export function buildPlainString(plain: PlainLocalizationMounted): Record<string, { value: (string | ValueProvider[]), ignore: boolean }> {

    if ("isToken" in plain) throw new Error("isToken is invalid")

    const items = plain.items;
    const tokens: Record<string, { value: (string | ValueProvider[]), ignore: boolean }> = {}

    for (let item of items) {
        tokens[`${item.key}`] = { value: item.value!, ignore: Boolean(item.ignore) }
    }

    return tokens;
}


export function transformString(text: string, modifier: boolean): string {
    if (modifier) {
        text = text.replace(/\{([^f]\w+)\}($|[^%])/g, "%d$1%$2")
        text = text.replace(/\{([^f]\w+)\}%/g, "%d$1%%%")
        text = text.replace(/\{f(\w+)\}($|[^%])/g, "%f$1%$2")
        text = text.replace(/\{f(\w+)\}%/g, "%f$1%%%");
        text = text.replace(/%\{([^f]\w+)\}/g, "%%%d$1%")
        text = text.replace(/%\{f(\w+)\}/g, "%%%f$1%");

        return text;
    }
    else {
        text = text.replace(/\{(\w*)}($|[^%])/g, "%$1%$2")
        text = text.replace(/\{(\w*)}%/g, "%$1%%%");
        text = text.replace(/%\{(\w*)}/g, "%%%$1%");

        return text;
    }
}



export function buildAndAbilityString(ability_raw: AbilityLocalizationMounted): Record<string, (string | ValueProvider[])> {
    if (ability_raw.isToken) throw new Error("NAO PODE SER TOKEN")

    const ability_string = `DOTA_Tooltip_Ability_${ability_raw.ability_classname}`;
    let ability_name = ability_raw.name;
    let ability_description = ability_raw.description;
    let ability_lore = ability_raw.lore;
    let ability_notes: (string | ValueProvider[])[] = []
    if (ability_raw.notes) {
        for (let note of ability_raw.notes) {
            let _note = note
            _note = _note
            ability_notes.push(_note)
        }
    }
    let scepter_description = ability_raw.scepter_description
    let shard_description = ability_raw.shard_description
    let ability_specials: AbilitySpecialLocalizationMounted[] = []

    if (ability_raw.ability_specials) {
        for (let special of ability_raw.ability_specials) {
            let text = special.text
            text = text
            const item: AbilitySpecialLocalizationMounted = {
                ability_special: special.ability_special,
                text,
                percentage: special.percentage,
                item_stat: special.item_stat,
            }
            ability_specials.push(item)
        }
    }
    ability_name = ability_name
    ability_description = ability_description
    ability_lore = ability_lore
    scepter_description = scepter_description
    shard_description = shard_description



    const tokens: Record<string, (string | ValueProvider[])> = {}

    // Add name localization
    if (ability_name) {
        tokens[ability_string] = ability_name;
    }

    // Add description localization
    if (ability_description) {
        ability_description = ability_description
        tokens[`${ability_string}_description`] = ability_description;
    }

    // Lore, if any
    if (ability_lore) {
        const transformed_lore = ability_lore
        tokens[`${ability_string}_Lore`] = transformed_lore;
    }

    // Notes, if any
    if (ability_notes) {
        let counter = 0;
        for (const note of ability_notes) {
            const transformed_note = note
            tokens[`${ability_string}_Note${counter}`] = transformed_note;

            counter++;
        }
    }

    // Scepter, if any
    if (scepter_description) {
        const ability_scepter_description = scepter_description
        tokens[`${ability_string}_scepter_description`] = ability_scepter_description;
    }

    // Shard, if any
    if (shard_description) {
        const ability_shard_description = shard_description
        tokens[`${ability_string}_shard_description`] = ability_shard_description;
    }

    // Ability specials, if any
    if (ability_specials) {
        for (const ability_special of ability_specials) {
            // Construct the ability special
            let ability_special_text = "";

            if (ability_special.percentage) {
                ability_special_text = "%";
            }
            else if (ability_special.item_stat) {
                ability_special_text = "+$"
            }

            ability_special_text += typeof ability_special.text === "string" ? ability_special.text : ability_special.text[0].value;
            if (typeof ability_special.text !== "string") {
                ability_special.text[0].value = ability_special_text;
            } else {
                ability_special.text = ability_special_text;
            }


            tokens[`${ability_string}_${ability_special.ability_special}`] = ability_special.text;
        }
    }

    return tokens;
}