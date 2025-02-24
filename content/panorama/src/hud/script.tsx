import 'panorama-polyfill-x/lib/console';
import 'panorama-polyfill-x/lib/timers';

import { useEffect, useMemo, type FC } from 'react';
import { render } from 'react-panorama-x';
import { useXNetTableKey } from '../hooks/useXNetTable';
import { AbilityHud } from './abilities/AbilityHud';
import { TalentDisplay } from './abilities/talent-button/TalentDisplay';

export function setupDefaultUI() {
    GameUI.SetDefaultUIEnabled(DotaDefaultUIElement_t.DOTA_DEFAULT_UI_AGHANIMS_STATUS, false);
    GameUI.SetDefaultUIEnabled(DotaDefaultUIElement_t.DOTA_DEFAULT_UI_TOP_HEROES, false);
    GameUI.SetDefaultUIEnabled(DotaDefaultUIElement_t.DOTA_DEFAULT_UI_TOP_BAR, false);
    setTimeout(() => {
        const craftHolder = $.GetContextPanel().FindAncestor('DotaHud')?.FindChildTraverse('inventory_neutral_craft_holder');
        console.log({ craftHolder });
        if (craftHolder) craftHolder.style.visibility = 'collapse';
    }, 1000);
}

setupDefaultUI();

export function Hud() {
    return <AbilityHud />;
}

render(<Hud />, $.GetContextPanel());
TalentDisplay.Init();
