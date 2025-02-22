import { AbilityHudHeader } from "./AbilityHudHeader";
import { AbilityHudPaths } from "./AbilityHudPath";

export function AbilityHud() {

    return (
        <Panel className="AbilityHud-root">
            <AbilityHudHeader />
            <AbilityHudPaths />
        </Panel>
    )

}
