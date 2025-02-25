type ClassColor = `${'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'orange' | 'cyan' | 'pink'}-${0 | 1 | 2 | 3}`;

export type ClassIcon =
    | {
          icon: string;
          type: 'local';
      }
    | {
          icon: string;
          type: 'file';
      };

declare interface CustomNetTableDeclarations {
    player_gold: Record<
        PlayerID,
        {
            gold: number;
        }
    >;

    player_heroes: {
        [player_id: string]: {
            hero_name: string;
        };
    };

    player_points: {
        [player_id: string]: {
            points: number;
            spent: number;
        };
    };

    player_talents: {
        [player_id: string]: {
            learned_talents: TalentInfo[];
        };
    };
}

declare interface TalentInfo {
    talent: string;
    level: number;
}



export type ColorsName = 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'orange' | 'cyan' | 'pink';
export type ClassColors = `${ColorsName}_${0 | 1 | 2 | 3}`;

 
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
            icon: ClassIcon;
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
export type HeroPathDefinition = {
    name: string;
    l18n: string;
    icon: {
      icon: string;
      type: "local" | "file";
    };
    talents: [TalentRow, TalentRow, TalentRow, TalentRow];
  };
  
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

export type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
}; 
