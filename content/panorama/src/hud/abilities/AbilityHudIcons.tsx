import { useCallback, useMemo } from 'react';
import clsx from '../../utils/clsx';

export function AbilityHudIcons() {
    const rows = [0, 1, 2, 3];

    return (
        <Panel className="AbilityHud-icons">
            {rows.map(row => (
                <AbilityIconsRow key={row} />
            ))}
        </Panel>
    );
}

type IconState = 'learned' | 'upgradable' | 'unlearned' | 'locked';

export function AbilityIconsRow() {
    const items = [0, 1, 2, 3];

    return (
        <Panel className="row">
            {items.map(item => (
                <>{item == 1 ? <Panel className="empty-ability" /> : <AbilityItem state={'unlearned'} max={3} current={0} key={item} />}</>
            ))}
        </Panel>
    );
}

export function AbilityItem({ current, max, state }: { current: number; max: number; state: IconState }) {
    const canUpgrade = state === 'upgradable' && current < max;
    const locked = state === 'locked' && current === 0;

    const learnIt = useCallback(() => {
        if (!canUpgrade) return;
        $.Msg('aprende!');
    }, [canUpgrade]);

    const gauges = useMemo(() => {
        const items = [];
        for (let i = 0; i < max; i++) {
            if (i < current) {
                items.push('active');
            } else if (i == current && canUpgrade) {
                items.push('upgradable');
            } else {
                items.push('inactive');
            }
        }
        return items;
    }, [max, current]);

    return (
        <Panel
            className={clsx('item', {
                upgradable: gauges.includes('upgradable'),
                inactive: !gauges.includes('active') && !gauges.includes('upgradable'),
                locked: locked && !gauges.includes('active'),
            })}
        >
            {!locked ? null : <AbilityLevelRequirement current={1} max={4} />}
            <DOTAAbilityImage onactivate={learnIt} showtooltip abilityname="sven_warcry" />
            <AbilityItemsProgress gauges={gauges} canUpgrade={canUpgrade} />
        </Panel>
    );
}

export function AbilityItemsProgress({ gauges, canUpgrade = false }: { gauges: string[]; canUpgrade?: boolean }) {
    return (
        <Panel className="progress">
            {gauges.map((state, index) => (
                <Panel className={clsx('gauge', state)} key={index} />
            ))}
        </Panel>
    );
}

export function AbilityLevelRequirement({ current, max }: { current: number; max: number }) {
    function showTooltip(panel: Panel) {
        $.DispatchEvent('DOTAShowTitleTextTooltip', panel, $.Localize('#Tooltip_custom_TEST'), $.Localize('#Tooltip_custom_TEST2'));
    }

    function hideTooltip(panel: Panel) {
        $.DispatchEvent('DOTAHideTitleTextTooltip', panel);
    }

    const rounded = Math.round((Math.min(max, current) / Math.max(max, 1)) * 360);

    return (
        <Panel hittest={false} className="level-requirement">
            <Panel hittest={true} onmouseover={showTooltip} onmouseout={hideTooltip} className="level-requirement-container">
                <Panel className="level-requirement-indicator"></Panel>

                <Panel className="level-requirement-border-background"></Panel>

                <Panel
                    className="level-requirement-border-amount"
                    style={{
                        clip: `radial(50% 50%, 0deg, ${rounded}deg)`,
                    }}
                ></Panel>

                <Panel className="level-requirement-text">
                    <Label className="level-requirement-text-label" text={`${current}/${max}`} />
                </Panel>
            </Panel>
        </Panel>
    );
}
