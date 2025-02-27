import { BaseAbility, BaseModifier, registerAbility, registerModifier } from '../../../../../utils/dota_ts_adapter';
import { IsEnemy } from '../../../../../utils/util';
import { AbilityDefinition, CustomAbilityType } from '../../../../static_definitions';
import { TalentBaseModifier } from '../../../../talent_base_modifier';

@registerAbility()
export class talent_crystal_maiden_frosty_fortress_frostbite_amputation extends BaseAbility {
    GetIntrinsicModifierName(): string {
        return modifier_talent_crystal_maiden_frosty_fortress_frostbite_amputation.name;
    }
}

@registerModifier()
export class modifier_talent_crystal_maiden_frosty_fortress_frostbite_amputation extends TalentBaseModifier {
    GetAbilityName(): string {
        return talent_crystal_maiden_frosty_fortress_frostbite_amputation.name;
    }

    OnTalentCreated(): void {
        if (IsServer()) {
            if (this.GetParent().HasModifier(modifier_frostbite_amputation_ready.name)) {
                modifier_frostbite_amputation_ready.remove(this.GetParent());
            }
            modifier_frostbite_amputation_ready.apply(this.GetParent(), this.GetParent(), null, {
                disarm_duration: this.GetAbilityValueFor('disarm_duration'),
                cooldown_duration: this.GetAbilityValueFor('cooldown_duration'),
            });
        }
    }
}

@registerModifier()
export class modifier_frostbite_amputation_ready extends BaseModifier {
    disarm_duration: number;
    cooldown_duration: number;

    OnCreated(params: { disarm_duration: number; cooldown_duration: number }): void {
        if (IsServer()) {
            this.disarm_duration = params.disarm_duration;
            this.cooldown_duration = params.cooldown_duration;
        }
    }

    GetTexture(): string {
        return 'crystal_maiden_frosty_fortress_frostbite_amputation';
    }
    IsInCooldown() {
        return this.GetParent().HasModifier(modifier_frostbite_amputation_cooldown.name); // && modifier_frostbite_amputation_cooldown.find_on(this.GetParent()) != null;
    }

    IsHidden(): boolean {
        return this.IsInCooldown();
    }

    DeclareFunctions(): ModifierFunction[] {
        return [ModifierFunction.ON_ATTACK_LANDED];
    }

    OnAttackLanded(event: ModifierAttackEvent): void {
        const isHeroLike = event.attacker.IsConsideredHero();

        if (this.IsInCooldown()) return;
        if (event.attacker.IsDebuffImmune()) return;
        if (!isHeroLike) return;
        if (!IsEnemy(event.attacker, this.GetParent())) return;

        modifier_frostbite_amputation_cooldown.apply(this.GetParent(), this.GetParent(), null, {
            duration: this.cooldown_duration * this.GetParent().GetCooldownReduction(),
        });
        modifier_frostbite_amputation_debuff.apply(event.attacker, this.GetParent(), null, {
            duration: this.disarm_duration,
        });
    }
}

@registerModifier()
export class modifier_frostbite_amputation_cooldown extends BaseModifier {
    IsDebuff(): boolean {
        return true;
    }

    GetTexture(): string {
        return 'crystal_maiden_frosty_fortress_frostbite_amputation';
    }
    IsPurgable(): boolean {
        return false;
    }
    IsPurgeException(): boolean {
        return false;
    }
    RemoveOnDeath(): boolean {
        return false;
    }

    OnCreated(params: object): void {}
}

@registerModifier()
export class modifier_frostbite_amputation_debuff extends BaseModifier {
    IsPurgable(): boolean {
        return true;
    }

    GetTexture(): string {
        return 'crystal_maiden_frosty_fortress_frostbite_amputation';
    }

    IsPurgeException(): boolean {
        return true;
    }

    IsDebuff(): boolean {
        return true;
    }

    GetEffectName(): string {
        return 'particles/crystal_maiden/ice_stronghold/frostbite_amputation_disarm_ovrhead.vpcf';
    }

    GetEffectAttachType(): ParticleAttachment {
        return ParticleAttachment.OVERHEAD_FOLLOW;
    }

    OnCreated(params: object): void {}

    CheckState(): Partial<Record<ModifierState, boolean>> {
        return {
            [ModifierState.DISARMED]: true,
        };
    }
}

export const $_DEFINITION: AbilityDefinition = {
    name: talent_crystal_maiden_frosty_fortress_frostbite_amputation.name,
    AbilityTextureName: 'crystal_maiden_frosty_fortress_frostbite_amputation',
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
    AbilityCooldown: '16 13 9 9', 
    AbilityValues: {
        disarm_duration: '1 1 1 1.75',
        cooldown_duration: '16 13 9 9',
    },
};
