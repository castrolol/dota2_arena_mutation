import "../heroes/index";
import { HeroController } from './HeroController';


export class HeroesModule {
    
    heroes: Map<PlayerID, HeroController> = new Map();

    constructor() {
        this.heroes = new Map();
    }

    joinOrUpdate(playerId: PlayerID, heroName: string) {
        this.heroes.set(playerId, new HeroController(playerId, heroName))
    }

}

export interface HeroInfo {
    playerId: PlayerID;
    heroName: string;
    talents: Map<string, number>;
    heroScheme: HeroScheme
}


type Ability = string;

type Facet = {
    Icon: string;
    Color: string;
    GradientID: number;
    Deprecated: string;
};

type TalentRow = {
    Talents: {
        Talent01: Ability;
        Talent02: Ability;
        Talent03: Ability;
        Talent04: Ability;
    }
};

type Path = {
    name: string;
    TalentRow01: TalentRow;
    TalentRow02: TalentRow;
    TalentRow03: TalentRow;
    TalentRow04: TalentRow;
};
type Class = {
    name: string;
    Paths: Record<string, Path>;
};
type Hero = {
    Ability1: Ability;
    Ability2: Ability;
    Ability3: Ability;
    Ability4: Ability;
    Ability5: Ability;
    Ability6: Ability;
    Ability7: Ability;
    Ability8: Ability;
    Ability9: Ability;
    Ability10: Ability;
    Ability11: Ability;
    Ability12: Ability;
    Ability13: Ability;
    Ability14: Ability;
    Ability15: Ability;
    Ability16: Ability;
    Ability17: Ability;
    Ability18: Ability;
    Ability19: Ability;
    Ability20: Ability;
    Ability21: Ability;
    Ability22: Ability;
    Ability23: Ability;
    Ability24: Ability;
    Facets: Record<string, Facet>;
    CustomClasses: Record<string, Class>;
};

type PathScheme = {
    name: string;
    talentRows: Map<number, Ability[]>;
}
type ClassScheme = {
    name: string;
    paths: Map<string, PathScheme>;
};
type TalentAddress = {
    className: string,
    pathName: string,
    rowIndex: number,
    index: number
};
type HeroScheme = {
    abilities: Map<number, Ability>;
    classes: Map<string, ClassScheme>;
    talentsAddress: Map<string, TalentAddress>;
}


type Heroes = Record<string, Hero>;
