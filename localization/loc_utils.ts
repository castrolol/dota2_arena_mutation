// import jsGoogleTranslateFree from "@kreisler/js-google-translate-free";

let i = 0;
let caching: Record<string, string> = {};

export function putvar(value: LocalizationModifierProperty): ValueProvider[] {
    let key = `{${value}}`
    let _value = `{var${i++}}`
    if (!caching[key]) {
        caching[key] = _value;
    }
    _value = caching[key];
    return [{
        type: 'ignore',
        value: _value,
        key
    }]
}

export function ignore(value: string): ValueProvider[] {
    let key = `${value}`
    let _value = `{ignr${i++}}`
    if (!caching[key]) {
        caching[key] = _value;
    }
    _value = caching[key];
    return [{
        type: 'ignore',
        value: _value,
        key
    }]
}

export function abilityValue(value: string, percent: boolean = false): ValueProvider[] {
    let key = percent ? `%${value}%%%` : `%${value}%`
    let _value = `{val${i++}}`
    if (!caching[key]) {
        caching[key] = _value;
    }
    _value = caching[key];
    return [{
        type: 'ignore',
        value: _value,
        key
    }]
}


export function color(color: Colors): ValueProvider[] {
    return [{
        type: 'ignore',
        value: `{color${color}}`,
        key: `<font color='${color}'>`
    }]
}

export function endcolor(): ValueProvider[] {
    return [{
        type: 'ignore',
        value: `{endcolor}`,
        key: `</font>`
    }]
}

export function ref(key: string): ValueProvider[] {
    let _key = `ref(${key})`
    let _value = `{ref${i++}}`
    if (!caching[key]) {
        caching[key] = _value;
    }
    _value = caching[key];
    return [{
        type: 'replace',
        value: _value,
        key: _key
    }]
}

export function skill(skillRef: string): ValueProvider[] {
    return [
        ...color(Colors.Ability),
        ...ref(skillRef),
        ...endcolor()
    ]
}

export function dot(innerText: string = "DoT") {
    return [
        ...color(Colors.DoT),
        ...text(innerText),
        ...endcolor()
    ]
}

export enum Colors {
    Ability = "#F2A93D",
    DoT = "#49b9a0",
    Danger = "#c31717",
    Mana = "#84dcfe",
    Warning = "#c03343",
    Info = "#9ab3fd",
    Magic = "#5c94d2"
}


export async function createLocObject(ability: AbilityLocalization, translateFn: (input: string) => Promise<string>) {
    return {
        ability_classname: ability.ability_classname,
        name: ability.name ? await translateFn(ability.name) : ability.name,
        description: ability.description ? await translateFn(ability.description) : ability.description,
        scepter_description: ability.scepter_description ? await translateFn(ability.scepter_description) : ability.scepter_description,
        shard_description: ability.shard_description ? await translateFn(ability.shard_description) : ability.shard_description,
        lore: ability.lore ? await translateFn(ability.lore) : ability.lore,
        notes: ability.notes ? await Promise.all(ability.notes.map(translateFn)) : ability.notes,
        ability_specials: ability.ability_specials ? await Promise.all(ability.ability_specials.map(async special => ({
            ability_special: special.ability_special ? await translateFn(special.ability_special) : special.ability_special,
            text: special.text ? await translateFn(special.text) : special.text,
            percentage: special.percentage,
            item_stat: special.item_stat
        }))) : ability.ability_specials,
    }
}

export enum Language {
    Brazilian = 'brazilian',
    // Bulgarian = 'bulgarian',
    // Czech = 'czech',
    // Danish = 'danish',    
    English = 'english',
    // Finnish = 'finnish',    
    // French = `french`,
    // German = `german`,
    // Greek = 'greek',
    // Hungarian = 'hungarian',
    // Italian = 'italian',
    // Japanese = 'japanese',
    // Koreana = 'koreana',
    // Latam = 'latam',
    // Norwegian = `norwegian`,
    // Polish = 'polish',    
    // Portuguese = `portuguese`,
    Russian = `russian`,
    Schinese = `schinese`,
    Spanish = `spanish`,
    // Swedish = `swedish`,
    // TChinese = `tchinese`,
    // Thai = 'thai',
    // Turkish = 'turkish',
    // Ukrainian = 'ukrainian',
    // Vietnamese = `vietnamese`
}


const langs = {
    [Language.Brazilian]: "pt-BR",
    [Language.English]: "en",
    [Language.Russian]: "ru",
    [Language.Schinese]: "zh-CN",
    [Language.Spanish]: "es"
}


export type PlainLocalizationMounted = {
    source: Language,
    items: Array<{
        key: string | ValueProvider[],
        value: string | ValueProvider[],
        ignore?: true | false | undefined
    }>
} | {
    isToken: true,
    langs: Record<Language, Record<string, string>>
}

export type ModifierLocalizationMounted = {
    source: Language,
    modifier_classname: string;
    name?: string | ValueProvider[];
    description?: string | ValueProvider[];
} | {
    isToken: true,
    langs: Record<Language, Record<string, string>>
}

export interface StandardLocalizationMounted {
    [classname: string]: string | ValueProvider[];
}


