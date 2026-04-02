import {
  AbilityLocalizationMounted,
  ModifierLocalizationMounted,
  PlainLocalizationMounted,
} from "./ability.types";

const item = require("../dota2_arena_mutation/localization/items");
const modifiers = require("../dota2_arena_mutation/localization/modifiers/index");
const plain = require("../dota2_arena_mutation/localization/plain/index");

export function getAbilities(): (() => AbilityLocalizationMounted)[] {
  return item.items;
}

export function getModifiers(): ModifierLocalizationMounted[] {
  return modifiers.items.flatMap((getter) => getter());
}

export function getPlain(): PlainLocalizationMounted[] {
  return plain.items.flatMap((getter) => getter());
}
