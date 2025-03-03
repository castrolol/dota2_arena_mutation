import { BaseAbility, BaseModifier, registerAbility, registerModifier } from '../../../../../utils/dota_ts_adapter';
import { IsEnemy } from '../../../../../utils/util';
import { AbilityDefinition, CustomAbilityType } from '../../../../static_definitions';
import { TalentBaseModifier } from '../../../../talent_base_modifier';

@registerAbility()
export class talent_crystal_maiden_frosty_fortress_inner_block extends BaseAbility {
    GetIntrinsicModifierName(): string {
        return modifier_talent_crystal_maiden_frosty_fortress_inner_block.name;
    }
}

@registerModifier()
export class modifier_talent_crystal_maiden_frosty_fortress_inner_block extends TalentBaseModifier {

    OnTalentCreated(): void {
        if (IsServer()) {
            if (this.GetParent().HasModifier(modifier_talent_crystal_maiden_frosty_fortress_inner_block_buff.name)) {
                modifier_talent_crystal_maiden_frosty_fortress_inner_block_buff.remove(this.GetParent());
            }
            modifier_talent_crystal_maiden_frosty_fortress_inner_block_buff.apply(this.GetParent(), this.GetParent(), null, {
                mana_drained: this.GetAbilityValueFor('mana_drained'),
                buff_cooldown: this.GetAbilityValueFor('buff_cooldown')
            });
        }
    }



    GetAbilityName(): string {
        return talent_crystal_maiden_frosty_fortress_inner_block.name;
    }

}

@registerModifier()
export class modifier_talent_crystal_maiden_frosty_fortress_inner_block_cooldown extends BaseModifier {
    IsDebuff(): boolean {
        return true;
    }

    GetTexture(): string {
        return 'crystal_maiden_frosty_fortress_inner_block';
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

    OnCreated(params: object): void { }
}

@registerModifier()
export class modifier_talent_crystal_maiden_frosty_fortress_inner_block_buff extends BaseModifier {
    buff_cooldown: number;
    mana_drained: number;


    IsDebuff(): boolean {
        return false;
    }

    IsPurgable(): boolean {
        return true;
    }

    IsPurgeException(): boolean {
        return true;
    }

    GetTexture(): string {
        return "crystal_maiden_frosty_fortress_inner_block";
    }

    IsHidden(): boolean {
        return this.IsInCooldown();
    }

    IsInCooldown() {
        return this.GetParent().HasModifier(modifier_talent_crystal_maiden_frosty_fortress_inner_block_cooldown.name); // && modifier_frostbite_amputation_cooldown.find_on(this.GetParent()) != null;
    }

    OnCreated(params: { buff_cooldown: number, mana_drained: number }): void {

        if (IsServer()) {
            this.mana_drained = params.mana_drained;
            this.buff_cooldown = params.buff_cooldown;

            this.SetHasCustomTransmitterData(true);
            Timers.CreateTimer(0.1, () => {
                this.SendBuffRefreshToClients();
            });
        }

    }

    AddCustomTransmitterData() {
        // -- on server
        const data = {
            mana_drained: this.mana_drained
        };

        return data;
    }

    HandleCustomTransmitterData(params: { mana_drained: number }) {
        // -- on client
        this.mana_drained = params.mana_drained;
    }


    GetAbsorbSpell(event: ModifierAbilityEvent): 0 | 1 {
        if (!IsServer()) return 0;

        if (!IsEnemy(event.ability.GetCaster(), this.GetParent())) {

            return 0;
        }
        if (!event.ability.GetCaster().IsRealHero()) {

            return 0;
        }
        if (this.IsInCooldown()) {

            return 0
        }

        const manaSpent = event.ability.GetEffectiveManaCost(event.ability.GetLevel())

        const manaToDrain = manaSpent * (this.mana_drained / 100);



        if (manaToDrain <= this.GetParent().GetMana()) {

            this.GetParent().SetMana(this.GetParent().GetMana() - manaToDrain);

            const pfx = ParticleManager.CreateParticle(
                "particles/units/heroes/hero_antimage/antimage_counter_glint.vpcf",
                ParticleAttachment.CUSTOMORIGIN,
                this.GetParent()
            );

            ParticleManager.SetParticleControlEnt(
                pfx,
                0,
                this.GetParent(),
                ParticleAttachment.POINT_FOLLOW,
                "attach_hitloc",
                this.GetParent().GetAbsOrigin(),
                true
            );

            ParticleManager.ReleaseParticleIndex(pfx);
            this.GetParent().EmitSound("Hero_Antimage.Counterspell.Target");

            modifier_talent_crystal_maiden_frosty_fortress_inner_block_cooldown.apply(
                this.GetParent(),
                this.GetParent(),
                null,
                {
                    duration: this.buff_cooldown
                }
            )

            return 1;
        }

        return 0;
    }


    DeclareFunctions(): ModifierFunction[] {
        return [
            ModifierFunction.ABSORB_SPELL
        ];
    }
}

export const $_DEFINITION: AbilityDefinition = {
    name: talent_crystal_maiden_frosty_fortress_inner_block.name,
    AbilityTextureName: 'crystal_maiden_frosty_fortress_inner_block',
    CustomAbilityType: CustomAbilityType.Trait,
    ScriptFile: __dirname,

    AbilityBehavior: 'DOTA_ABILITY_BEHAVIOR_PASSIVE',
    FightRecapLevel: '1',
    SpellDispellableType: 'SPELL_DISPELLABLE_YES',
    MaxLevel: '3',
    RequiredLevel: '-3',
    AbilityIndex: '4',
    // Casting
    AbilityCooldown: '15 13 11',
    //-------------------------------------------------------------------------------------------------------------
    AbilityCastPoint: '0 0 0 0',
    AbilityValues: {
        mana_drained: '150 110 80',
        buff_cooldown: '15 13 11'
    },
};
