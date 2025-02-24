declare interface CustomNetTableDeclarations {
    player_gold: {
        [player_id: string]: {
            gold: number;
        };
    };

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
