export enum Language {
  None = "none",
  Brazilian = "brazilian",
  // Bulgarian = 'bulgarian',
  // Czech = 'czech',
  // Danish = 'danish',
  English = "english",
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

export interface ValueProvider {
  type: "ignore" | "text" | "replace";
  value: string;
  key?: string;
}

export type ModifierLocalizationMounted =
  | ModifierLocalizationMountedToTranslate
  | ModifierLocalizationMountedToken;

export type ModifierLocalizationMountedToTranslate = {
  source: Language;
  modifier_classname: string;
  name?: string | ValueProvider[];
  description?: string | ValueProvider[];
};

export type ModifierLocalizationMountedToken = {
  isToken: true;
  langs: Record<Language, Record<string, string>>;
};

export type PlainLocalizationMounted =
  | {
      source: Language;
      items: Array<{
        key: string | ValueProvider[];
        value: string | ValueProvider[];
        ignore?: true | false | undefined;
      }>;
    }
  | {
      isToken: true;
      langs: Record<Language, Record<string, string>>;
    };

export interface StandardLocalizationMounted {
  [classname: string]: string | ValueProvider[];
}

export type AbilityLocalizationMounted =
  | AbilityLocalizationMountedToTranslate
  | AbilityLocalizationMountedToken;

export type AbilityLocalizationMountedToken = {
  isToken: true;
  langs: Record<Language, Record<string, string>>;
};

export type AbilityLocalizationMountedToTranslate = {
  source: Language;
  isToken: false;
  ability_classname: string;
  name?: string | ValueProvider[];
  description?: string | ValueProvider[];
  scepter_description?: string | ValueProvider[];
  shard_description?: string | ValueProvider[];
  lore?: string | ValueProvider[];
  notes?: Array<string | ValueProvider[]>;
  ability_specials?: Array<AbilitySpecialLocalizationMounted>;
};

export interface AbilityLocalization {
  ability_classname: string;
  name?: string;
  description?: string;
  scepter_description?: string;
  shard_description?: string;
  lore?: string;
  notes?: Array<string>;
  ability_specials?: Array<AbilitySpecialLocalization>;
  language_overrides?: Array<AbilityLocalizationContent>;
}

export interface AbilitySpecialLocalization {
  ability_special: string;
  text: string;
  percentage?: boolean; // false by default if omitted
  item_stat?: boolean; // false by default if omitted
}
export interface AbilitySpecialLocalizationMounted {
  ability_special: string;
  text: string | ValueProvider[];
  percentage?: boolean; // false by default if omitted
  item_stat?: boolean; // false by default if omitted
}

export interface AbilityLocalizationContent {
  language: Language;
  name_override?: string;
  description_override?: string;
  scepter_description_override?: string;
  shard_description_override?: string;
  lore_override?: string;
  notes_override?: Array<string>;
  ability_specials_override?: Array<AbilitySpecialLocalization>;
}

export function plain(
  value: string | ValueProvider[],
  current_values: Record<string, string>
): string {
  if (typeof value === "string") return value;
  const replaces = {};

  const unwrapped = unwrap(value, replaces);
  const reuslt = assimilate(unwrapped, replaces, current_values);
  return reuslt!;
}

export function unwrap(
  value: undefined | null | string | ValueProvider[],
  replaces: Record<string, string>
): undefined | string {
  if (!value) return undefined;

  if (typeof value === "string") return value;

  return value
    .map((x) => {
      if (x.type === "ignore" || x.type === "replace") {
        replaces[x.key!] = x.value;
      }
      return x.value;
    })
    .join("");
}

export function assimilate(
  value: string | undefined,
  replaces: Record<string, string>,
  current_values: Record<string, string>
): string {
  if (!value) return "";
  let result = value;
  for (let key in replaces) {
    const search = replaces[key];
    result = result.split(search).join(`${key}`);
  }

  const matches = result.matchAll(/ref\((.*?)\)/gi);

  for (let match of matches) {
    const value = current_values[match[1]];
    result = result.split(match[0]).join(value);
  }

  return result;
}

export async function createLocObject(
  ability: AbilityLocalization,
  translateFn: (input: string) => Promise<string>
) {
  return {
    ability_classname: ability.ability_classname,
    name: ability.name ? await translateFn(ability.name) : ability.name,
    description: ability.description
      ? await translateFn(ability.description)
      : ability.description,
    scepter_description: ability.scepter_description
      ? await translateFn(ability.scepter_description)
      : ability.scepter_description,
    shard_description: ability.shard_description
      ? await translateFn(ability.shard_description)
      : ability.shard_description,
    lore: ability.lore ? await translateFn(ability.lore) : ability.lore,
    notes: ability.notes
      ? await Promise.all(ability.notes.map(translateFn))
      : ability.notes,
    ability_specials: ability.ability_specials
      ? await Promise.all(
          ability.ability_specials.map(async (special) => ({
            ability_special: special.ability_special
              ? await translateFn(special.ability_special)
              : special.ability_special,
            text: special.text ? await translateFn(special.text) : special.text,
            percentage: special.percentage,
            item_stat: special.item_stat,
          }))
        )
      : ability.ability_specials,
  };
}
