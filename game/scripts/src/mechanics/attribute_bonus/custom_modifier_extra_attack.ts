import { BaseModifier, registerModifier } from "../../utils/dota_ts_adapter";

 


@registerModifier()
export class custom_modifier_extra_attack_haste extends BaseModifier {
    IsHidden(): boolean {
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


    DeclareFunctions(): ModifierFunction[] {
        return [
            ModifierFunction.ATTACKSPEED_BONUS_CONSTANT,
            ModifierFunction.MOVESPEED_ABSOLUTE,
            ModifierFunction.ON_ATTACK,
            ModifierFunction.OVERRIDE_ANIMATION_RATE
        ];
    }

    GetOverrideAnimationRate(): number {
        return 99;
    }


    OnAttack(event: ModifierAttackEvent): void {
        this.SetStackCount(
            this.GetStackCount() - 1
        )
    }

    GetModifierMoveSpeed_Absolute(): number {
        return 0;
    }

    GetModifierAttackSpeedBonus_Constant(): number {
        return 9999999;
    }

    OnBaseCreated(params: { amount: number }): void {

        const _am = Number(params.amount) || 0;
      
        if (_am > 0) {
            this.SetStackCount(Number(params.amount) || 0)
            Timers.CreateTimer(3, () => {
                try {
                    this.Destroy();
                } catch (e) {

                }
            })
        }

    }

    OnStackCountChanged(stackCount: number): void {
        if (this.GetStackCount() > 0) return;
        this.Destroy()
    }

}


@registerModifier()
export class custom_modifier_multiple_attack_cooldown extends BaseModifier {
    IsHidden(): boolean {
        return false;
    }

    RemoveOnDeath() {
        return false;
    }

    IsPurgable(): boolean {
        return false;
    }

    IsPurgeException(): boolean {
        return false;
    }

    IsDebuff(): boolean {
        return true;
    }

    GetTexture(): string {
        return "item_echo_sabre";
    }

}

@registerModifier()
export class custom_modifier_extra_attack extends BaseModifier {
    cooldown: number = 15;

    UpdateCooldown(cooldown: number) {
        this.cooldown = cooldown;    
    }

    IsHidden(): boolean {
        return (this.GetStackCount() || 0) <= 0 || this.GetParent().HasModifier(custom_modifier_multiple_attack_cooldown.name);
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
        return "item_echo_sabre";
    }


    DeclareFunctions(): ModifierFunction[] {
        return [
            ModifierFunction.ON_ATTACK
        ];
    }


    OnAttack(event: ModifierAttackEvent): void {
        if (!IsServer()) return;

        const parent = this.GetParent();

        if (event.attacker !== parent) {
            return;
        }

        if (parent.HasModifier(custom_modifier_multiple_attack_cooldown.name)) {
            return;
        }

        if (parent.IsIllusion()) {
            return;
        }

        custom_modifier_multiple_attack_cooldown.apply(
            parent,
            parent,
            this.GetAbility(),
            {
                duration: this.cooldown
            }
        )
        
        if (this.GetStackCount() > 0) {
            parent.AddNewModifier(parent, this.GetAbility(), custom_modifier_extra_attack_haste.name, {
                amount: this.GetStackCount(),
              
            })
        }

    }



}



