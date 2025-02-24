import { useEffect, useState } from 'react';
import { OnUpdateSelectedUnit } from '../utils/selected_user_event';
import { useLocalEvent } from '../utils/event-bus';

export function useSelectedPlayer() {
    const [selectedPlayer, setSelectedPlayer] = useState<PlayerID>();
    const [selectedPlayerHero, setSelectedPlayerHero] = useState<EntityIndex>();
    const [selectedUnit, setSelectedUnit] = useState<EntityIndex>();

    useLocalEvent('custom_selected_unit', ({ unit, player, hero }) => {
        const _hero = hero ?? Players.GetPlayerHeroEntityIndex(Players.GetLocalPlayer());
        const _unit = unit ?? _hero;

        setSelectedPlayer(player);
        setSelectedPlayerHero(_hero);
        setSelectedUnit(_unit);
    });

    useEffect(() => {
        setSelectedPlayer(Players.GetLocalPlayer());
        setSelectedPlayerHero(Players.GetPlayerHeroEntityIndex(Players.GetLocalPlayer()));
        setSelectedUnit(Players.GetPlayerHeroEntityIndex(Players.GetLocalPlayer()));

        OnUpdateSelectedUnit();
    }, []);

    return {
        selectedPlayer,
        selectedPlayerHero,
        selectedUnit,
    };
}
