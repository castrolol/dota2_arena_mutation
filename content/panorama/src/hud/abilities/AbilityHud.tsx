import { useEffect, useState } from 'react';
import { AbilityHudHeader } from './AbilityHudHeader';
import { AbilityHudPaths } from './AbilityHudPath';
import clsx from '../../utils/clsx';
import { useLocalEvent } from '../../utils/event-bus';

export function AbilityHud() {
    const [opened, setOpened] = useState(false);

    useLocalEvent('talent_button_pressed', event => {
        setOpened(!opened);
    });
    useEffect(() => {
        $.RegisterKeyBind($.GetContextPanel(), 'key_escape', () => {
            $.Msg('Apertou');
        });
    }, []);

    return (
        <>
            <Panel oncancel={() => setOpened(false)} className={clsx('AbilityHud-root', { open: opened })}>
                <AbilityHudHeader />
                <AbilityHudPaths />
            </Panel>
            <AbilityHudToggle opened={opened} onClick={() => setOpened(!opened)} />
        </>
    );
}

export function AbilityHudToggle({ opened, onClick }: { opened: boolean; onClick: () => void }) {
    return <Panel onactivate={onClick} className={clsx('AbilityHud-toggle', { open: opened })}></Panel>;
}
