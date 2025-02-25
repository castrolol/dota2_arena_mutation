import { useMemo } from 'react';
import abilities from '../json/npc_abilities_custom.json';

export function useAbilityInfo(abilityName: string) {
    const ability = useMemo(() => {
        const abilityInfo = (abilities as any)[abilityName];

        const abilityData: AbilityData = {
            maxLevel: abilityInfo.MaxLevel,
        };

        return abilityData;
    }, [abilityName]);

    return ability;
}

export type AbilityData = {
    maxLevel: number;
};
