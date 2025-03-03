import { BaseAbility, BaseModifier, registerAbility, registerModifier } from '../../../../../utils/dota_ts_adapter';
import { IsEnemy } from '../../../../../utils/util';
import { AbilityDefinition, CustomAbilityType } from '../../../../static_definitions';
import { TalentBaseModifier } from '../../../../talent_base_modifier';

@registerAbility()
export class talent_crystal_maiden_frosty_fortress_brain_freeze extends BaseAbility {
    GetIntrinsicModifierName(): string {
        return modifier_talent_crystal_maiden_frosty_fortress_brain_freeze.name;
    }
}

@registerModifier()
export class modifier_talent_crystal_maiden_frosty_fortress_brain_freeze extends TalentBaseModifier {
    static IsActiveOnCaster(caster: CDOTA_BaseNPC): boolean {
        return caster.HasModifier(modifier_talent_crystal_maiden_frosty_fortress_brain_freeze.name);
    }


    static ApplyCooldownReduction(caster: CDOTA_BaseNPC, target: CDOTA_BaseNPC, ability: CDOTABaseAbility, duration: number) {
        if (!IsEnemy(caster, target)) return;
        if (!target.IsRealHero()) return;
        if (caster.IsDebuffImmune()) return;

        const modifier = modifier_talent_crystal_maiden_frosty_fortress_brain_freeze.find_on(caster);

        modifier_talent_crystal_maiden_frosty_fortress_brain_freeze_debuff.apply(
            target,
            caster,
            ability,
            {
                cooldown_reduction: modifier.GetAbilityValueFor('cooldown_reduction'),
                duration,
            }
        );
    }

    GetAbilityName(): string {
        return talent_crystal_maiden_frosty_fortress_brain_freeze.name;
    }

    OnTalentCreated(): void { }
}

@registerModifier()
export class modifier_talent_crystal_maiden_frosty_fortress_brain_freeze_debuff extends BaseModifier {
    cooldown_reduction: number;

    IsDebuff(): boolean {
        return true;
    }

    IsPurgable(): boolean {
        return true;
    }

    IsPurgeException(): boolean {
        return true;
    }

    OnCreated(params: { cooldown_reduction: number }): void {
        if (IsServer()) {
            this.cooldown_reduction = -params.cooldown_reduction;
            this.SetHasCustomTransmitterData(true);
            Timers.CreateTimer(0.1, () => {
                this.SendBuffRefreshToClients();
            });
        }
       
    }

    AddCustomTransmitterData() {
        // -- on server
        const data = {
            cooldown_reduction: this.cooldown_reduction,
        };

        return data;
    }

    HandleCustomTransmitterData(data: { cooldown_reduction: number }) {
        // -- on client
        this.cooldown_reduction = data.cooldown_reduction;
        this.GetModifierPercentageCooldown = function(event: ModifierAbilityEvent): number {
            return data.cooldown_reduction;
        }
    }

    GetModifierPercentageCooldown(event: ModifierAbilityEvent): number {
        return this.cooldown_reduction;
    }

    DeclareFunctions(): ModifierFunction[] {
        return [ModifierFunction.COOLDOWN_PERCENTAGE];
    }
}

export const $_DEFINITION: AbilityDefinition = {
    name: talent_crystal_maiden_frosty_fortress_brain_freeze.name,
    AbilityTextureName: 'crystal_maiden_frosty_fortress_brain_freeze',
    CustomAbilityType: CustomAbilityType.Trait,
    ScriptFile: __dirname,

    AbilityBehavior: 'DOTA_ABILITY_BEHAVIOR_PASSIVE',
    FightRecapLevel: '1',
    SpellDispellableType: 'SPELL_DISPELLABLE_YES',
    MaxLevel: '4',
    RequiredLevel: '-3',
    AbilityIndex: '4',
    // Casting
    //-------------------------------------------------------------------------------------------------------------
    AbilityCastPoint: '0 0 0 0',
    AbilityValues: {
        cooldown_reduction: '12 20 38 50',
    },
};
