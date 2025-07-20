import { BaseAbility, BaseModifier, registerAbility, registerModifier } from '../../../../../utils/dota_ts_adapter';
import { IsEnemy } from '../../../../../utils/util';
import { AbilityDefinition, CustomAbilityType } from '../../../../static_definitions';
import { TalentBaseModifier } from '../../../../talent_base_modifier';

@registerAbility()
export class talent_crystal_maiden_frosty_fortress_heavy_frost_armor extends BaseAbility {

    Precache(context: CScriptPrecacheContext): void {
        PrecacheResource(PrecacheType.PARTICLE, 'particles/crystal_maiden/ice_stronghold/heavy_ice_armor.vpcf', context);
    }

    GetIntrinsicModifierName(): string {
        return modifier_talent_crystal_maiden_frosty_fortress_heavy_frost_armor.name;
    }
}

@registerModifier()
export class modifier_talent_crystal_maiden_frosty_fortress_heavy_frost_armor extends TalentBaseModifier {
    static IsActiveOnCaster(caster: CDOTA_BaseNPC): boolean {
        return caster.HasModifier(modifier_talent_crystal_maiden_frosty_fortress_heavy_frost_armor.name);
    }


    static ApplyOn(caster: CDOTA_BaseNPC, ability: CDOTABaseAbility) {

        const modifier = modifier_talent_crystal_maiden_frosty_fortress_heavy_frost_armor.find_on(caster);

        modifier_talent_crystal_maiden_frosty_fortress_heavy_frost_armor_debuff.apply(
            caster,
            caster,
            ability,
            {
                armor: modifier.GetAbilityValueFor('armor'),
                slow: modifier.GetAbilityValueFor('slow'),
                duration: modifier.GetAbilityValueFor('buff_duration'),
            }
        );
    }

    GetAbilityName(): string {
        return talent_crystal_maiden_frosty_fortress_heavy_frost_armor.name;
    }

    OnTalentCreated(): void { }
}

@registerModifier()
export class modifier_talent_crystal_maiden_frosty_fortress_heavy_frost_armor_debuff extends BaseModifier {
    armor: number;
    slow: number;

    IsDebuff(): boolean {
        return false;
    }

    IsPurgable(): boolean {
        return true;
    }

    IsPurgeException(): boolean {
        return true;
    }


    OnCreated(params: { armor: number, slow: number }): void {
        if (IsServer()) {
            this.armor = params.armor;
            this.slow = params.slow;

            const particleId = ParticleManager.CreateParticle(
                "particles/crystal_maiden/ice_stronghold/heavy_ice_armor.vpcf",
                ParticleAttachment.ABSORIGIN_FOLLOW,
                this.GetParent()
            );
            ParticleManager.SetParticleControlEnt(
                particleId,
                1,
                this.GetParent(),
                ParticleAttachment.ABSORIGIN_FOLLOW,
                null,
                Vector(0, 0, 0),
                false
            );

            this.AddParticle(particleId, true, false, 10, true, true);

            this.SetHasCustomTransmitterData(true);
            Timers.CreateTimer(0.1, () => {
                this.SendBuffRefreshToClients();
            });
        }

    }

    AddCustomTransmitterData() {
        // -- on server
        const data = {
            armor: this.armor,
            slow: this.slow,
        };

        return data;
    }

    HandleCustomTransmitterData(params: { armor: number, slow: number }) {
        // -- on client
        this.armor = params.armor;
        this.slow = params.slow;
    }

    GetModifierPhysicalArmorBonus(event: ModifierAttackEvent): number {
        return this.armor
    }

    GetModifierMoveSpeedBonus_Percentage(): number {
        let slow = this.slow!;
        return slow * -1;
    }

    DeclareFunctions(): ModifierFunction[] {
        return [
            ModifierFunction.PHYSICAL_ARMOR_BONUS,
            ModifierFunction.MOVESPEED_BONUS_PERCENTAGE,
        ];
    }
}

export const $_DEFINITION: AbilityDefinition = {
    name: talent_crystal_maiden_frosty_fortress_heavy_frost_armor.name,
    AbilityTextureName: 'crystal_maiden_frosty_fortress_heavy_frost_armor',
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
        armor: '14 14 33 33',
        slow: '30 22 22 15',
        buff_duration: '4 5 6 7'
    },
};
