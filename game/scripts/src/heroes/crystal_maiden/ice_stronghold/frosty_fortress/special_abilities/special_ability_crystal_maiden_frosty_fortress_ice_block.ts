import { registerAbility, BaseAbility, registerModifier, BaseModifier } from '../../../../../utils/dota_ts_adapter';
import { AbilityDefinition, CustomAbilityType } from '../../../../static_definitions';

@registerAbility()
export class special_ability_crystal_maiden_frosty_fortress_ice_block extends BaseAbility {
    // Ability properties

    Precache(context: CScriptPrecacheContext) {
        PrecacheResource(PrecacheType.PARTICLE, 'particles/crystal_maiden/ice_stronghold/ice_block_buff.vpcf', context);
        PrecacheResource(PrecacheType.PARTICLE, 'particles/crystal_maiden/ice_stronghold/ice_block_buff_status_effect.vpcf', context);
    }

    OnToggle(): void {
        const caster = this.GetCaster();
        let iceBlockModifier = modifier_frosty_fortress_ice_block.find_on(caster);
        const isToggled = this.GetToggleState();

        if (!isToggled) {
            if (iceBlockModifier && !iceBlockModifier.destroying) {
                iceBlockModifier.Destroy();
            }
            return;
        }

        const duration = this.GetSpecialValueFor('ice_block_duration');

        caster.AddNewModifier(caster, this, modifier_frosty_fortress_ice_block.name, { duration });
        this.UseResources(true, false, false, true);
    }

    OnSpellStart(): void {}
}

@registerModifier()
export class modifier_frosty_fortress_ice_block extends BaseModifier {
    destroying = false;

    IsHidden(): boolean {
        return false;
    }

    IsDebuff(): boolean {
        return false;
    }

    IsPurgable(): boolean {
        return false;
    }

    IsPurgeException(): boolean {
        return false;
    }

    OnDestroy(): void {
        if (!IsServer()) return;
        if (this.destroying) return;
        this.destroying = true;
        if (this.GetAbility()?.GetToggleState()) {
            this.GetAbility()?.ToggleAbility();
        }
    }

    CheckState(): Partial<Record<ModifierState, boolean>> {
        return {
            [ModifierState.INVULNERABLE]: true,
            [ModifierState.FROZEN]: true,
            [ModifierState.STUNNED]: true,
        };
    }

    StatusEffectPriority() {
        return ModifierPriority.HIGH;
    }

    GetStatusEffectName(): string {
        return 'particles/crystal_maiden/ice_stronghold/ice_block_buff_status_effect.vpcf';
    }

    GetEffectName(): string {
        return 'particles/crystal_maiden/ice_stronghold/ice_block_buff.vpcf';
    }
}


export const $_DEFINITION: AbilityDefinition = {
    name: special_ability_crystal_maiden_frosty_fortress_ice_block.name,
    AbilityTextureName: 'crystal_maiden_frosty_fortress_ice_block',
    CustomAbilityType: CustomAbilityType.Trait,
    ScriptFile: __dirname,

    AbilityBehavior:
        'DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_UNRESTRICTED | DOTA_ABILITY_BEHAVIOR_IGNORE_PSEUDO_QUEUE | DOTA_ABILITY_BEHAVIOR_TOGGLE | DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING',
     FightRecapLevel: '1',

    MaxLevel: '3',
    RequiredLevel: '100',
    AbilityIndex: '4',
    // Casting
    //-------------------------------------------------------------------------------------------------------------
    AbilityCastPoint: '0 0 0 0',
    AbilityCooldown: '60 45 30',
    AbilityManaCost: '150 175 200',
    AbilityValues: {
        ice_block_duration: '0.75 1.0 1.5',
    },
};
