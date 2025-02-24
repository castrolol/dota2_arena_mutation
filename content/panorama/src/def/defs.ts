type ClassColor = `${'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'orange' | 'cyan' | 'pink'}-${0 | 1 | 2 | 3}`;

type ClassIcon =
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
