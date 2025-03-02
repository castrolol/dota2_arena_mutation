import { useEffect, useState } from 'react';
import { HeroDefinition } from '../def/defs';
import heroes_definition from '../json/heroes_definitions.json';
import { useSelectedPlayer } from './useSelectedPlayer';

export function useHeroInfo(): { hero: HeroDefinition | null, playerId: PlayerID } {
    const { selectedPlayer, selectedPlayerHeroName } = useSelectedPlayer()
    const [heroDefinition, setHeroDefinition] = useState<HeroDefinition | null>();

    useEffect(() => {
        const heroName = selectedPlayerHeroName || "";
        const heroDefinition = (heroes_definition as any)?.[heroName] as HeroDefinition | null;
        setHeroDefinition(heroDefinition);
    }, [selectedPlayerHeroName]);

    return {
        hero: heroDefinition ?? null,
        playerId: selectedPlayer ?? Players.GetLocalPlayer()
    }
}

export function useSelectedHeroInfo() {

}