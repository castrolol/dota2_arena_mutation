import { BaseModifier, registerModifier } from '../../utils/dota_ts_adapter';
import { ModifierUtils } from '../../utils/ModifierUtils';
import { BonusPropertyModifier } from '../attribute_bonus_base';
import { AttributeBonusParams } from '../custom_ability_attributes_bonus';

@registerModifier()
export class custom_modifier_attributes_bonus extends BonusPropertyModifier<AttributeBonusParams> {
    gold_accumulator: number = 0;

    DeclareFunctions(): ModifierFunction[] {
        return [
            ModifierFunction.ATTACKSPEED_BONUS_CONSTANT,
            ModifierFunction.ATTACKSPEED_PERCENTAGE,
            ModifierFunction.COOLDOWN_PERCENTAGE,
            ModifierFunction.INCOMING_DAMAGE_PERCENTAGE,
            ModifierFunction.PHYSICAL_ARMOR_BONUS,
            ModifierFunction.EVASION_CONSTANT,
            ModifierFunction.HEALTH_BONUS,
            ModifierFunction.EXTRA_HEALTH_PERCENTAGE,
            ModifierFunction.HEALTH_REGEN_CONSTANT,
            ModifierFunction.HEALTH_REGEN_PERCENTAGE,
            ModifierFunction.MANA_BONUS,
            ModifierFunction.EXTRA_MANA_BONUS_PERCENTAGE,
            ModifierFunction.MANA_REGEN_CONSTANT,
            ModifierFunction.MANA_REGEN_TOTAL_PERCENTAGE,
            ModifierFunction.ON_ATTACK_LANDED,
            ModifierFunction.ON_TAKEDAMAGE,
            ModifierFunction.SPELL_AMPLIFY_PERCENTAGE,
            ModifierFunction.MAGICAL_RESISTANCE_BONUS,
            ModifierFunction.MOVESPEED_BONUS_CONSTANT,
            ModifierFunction.MOVESPEED_BONUS_PERCENTAGE,
            ModifierFunction.STATS_AGILITY_BONUS,
            ModifierFunction.STATS_INTELLECT_BONUS,
            ModifierFunction.STATS_STRENGTH_BONUS,
            ModifierFunction.BASEATTACK_BONUSDAMAGE,
            ModifierFunction.PHYSICAL_CONSTANT_BLOCK,
            ModifierFunction.STATUS_RESISTANCE_STACKING,
            ModifierFunction.SLOW_RESISTANCE_UNIQUE,
            ModifierFunction.HP_REGEN_AMPLIFY_PERCENTAGE,
            ModifierFunction.AOE_BONUS_CONSTANT,
            ModifierFunction.AOE_BONUS_PERCENTAGE,
        ];
    }

    GetModifierAoEBonusConstant() {
        return this.params.aoeBonus;
    }

    GetModifierAoEBonusPercentage() {
        return this.params.aoeBonusPercentage;
    }

    GetModifierStatusResistanceStacking(): number {
        return this.params.statusResistance || 0;
    }

    GetModifierHPRegenAmplify_Percentage(): number {
        return this.params.hpRegenAmplify || 0;
    }

    GetModifierSlowResistance_Unique(): number {
        return this.params.slowResistance || 0;
    }

    GetModifierAttackSpeedPercentage(): number {
        return this.params.attackSpeedBonusPercentage;
    }

    GetModifierAttackSpeedBonus_Constant(): number {
        return this.params.attackSpeedBonus;
    }

    GetModifierPercentageCooldown(event: ModifierAbilityEvent): number {
        if (event.ability.IsItem()) return this.params.cooldownItemReduction;
        return this.params.cooldownSpellReduction;
    }

    GetModifierDOT_OutgoingDamageAmplify_Percentage(): number {
        return this.params.dotAmplify ?? 0;
    }

    GetModifierDOT_IncomingDamageAmplify_Percentage(): number {
        return (this.params.dotDefense ?? 0) * -1;
    }

