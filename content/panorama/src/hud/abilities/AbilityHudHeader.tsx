import { useEffect, useMemo, useState } from 'react';
import clsx from '../../utils/clsx';
import { ClassColors, ClassIcon, HeroDefinition } from '../../def/defs';
import { useHeroInfo } from '../../hooks/useHeroInfo';

export type AbilityHudHeaderProps = {
    hero: HeroDefinition;
    active: string;
    setActive: (id: string) => void;
};
export function AbilityHudHeader({ hero, active, setActive }: AbilityHudHeaderProps) {
    const classes = useMemo(() => {
        const classes = Object.values(hero?.classes ?? {});

        return classes;
    }, [hero]);
    return (
        <Panel className="AbilityHud-header">
            {classes.map(item => (
                <AbilityHudHeaderItem
                    key={item.name}
                    icon={item.icon}
                    color={item.color}
                    points={0}
                    active={active === item.name}
                    onClick={() => setActive(item.name)}
                    name={item.l18n}
                />
            ))}
        </Panel>
    );
}

export type AbilityHudHeaderItemProps = {
    onClick: () => void;
    active?: boolean;
    points: number;
    name: string;
    color: ClassColors;
    icon: ClassIcon;
};

export function AbilityHudHeaderItem({ onClick, name, points, icon, color, active = false }: AbilityHudHeaderItemProps) {

    const localizedText = useMemo(() => $.Localize(`#${name}`), [name]);

    return (
        <Panel
            onactivate={() => {
                onClick();
            }}
            className={clsx(`AbilityHud-header-item`, `colorset-${color}`, { active })}
        >
            <Panel className="background" hittest={false} />
            <Panel className="background-texture" hittest={false} />
            <Panel className="background-shine" hittest={false} />
            <Panel className="content">
                <Image className="icon" src={resolveIcon(icon)} />
                <Label className="name" text={localizedText} />
                <Panel className="points">
                    <Label className="points-text" text={`${points}`} />
                </Panel>
            </Panel>
        </Panel>
    );
}

function resolveIcon(icon: ClassIcon) {
    if (icon.type == 'file') {
        return `file://{images}/custom_game/talent_icons/${icon.icon}.png`;
    }
    return `s2r://panorama/images/hud/facets/icons/${icon.icon}_png.vtex`;
}
