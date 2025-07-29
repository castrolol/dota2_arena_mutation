import { registerAbility, BaseAbility, registerModifier, BaseModifier } from '../../../../../utils/dota_ts_adapter';
import { ModifierUtils } from '../../../../../utils/ModifierUtils';
import { AddNewModifier, IsEnemy } from '../../../../../utils/util';
import { AbilityDefinition, CustomAbilityType } from '../../../../static_definitions';
import { TalentBaseModifier } from '../../../../talent_base_modifier';
import { special_ability_antimage_shadow_dancer_shadow } from '../special_abilities/special_ability_antimage_shadow_dancer_shadow';

@registerAbility()
export class talent_antimage_shadow_dancer_umbrageous_mana extends BaseAbility {
    // Ability properties

    Precache(context: CScriptPrecacheContext) {
        PrecacheResource(PrecacheType.PARTICLE, 'particles/antimage/shadow_dancer/status_effect_shadow_dancer_antimage.vpcf', context);
        PrecacheResource(PrecacheType.PARTICLE, 'particles/antimage/shadow_dancer/status_effect_shadow_dancer_antimage_ambient.vpcf', context);
    }

    GetIntrinsicModifierName(): string {
        return modifier_talent_antimage_shadow_dancer_umbrageous_mana.name;
    }

}

@registerModifier()
export class modifier_talent_antimage_shadow_dancer_umbrageous_mana extends TalentBaseModifier {
    OnTalentCreated(params: any): void {

    }

    GetAbilityName(): string {
        return talent_antimage_shadow_dancer_umbrageous_mana.name;
    }

    GetDamagePercetage(): number {
        return this.GetAbilityValueFor('damage_percentage');
    }

    GetDebuffDuration(): number {
        return this.GetAbilityValueFor('debuff_duration');
    }

    OnDestroy(): void { }
}

@registerModifier()
export class modifier_talent_antimage_shadow_dancer_umbrageous_mana_debuff extends BaseModifier {
    parent = this.GetParent()
    caster = this.GetCaster()
    ability = this.GetAbility()
    instances: { duration: number, damage: number }[] = [];
    totalDamage = 0;

    OnCreated(params: { damage: number }): void {
        if (!IsServer()) return;

        this.instances.push({
            duration: this.GetDuration(),
            damage: params.damage
        })
        this.totalDamage += params.damage;

        this.SetStackCount(this.totalDamage);

        this.StartIntervalThink(1);
    }

    OnRefresh(params: { damage: number }): void {
        if (!IsServer()) return;

        this.instances.push({
            duration: this.GetDuration(),
            damage: params.damage
        })
        this.totalDamage += params.damage;

        this.SetStackCount(this.totalDamage);
    }

    OnIntervalThink(): void {
        if (!IsServer()) return;

        this.instances = this.instances.filter(instance => {
            instance.duration -= 1;
            if (instance.duration <= 0) {
                this.totalDamage -= instance.damage;
                this.SetStackCount(this.totalDamage);
            }
            return instance.duration > 0
        })

        if (this.instances.length === 0) {
            this.Destroy();
            return;
        }

        let manaBurn = this.GetStackCount()

        let manaToRemove = Math.min(this.parent.GetMana(), manaBurn)

        this.parent.Script_ReduceMana(manaToRemove, this.ability)
        let damage = manaBurn - manaToRemove;
        print("damage -> mana", damage, manaBurn, manaToRemove, this.GetStackCount());

        if (damage > 0) {
            
            SendOverheadEventMessage(
                null,
                OverheadAlert.BONUS_SPELL_DAMAGE,
                this.parent,
                damage,
                null
            )
            ModifierUtils.ApplyDOTDamage(
                this.parent,
                this.caster,
                this.ability,
                damage,
                DamageTypes.MAGICAL
            )
        }
    }

}

export const $_DEFINITION: AbilityDefinition = {
    name: talent_antimage_shadow_dancer_umbrageous_mana.name,
    AbilityTextureName: 'antimage_shadow_dancer_shadow_umbrageous_mana',
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
        damage_percentage: '10 12 18 25',
        debuff_duration: '2 3 4 5',
    },
};
