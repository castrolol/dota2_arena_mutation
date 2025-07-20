import { attributeAbilities, bonusAbility } from "../mechanics/attributes/attribute_abilities_definition";
import { FacetIcons, FileIcons } from "./icons_definitions";

print(IS_LUA);

export type ColorsName =
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "orange"
  | "cyan"
  | "pink";
export type ClassColors = `${ColorsName}_${0 | 1 | 2 | 3}`;

export interface IconInfo {
  name: string;
  type: "local" | "file";
}

export enum CustomAbilityType {
  Base = "BASE",
  Trait = "TRAIT",
  Attribute = "ATTRIBUTE",
  Increment = "INCREMENT",
  SpecialAbility = "SPECIAL_ABILITY",
}

export type TalentItem = string | null;
export type TalentRow = [TalentItem, TalentItem, TalentItem, TalentItem] | null;

export type HeroDefinition = {
  name: `npc_dota_hero_${string}`;

  abilities: PartialRecord<`slot${1 | 2 | 3 | 4 | 5 | 6}`, string>;

  classes: {
    [className: string]: HeroClassDefinition;
  };
};

export type HeroClassDefinition = {
  name: string;
  l18n: string;
  icon: IconType;
  color: ClassColors;
  paths: {
    [pathName: string]: HeroPathDefinition;
  };
};

export type HeroPathDefinition = {
  name: string;
  l18n: string;
  icon: IconType;
  talents: [TalentRow, TalentRow, TalentRow, TalentRow];
};


type KeyOf<T> = T extends Record<string, any> ? keyof T : never;

type PartialTalentDef = { name: string, talents: Record<string, any>, increments: Record<string, any> };
type TalentAbility<T extends PartialTalentDef> = KeyOf<T["talents"]>
type IncrementAbility<T extends PartialTalentDef> = `increment:${KeyOf<T["increments"]>}`
type BonusAbility = `bonus:${keyof typeof attributeAbilities}`;


type CreatingAbility<T extends PartialTalentDef> = BonusAbility | TalentAbility<T> | IncrementAbility<T>;
type TalentCreationRow<T extends PartialTalentDef> = null | [CreatingAbility<T>, CreatingAbility<T>, CreatingAbility<T>, CreatingAbility<T>];



export function talentsFor<T extends PartialTalentDef>(
  { talents, increments }: T,
  rows: [TalentCreationRow<T>, TalentCreationRow<T>, TalentCreationRow<T>, TalentCreationRow<T>]
): [TalentRow, TalentRow, TalentRow, TalentRow] {

  return rows.map(row => {
    if (!row) {
      return emptyRow();
    }
    return row.map(ability => {
      if (!ability) return null;

      if (ability.startsWith("bonus:")) {
        return bonusAbility(ability.replace("bonus:", "") as keyof typeof attributeAbilities);
      }
      if (ability.startsWith("increment:")) {
        return increments[ability.replace("increment:", "") as keyof typeof increments];
      }
      return talents[ability].name;
    }) as TalentRow
  }) as [TalentRow, TalentRow, TalentRow, TalentRow]

}


export type TalentsMatrix = [
  TalentsRow | "none",
  TalentsRow | "none",
  TalentsRow | "none",
  TalentsRow | "none"
];

export type TalentsRow = [
  string | "none",
  string | "none",
  string | "none",
  string | "none"
];

export enum ChangeAttributeValue {
  Strengh = "1",
  Agility = "2",
  Intelligence = "3",
  Universal = "4",
}

export const registerHero = () => (heroDef: new () => HeroDefinition) => {
  const name = heroDef.name.replace("_hero", "");
  const nameFull = "npc_dota_hero_" + name;
  // @ts-ignore
  heroDef.name = name;

  if (!IS_LUA) {
    const metadata: Record<string, any> = {};

    metadata.path = "heroes/antimage/" + name + ".txt";
    metadata.name = nameFull;
    metadata.classes = [];
    (heroDef as any)._metadata = metadata;
  }
};

export function makel18n(heroName: string, className: string, pathName?: string) {

  if (!pathName) {
    return `CUSTOM_${heroName}_${className}`;
  }
  return `CUSTOM_${heroName}_${className}_${pathName}`;
}

export function makeHero18n(heroName: string): `npc_dota_hero_${string}` {
  return `npc_dota_hero_${heroName}`;
}

export type FileIconType = {
  icon: FileIcons;
  type: "file";
}

export type FacetIconType = {
  icon: FacetIcons;
  type: "local";
}

export type IconType = FileIconType | FacetIconType;

export function localIcon(icon: FacetIcons): FacetIconType {
  return {
    icon,
    type: 'local',
  }
}

export function fileIcon(path: FileIcons): FileIconType {
  return {
    icon: path,
    type: 'file',
  }
}

export function emptyRow(): TalentRow {
  return [null, null, null, null];
}

export type AbilityDefinition = {
  name: string;
  AbilityTextureName: string;
  CustomAbilityType: CustomAbilityType;
  ScriptFile: string;
  SpellImmunityType?: string;
  AbilityUnitTargetTeam?: string;
  AbilityUnitTargetType?: string;
  AbilityType?: string;
  AbilityBehavior?: string;
  SpellDispellableType?: string;
  FightRecapLevel?: string;
  MaxLevel?: string | number;
  IsBreakable?: string;
  Innate?: "1" | "0";
  RequiredLevel?: string | number;
  AbilityUnitDamageType?: string;
  AbilityIndex?: "4" | "5";
  AbilitySound?: string;
  AbilityCastGestureSlot?: string;
  AbilityCooldown?: (string | number)[] | number | string;
  AbilityCastAnimation?: `ACT_DOTA_${string}`;
  AbilityChannelTime?: string;
  AbilityCastRange?: (string | number)[] | number | string;
  AbilityCastPoint?: (string | number)[] | number | string;
  AbilityManaCost?: (string | number)[] | number | string;
  AbilityDuration?: (string | number)[] | number | string;
  AbilityDamage?: (string | number)[] | number | string;
  AffectedBy?: string[];
  IsBaseTalentModifier?: boolean;
  AbilityChannelAnimation?: `ACT_DOTA_${string}`;
  AbilityModifierSupportValue?: (string | number)[] | number | string;
  AbilityValues?: {
    AbilityCooldown?: {
      value?: (string | number)[] | string | number;
      [key: string]: (string | number)[] | string | number;
    };
    AbilityCastRange?: {
      value?: (string | number)[] | string | number;
      [key: string]: (string | number)[] | string | number;
    };
    [key: string]:
    | {
      value?: (string | number)[] | string | number;
      [key: string]: (string | number)[] | string | number;
    }
    | number
    | string;
  };
};
