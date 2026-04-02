import {
  AbilityLocalizationMounted,
  AbilityLocalization,
  Language,
  AbilityLocalizationContent,
  unwrap,
  createLocObject,
  ValueProvider,
  assimilate,
  AbilityLocalizationMountedToTranslate,
} from "./ability.types";
import {  translateAllAI } from "./translate-openai";

const langs = {
  [Language.Brazilian]: "pt-BR",
  [Language.English]: "en-US",
  [Language.Russian]: "ru",
  [Language.Schinese]: "zh-CN",
  [Language.Spanish]: "es",
};
const langsRev = {
  "pt-BR": Language.Brazilian,
  "en-US": Language.English,
  ru: Language.Russian,
  "zh-CN": Language.Schinese,
  es: Language.Spanish,
};
(process as any).env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

// const langs = {
//     [Language.Brazilian]: "pt-BR",
//     [Language.English]: "en",
//     [Language.Russian]: "ru",
//     [Language.Schinese]: "zh-CN",
//     [Language.Spanish]: "es"
// }

// export async function translate(
//   value: ValueProvider[] | string | undefined | null,
//   source: Language,
//   target: Language,
//   current_values: Record<string, string> = {}
// ) {
//   if (!value) {
//     return "";
//   }
//   const replaces: Record<string, string> = {};
//   const raw = unwrap(value, replaces);
//   let result = raw;

//   if (source !== target) {
//     try {
//       result = await translateAI(result!, langs[source], langs[target]);
//       // result = await (jsGoogleTranslateFree as any).translate({
//       //     from: langs[source],
//       //     to: langs[target],
//       //     text: result
//       // }) as string;
//     } catch (ex) {
//       console.error(ex);
//     }
//   }

//   return assimilate(result, replaces, current_values);
// }

export async function translateAll(
  value: ValueProvider[] | string | undefined | null,
  source: Language,
  current_values: Record<Language,Record<string, string>> = {} as any
): Promise<Record<Language, string>> {
  const replaces: Record<string, string> = {};
  const raw = unwrap(value, replaces);

  const langsToTranslate = [
    Language.Brazilian,
    Language.English,
    Language.Russian,
    Language.Spanish,
    Language.Schinese,
  ]
    .filter((x) => x !== source)
    .map((x) => langs[x]);

  const results = await translateAllAI(raw!, langs[source], langsToTranslate);

  const assimilatedResults: Record<Language, string> = {} as any;

  for (const [lang, result] of Object.entries(results)) {
    const language = langsRev[lang] as Language
    assimilatedResults[language] = assimilate(
      result,
      replaces,
      current_values[language] || {}
    );
  }

  return assimilatedResults;
}

// export async function createTranslationsFor(
//   ability: AbilityLocalizationMountedToTranslate
// ): Promise<AbilityLocalization> {
//   let replaces: Record<string, string> = {};

//   const treatedItems = {
//     ability_classname: ability.ability_classname,
//     name: unwrap(ability.name, replaces),
//     description: unwrap(ability.description, replaces),
//     scepter_description: unwrap(ability.scepter_description, replaces),
//     shard_description: unwrap(ability.shard_description, replaces),
//     lore: unwrap(ability.lore, replaces),
//     notes: ability.notes?.map((note) => unwrap(note, replaces)!),
//     ability_specials: ability.ability_specials
//       ? await Promise.all(
//           ability.ability_specials.map(async (special) => ({
//             ability_special: special.ability_special,
//             text: unwrap(special.text, replaces)!,
//             percentage: special.percentage,
//             item_stat: special.item_stat,
//           }))
//         )
//       : ability.ability_specials,
//   };

//   const languages = Object.values(Language);
//   let base: AbilityLocalization;
//   let results: Record<Language, AbilityLocalization> = {} as any;

//   for (let language of languages) {
//     if (language === "none") continue;
//     const translate = await createLocObject(
//       treatedItems,
//       async (str: string) => {
//         let result = (await (jsGoogleTranslateFree as any).translate(
//           langs[ability.source],
//           langs[language],
//           str
//         )) as string;
//         for (let key in replaces) {
//           const search = replaces[key];
//           result = result.split(search).join(`{${key}}`);
//         }

//         return result;
//       }
//     );

//     results[language] = translate;
//   }

//   const translated = results.english;

//   translated.language_overrides = Object.keys(results)
//     .map((lang) => {
//       if (lang === Language.English)
//         return null as unknown as AbilityLocalizationContent;
//       return convertOverride(results[lang], lang as Language);
//     })
//     .filter((x) => x);

//   return translated;
// }

function convertOverride(
  input: AbilityLocalization,
  language: Language
): AbilityLocalizationContent {
  return {
    language,
    ability_specials_override: input.ability_specials,
    description_override: input.description,
    lore_override: input.lore,
    name_override: input.name,
    notes_override: input.notes,
    scepter_description_override: input.scepter_description,
    shard_description_override: input.shard_description,
  };
}
