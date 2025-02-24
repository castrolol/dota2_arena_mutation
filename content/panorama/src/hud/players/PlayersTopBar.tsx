import { usePlayerList } from '../../hooks/usePlayerList';
import { PlayerProfile } from './PlayerProfile';

export function PlayersTopBar() {
    const { sortedPlayers } = usePlayerList();
    return (
        <Panel className="Players-topbar">
            {sortedPlayers.map(x => (
                <PlayerProfile key={x.playerId} player={x} />
            ))}
        </Panel>
    );
}
