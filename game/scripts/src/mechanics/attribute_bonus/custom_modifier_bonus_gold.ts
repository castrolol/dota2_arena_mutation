import { BaseModifier, registerModifier } from "../../utils/dota_ts_adapter";

 

@registerModifier()
export class custom_modifier_bonus_gold extends BaseModifier {

    gold_accumulator: number = 0

    IsHidden(): boolean {
        return (this.GetStackCount() || 0) <= 0;
    }

    IsPermanent(): boolean {
        return true;
    }

    IsPurgable(): boolean {
        return false;
    }

    IsPurgeException(): boolean {
        return false;
    }

    RemoveOnDeath() {
        return false;
    }

    GetTexture(): string {
        return "alchemist_goblins_greed";
    }

    GetGoldModifier(): number {
        if (!IsServer()) return 0;
        if (!this.GetStackCount()) return 0
        return this.GetStackCount() / 60
    }

    OnCreated(params: object): void {
        if (!IsServer()) return;
        this.StartIntervalThink(1)
        this.SetStackCount((params as any).amount || 0)
    }

    OnIntervalThink(): void {
        const hero = this.GetParent() as CDOTA_BaseNPC_Hero
        if (!hero?.ModifyGold) return;        
        const gold = this.GetGoldModifier() + this.gold_accumulator
        const gold_integer = Math.floor(gold)
        this.gold_accumulator = Math.max(0, gold - gold_integer);
        if (!hero || !gold_integer) return;
        hero.ModifyGold(gold_integer, true, ModifyGoldReason.UNSPECIFIED)
    }
}

