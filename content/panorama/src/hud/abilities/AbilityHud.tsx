import { useEffect, useMemo, useState } from 'react';
import { AbilityHudHeader } from './AbilityHudHeader';
import { AbilityHudPaths } from './AbilityHudPath';
import clsx from '../../utils/clsx';
import { useLocalEvent } from '../../utils/event-bus';
import { PlayersTopBar } from '../players/PlayersTopBar';
import { useHeroInfo } from '../../hooks/useHeroInfo';
import { useNetTableKey } from 'react-panorama-x';

export function AbilityHud() {
    const [opened, setOpened] = useState(true);
    const [active, setActive] = useState('');
    const { hero: heroDefinition, playerId } = useHeroInfo();
    const { points, spent } = useNetTableKey('player_points', `${playerId}`) ?? { points: 0, spent: 0 };

    useEffect(() => {
        const classes = Object.values(heroDefinition?.classes ?? []);
        setActive(classes?.[0]?.name);
    }, [heroDefinition]);

    useLocalEvent('talent_button_pressed', event => {
        setOpened(!opened);
    });

    return (
        <>
            <PlayersTopBar />
            <Panel oncancel={() => setOpened(false)} className={clsx('AbilityHud-root', { open: opened })}>
                <AbilityHudHeader hero={heroDefinition!} active={active} setActive={setActive} />
                <AbilityHudPaths playerId={playerId} hasPoints={points > 0} hero={heroDefinition!} active={active} />
            </Panel>
            <AbilityHudToggle opened={opened} onClick={() => setOpened(!opened)} />
        </>
    );
}

export function AbilityHudToggle({ opened, onClick }: { opened: boolean; onClick: () => void }) {
    return (
        <Panel onactivate={onClick} className={clsx('AbilityHud-toggle', { open: opened })}>
            <Panel className="icon" hittest={false} />
        </Panel>
    );
}
