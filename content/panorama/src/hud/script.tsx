import 'panorama-polyfill-x/lib/console';
import 'panorama-polyfill-x/lib/timers';

import { useMemo, type FC } from 'react';
import { render } from 'react-panorama-x';
import { useXNetTableKey } from '../hooks/useXNetTable';
import { AbilityHud } from './abilities/AbilityHud';

export function Hud() {
    return <AbilityHud />;
}

render(<Hud />, $.GetContextPanel());
