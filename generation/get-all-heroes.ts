import { readdir } from "fs/promises";
import path from "path";
import { HeroDefinition } from "./base-heroes/static_definitions";
import { deserializeFile, KVObject } from "valve-kv";

const baseHeroesPath = path.join(__dirname, "base-heroes");
const heroesPathVPK = "vpks/scripts/npc/npc_heroes.txt";
let heroesKV: KVObject | null = null;

export async function getAllHeroes(): Promise<HeroDefinition[]> {
  const heroes = await readdir(baseHeroesPath);

  const importTasks = heroes.map(async (hero) => {
    if (hero.endsWith(".ts")) return null;
    const filePath = path.join("base-heroes", hero, "index.ts");
    console.log({ filePath });
    const imported = await import("./" + filePath);

    return imported.HERO;
  });

  const result = await Promise.all(importTasks);
  return result.filter((x) => x);
}

export async function getHeroesKvs() {
  if (!heroesKV) {
    heroesKV = await deserializeFile(heroesPathVPK);
  }

  return heroesKV;
}

export async function getHeroKV(name: string) {
  const kv = await getHeroesKvs();

  const kvHero = kv.DOTAHeroes[name];

  return kvHero;
}