    GetModifierIncomingDamage_Percentage(event: ModifierAttackEvent): number {
        let reduction = this.params.damageReduction || 0;

        if (event.damage_type === DamageTypes.PHYSICAL) {
            reduction += this.params.physicalDamageReduction || 0;
        } else if (event.damage_type === DamageTypes.MAGICAL) {
            reduction += this.params.magicDamageReduction || 0;
        }

        return -reduction;
    }

    GetModifierPhysicalArmorBonus(event: ModifierAttackEvent): number {
        let armorBonus = this.params.armorBonus ?? 0;

        return armorBonus;
    }

    GetModifierEvasion_Constant(event: ModifierAttackEvent): number {
        return this.params.evasionBonus;
    }

    GetModifierHealthBonus(): number {
        return this.params.healthBonus;
    }

    GetModifierExtraHealthPercentage(): number {
        return this.params.healthBonusPercentage;
    }

    GetModifierConstantHealthRegen(): number {
        return this.params.healthRegen;
    }

    GetModifierHealthRegenPercentage(): number {
        return this.params.healthRegenPercentage;
    }

    GetModifierManaBonus(): number {
        return this.params.manaBonus;
    }

    GetModifierExtraManaPercentage(): number {
        return this.params.manaBonusPercentage;
    }

    GetModifierConstantManaRegen(): number {
        return this.params.manaRegen;
    }

    GetModifierTotalPercentageManaRegen(): number {
        return this.params.manaRegenPercentage;
    }

    OnAttackLanded(event: ModifierAttackEvent): void {
        if (!IsServer()) return;
        this.ApplyOnAttackLanded(event);

        if (this.params.disarmChance !== null) {
            if (
                event.attacker.IsHero() &&
                event.attacker.IsRealHero() &&
                event.target === this.GetParent() &&
                !event.attacker.IsDebuffImmune() &&
                event.attacker.IsAlive()
            )
                if (RollPseudoRandomPercentage(this.params.disarmChance, PseudoRandom.ITEM_HALBRED_MAIM, this.GetParent())) {
                    event.attacker.AddNewModifier(this.GetParent(), this.GetAbility(), 'modifier_heavens_halberd_debuff', {
                        duration: this.params.disarmDuration,
                    });
                }
        }
    }

    ApplyOnAttackLanded(event: ModifierAttackEvent): void {
        if (event.attacker == this.GetParent()) {
            ModifierUtils.ApplyLifesteal(event, [this]);
        }
    }

    OnTakeDamage(event: ModifierInstanceEvent): void {
        if ((this.params.spellLifesteal || 0) > 0) {
            ModifierUtils.ApplySpellLifesteal(event, this.params.spellLifesteal, this);
        }

        if ((this.params.reflectBonus || 0) > 0) {
            ModifierUtils.ReflectDamage(event, this.GetParent(), this.params.reflectBonus);
        }
    }

    GetModifierLifeStealStacking(): number {
        return this.params.lifesteal;
    }

    GetModifierSpellAmplify_Percentage(event: ModifierAttackEvent): number {
        let spellAmp = this.params.spellAmplification || 0;
        const hero = this.GetParent() as CDOTA_BaseNPC_Hero;

        if ((this.params.magicDamagePerAgi || 0) > 0) {
            spellAmp += hero.GetAgility() * this.params.magicDamagePerAgi;
        }
        if ((this.params.magicDamagePerInt || 0) > 0) {
            spellAmp += hero.GetIntellect(true) * this.params.magicDamagePerInt;
        }
        if ((this.params.magicDamagePerStr || 0) > 0) {
            spellAmp += hero.GetStrength() * this.params.magicDamagePerStr;
        }

        return spellAmp;
    }

    GetModifierMagicalResistanceBonus(event: ModifierAttackEvent): number {
        return this.params.magicDefenseBonus;
    }

    GetModifierMoveSpeedBonus_Constant(): number {
        return this.params.movespeedBonus;
    }

    GetModifierMoveSpeedBonus_Percentage(): number {
        return this.params.movespeedBonusPercentage;
    }

