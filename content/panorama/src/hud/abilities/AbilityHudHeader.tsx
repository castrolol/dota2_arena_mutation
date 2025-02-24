import { useState } from 'react';
import clsx from '../../utils/clsx';

export function AbilityHudHeader() {
    const [active, setActive] = useState(1);

    const items = [
        { id: 1, text: 'Queen of Frost Forest', points: 20 },
        { id: 2, text: 'Ethereal Enchantress', points: 5 },
        { id: 3, text: 'Stealth Assassin', points: 0 },
    ];

    return (
        <Panel className="AbilityHud-header">
            {items.map(item => (
                <AbilityHudHeaderItem
                    key={item.id}
                    icon={{
                        type: 'file',
                        icon: "wand"
                    }}
                    color="blue-0"
                    points={item.points}
                    active={active === item.id}
                    onClick={() => setActive(item.id)}
                    name={item.text}
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
    color: ClassColor;
    icon: ClassIcon;
};

export function AbilityHudHeaderItem({ onClick, name, points, icon, color, active = false }: AbilityHudHeaderItemProps) {
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
                <Label className="name" text={name} />
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
    return `s2r://panorama/images/hud/facets/icons/${icon.icon}.vtex`;
}
