import { PlayerInfo } from '../../hooks/usePlayerList';
import clsx from '../../utils/clsx';

export type PlayerProfileProps = {
    player: PlayerInfo;
};

export function PlayerProfile({ player }: PlayerProfileProps) {
    const your = player.isYou;

    return (
        <Panel className={clsx('PlayerProfile-root', { dead: player.isDead, your })}>
            <Panel className="background ">
                
                <Panel className={clsx("player-color", `hero-slot-${player.playerId}-bg`)} />
                <Panel className="picture">
                    <DOTAHeroImage heroname={player.heroName} heroimagestyle="landscape" />
                </Panel>
                <Label className="dead-timer" text={player.deadTimer} />
                <Panel className="overlay" />
                <Panel className="player-color-shadow" />
                <Panel className="gold-container">
                    <Label className="gold" text={player.gold} />
                </Panel>
            </Panel>
        </Panel>
    );
}
