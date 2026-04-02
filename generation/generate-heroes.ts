import { KVObject, serialize } from "valve-kv";
import {
  AbilityDefinition,
  HeroClassDefinition,
  HeroDefinition,
  HeroPathDefinition,
} from "./base-heroes/static_definitions";
import { getAllHeroes, getHeroKV } from "./get-all-heroes";
import path from "path/posix";
import { mkdir, readdir, writeFile } from "fs/promises";
import {
  getAbilityInfo,
  getExtraAbilityInfo,
  getExtraAbilityItemInfo,
  importAttributeTalents,
} from "./get-ability-info";
import {
  getHeroAbilitiesKVPath,
  getHeroClassAbilitiesKVPath,
  getHeroKvPath,
  getIncrementsPath,
  getSharedGenericAbilities,
  getSpecialAbilitiesPath,
  getTalentsPath,
} from "./path-helper";

export async function generateHeroes() {
  const heroes = await getAllHeroes();
  const heroesToImport: string[] = [];
  const abilitiesToImport: string[] = [];
  const heroesJsonInfo: { [key: string]: HeroDefinition } = {};

  for (let hero of heroes) {
    const heroKV = await getHeroKV(hero.name);
    heroesJsonInfo[hero.name] = hero;

    const heroToImport = await SaveHeroKV(hero, heroKV);
    heroesToImport.push(heroToImport);

    const abilitiesToImportX = await SaveClassesKV(hero, heroKV);
    abilitiesToImport.push(...abilitiesToImportX);
    abilitiesToImport.push(await generateBaseAbilities(hero));
  }
  await importGenericAbilities();
  await saveAbilitiesIndex(abilitiesToImport);
  await saveHeroesIndex(heroesToImport);
  await saveHeroesJson(heroesJsonInfo);
}

async function generateBaseAbilities(hero: HeroDefinition): Promise<string> {
  const kvAbilities: KVObject = {};

  for (let abilityName in hero.abilities) {
    const ability = hero.abilities[abilityName];

    const definition = await getAbilityInfo(ability, hero, "base-ability");
    await convertBaseAbility(hero, definition, kvAbilities);
  }
  if (hero.extra_abilities && Array.isArray(hero.extra_abilities)) {
    for (let extraAbility of hero.extra_abilities) {
      const pathToImport =
        "./" +
        path.join(
          "base-heroes",
          hero.name.replace("npc_dota_hero_", ""),
          extraAbility.class,
          extraAbility.path,
          getExtraAbilityType(extraAbility.type),
          extraAbility.ability
        );
      const definition = await getExtraAbilityItemInfo(pathToImport);

      await convertBaseAbility(hero, definition, kvAbilities);
    }
  }
  const { full, relative } = getHeroAbilitiesKVPath(hero.name);

  await mkdir(path.dirname(full), { recursive: true });
  await writeFile(full, serialize({ DOTAAbilities: kvAbilities }));

  return relative;
}

function getExtraAbilityType(type: string): string {
  switch (type) {
    case "trait":
      return "talents";
    case "special":
      return "special_abilities";
    case "increment":
      return "increments";
    default:
      return "";
  }
}

async function convertBaseAbility(
  hero: HeroDefinition,
  definition: AbilityDefinition,
  kvObj: KVObject
) {
  kvObj[definition.name] = definition as any;
}

async function saveHeroesIndex(heroesToImport: string[]) {
  let heroesContent = heroesToImport
    .map((item) => {
      return `#base "${item}"`;
    })
    .join("\n");

  heroesContent += "\n\n";
  heroesContent += '"DOTAHeroes"\n{\n\n}';

  const kvFile = path.join(__dirname, "npc-kvs", "npc_heroes_custom.txt");

  await mkdir(path.dirname(kvFile), { recursive: true });
  await writeFile(kvFile, heroesContent);
}

async function saveAbilitiesIndex(abilitiesToImport: string[]) {
  let abilitiesContent = abilitiesToImport
    .map((item) => {
      return `#base "${item}"`;
    })
    .join("\n");

  abilitiesContent += '\n#base "shared\\generic_abilities.txt"';
  abilitiesContent += '\n#base "shared\\common_abilities.txt"\n\n';
  abilitiesContent += '"DOTAAbilities"\n{\n\n}';

  const kvFile = path.join(__dirname, "npc-kvs", "npc_abilities_custom.txt");

  await mkdir(path.dirname(kvFile), { recursive: true });
  await writeFile(kvFile, abilitiesContent);
}

async function SaveHeroKV(
  hero: HeroDefinition,
  heroKV: KVObject
): Promise<string> {
  const newHeroKV: KVObject = {};

  for (let index = 1; index <= 24; index++) {
    if (hero.abilities[`slot${index}`]) {
      newHeroKV[`Ability${index}`] = hero.abilities[`slot${index}`];
    } else {
      newHeroKV[`Ability${index}`] = "";
    }
  }

  if (!newHeroKV["Ability4"]) {
    newHeroKV["Ability4"] = "custom_ability_empty_slot_4";
  }
  if (!newHeroKV["Ability5"]) {
    newHeroKV["Ability5"] = "custom_ability_empty_slot_5";
  }
  if (!newHeroKV["Ability24"]) {
    newHeroKV["Ability24"] = "custom_ability_attributes_bonus";
  }
  newHeroKV["Facets"] = {};

  for (let facet in heroKV.Facets as KVObject) {
    newHeroKV["Facets"][facet] = heroKV.Facets[facet];
    newHeroKV["Facets"][facet]["Deprecated"] = "true";
  }

  newHeroKV["CustomClasses"] = GenerateKVCustomClasses(hero);

  const KV = serialize({ DOTAHeroes: { [hero.name]: newHeroKV } });
  const { full, relative } = getHeroKvPath(hero.name);

  await mkdir(path.dirname(full), { recursive: true });
  await writeFile(full, KV);
  return relative;
}

