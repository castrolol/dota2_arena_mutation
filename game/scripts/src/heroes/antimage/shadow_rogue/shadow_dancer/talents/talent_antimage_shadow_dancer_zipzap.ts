import { BaseAbility, BaseModifier, registerAbility, registerModifier } from '../../../../../utils/dota_ts_adapter';
import { AbilityDefinition, CustomAbilityType } from '../../../../static_definitions';
import { TalentBaseModifier } from '../../../../talent_base_modifier';

@registerAbility()
export class talent_antimage_shadow_dancer_zipzap extends BaseAbility {
    // Ability properties

    Precache(context: CScriptPrecacheContext) {
        PrecacheResource(PrecacheType.PARTICLE, 'particles/antimage/shadow_dancer/status_effect_shadow_dancer_antimage.vpcf', context);
        PrecacheResource(PrecacheType.PARTICLE, 'particles/antimage/shadow_dancer/status_effect_shadow_dancer_antimage_ambient.vpcf', context);
        PrecacheResource(PrecacheType.PARTICLE, 'particles/antimage/shadow_dancer/antimage_shadow_dancer_blonk_ground.vpcf', context);
        PrecacheResource(PrecacheType.PARTICLE, 'particles/antimage/shadow_dancer/antimage_shadow_dancer_blonk.vpcf', context);
    }

    GetIntrinsicModifierName(): string {
        return modifier_talent_antimage_shadow_dancer_zipzap.name;
    }

}

@registerModifier()
export class modifier_talent_antimage_shadow_dancer_zipzap_cooldown extends BaseModifier {
    token_duration: number;

    IsHidden(): boolean {
        return false;
    }

    OnCreated(params: object): void {
        if (!IsServer()) return;
        
    }   
}

@registerModifier()
export class modifier_talent_antimage_shadow_dancer_zipzap extends TalentBaseModifier {

    token_duration: number;

    GetAbilityName(): string {
        return talent_antimage_shadow_dancer_zipzap.name;

    }
    OnTalentCreated(): void {
        if (!IsServer()) return;
        this.token_duration = this.GetAbilityValueFor('token_duration');

        const parent = this.GetParent();

        if (!parent.HasAbility("special_abililty_antimage_shadow_dancer_blonk_trigger")) {
            const abilityInstance = parent.AddAbility("special_abililty_antimage_shadow_dancer_blonk_trigger");
            // parent.SetAbilityByIndex(abilityInstance, 8);            
        }
    }


    OnDestroy(): void { }
}

@registerModifier()
export class modifier_talent_antimage_shadow_dancer_zipzap_thinker extends BaseModifier {
    caster = this.GetCaster()!
    thinker = this.GetParent()!
    GetEffectFxName(): string {
        return "particles/antimage/shadow_dancer/antimage_shadow_dancer_blonk_ground.vpcf"
    }

    OnCreated(params: object): void {
        if (!IsServer()) return;

        const particle_fx = ParticleManager.CreateParticle(this.GetEffectFxName(), ParticleAttachment.ABSORIGIN_FOLLOW, this.thinker);
        ParticleManager.SetParticleControl(particle_fx, 0, this.thinker.GetAbsOrigin());
        ParticleManager.SetParticleControl(particle_fx, 1, Vector(100, 0, 0));
        this.AddParticle(particle_fx, false, false, 0, false, false);
        ParticleManager.ReleaseParticleIndex(particle_fx);

        this.caster.SwapAbilities(
            "base_ability_antimage_blink",
            "special_abililty_antimage_shadow_dancer_blonk_trigger",
            false,
            true
        )

    }

    OnDestroy(): void {
        if (!IsServer()) return;

        this.caster.SwapAbilities(
            "special_abililty_antimage_shadow_dancer_blonk_trigger",
            "base_ability_antimage_blink",
            false,
            true
        )
        this.caster.RemoveModifierByName(modifier_talent_antimage_shadow_dancer_zipzap_cooldown.name)
        const ability = this.GetCaster()!.FindAbilityByName("base_ability_antimage_blink") as any;
        if (ability) {
            ability.blonk_thinker = undefined
        }
    }
}


export const $_DEFINITION: AbilityDefinition = {
    name: talent_antimage_shadow_dancer_zipzap.name,
    AbilityTextureName: 'antimage_shadow_dancer_zipzap',
    CustomAbilityType: CustomAbilityType.Trait,
    ScriptFile: __dirname,
    IsBreakable: '1',
    AbilityBehavior: 'DOTA_ABILITY_BEHAVIOR_PASSIVE',
    FightRecapLevel: '1',

    MaxLevel: '4',
    RequiredLevel: '-3',
    // Casting
    //-------------------------------------------------------------------------------------------------------------
    AbilityCastPoint: '0 0 0 0',
    AbilityValues: {
        token_duration: '1 1.5 2 2.5',
    },
};
