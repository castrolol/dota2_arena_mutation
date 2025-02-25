import { BaseAbility, registerAbility } from '../utils/dota_ts_adapter'; 
import { custom_modifier_attributes_bonus } from './attribute_bonus/custom_modifier_attributes_bonus';
import { custom_modifier_bonus_gold } from './attribute_bonus/custom_modifier_bonus_gold';
import { custom_modifier_extra_attack } from './attribute_bonus/custom_modifier_extra_attack';

@registerAbility()
export class custom_ability_attributes_bonus extends BaseAbility {
    modifier_handler = custom_modifier_attributes_bonus.name;

    attrModifier: custom_modifier_attributes_bonus | null = null;
    goldBonus: custom_modifier_bonus_gold | null = null;
    extraAttacks: custom_modifier_extra_attack | null = null;

    Precache(context: CScriptPrecacheContext): void {
        PrecacheResource(PrecacheType.PARTICLE, 'particles/custom/custom_reflect_effect.vpcf', context);
    }

    GetIntrinsicModifierName(): string {
        return this.modifier_handler;
    }

    Spawn(): void {
        if (IsServer()) {
            this.SetLevel(1);
        }
    }

    params: AttributeBonusParams = {
        dotDefense: 0,
        dotAmplify: 0,
        hpRegenAmplify: 0,
        intToStrPercentage: 0,
        changeMainAttribute: 0,
        attackSpeedBonus: 0,
        attackSpeedBonusPercentage: 0,
        cooldownSpellReduction: 0,
        cooldownItemReduction: 0,
        damageReduction: 0,
        magicDamageReduction: 0,
        physicalDamageReduction: 0,
        armorBonus: 0,
        evasionBonus: 0,
        healthBonus: 0,
        healthBonusPercentage: 0,
        manaBonus: 0,
        manaBonusPercentage: 0,
        healthRegen: 0,
        healthRegenPercentage: 0,
        manaRegen: 0,
        manaRegenPercentage: 0,
        lifesteal: 0,
        spellLifesteal: 0,
        spellAmplification: 0,
        magicDefenseBonus: 0,
        movespeedBonus: 0,
        movespeedBonusPercentage: 0,
        reflectBonus: 0,
        agiBonus: 0,
        strBonus: 0,
        intBonus: 0,
        agiBonusPercentage: 0,
        strBonusPercentage: 0,
        intBonusPercentage: 0,
        goldPerMinute: 0,
        extraAttacks: 0,
        extraAttackCooldown: 0,
        magicDamagePerAgi: 0,
        magicDamagePerInt: 0,
        magicDamagePerStr: 0,
        physicalBonusPerAgi: 0,
        physicalBonusPerInt: 0,
        physicalBonusPerStr: 0,
        magicalBlockBonus: 0,
        magicalBlockChance: 0,
        physicalBlockBonus: 0,
        physicalBlockChance: 0,
        totalBlockBonus: 0,
        totalBlockChance: 0,
        slowResistance: 0,
        statusResistance: 0,
        disarmChance: 0,
        disarmDuration: 0,
        aoeBonus: 0,
        aoeBonusPercentage: 0,
    };

    UpdateParams() {
        if (this.attrModifier === null) {
            this.attrModifier = custom_modifier_attributes_bonus.find_on(this.GetCaster());
        }
        if (this.goldBonus === null) {
            this.goldBonus = custom_modifier_bonus_gold.find_on(this.GetCaster());
            if (this.goldBonus === null) {
                this.goldBonus = custom_modifier_bonus_gold.apply(this.GetCaster(), this.GetCaster(), this, {});
            }
        }
        if (this.extraAttacks === null) {
            this.extraAttacks = custom_modifier_extra_attack.find_on(this.GetCaster());
            if (this.extraAttacks === null) {
                this.extraAttacks = custom_modifier_extra_attack.apply(this.GetCaster(), this.GetCaster(), this, {});
            }
        }

        if (!IsServer()) return;

        this.attrModifier.UpdateParams(this.params);
        this.goldBonus.SetStackCount(this.params.goldPerMinute || 0);
        this.extraAttacks.SetStackCount(this.params.extraAttacks || 0);
        this.extraAttacks.UpdateCooldown(this.params.extraAttackCooldown || 0);
    }

    GetParam(props: keyof AttributeBonusParams) {
        return this.params[props];
    }

    SetParam(prop: keyof AttributeBonusParams, value: number) {
        this.params[prop] = value;
        this.UpdateParams();
    }

    AddParam(prop: keyof AttributeBonusParams, value: number) {
        this.params[prop] = value + (this.params[prop] || 0);
        this.UpdateParams();
    }

    SubtractParam(prop: keyof AttributeBonusParams, value: number) {
        this.params[prop] -= value;
        this.UpdateParams();
    }

    ClearParam(prop: keyof AttributeBonusParams) {
        this.params[prop] = 0;
        this.UpdateParams();
    }
}

export type AttributeBonusParams = {
    dotDefense: number;
    dotAmplify: number;
    hpRegenAmplify: number;
    intToStrPercentage: number;
    attackSpeedBonus: number;
    attackSpeedBonusPercentage: number;
    cooldownSpellReduction: number;
    cooldownItemReduction: number;
    damageReduction: number;
    magicDamageReduction: number;
    physicalDamageReduction: number;
    armorBonus: number;
    evasionBonus: number;
    healthBonus: number;
    healthBonusPercentage: number;
    manaBonus: number;
    manaBonusPercentage: number;
    healthRegen: number;
    healthRegenPercentage: number;
    manaRegen: number;
    manaRegenPercentage: number;
    lifesteal: number;
    spellLifesteal: number;
    spellAmplification: number;
    magicDefenseBonus: number;
    movespeedBonus: number;
    movespeedBonusPercentage: number;
    reflectBonus: number;
    agiBonus: number;
    strBonus: number;
    intBonus: number;
    agiBonusPercentage: number;
    strBonusPercentage: number;
    intBonusPercentage: number;
    goldPerMinute: number;
    extraAttacks: number;
    extraAttackCooldown: number;
    magicDamagePerAgi: number;
    magicDamagePerInt: number;
    magicDamagePerStr: number;
    physicalBonusPerAgi: number;
    physicalBonusPerInt: number;
    physicalBonusPerStr: number;
    magicalBlockBonus: number;
    magicalBlockChance: number;
    physicalBlockBonus: number;
    physicalBlockChance: number;
    totalBlockBonus: number;
    totalBlockChance: number;
    statusResistance: number;
    slowResistance: number;
    disarmChance: number;
    disarmDuration: number;
    changeMainAttribute: number;
    aoeBonus: number;
    aoeBonusPercentage: number;
};