// export async function createTranslationsFor(ability: AbilityLocalizationMounted): Promise<AbilityLocalization> {
//     let replaces: Record<string, string> = {};
//     if (!ability.isToken) throw new Error("a")
//     const treatedItems = {
//         isToken: false,
//         ability_classname: ability.ability_classname,
//         name: unwrap(ability.name, replaces),
//         description: unwrap(ability.description, replaces),
//         scepter_description: unwrap(ability.scepter_description, replaces),
//         shard_description: unwrap(ability.shard_description, replaces),
//         lore: unwrap(ability.lore, replaces),
//         notes: ability.notes?.map(note => unwrap(note, replaces)!),
//         ability_specials: ability.ability_specials ? await Promise.all(ability.ability_specials.map(async special => ({
//             ability_special: special.ability_special,
//             text: unwrap(special.text, replaces)!,
//             percentage: special.percentage,
//             item_stat: special.item_stat
//         }))) : ability.ability_specials,
//     }

//     const languages = Object.values(Language);
//     let base: AbilityLocalization;
//     let results: Record<Language, AbilityLocalization> = {} as any;

//     for (let language of languages) {
//         if (language === 'none') continue;
//         const translate = await createLocObject(
//             treatedItems,
//             async (str: string) => {

//                 let result = await (jsGoogleTranslateFree as any).translate(langs[ability.source], langs[language], str) as string;
//                 for (let key in replaces) {
//                     const search = replaces[key]
//                     result = result.split(search).join(`{${key}}`);
//                 }

//                 return result;
//             }
//         )

//         results[language] = translate;

//     }

//     const translated = results.english

//     translated.language_overrides = Object.keys(results).map(lang => {
//         if (lang === Language.English) return null as unknown as AbilityLocalizationContent;
//         return convertOverride(results[lang], lang as Language);
//     }).filter(x => x)

//     return translated
// }

export function L(items: TemplateStringsArray, ...keys: ValueProvider[][]): ValueProvider[] {
    const result = items.raw.flatMap((x, index) => {
        const current = text(x)[0];
        if (keys[index]) {
            return [current, ...keys[index]]
        }

        return [current]
    })

    return result;
}


function text(value: string): ValueProvider[] {
    return [{
        type: 'text',
        value
    }]
}
function unwrap(value: undefined | null | string | ValueProvider[], replaces: Record<string, string>): undefined | string {
    if (!value) return undefined;

    if (typeof value === "string") return value;

    return value.map(x => {
        if (x.type === "ignore") {
            replaces[x.key!] = x.value
        }
        return x.value
    }).join("")

}

function convertOverride(input: AbilityLocalization, language: Language): AbilityLocalizationContent {

    return {
        language,
        ability_specials_override: input.ability_specials,
        description_override: input.description,
        lore_override: input.lore,
        name_override: input.name,
        notes_override: input.notes,
        scepter_description_override: input.scepter_description,
        shard_description_override: input.shard_description
    }

}

export interface ValueProvider {
    type: 'ignore' | 'text' | 'replace',
    value: string,
    key?: string
}

export type AbilityLocalizationMounted = {
    source: Language,
    ability_classname: string;
    name?: string | ValueProvider[];
    description?: string | ValueProvider[];
    scepter_description?: string | ValueProvider[];
    shard_description?: string | ValueProvider[];
    lore?: string | ValueProvider[];
    notes?: Array<string | ValueProvider[]>;
    //reimagined_effects?: Array<ReimaginedEffect>;
    ability_specials?: Array<AbilitySpecialLocalizationMounted>;
} | {
    isToken: true,
    langs: Record<Language, Record<string, string>>
}



export interface AbilityLocalization {
    ability_classname: string;
    name?: string;
    description?: string;
    scepter_description?: string;
    shard_description?: string;
    lore?: string;
    notes?: Array<string>;
    //reimagined_effects?: Array<ReimaginedEffect>;
    ability_specials?: Array<AbilitySpecialLocalization>;
    language_overrides?: Array<AbilityLocalizationContent>;
}


export interface AbilityLocalizationContent {
    language: Language;
    name_override?: string;
    description_override?: string;
    scepter_description_override?: string;
    shard_description_override?: string;
    lore_override?: string;
    notes_override?: Array<string>;
    //reimagined_effects_override?: Array<ReimaginedEffect>;
    ability_specials_override?: Array<AbilitySpecialLocalization>;
}

export interface ModifierLocalization {
    modifier_classname: string;
    name?: string;
    description?: string;
    language_overrides?: Array<ModifierLocalizationContent>;
}


export interface AbilitySpecialLocalization {
    ability_special: string;
    text: string;
    percentage?: boolean; // false by default if omitted
    item_stat?: boolean // false by default if omitted
}
export interface AbilitySpecialLocalizationMounted {
    ability_special: string;
    text: string | ValueProvider[];
    percentage?: boolean; // false by default if omitted
    item_stat?: boolean // false by default if omitted
}



export interface ModifierLocalizationContent {
    language: Language;
    name_override?: string
    description_override?: string;
}