generateHeroes();
async function saveHeroesJson(heroesJsonInfo: {
  [key: string]: HeroDefinition;
}) {
  const heroesJsonFile = path.join(
    __dirname,
    "panorama",
    "json",
    "heroes_definitions.json"
  );
  const json = JSON.stringify(heroesJsonInfo, null, 4);
  await writeFile(heroesJsonFile, json);
}
async function SaveClassesKV(hero: HeroDefinition, heroKV: any) {
  const abilitiesPath: string[] = [];

  for (let className in hero.classes) {
    const $class = hero.classes[className];

    const abilities = await SavePathsKV(hero, $class, heroKV);
    abilitiesPath.push(abilities);
  }
  return abilitiesPath;
}
async function SavePathsKV(
  hero: HeroDefinition,
  $class: HeroClassDefinition,
  heroKV: any
) {
  const abilitiesKV: KVObject = {};

  for (let pathName in $class.paths) {
    const $path = $class.paths[pathName];

    await SaveAbilitiesOnPath(hero, $class, $path, abilitiesKV);
  }

  const { full, relative } = getHeroClassAbilitiesKVPath(
    hero.name,
    $class.name
  );

  await mkdir(path.dirname(full), { recursive: true });
  await writeFile(full, serialize({ DOTAAbilities: abilitiesKV }));

  return relative;
}

async function SaveAbilitiesOnPath(
  hero: HeroDefinition,
  $class: HeroClassDefinition,
  $path: HeroPathDefinition,
  abilitiesKV: KVObject
) {
  const specialAbilitiesPath = getSpecialAbilitiesPath(
    hero.name,
    $class.name,
    $path.name
  );
  const talentsPath = getTalentsPath(hero.name, $class.name, $path.name);
  const incrementsPath = getIncrementsPath(hero.name, $class.name, $path.name);

  await SaveExtraAbilitiesKV(abilitiesKV, specialAbilitiesPath);
  await SaveExtraAbilitiesKV(abilitiesKV, talentsPath);
  await SaveExtraAbilitiesKV(abilitiesKV, incrementsPath);
}

async function SaveExtraAbilitiesKV(
  abilitiesKV: KVObject,
  abilitiesPath: string
) {
  const abilities = await getExtraAbilityInfo(abilitiesPath);

  for (let ability of abilities) {
    abilitiesKV[ability.name] = ability as any as KVObject;
  }
}
function GenerateKVCustomClasses(hero: HeroDefinition): KVObject {
  const customClasses: KVObject = {};

  for (const $class in hero.classes) {
    const kvClass: KVObject = {};
    kvClass["name"] = $class;

    kvClass["Paths"] = {};

    const $classInfo = hero.classes[$class];

    for (const $path in $classInfo.paths) {
      const kvPath: KVObject = {};
      const $pathInfo = $classInfo.paths[$path];
      kvPath["name"] = $path;

      for (let rowIndex = 0; rowIndex < 4; rowIndex++) {
        const talentRow = $pathInfo.talents[rowIndex];
        const kvTalentRow: KVObject = {};
        kvTalentRow["Talents"] = {};

        const _talentRow = talentRow || [];

        for (let talentIndex = 0; talentIndex < 4; talentIndex++) {
          const talentCell = _talentRow[talentIndex] || "none";

          kvTalentRow["Talents"][`Talent0${talentIndex + 1}`] = talentCell;
        }

        kvPath[`TalentRow0${rowIndex + 1}`] = kvTalentRow;
      }

      kvClass["Paths"][$path] = kvPath;
    }

    customClasses[$class] = kvClass;
  }

  return customClasses;
}

async function importGenericAbilities() {
  const abilities = await importAttributeTalents();

  const result = { DOTAAbilities: {} };

  for (let _ability of abilities!) {
    const ability = _ability as any;
    result.DOTAAbilities[ability.name] = {
      BaseClass: "ability_lua",
      ...ability,
      RequiredLevel: ability.RequiredLevel || -3,
      CustomAbilityType: "ATTRIBUTE",
      ScriptFile: "abilities/shared/attributes/talent_attributes_base",
      LevelsBetweenUpgrades: "100",
      AbilityBehavior:
        "DOTA_ABILITY_BEHAVIOR_HIDDEN | DOTA_ABILITY_BEHAVIOR_PASSIVE",
    };
    // genericAttributeData[ability.name] = {
    //   maxLevel: Number(ability.MaxLevel || "4"),
    // };
    delete result.DOTAAbilities[ability.name].name;
  }

  const kvData = serialize(result);

  const pathShared = getSharedGenericAbilities();

  await mkdir(path.dirname(pathShared), { recursive: true });

  await writeFile(pathShared, kvData, "utf-8");
}
