import { useMemo } from 'react';
import { ClassIcon, HeroDefinition, HeroPathDefinition } from '../../def/defs';
import { AbilityHudHeader } from './AbilityHudHeader';
import { AbilityHudIcons } from './AbilityHudIcons';

export type AbilityHudPathsProps = {
    hero: HeroDefinition;
    active: string;
    playerId: PlayerID;
    hasPoints: boolean;
};

export function AbilityHudPaths({ hasPoints, playerId, hero, active }: AbilityHudPathsProps) {
    const paths = useMemo(() => {
        const paths = Object.values(hero?.classes[active]?.paths ?? {});

        return paths;
    }, [active]);

    return (
        <Panel className="AbilityHud-paths">
            {paths.map((path, i) => (
                <>
                    {i > 0 ? <Panel className="path-divider" /> : null}
                    <AbilityHudPath
                        heroName={hero.name}
                        playerId={playerId}
                        hasPoints={hasPoints}
                        path={path}
                        pathName={path.l18n}
                        icon={path.icon}
                    />
                </>
            ))}
        </Panel>
    );
}

export function AbilityHudPath({
    hasPoints,
    heroName,
    playerId,
    path,
    pathName,
    icon,
}: {
    hasPoints: boolean;
    heroName: string;
    playerId: PlayerID;
    path: HeroPathDefinition;
    pathName: string;
    icon: ClassIcon;
}) {
    const localizedText = useMemo(() => $.Localize(`#${pathName}`), [pathName]);

    return (
        <Panel className="path">
            <Panel className="title">
                <Image className="icon" src={resolveIcon(icon)} />

                <Panel className="title-container">
                    <Label className="title" localizedText="#CUSTOM_path_of" />
                    <Label className="name" text={localizedText} />
                </Panel>

                <Panel className="points">
                    <Label className="points-text" text={`${22}`} />
                </Panel>
            </Panel>
            <Panel className="path-sub-divider" />
            <AbilityHudIcons heroName={heroName} playerId={playerId} hasPoints={hasPoints} path={path} />
        </Panel>
    );
}

function resolveIcon(icon: ClassIcon) {
    if (icon.type == 'file') {
        return `file://{images}/custom_game/talent_icons/${icon.icon}.png`;
    }
    return `s2r://panorama/images/hud/facets/icons/${icon.icon}_png.vtex`;
}
