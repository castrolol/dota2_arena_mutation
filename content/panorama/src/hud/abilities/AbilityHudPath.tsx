import { useMemo } from 'react';
import { ClassIcon, HeroDefinition, HeroPathDefinition } from '../../def/defs';
import { AbilityHudHeader } from './AbilityHudHeader';
import { AbilityHudIcons } from './AbilityHudIcons';
import { useAbilityPath } from '../../hooks/useAbilityInfo';

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
                        pathName={path.name}
                        i18lName={path.l18n}
                        className={active}
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
    i18lName,
    className,
    icon,
}: {
    hasPoints: boolean;
    heroName: string;
    playerId: PlayerID;
    path: HeroPathDefinition;
    pathName: string;
    i18lName: string;
    className: string;
    icon: ClassIcon;
}) {
    const localizedText = useMemo(() => $.Localize(`#${i18lName}`), [i18lName]);
    const [talents, spentPoints] = useAbilityPath(playerId, heroName, className, pathName);
    console.log({ talents })
    return (
        <Panel className="path">
            <Panel className="title">
                <Image className="icon" src={resolveIcon(icon)} />

                <Panel className="title-container">
                    <Label className="title" localizedText="#CUSTOM_path_of" />
                    <Label className="name" text={localizedText} />
                </Panel>

                <Panel className="points">
                    <Label className="points-text" text={`${spentPoints}`} />
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
