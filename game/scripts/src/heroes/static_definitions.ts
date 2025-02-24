print(IS_LUA);

export type ColorsName = 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'orange' | 'cyan' | 'pink';
export type ClassColors = `${ColorsName}_${0 | 1 | 2 | 3}`;

export interface IconInfo {
    name: string;
    type: 'local' | 'file';
}

export enum CustomAbilityType {
    Base = 'BASE',
    Trait = 'TRAIT',
    Attribute = 'ATTRIBUTE',
    Increment = 'INCREMENT',
}
 


export type TalentItem = string | null;
export type TalentRow = [TalentItem, TalentItem, TalentItem, TalentItem] | null;

export type HeroDefinition = {
    name: `npc_dota_hero_${string}`;

    abilities: PartialRecord<`slot${1|2|3|4|5|6}`, string>;

    classes: {
        [className: string]: {
            name: string;
            l18n: string;
            icon: {
                icon: string;
                type: 'local' | 'file';
            };
            color: ClassColors;
            paths: {
                [pathName: string]: {
                    name: string;
                    l18n: string;
                    icon: {
                        icon: string;
                        type: 'local' | 'file';
                    };
                    talents: [TalentRow, TalentRow, TalentRow, TalentRow];
                };
            };
        };
    };
};


export type TalentsMatrix = [TalentsRow | 'none', TalentsRow | 'none', TalentsRow | 'none', TalentsRow | 'none'];

export type TalentsRow = [string | 'none', string | 'none', string | 'none', string | 'none'];

export enum ChangeAttributeValue {
    Strengh = '1',
    Agility = '2',
    Intelligence = '3',
    Universal = '4',
}

export const registerHero = () => (heroDef: new () => HeroDefinition) => {
    const name = heroDef.name.replace('_hero', '');
    const nameFull = 'npc_dota_hero_' + name;
    // @ts-ignore
    heroDef.name = name;

    if (!IS_LUA) {
        const metadata: Record<string, any> = {};

        metadata.path = 'heroes/antimage/' + name + '.txt';
        metadata.name = nameFull;
        metadata.classes = [];
        (heroDef as any)._metadata = metadata;
    }
};

 

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
    Innate?: '1' | '0';
    RequiredLevel?: string | number;
    AbilityUnitDamageType?: string;
    AbilityIndex?: '4' | '5';
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
