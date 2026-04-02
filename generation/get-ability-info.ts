import { readdir } from "fs/promises";
import {
  AbilityDefinition,
  HeroDefinition,
} from "./base-heroes/static_definitions";
import path from "path";
import { KVObject } from "valve-kv";

export async function getAbilityInfo(
  name: string,
  hero: HeroDefinition,
  type: "base-ability"
): Promise<AbilityDefinition> {
  const pathToImport =
    "./" +
    path.join(
      "base-heroes",
      hero.name.replace("npc_dota_hero_", ""),
      "abilities",
      name
    );

  const { $_DEFINITION } = await import(pathToImport);

  $_DEFINITION.ScriptFile = $_DEFINITION.ScriptFile.replaceAll("\\", "/").split(
    "scripts/src/"
  )[1];
  $_DEFINITION.ScriptFile += "/";
  $_DEFINITION.ScriptFile += $_DEFINITION.name;
  $_DEFINITION.BaseClass = "ability_lua";
  console.log(JSON.stringify($_DEFINITION, null, 4));

  return $_DEFINITION;
}


export async function getExtraAbilityItemInfo(
  pathToImport: string
): Promise<AbilityDefinition> {
   
    const { $_DEFINITION } = await import("./" + path.join(pathToImport));
    $_DEFINITION.ScriptFile = $_DEFINITION.ScriptFile.replaceAll(
      "\\",
      "/"
    ).split("scripts/src/")[1];
    $_DEFINITION.ScriptFile += "/";
    $_DEFINITION.ScriptFile += $_DEFINITION.name;
    $_DEFINITION.BaseClass = "ability_lua";
    return $_DEFINITION;
}


export async function getExtraAbilityInfo(
  pathToImport: string
): Promise<AbilityDefinition[]> {
  let items: string[] = [];

  try {
    items = await readdir(pathToImport);
  } catch (e) {
    console.log("Cannot load from " + pathToImport);
  }
  const abilities: AbilityDefinition[] = [];

  for (const item of items) {
    const { $_DEFINITION } = await import("./" + path.join(pathToImport, item));
    if (!$_DEFINITION) continue;
    $_DEFINITION.ScriptFile = $_DEFINITION.ScriptFile.replaceAll(
      "\\",
      "/"
    ).split("scripts/src/")[1];
    $_DEFINITION.ScriptFile += "/";
    $_DEFINITION.ScriptFile += $_DEFINITION.name;
    $_DEFINITION.BaseClass = "ability_lua";
    abilities.push($_DEFINITION);
  }

  return abilities;
}

export async function importAttributeTalents() {
  try {
    const allItems = await import(
      "../dota2_arena_mutation/game/scripts/src/mechanics/attributes/attribute_abilities_definition.ts"
    );
    const result: KVObject[] = [];

    const items = Object.values(allItems);
    for (let item of items) {
      if (!(item as any).name) continue;
      const itemAny = item as any;
 
      itemAny.ScriptFile = `mechanics/custom_ability_attributes_bonus`;
      result.push(item);
    }

    return result;
  } catch (e) {
    return null;
  }
}