    GetModifierPhysical_ConstantBlock(event: ModifierAttackEvent): number {
        let physChance = this.params.physicalBlockChance;
        let totalChance = this.params.totalBlockChance;

        let totalBlock = 0;

        if (!physChance || RollPseudoRandomPercentage(physChance, PseudoRandom.ITEM_ABYSSAL_BLOCK, this.GetParent())) {
            const physicalBlock = (this.params.physicalBlockBonus || 0) * (event.ranged_attack ? 0.5 : 1);
            // ModifierUtils.PopupNumbers(this.GetParent(), 'block', Vector(255, 255, 255), 1.0, physicalBlock, PopupSymbol.PreMinus, null);
            totalBlock += physicalBlock;
        }

        if (this.params.totalBlockBonus) {
            if (!totalChance || RollPseudoRandomPercentage(totalChance, PseudoRandom.ITEM_VANGUARD, this.GetParent())) {
                totalBlock = this.params.totalBlockBonus || 0;
            }
        }

        return totalBlock;
    }

    GetModifierMagical_ConstantBlock(event: ModifierAttackEvent): number {
        let magicalChance = this.params.magicalBlockChance;
        let totalChance = this.params.totalBlockChance;

        let totalBlock = 0;

        if (!magicalChance || RollPseudoRandomPercentage(magicalChance, PseudoRandom.ITEM_ABYSSAL_BLOCK, this.GetParent())) {
            totalBlock += this.params.magicalBlockBonus || 0;
        }

        if (this.params.totalBlockBonus) {
            if (!totalChance || RollPseudoRandomPercentage(totalChance, PseudoRandom.ITEM_VANGUARD, this.GetParent())) {
                totalBlock = this.params.totalBlockBonus || 0;
            }
        }

        return totalBlock;
    }

    GetModifierBonusStats_Agility(): number {
        let agiBonus = this.params.agiBonus;

        if ((this.params.agiBonusPercentage || 0) !== 0) {
            const hero = this.GetCaster() as CDOTA_BaseNPC_Hero;
            if (hero !== null) {
                agiBonus += Math.ceil(hero.GetBaseAgility() * (this.params.agiBonusPercentage / 100));
            }
        }

        return agiBonus;
    }

    GetModifierBonusStats_Intellect(): number {
        let intBonus = this.params.intBonus;

        if ((this.params.intBonusPercentage || 0) !== 0) {
            const hero = this.GetCaster() as CDOTA_BaseNPC_Hero;
            if (hero !== null) {
                intBonus += Math.ceil(hero.GetBaseIntellect() * (this.params.intBonusPercentage / 100));
            }
        }

        return intBonus;
    }

    bonusStats_StrengthLock = false;

    GetModifierBonusStats_Strength(): number {
        let strBonus = this.params.strBonus;
        const hero = this.GetCaster() as CDOTA_BaseNPC_Hero;

        if ((this.params.intToStrPercentage || 0) !== 0) {
            if (hero !== null) {
                strBonus += hero.GetIntellect(true) * (this.params.intToStrPercentage / 100);
            }
        }

        if ((this.params.strBonusPercentage || 0) !== 0) {
            if (!this.bonusStats_StrengthLock) {
                this.bonusStats_StrengthLock = true;
                if (hero !== null) {
                    strBonus += Math.ceil(hero.GetStrength() * (this.params.strBonusPercentage / 100));
                }
                this.bonusStats_StrengthLock = false;
            }
        }

        return strBonus;
    }

    GetModifierBaseAttack_BonusDamage(): number {
        let bonusDmg = this.params.spellAmplification || 0;
        const hero = this.GetParent() as CDOTA_BaseNPC_Hero;

        if ((this.params.physicalBonusPerAgi || 0) > 0) {
            bonusDmg += hero.GetAgility() * this.params.physicalBonusPerAgi;
        }
        if ((this.params.physicalBonusPerInt || 0) > 0) {
            bonusDmg += hero.GetIntellect(true) * this.params.physicalBonusPerInt;
        }
        if ((this.params.physicalBonusPerStr || 0) > 0) {
            bonusDmg += hero.GetStrength() * this.params.physicalBonusPerStr;
        }

        return bonusDmg;
    }
}
