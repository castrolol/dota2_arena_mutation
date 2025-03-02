




export type Ability = string;

export type Facet = {
    Icon: string;
    Color: string;
    GradientID: number;
    Deprecated: string;
};

export type TalentRow = {
    Talents: {
        [key: `Talent0${number}`]: Ability;
    }
};

export type Path = {
    name: string;
    [key: `TalentRow0${number}`]: TalentRow;
};
export type Class = {
    name: string;
    Paths: Record<string, Path>;
};
export type Hero = {
    [key: `Ability${number}`]: Ability;
    Facets: Record<string, Facet>;
    CustomClasses: Record<string, Class>;
};

export type PathScheme = {
    name: string;
    talentRows: Map<number, Ability[]>;
}
export type ClassScheme = {
    name: string;
    paths: Map<string, PathScheme>;
};
export type TalentAddress = {
    className: string,
    pathName: string,
    rowIndex: number,
    index: number
};

export type HeroScheme = {
    abilities: Map<number, Ability>;
    classes: Map<string, ClassScheme>;
    talentsAddress: Map<string, TalentAddress>;
}


export type Heroes = Record<string, Hero>;
