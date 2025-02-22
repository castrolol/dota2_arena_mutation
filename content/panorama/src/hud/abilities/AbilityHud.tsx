import { useEffect, useState } from 'react';
import { AbilityHudHeader } from './AbilityHudHeader';
import { AbilityHudPaths } from './AbilityHudPath';
import clsx from '../../utils/clsx';

export function AbilityHud() {
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        $.RegisterKeyBind($.GetContextPanel(), 'key_escape', () => {
            $.Msg('Apertou');
        });
    }, []);

    return (
        <>
            <Panel className={clsx('AbilityHud-root', { open: opened })}>
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
