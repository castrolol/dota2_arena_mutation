import { useEffect, useState } from 'react';
import { OnUpdateSelectedUnit } from '../utils/selected_user_event';
import { useLocalEvent } from '../utils/event-bus';

export function useSelectedPlayer() {
    const [selectedPlayer, setSelectedPlayer] = useState<PlayerID>();
    const [selectedPlayerHero, setSelectedPlayerHero] = useState<EntityIndex>();
    const [selectedUnit, setSelectedUnit] = useState<EntityIndex>();
    const [selectedPlayerHeroName, setSelectedPlayerHeroName] = useState<string>();

    useLocalEvent('custom_selected_unit', ({ unit, player, hero }) => {
        const _hero = hero ?? Players.GetPlayerHeroEntityIndex(Players.GetLocalPlayer());
        const _unit = unit ?? _hero;

        setSelectedPlayer(player);
        setSelectedPlayerHero(_hero);
        setSelectedPlayerHeroName(Entities.GetUnitName(_hero))
        setSelectedUnit(_unit);
    });

    useEffect(() => {
        const localPlayer = Players.GetLocalPlayer();
        const playerHero = Players.GetPlayerHeroEntityIndex(localPlayer);

        setSelectedPlayer(localPlayer);
        setSelectedPlayerHero(playerHero);
        setSelectedPlayerHeroName(Entities.GetUnitName(playerHero))
        setSelectedUnit(playerHero);

        OnUpdateSelectedUnit();
    }, []);

    return {
        selectedPlayer,
        selectedPlayerHero,
        selectedPlayerHeroName,
        selectedUnit,
    };
}
