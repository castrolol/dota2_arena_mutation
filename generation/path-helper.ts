import path from "path";

export function getPlainName(heroName: string) {
  return heroName.replace("npc_dota_hero_", "");
}
export function getHeroScriptPath(heroName: string) {
  return `./base-heroes/${getPlainName(heroName)}`;
}

export function getClassScriptPath(heroName: string, className: string) {
  return `${getHeroScriptPath(heroName)}/${className}`;
}

export function getClassPathScriptPath(
  heroName: string,
  className: string,
  pathName: string
) {
  return `./${getClassScriptPath(heroName, className)}/${pathName}`;
}

export function getAbilitiesScriptPath(heroName: string) {
  return `${getHeroScriptPath(heroName)}/abilities`;
}

export function getIncrementsPath(
  heroName: string,
  className: string,
  pathName: string
) {
  return `./${getClassPathScriptPath(
    heroName,
    className,
    pathName
  )}/increments`;
}

export function getSpecialAbilitiesPath(
  heroName: string,
  className: string,
  pathName: string
) {
  return `./${getClassPathScriptPath(
    heroName,
    className,
    pathName
  )}/special_abilities`;
}

export function getTalentsPath(
  heroName: string,
  className: string,
  pathName: string
) {
  return `./${getClassPathScriptPath(heroName, className, pathName)}/talents`;
}

export function getHeroKvPath(heroName: string) {
  const plainName = getPlainName(heroName);
  const kvFile = path.join(
    __dirname,
    "npc-kvs",
    "heroes",
    plainName,
    plainName + ".txt"
  );
  const relativePath = path.join("heroes", plainName, plainName + ".txt");
  return { full: kvFile, relative: relativePath };
}

export function getHeroAbilitiesKVPath(heroName: string) {
  return getHeroClassAbilitiesKVPath(heroName, "base_abilities");
}

export function getHeroClassAbilitiesKVPath(
  heroName: string,
  className: string
) {
  const plainName = getPlainName(heroName);

  const kvFilePath = path.join(
    __dirname,
    "npc-kvs",
    "heroes",
    plainName,
    `${className}.txt`
  );

  const relativePath = path.join("heroes", plainName, `${className}.txt`);

  return { full: kvFilePath, relative: relativePath };
}

export function getSharedGenericAbilities(){
  const kvFilePath = path.join(
    __dirname,
    "npc-kvs",
    "shared",
    `generic_abilities.txt`
  );
  return kvFilePath;
}