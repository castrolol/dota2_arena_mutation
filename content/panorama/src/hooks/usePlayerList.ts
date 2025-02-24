import { useEffect, useState } from 'react';
import { useGameEvent, useNetTableKey, useNetTableValues } from 'react-panorama-x';
import { emitLocalEvent, useLocalEvent } from '../utils/event-bus';

export interface PlayerInfo {
    playerId: PlayerID;
    hero: EntityIndex;
    heroName: string;
    gold: number;
    isDead: boolean;
    deadTimer: number;
    isYou: boolean;
}

export function usePlayerList() {
    const [playersInfo, setPlayersInfo] = useState<Record<number, PlayerInfo>>({});
    const [sortedPlayers, setSortedPlayers] = useState<PlayerInfo[]>([]);

    const goldValues = useNetTableValues('player_gold');

    useLocalEvent('player_respawn_timer', ({ player_id, is_dead, dead_timer }) => {
        const _playerListInfo = playersInfo;
        setPlayersInfo({
            ...playersInfo,
            [player_id]: {
                ...playersInfo[player_id],
                isDead: is_dead,
                deadTimer: dead_timer,
            },
        });

        setSortedPlayers(Object.values(_playerListInfo).sort((a, b) => b.gold - a.gold));
    });

    useEffect(() => {
        const _playersInfo: Record<number, PlayerInfo> = {};
        const _goldValues = goldValues as Record<PlayerID, { gold: number }>;
        const _playerListInfo: PlayerInfo[] = [];

        for (let i = 0; i < 8; i++) {
            const _playerId = i as PlayerID;
            if (!Players.IsValidPlayerID(_playerId)) continue;

            const _gamePlayerInfo = Game.GetPlayerInfo(_playerId);
            const heroUnit = _gamePlayerInfo.player_selected_hero_entity_index;
            const heroName = _gamePlayerInfo.player_selected_hero;

            _playersInfo[_playerId] = {
                isYou: _playerId === Game.GetLocalPlayerID(),
                isDead: _gamePlayerInfo.player_respawn_seconds > 0,
                deadTimer: _gamePlayerInfo.player_respawn_seconds,
                playerId: _playerId,
                hero: heroUnit,
                heroName,
                gold: _goldValues[_playerId]?.gold ?? 0,
            };
            _playerListInfo.push(_playersInfo[_playerId]);
        }

        setPlayersInfo(_playersInfo);
        setSortedPlayers(_playerListInfo.sort((a, b) => b.gold - a.gold));
    }, [goldValues]);

    return {
        playersInfo,
        sortedPlayers,
    };
}

const last_dead_info: Record<number, { is_dead: boolean; dead_timer: number }> = {};

function updateDeadTimer() {
    for (let i = 0; i < 8; i++) {
        const player_id = i as PlayerID;
        if (!Players.IsValidPlayerID(player_id)) continue;
        const info = Game.GetPlayerInfo(player_id);
        const is_dead = info.player_respawn_seconds > 0;
        const dead_timer = info.player_respawn_seconds;

        if (is_dead !== last_dead_info[player_id]?.is_dead) {
            last_dead_info[player_id] = { is_dead, dead_timer };
            emitLocalEvent('player_dead', { player_id, is_dead, dead_timer });
            emitLocalEvent('player_respawn_timer', { player_id, is_dead, dead_timer });
            continue;
        }

        if (dead_timer !== last_dead_info[player_id]?.dead_timer) {
            last_dead_info[player_id] = { is_dead, dead_timer };
            emitLocalEvent('player_respawn_timer', { player_id, is_dead, dead_timer });
        }
    }

    $.Schedule(0.1, updateDeadTimer);
}

updateDeadTimer();
