import { AbilityHudHeader } from './AbilityHudHeader';
import { AbilityHudIcons } from './AbilityHudIcons';

export function AbilityHudPaths() {
    return (
        <Panel className="AbilityHud-paths">
            <AbilityHudPath />
            <Panel className="path-divider" />
            <AbilityHudPath />
        </Panel>
    );
}

export function AbilityHudPath() {
    return (
        <Panel className="path">
            <Panel className="title">
                <Panel className="points">
                    <Label className="points-text" text={`${22}`} />
                </Panel>
                <Panel className="title-container">
                    <Label className="title" text="Path of" />
                    <Label className="name" text="Frosty Overlord" />
                </Panel>
            </Panel>
            <Panel className="path-sub-divider" />
            <AbilityHudIcons />
        </Panel>
    );
}
