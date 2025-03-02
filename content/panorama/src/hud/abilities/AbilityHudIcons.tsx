import { useCallback, useMemo } from 'react';
import clsx from '../../utils/clsx';
import { HeroPathDefinition, TalentItem, TalentRow } from '../../def/defs';
import { useAbilityInfo } from '../../hooks/useAbilityInfo';

export function AbilityHudIcons({
    hasPoints,
    heroName,
    playerId,
    path,
}: {
    hasPoints: boolean;
    heroName: string;
    playerId: PlayerID;
    path: HeroPathDefinition;
}) {
    return (
        <Panel className="AbilityHud-icons">
            {path.talents.map((row, index) => (
                <AbilityIconsRow heroName={heroName} playerId={playerId} hasPoints={hasPoints} key={index} row={row} />
            ))}
        </Panel>
    );
}

type IconState = 'learned' | 'upgradable' | 'unlearned' | 'locked';

export function AbilityIconsRow({
    hasPoints,
    heroName,
    playerId,
    row,
}: {
    hasPoints: boolean;
    heroName: string;
    playerId: PlayerID;
    row: TalentRow;
}) {
    return (
        <Panel className="row">
            {row?.map(item => (
                <>
                    {item == null ? (
                        <Panel className="empty-ability" />
                    ) : (
                        <AbilityItem heroName={heroName} playerId={playerId} hasPoints={hasPoints} item={item} key={item} />
                    )}
                </>
            )) ?? null}
        </Panel>
    );
}

export function AbilityItem({ hasPoints, heroName, playerId, item }: { hasPoints: boolean; heroName: string; playerId: PlayerID; item: TalentItem }) {
    const ability = useAbilityInfo(playerId, heroName, item ?? '');
    const current = ability.currentLevel;
    const max = ability.maxLevel ?? 0;
    const canUpgrade = hasPoints && ability.canLearn && current < max;
    const locked = ability.requiredRowLevel > 0 && ability.currentLevel <= 0 && !hasPoints;
    const shouldShowRequirement = ability.requiredRowLevel > ability.rowLevel;

    const learnIt = useCallback(() => {
        if (!canUpgrade) return;
        GameEvents.SendCustomGameEventToServer('talent_upgrade_request', { talent_name: item! });
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
    }, [max, current, canUpgrade]);

    return (
        <Panel
            className={clsx('item', {
                upgradable: gauges.includes('upgradable'),
                inactive: !gauges.includes('active') && !gauges.includes('upgradable'),
                locked: locked && !gauges.includes('active'),
            })}
        >
            {!shouldShowRequirement ? null : <AbilityLevelRequirement current={ability.rowLevel} max={ability.requiredRowLevel} />}
            <DOTAAbilityImage onactivate={learnIt} showtooltip abilityname={item ?? ''} />
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
