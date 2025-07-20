import { registerAbility, BaseAbility, registerModifier, BaseModifier } from '../../../../../utils/dota_ts_adapter';
import { AddNewModifier, IsEnemy } from '../../../../../utils/util';
import { AbilityDefinition, CustomAbilityType } from '../../../../static_definitions';

@registerAbility()
export class special_ability_antimage_shadow_dancer_shadow extends BaseAbility {
    // Ability properties

    Precache(context: CScriptPrecacheContext) {
        PrecacheResource(PrecacheType.PARTICLE, 'particles/antimage/shadow_dancer/status_effect_shadow_dancer_antimage.vpcf', context);
        PrecacheResource(PrecacheType.PARTICLE, 'particles/antimage/shadow_dancer/status_effect_shadow_dancer_antimage_ambient.vpcf', context);
    }

    GetIntrinsicModifierName(): string {
        return modifier_shadow_dancer_provider.name;
    }

}

@registerModifier()
export class modifier_shadow_dancer_provider extends BaseModifier {

    IsHidden(): boolean {
        return true;
    }

    DeclareFunctions(): ModifierFunction[] {
        return [
            ModifierFunction.ON_ATTACK_LANDED
        ]
    }

    OnAttackLanded(event: ModifierAttackEvent): void {
        const target = event.target;
        const attacker = event.attacker;

        if (attacker != this.GetParent()) return;
        if (!IsEnemy(attacker, target)) return;
        if (target.IsBuilding()) return;
        if (attacker.PassivesDisabled()) return;
        if (attacker.IsIllusion()) return;
        const chance = this.GetAbility().GetSpecialValueFor("shadow_clone_chance");
        const random = RollPseudoRandomPercentage(chance, PseudoRandom.PHANTOMASSASSIN_CRIT, this.GetParent());
        if (!random) return;



        // não está correto

        // Calcula o espelhamento:
        const posTarget = target.GetAbsOrigin();
        const posAttacker = attacker.GetAbsOrigin();

        // vetor do atacante até o alvo
        const offset = posTarget.__sub(posAttacker);
        // espelha: desloca o alvo na mesma direção
        const mirrorPos = posTarget.__add(offset);

        const shadow_clone = modifier_shadow_clone.CreateShadowClone(
            attacker,
            this.GetAbility() as CDOTA_Ability_Lua,
            mirrorPos,
            target,
            {
                attacks: this.GetAbility().GetSpecialValueFor("attacks_until_die"),
                shadow_clone_damage: this.GetAbility().GetSpecialValueFor("shadow_clone_damage")
            }
        );


        // coloca o clone ali (e reposiciona no nav mesh)


    }

}

@registerModifier()
export class modifier_shadow_clone_attack extends BaseModifier {
    attacks: number = 1;
    shadow_clone_damage: number = 0;

    DeclareFunctions(): ModifierFunction[] {
        return [
            ModifierFunction.ON_ATTACK_LANDED,
            ModifierFunction.ON_DEATH,
            ModifierFunction.DAMAGEOUTGOING_PERCENTAGE
        ]
    }

    OnCreated(params: { attacks: number, shadow_clone_damage: number }): void {
        if (!IsServer()) return;

        this.attacks = params.attacks;
        this.shadow_clone_damage = params.shadow_clone_damage;
        print("attacks " + this.attacks);
        print(" shadow_clone_damage " + this.shadow_clone_damage);
    }

    GetModifierDamageOutgoing_Percentage(event: ModifierAttackEvent): number {
        if (event.attacker != this.GetParent()) return 0;
        return 100 - this.shadow_clone_damage;
    }

    OnDeath(event: ModifierInstanceEvent): void {
        if (!IsServer()) return;
        if (event.unit == this.GetParent().GetAttackTarget()) {
            const parent = this.GetParent();
            parent.Destroy();
            return;
        }
        if (!this.GetParent().GetAttackTarget() || !this.GetParent().GetAttackTarget().IsAlive()) {
            const parent = this.GetParent();
            parent.Destroy();
        }
    }
    OnAttackLanded(event: ModifierAttackEvent): void {
        if (!IsServer()) return;
        if (event.attacker != this.GetParent()) return;

        this.attacks--;
        print("attacked " + this.attacks);
        if (this.attacks <= 0) {
            const parent = this.GetParent();
            parent.Destroy();
        }
    }

}