export enum LocalizationModifierProperty {
    PREATTACK_BONUS_DAMAGE = "MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE",
    PREATTACK_BONUS_DAMAGE_TARGET = "MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE_TARGET",
    PREATTACK_BONUS_DAMAGE_PROC = "MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE_PROC",
    PREATTACK_BONUS_DAMAGE_POST_CRIT = "MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE_POST_CRIT",
    BASEATTACK_BONUSDAMAGE = "MODIFIER_PROPERTY_BASEATTACK_BONUSDAMAGE",
    PROCATTACK_BONUS_DAMAGE_PHYSICAL = "MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_PHYSICAL",
    PROCATTACK_BONUS_DAMAGE_MAGICAL = "MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_MAGICAL",
    PROCATTACK_BONUS_DAMAGE_PURE = "MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_PURE",
    PROCATTACK_FEEDBACK = "MODIFIER_PROPERTY_PROCATTACK_FEEDBACK",
    OVERRIDE_ATTACK_DAMAGE = "MODIFIER_PROPERTY_OVERRIDE_ATTACK_DAMAGE",
    PRE_ATTACK = "MODIFIER_PROPERTY_PRE_ATTACK",
    INVISIBILITY_LEVEL = "MODIFIER_PROPERTY_INVISIBILITY_LEVEL",
    INVISIBILITY_ATTACK_BEHAVIOR_EXCEPTION = "MODIFIER_PROPERTY_INVISIBILITY_ATTACK_BEHAVIOR_EXCEPTION",
    PERSISTENT_INVISIBILITY = "MODIFIER_PROPERTY_PERSISTENT_INVISIBILITY",
    MOVESPEED_BONUS_CONSTANT = "MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT",
    MOVESPEED_BASE_OVERRIDE = "MODIFIER_PROPERTY_MOVESPEED_BASE_OVERRIDE",
    MOVESPEED_BONUS_PERCENTAGE = "MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE",
    MOVESPEED_BONUS_PERCENTAGE_UNIQUE = "MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE_UNIQUE",
    MOVESPEED_BONUS_PERCENTAGE_UNIQUE_2 = "MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE_UNIQUE_2",
    MOVESPEED_BONUS_UNIQUE = "MODIFIER_PROPERTY_MOVESPEED_BONUS_UNIQUE",
    MOVESPEED_BONUS_UNIQUE_2 = "MODIFIER_PROPERTY_MOVESPEED_BONUS_UNIQUE_2",
    MOVESPEED_BONUS_CONSTANT_UNIQUE = "MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT_UNIQUE",
    MOVESPEED_BONUS_CONSTANT_UNIQUE_2 = "MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT_UNIQUE_2",
    MOVESPEED_ABSOLUTE = "MODIFIER_PROPERTY_MOVESPEED_ABSOLUTE",
    MOVESPEED_ABSOLUTE_MIN = "MODIFIER_PROPERTY_MOVESPEED_ABSOLUTE_MIN",
    MOVESPEED_ABSOLUTE_MAX = "MODIFIER_PROPERTY_MOVESPEED_ABSOLUTE_MAX",
    IGNORE_MOVESPEED_LIMIT = "MODIFIER_PROPERTY_IGNORE_MOVESPEED_LIMIT",
    MOVESPEED_LIMIT = "MODIFIER_PROPERTY_MOVESPEED_LIMIT",
    ATTACKSPEED_BASE_OVERRIDE = "MODIFIER_PROPERTY_ATTACKSPEED_BASE_OVERRIDE",
    FIXED_ATTACK_RATE = "MODIFIER_PROPERTY_FIXED_ATTACK_RATE",
    ATTACKSPEED_BONUS_CONSTANT = "MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT",
    COOLDOWN_REDUCTION_CONSTANT = "MODIFIER_PROPERTY_COOLDOWN_REDUCTION_CONSTANT",
    MANACOST_REDUCTION_CONSTANT = "MODIFIER_PROPERTY_MANACOST_REDUCTION_CONSTANT",
    BASE_ATTACK_TIME_CONSTANT = "MODIFIER_PROPERTY_BASE_ATTACK_TIME_CONSTANT",
    BASE_ATTACK_TIME_CONSTANT_ADJUST = "MODIFIER_PROPERTY_BASE_ATTACK_TIME_CONSTANT_ADJUST",
    ATTACK_POINT_CONSTANT = "MODIFIER_PROPERTY_ATTACK_POINT_CONSTANT",
    BONUSDAMAGEOUTGOING_PERCENTAGE = "MODIFIER_PROPERTY_BONUSDAMAGEOUTGOING_PERCENTAGE",
    DAMAGEOUTGOING_PERCENTAGE = "MODIFIER_PROPERTY_DAMAGEOUTGOING_PERCENTAGE",
    DAMAGEOUTGOING_PERCENTAGE_ILLUSION = "MODIFIER_PROPERTY_DAMAGEOUTGOING_PERCENTAGE_ILLUSION",
    DAMAGEOUTGOING_PERCENTAGE_ILLUSION_AMPLIFY = "MODIFIER_PROPERTY_DAMAGEOUTGOING_PERCENTAGE_ILLUSION_AMPLIFY",
    TOTALDAMAGEOUTGOING_PERCENTAGE = "MODIFIER_PROPERTY_TOTALDAMAGEOUTGOING_PERCENTAGE",
    SPELL_AMPLIFY_PERCENTAGE = "MODIFIER_PROPERTY_SPELL_AMPLIFY_PERCENTAGE",
    SPELL_AMPLIFY_PERCENTAGE_UNIQUE = "MODIFIER_PROPERTY_SPELL_AMPLIFY_PERCENTAGE_UNIQUE",
    HEAL_AMPLIFY_PERCENTAGE_SOURCE = "MODIFIER_PROPERTY_HEAL_AMPLIFY_PERCENTAGE_SOURCE",
    HEAL_AMPLIFY_PERCENTAGE_TARGET = "MODIFIER_PROPERTY_HEAL_AMPLIFY_PERCENTAGE_TARGET",
    HP_REGEN_AMPLIFY_PERCENTAGE = "MODIFIER_PROPERTY_HP_REGEN_AMPLIFY_PERCENTAGE",
    LIFESTEAL_AMPLIFY_PERCENTAGE = "MODIFIER_PROPERTY_LIFESTEAL_AMPLIFY_PERCENTAGE",
    SPELL_LIFESTEAL_AMPLIFY_PERCENTAGE = "MODIFIER_PROPERTY_SPELL_LIFESTEAL_AMPLIFY_PERCENTAGE",
    MP_REGEN_AMPLIFY_PERCENTAGE = "MODIFIER_PROPERTY_MP_REGEN_AMPLIFY_PERCENTAGE",
    MANA_DRAIN_AMPLIFY_PERCENTAGE = "MODIFIER_PROPERTY_MANA_DRAIN_AMPLIFY_PERCENTAGE",
    MP_RESTORE_AMPLIFY_PERCENTAGE = "MODIFIER_PROPERTY_MP_RESTORE_AMPLIFY_PERCENTAGE",
    BASEDAMAGEOUTGOING_PERCENTAGE = "MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE",
    BASEDAMAGEOUTGOING_PERCENTAGE_UNIQUE = "MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE_UNIQUE",
    INCOMING_DAMAGE_PERCENTAGE = "MODIFIER_PROPERTY_INCOMING_DAMAGE_PERCENTAGE",
    INCOMING_PHYSICAL_DAMAGE_PERCENTAGE = "MODIFIER_PROPERTY_INCOMING_PHYSICAL_DAMAGE_PERCENTAGE",
    INCOMING_PHYSICAL_DAMAGE_CONSTANT = "MODIFIER_PROPERTY_INCOMING_PHYSICAL_DAMAGE_CONSTANT",
    INCOMING_SPELL_DAMAGE_CONSTANT = "MODIFIER_PROPERTY_INCOMING_SPELL_DAMAGE_CONSTANT",
    EVASION_CONSTANT = "MODIFIER_PROPERTY_EVASION_CONSTANT",
    NEGATIVE_EVASION_CONSTANT = "MODIFIER_PROPERTY_NEGATIVE_EVASION_CONSTANT",
    STATUS_RESISTANCE = "MODIFIER_PROPERTY_STATUS_RESISTANCE",
    STATUS_RESISTANCE_STACKING = "MODIFIER_PROPERTY_STATUS_RESISTANCE_STACKING",
    STATUS_RESISTANCE_CASTER = "MODIFIER_PROPERTY_STATUS_RESISTANCE_CASTER",
    AVOID_DAMAGE = "MODIFIER_PROPERTY_AVOID_DAMAGE",
    AVOID_SPELL = "MODIFIER_PROPERTY_AVOID_SPELL",
    MISS_PERCENTAGE = "MODIFIER_PROPERTY_MISS_PERCENTAGE",
    PHYSICAL_ARMOR_BASE_PERCENTAGE = "MODIFIER_PROPERTY_PHYSICAL_ARMOR_BASE_PERCENTAGE",
    PHYSICAL_ARMOR_TOTAL_PERCENTAGE = "MODIFIER_PROPERTY_PHYSICAL_ARMOR_TOTAL_PERCENTAGE",
    PHYSICAL_ARMOR_BONUS = "MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS",
    PHYSICAL_ARMOR_BONUS_UNIQUE = "MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS_UNIQUE",
    PHYSICAL_ARMOR_BONUS_UNIQUE_ACTIVE = "MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS_UNIQUE_ACTIVE",
    IGNORE_PHYSICAL_ARMOR = "MODIFIER_PROPERTY_IGNORE_PHYSICAL_ARMOR",
    MAGICAL_RESISTANCE_BASE_REDUCTION = "MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BASE_REDUCTION",
    MAGICAL_RESISTANCE_DIRECT_MODIFICATION = "MODIFIER_PROPERTY_MAGICAL_RESISTANCE_DIRECT_MODIFICATION",
    MAGICAL_RESISTANCE_BONUS = "MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS",
    MAGICAL_RESISTANCE_BONUS_ILLUSIONS = "MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS_ILLUSIONS",
    MAGICAL_RESISTANCE_DECREPIFY_UNIQUE = "MODIFIER_PROPERTY_MAGICAL_RESISTANCE_DECREPIFY_UNIQUE",
    BASE_MANA_REGEN = "MODIFIER_PROPERTY_BASE_MANA_REGEN",
    MANA_REGEN_CONSTANT = "MODIFIER_PROPERTY_MANA_REGEN_CONSTANT",
    MANA_REGEN_CONSTANT_UNIQUE = "MODIFIER_PROPERTY_MANA_REGEN_CONSTANT_UNIQUE",
    MANA_REGEN_TOTAL_PERCENTAGE = "MODIFIER_PROPERTY_MANA_REGEN_TOTAL_PERCENTAGE",
    HEALTH_REGEN_CONSTANT = "MODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT",
    HEALTH_REGEN_PERCENTAGE = "MODIFIER_PROPERTY_HEALTH_REGEN_PERCENTAGE",
    HEALTH_REGEN_PERCENTAGE_UNIQUE = "MODIFIER_PROPERTY_HEALTH_REGEN_PERCENTAGE_UNIQUE",
    HEALTH_BONUS = "MODIFIER_PROPERTY_HEALTH_BONUS",
    MANA_BONUS = "MODIFIER_PROPERTY_MANA_BONUS",
    EXTRA_STRENGTH_BONUS = "MODIFIER_PROPERTY_EXTRA_STRENGTH_BONUS",
    EXTRA_HEALTH_BONUS = "MODIFIER_PROPERTY_EXTRA_HEALTH_BONUS",
    EXTRA_MANA_BONUS = "MODIFIER_PROPERTY_EXTRA_MANA_BONUS",
    EXTRA_HEALTH_PERCENTAGE = "MODIFIER_PROPERTY_EXTRA_HEALTH_PERCENTAGE",
    EXTRA_MANA_PERCENTAGE = "MODIFIER_PROPERTY_EXTRA_MANA_PERCENTAGE",
    STATS_STRENGTH_BONUS = "MODIFIER_PROPERTY_STATS_STRENGTH_BONUS",
    STATS_AGILITY_BONUS = "MODIFIER_PROPERTY_STATS_AGILITY_BONUS",
    STATS_INTELLECT_BONUS = "MODIFIER_PROPERTY_STATS_INTELLECT_BONUS",
    STATS_STRENGTH_BONUS_PERCENTAGE = "MODIFIER_PROPERTY_STATS_STRENGTH_BONUS_PERCENTAGE",
    STATS_AGILITY_BONUS_PERCENTAGE = "MODIFIER_PROPERTY_STATS_AGILITY_BONUS_PERCENTAGE",
    STATS_INTELLECT_BONUS_PERCENTAGE = "MODIFIER_PROPERTY_STATS_INTELLECT_BONUS_PERCENTAGE",
    CAST_RANGE_BONUS = "MODIFIER_PROPERTY_CAST_RANGE_BONUS",
    CAST_RANGE_BONUS_TARGET = "MODIFIER_PROPERTY_CAST_RANGE_BONUS_TARGET",
    CAST_RANGE_BONUS_STACKING = "MODIFIER_PROPERTY_CAST_RANGE_BONUS_STACKING",
    ATTACK_RANGE_BASE_OVERRIDE = "MODIFIER_PROPERTY_ATTACK_RANGE_BASE_OVERRIDE",
    ATTACK_RANGE_BONUS = "MODIFIER_PROPERTY_ATTACK_RANGE_BONUS",
    ATTACK_RANGE_BONUS_UNIQUE = "MODIFIER_PROPERTY_ATTACK_RANGE_BONUS_UNIQUE",
    ATTACK_RANGE_BONUS_PERCENTAGE = "MODIFIER_PROPERTY_ATTACK_RANGE_BONUS_PERCENTAGE",
    MAX_ATTACK_RANGE = "MODIFIER_PROPERTY_MAX_ATTACK_RANGE",
    PROJECTILE_SPEED_BONUS = "MODIFIER_PROPERTY_PROJECTILE_SPEED_BONUS",
    PROJECTILE_SPEED_BONUS_PERCENTAGE = "MODIFIER_PROPERTY_PROJECTILE_SPEED_BONUS_PERCENTAGE",
    PROJECTILE_NAME = "MODIFIER_PROPERTY_PROJECTILE_NAME",
    REINCARNATION = "MODIFIER_PROPERTY_REINCARNATION",
    RESPAWNTIME = "MODIFIER_PROPERTY_RESPAWNTIME",
    RESPAWNTIME_PERCENTAGE = "MODIFIER_PROPERTY_RESPAWNTIME_PERCENTAGE",
    RESPAWNTIME_STACKING = "MODIFIER_PROPERTY_RESPAWNTIME_STACKING",
    COOLDOWN_PERCENTAGE = "MODIFIER_PROPERTY_COOLDOWN_PERCENTAGE",
    COOLDOWN_PERCENTAGE_ONGOING = "MODIFIER_PROPERTY_COOLDOWN_PERCENTAGE_ONGOING",
    CASTTIME_PERCENTAGE = "MODIFIER_PROPERTY_CASTTIME_PERCENTAGE",
    MANACOST_PERCENTAGE = "MODIFIER_PROPERTY_MANACOST_PERCENTAGE",
    MANACOST_PERCENTAGE_STACKING = "MODIFIER_PROPERTY_MANACOST_PERCENTAGE_STACKING",
    DEATHGOLDCOST = "MODIFIER_PROPERTY_DEATHGOLDCOST",
    EXP_RATE_BOOST = "MODIFIER_PROPERTY_EXP_RATE_BOOST",
    PREATTACK_CRITICALSTRIKE = "MODIFIER_PROPERTY_PREATTACK_CRITICALSTRIKE",
    PREATTACK_TARGET_CRITICALSTRIKE = "MODIFIER_PROPERTY_PREATTACK_TARGET_CRITICALSTRIKE",
    MAGICAL_CONSTANT_BLOCK = "MODIFIER_PROPERTY_MAGICAL_CONSTANT_BLOCK",
    PHYSICAL_CONSTANT_BLOCK = "MODIFIER_PROPERTY_PHYSICAL_CONSTANT_BLOCK",
    PHYSICAL_CONSTANT_BLOCK_SPECIAL = "MODIFIER_PROPERTY_PHYSICAL_CONSTANT_BLOCK_SPECIAL",
    TOTAL_CONSTANT_BLOCK_UNAVOIDABLE_PRE_ARMOR = "MODIFIER_PROPERTY_TOTAL_CONSTANT_BLOCK_UNAVOIDABLE_PRE_ARMOR",
    TOTAL_CONSTANT_BLOCK = "MODIFIER_PROPERTY_TOTAL_CONSTANT_BLOCK",
    OVERRIDE_ANIMATION = "MODIFIER_PROPERTY_OVERRIDE_ANIMATION",
    OVERRIDE_ANIMATION_WEIGHT = "MODIFIER_PROPERTY_OVERRIDE_ANIMATION_WEIGHT",
    OVERRIDE_ANIMATION_RATE = "MODIFIER_PROPERTY_OVERRIDE_ANIMATION_RATE",
    ABSORB_SPELL = "MODIFIER_PROPERTY_ABSORB_SPELL",
    REFLECT_SPELL = "MODIFIER_PROPERTY_REFLECT_SPELL",
    DISABLE_AUTOATTACK = "MODIFIER_PROPERTY_DISABLE_AUTOATTACK",
    BONUS_DAY_VISION = "MODIFIER_PROPERTY_BONUS_DAY_VISION",
    BONUS_NIGHT_VISION = "MODIFIER_PROPERTY_BONUS_NIGHT_VISION",
    BONUS_NIGHT_VISION_UNIQUE = "MODIFIER_PROPERTY_BONUS_NIGHT_VISION_UNIQUE",
    BONUS_VISION_PERCENTAGE = "MODIFIER_PROPERTY_BONUS_VISION_PERCENTAGE",
    FIXED_DAY_VISION = "MODIFIER_PROPERTY_FIXED_DAY_VISION",
    FIXED_NIGHT_VISION = "MODIFIER_PROPERTY_FIXED_NIGHT_VISION",
    MIN_HEALTH = "MODIFIER_PROPERTY_MIN_HEALTH",
    ABSOLUTE_NO_DAMAGE_PHYSICAL = "MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_PHYSICAL",
    ABSOLUTE_NO_DAMAGE_MAGICAL = "MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_MAGICAL",
    ABSOLUTE_NO_DAMAGE_PURE = "MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_PURE",
    IS_ILLUSION = "MODIFIER_PROPERTY_IS_ILLUSION",
    ILLUSION_LABEL = "MODIFIER_PROPERTY_ILLUSION_LABEL",
    STRONG_ILLUSION = "MODIFIER_PROPERTY_STRONG_ILLUSION",
    SUPER_ILLUSION = "MODIFIER_PROPERTY_SUPER_ILLUSION",
    SUPER_ILLUSION_WITH_ULTIMATE = "MODIFIER_PROPERTY_SUPER_ILLUSION_WITH_ULTIMATE",
    TURN_RATE_PERCENTAGE = "MODIFIER_PROPERTY_TURN_RATE_PERCENTAGE",
    TURN_RATE_OVERRIDE = "MODIFIER_PROPERTY_TURN_RATE_OVERRIDE",
    DISABLE_HEALING = "MODIFIER_PROPERTY_DISABLE_HEALING",
    ALWAYS_ALLOW_ATTACK = "MODIFIER_PROPERTY_ALWAYS_ALLOW_ATTACK",
    ALWAYS_ETHEREAL_ATTACK = "MODIFIER_PROPERTY_ALWAYS_ETHEREAL_ATTACK",
    OVERRIDE_ATTACK_MAGICAL = "MODIFIER_PROPERTY_OVERRIDE_ATTACK_MAGICAL",
    UNIT_STATS_NEEDS_REFRESH = "MODIFIER_PROPERTY_UNIT_STATS_NEEDS_REFRESH",
    BOUNTY_CREEP_MULTIPLIER = "MODIFIER_PROPERTY_BOUNTY_CREEP_MULTIPLIER",
    BOUNTY_OTHER_MULTIPLIER = "MODIFIER_PROPERTY_BOUNTY_OTHER_MULTIPLIER",
    UNIT_DISALLOW_UPGRADING = "MODIFIER_PROPERTY_UNIT_DISALLOW_UPGRADING",
    DODGE_PROJECTILE = "MODIFIER_PROPERTY_DODGE_PROJECTILE",
    TRIGGER_COSMETIC_AND_END_ATTACK = "MODIFIER_PROPERTY_TRIGGER_COSMETIC_AND_END_ATTACK",
    MODIFIER_EVENT_ON_SPELL_TARGET_READY = "MODIFIER_EVENT_ON_SPELL_TARGET_READY",
    MODIFIER_EVENT_ON_ATTACK_RECORD = "MODIFIER_EVENT_ON_ATTACK_RECORD",
    MODIFIER_EVENT_ON_ATTACK_START = "MODIFIER_EVENT_ON_ATTACK_START",
    MODIFIER_EVENT_ON_ATTACK = "MODIFIER_EVENT_ON_ATTACK",
    MODIFIER_EVENT_ON_ATTACK_LANDED = "MODIFIER_EVENT_ON_ATTACK_LANDED",
    MODIFIER_EVENT_ON_ATTACK_FAIL = "MODIFIER_EVENT_ON_ATTACK_FAIL",
    MODIFIER_EVENT_ON_ATTACK_ALLIED = "MODIFIER_EVENT_ON_ATTACK_ALLIED",
    MODIFIER_EVENT_ON_PROJECTILE_DODGE = "MODIFIER_EVENT_ON_PROJECTILE_DODGE",
    MODIFIER_EVENT_ON_ORDER = "MODIFIER_EVENT_ON_ORDER",
    MODIFIER_EVENT_ON_UNIT_MOVED = "MODIFIER_EVENT_ON_UNIT_MOVED",
    MODIFIER_EVENT_ON_ABILITY_START = "MODIFIER_EVENT_ON_ABILITY_START",
    MODIFIER_EVENT_ON_ABILITY_EXECUTED = "MODIFIER_EVENT_ON_ABILITY_EXECUTED",
    MODIFIER_EVENT_ON_ABILITY_FULLY_CAST = "MODIFIER_EVENT_ON_ABILITY_FULLY_CAST",
    MODIFIER_EVENT_ON_BREAK_INVISIBILITY = "MODIFIER_EVENT_ON_BREAK_INVISIBILITY",
    MODIFIER_EVENT_ON_ABILITY_END_CHANNEL = "MODIFIER_EVENT_ON_ABILITY_END_CHANNEL",
    MODIFIER_EVENT_ON_PROCESS_UPGRADE = "MODIFIER_EVENT_ON_PROCESS_UPGRADE",
    MODIFIER_EVENT_ON_REFRESH = "MODIFIER_EVENT_ON_REFRESH",
    MODIFIER_EVENT_ON_TAKEDAMAGE = "MODIFIER_EVENT_ON_TAKEDAMAGE",
    MODIFIER_EVENT_ON_DEATH_PREVENTED = "MODIFIER_EVENT_ON_DEATH_PREVENTED",
    MODIFIER_EVENT_ON_STATE_CHANGED = "MODIFIER_EVENT_ON_STATE_CHANGED",
    MODIFIER_EVENT_ON_ORB_EFFECT = "MODIFIER_EVENT_ON_ORB_EFFECT",
    MODIFIER_EVENT_ON_PROCESS_CLEAVE = "MODIFIER_EVENT_ON_PROCESS_CLEAVE",
    MODIFIER_EVENT_ON_DAMAGE_CALCULATED = "MODIFIER_EVENT_ON_DAMAGE_CALCULATED",
    MODIFIER_EVENT_ON_ATTACKED = "MODIFIER_EVENT_ON_ATTACKED",
    MODIFIER_EVENT_ON_DEATH = "MODIFIER_EVENT_ON_DEATH",
    MODIFIER_EVENT_ON_RESPAWN = "MODIFIER_EVENT_ON_RESPAWN",
    MODIFIER_EVENT_ON_SPENT_MANA = "MODIFIER_EVENT_ON_SPENT_MANA",
    MODIFIER_EVENT_ON_TELEPORTING = "MODIFIER_EVENT_ON_TELEPORTING",
    MODIFIER_EVENT_ON_TELEPORTED = "MODIFIER_EVENT_ON_TELEPORTED",
    MODIFIER_EVENT_ON_SET_LOCATION = "MODIFIER_EVENT_ON_SET_LOCATION",
    MODIFIER_EVENT_ON_HEALTH_GAINED = "MODIFIER_EVENT_ON_HEALTH_GAINED",
    MODIFIER_EVENT_ON_MANA_GAINED = "MODIFIER_EVENT_ON_MANA_GAINED",
    MODIFIER_EVENT_ON_TAKEDAMAGE_KILLCREDIT = "MODIFIER_EVENT_ON_TAKEDAMAGE_KILLCREDIT",
    MODIFIER_EVENT_ON_HERO_KILLED = "MODIFIER_EVENT_ON_HERO_KILLED",
    MODIFIER_EVENT_ON_HEAL_RECEIVED = "MODIFIER_EVENT_ON_HEAL_RECEIVED",
    MODIFIER_EVENT_ON_BUILDING_KILLED = "MODIFIER_EVENT_ON_BUILDING_KILLED",
    MODIFIER_EVENT_ON_MODEL_CHANGED = "MODIFIER_EVENT_ON_MODEL_CHANGED",
    MODIFIER_EVENT_ON_MODIFIER_ADDED = "MODIFIER_EVENT_ON_MODIFIER_ADDED",
    TOOLTIP = "MODIFIER_PROPERTY_TOOLTIP",
    MODEL_CHANGE = "MODIFIER_PROPERTY_MODEL_CHANGE",
    MODEL_SCALE = "MODIFIER_PROPERTY_MODEL_SCALE",
    IS_SCEPTER = "MODIFIER_PROPERTY_IS_SCEPTER",
    RADAR_COOLDOWN_REDUCTION = "MODIFIER_PROPERTY_RADAR_COOLDOWN_REDUCTION",
    TRANSLATE_ACTIVITY_MODIFIERS = "MODIFIER_PROPERTY_TRANSLATE_ACTIVITY_MODIFIERS",
    TRANSLATE_ATTACK_SOUND = "MODIFIER_PROPERTY_TRANSLATE_ATTACK_SOUND",
    LIFETIME_FRACTION = "MODIFIER_PROPERTY_LIFETIME_FRACTION",
    PROVIDES_FOW_POSITION = "MODIFIER_PROPERTY_PROVIDES_FOW_POSITION",
    SPELLS_REQUIRE_HP = "MODIFIER_PROPERTY_SPELLS_REQUIRE_HP",
    FORCE_DRAW_MINIMAP = "MODIFIER_PROPERTY_FORCE_DRAW_MINIMAP",
    DISABLE_TURNING = "MODIFIER_PROPERTY_DISABLE_TURNING",
    IGNORE_CAST_ANGLE = "MODIFIER_PROPERTY_IGNORE_CAST_ANGLE",
    CHANGE_ABILITY_VALUE = "MODIFIER_PROPERTY_CHANGE_ABILITY_VALUE",
    OVERRIDE_ABILITY_SPECIAL = "MODIFIER_PROPERTY_OVERRIDE_ABILITY_SPECIAL",
    OVERRIDE_ABILITY_SPECIAL_VALUE = "MODIFIER_PROPERTY_OVERRIDE_ABILITY_SPECIAL_VALUE",
    ABILITY_LAYOUT = "MODIFIER_PROPERTY_ABILITY_LAYOUT",
    MODIFIER_EVENT_ON_DOMINATED = "MODIFIER_EVENT_ON_DOMINATED",
    TEMPEST_DOUBLE = "MODIFIER_PROPERTY_TEMPEST_DOUBLE",
    PRESERVE_PARTICLES_ON_MODEL_CHANGE = "MODIFIER_PROPERTY_PRESERVE_PARTICLES_ON_MODEL_CHANGE",
    MODIFIER_EVENT_ON_ATTACK_FINISHED = "MODIFIER_EVENT_ON_ATTACK_FINISHED",
    IGNORE_COOLDOWN = "MODIFIER_PROPERTY_IGNORE_COOLDOWN",
    CAN_ATTACK_TREES = "MODIFIER_PROPERTY_CAN_ATTACK_TREES",
    VISUAL_Z_DELTA = "MODIFIER_PROPERTY_VISUAL_Z_DELTA",
    INCOMING_DAMAGE_ILLUSION = "MODIFIER_PROPERTY_INCOMING_DAMAGE_ILLUSION",
    DONT_GIVE_VISION_OF_ATTACKER = "MODIFIER_PROPERTY_DONT_GIVE_VISION_OF_ATTACKER",
    TOOLTIP2 = "MODIFIER_PROPERTY_TOOLTIP2",
    MODIFIER_EVENT_ON_ATTACK_RECORD_DESTROY = "MODIFIER_EVENT_ON_ATTACK_RECORD_DESTROY",
    MODIFIER_EVENT_ON_PROJECTILE_OBSTRUCTION_HIT = "MODIFIER_EVENT_ON_PROJECTILE_OBSTRUCTION_HIT",
    SUPPRESS_TELEPORT = "MODIFIER_PROPERTY_SUPPRESS_TELEPORT",
    MODIFIER_EVENT_ON_ATTACK_CANCELLED = "MODIFIER_EVENT_ON_ATTACK_CANCELLED",
    SUPPRESS_CLEAVE = "MODIFIER_PROPERTY_SUPPRESS_CLEAVE",
    BOT_ATTACK_SCORE_BONUS = "MODIFIER_PROPERTY_BOT_ATTACK_SCORE_BONUS",
    ATTACKSPEED_REDUCTION_PERCENTAGE = "MODIFIER_PROPERTY_ATTACKSPEED_REDUCTION_PERCENTAGE",
    MOVESPEED_REDUCTION_PERCENTAGE = "MODIFIER_PROPERTY_MOVESPEED_REDUCTION_PERCENTAGE",
    ATTACK_WHILE_MOVING_TARGET = "MODIFIER_PROPERTY_ATTACK_WHILE_MOVING_TARGET",
    MODIFIER_FUNCTION_LAST = "MODIFIER_FUNCTION_LAST",
    MODIFIER_FUNCTION_INVALID = "MODIFIER_FUNCTION_INVALID"
}

