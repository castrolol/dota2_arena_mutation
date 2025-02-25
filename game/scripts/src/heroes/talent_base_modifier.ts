import { BaseModifier } from '../utils/dota_ts_adapter';

export class TalentBaseModifier extends BaseModifier {
    IsHidden(): boolean {
        return true;
    }

    DestroyOnExpire(): boolean {
        return false;
    }

    RemoveOnDeath(): boolean {
        return false;
    }

    IsPurgable(): boolean {
        return false;
    }

    IsPurgeException(): boolean {
        return false;
    }

    IsPermanent(): boolean {
        return true;
    }
}
