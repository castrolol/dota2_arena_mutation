import { useEffect, useState } from 'react';
import { HeroDefinition } from '../def/defs';
import heroes_definition from '../json/heroes_definitions.json';

export function useHeroInfo(heroName: string): HeroDefinition | null {
    const [heroDefinition, setHeroDefinition] = useState<HeroDefinition>();

    useEffect(() => {
        setHeroDefinition((heroes_definition as any)[heroName] as HeroDefinition);
    }, [heroName]);

    return heroDefinition ?? null;
}