@registerModifier()
export class modifier_shadow_clone extends BaseModifier {

    GetEffectName() {
        return "particles/antimage/shadow_dancer/status_effect_shadow_dancer_antimage_ambient.vpcf"
    }

    GetStatusEffectName() {
        return "particles/antimage/shadow_dancer/status_effect_shadow_dancer_antimage.vpcf"
    }

    StatusEffectPriority() {
        return 11
    }

    CheckState(): Partial<Record<ModifierState, boolean>> {
        return {
            [ModifierState.NO_UNIT_COLLISION]: true,
            [ModifierState.CANNOT_BE_MOTION_CONTROLLED]: true,
            [ModifierState.UNSELECTABLE]: true,
            [ModifierState.NO_HEALTH_BAR]: true,
            [ModifierState.UNTARGETABLE]: true,
            [ModifierState.NOT_ON_MINIMAP]: true,
            [ModifierState.DEBUFF_IMMUNE]: true,
            [ModifierState.INVULNERABLE]: true
        }
    }



    static CreateShadowClone(
        caster: CDOTA_BaseNPC,
        ability: CDOTA_Ability_Lua,
        position: Vector,
        target: CDOTA_BaseNPC,
        params: { attacks: number, shadow_clone_damage: number }
    ) {


        // const image = CreateUnitByName(caster.GetUnitName(), caster.GetAbsOrigin(), false, caster, caster, DotaTeam.NOTEAM) as CDOTA_BaseNPC_Hero


        const shadow_clone = CreateUnitByName(caster.GetUnitName(), caster.GetAbsOrigin(), false, caster, caster.GetPlayerOwner(), caster.GetTeamNumber()) as CDOTA_BaseNPC_Hero

        const player = caster.GetPlayerOwner()

        shadow_clone.AddNewModifier(caster, ability, modifier_shadow_clone.name, {})
        shadow_clone.SetForwardVector(caster.GetForwardVector())
        shadow_clone.SetControllableByPlayer((caster as CDOTA_BaseNPC_Hero).GetPlayerID(), true)
        shadow_clone.SetBaseAttackTime(caster.GetBaseAttackTime())
        shadow_clone.SetPlayerID(player.GetPlayerID())
        shadow_clone.SetOwner(player)
        shadow_clone.MakeIllusion();
        shadow_clone.SetBaseMoveSpeed(999);

        for (let i = 0; i < 6; i++) {
            const item = caster.GetItemInSlot(i)

            if (item) {
                shadow_clone.AddItemByName(item.GetName());
            }
        }

        for (let i = 0; i < caster.GetAbilityCount(); i++) {
            const ability = caster.GetAbilityByIndex(i)
            if (ability) {
                let shadowability = shadow_clone.GetAbilityByIndex(i)
                if (!shadowability) {
                    shadowability = shadow_clone.AddAbility(ability.GetName())
                }
                shadowability.SetLevel(ability.GetLevel())
            }
        }


        FindClearSpaceForUnit(shadow_clone, position, true);

        // ordena ataque no alvo
        shadow_clone.SetForceAttackTarget(target);

        modifier_shadow_clone_attack.apply(shadow_clone, caster, ability, {
            attacks: params.attacks,
            shadow_clone_damage: params.shadow_clone_damage
        });


        return shadow_clone;

    }

}



export const $_DEFINITION: AbilityDefinition = {
    name: special_ability_antimage_shadow_dancer_shadow.name,
    AbilityTextureName: 'antimage_shadow_dancer_shadow_clone',
    CustomAbilityType: CustomAbilityType.SpecialAbility,
    ScriptFile: __dirname,

    AbilityBehavior: 'DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_HIDDEN',
    FightRecapLevel: '1',

    MaxLevel: '4',
    //RequiredLevel: '100',
     // Casting
    //-------------------------------------------------------------------------------------------------------------
    AbilityCastPoint: '0 0 0 0',
    AbilityValues: {
        shadow_clone_damage: '50 66 82 100',
        shadow_clone_chance: "17 17 17 17",
        attacks_until_die: '1 1 2 2',
    },
};
