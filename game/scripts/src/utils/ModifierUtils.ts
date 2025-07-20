import { BaseModifier, registerModifier } from './dota_ts_adapter';
import { IsEnemy, HasBit } from './util';

export class ModifierUtils {
    public static ApplyLifesteal(event: ModifierAttackEvent, modifiers: CDOTA_Modifier_Lua[]): void {
        //If there was no damage done, or somehow it's negative, do nothing
       
        if (event.damage <= 0) return;

        //Ignore buildings
        if (event.target.IsBuilding()) return;

        //Lifesteal handling
        let lifesteal_pct = 0;
        let lifesteal_multiplier = 0;
        let lifesteal = 0;

        for (const modifier of modifiers) {
            //Calculate lifesteal percentage on attacker
            if (modifier.GetModifierLifeStealStacking && (modifier.GetModifierLifeStealStacking() || 0) > 0) {
                lifesteal_pct += modifier.GetModifierLifeStealStacking();
            }
            const amplify = (modifier.GetModifierLifestealRegenAmplify_Percentage?.() as any as number | undefined) ?? 0;
            //Calculate lifesteal multiplier
            if (amplify > 0) {
                lifesteal_multiplier += amplify;
            }
        }

       

        //Calculate actual lifesteal based on damage dealt
        if (lifesteal_pct > 0) {
            //Multiply using the multiplier, if any
            if (lifesteal_multiplier > 0) {
                lifesteal_pct = lifesteal_pct * (1 + lifesteal_multiplier * 0.01);
            }

            lifesteal = event.damage * lifesteal_pct * 0.01;
            if (lifesteal > 0) {
                //Heal attacker based on lifesteal
                event.attacker.Heal(lifesteal, undefined);

                //Play particle
                const pfx = ParticleManager.CreateParticle(
                    'particles/generic_gameplay/generic_lifesteal.vpcf',
                    ParticleAttachment.ABSORIGIN_FOLLOW,
                    event.attacker
                );
                ParticleManager.SetParticleControl(pfx, 0, event.attacker.GetAbsOrigin());
                ParticleManager.ReleaseParticleIndex(pfx);

                //SendOverheadEventMessage(undefined, OverheadAlert.HEAL, event.attacker, lifesteal, undefined);
            }
        }
    }

    public static ApplySpellLifesteal(event: ModifierInstanceEvent, lifesteal_amount: number, modifier: BaseModifier) {
        let parent = modifier.GetParent();
        //print("event.attacker == parent", event.attacker == parent)
        //print("event.inflictor !== undefined", event.inflictor !== undefined)
        //print("IsEnemy(event.attacker, event.unit)", IsEnemy(event.attacker, event.unit))
        //print("!HasBit(event.damage_flags, DamageFlag.REFLECTION)", !HasBit(event.damage_flags, DamageFlag.REFLECTION))
        //print("!HasBit(event.damage_flags, DamageFlag.NO_SPELL_LIFESTEAL)", !HasBit(event.damage_flags, DamageFlag.NO_SPELL_LIFESTEAL))
        if (
            event.attacker == parent &&
            event.inflictor !== undefined &&
            IsEnemy(event.attacker, event.unit) &&
            !HasBit(event.damage_flags, DamageFlag.REFLECTION) &&
            !HasBit(event.damage_flags, DamageFlag.NO_SPELL_LIFESTEAL)
        ) {
            let dmg = event.damage * (lifesteal_amount / 100);

            if (event.unit.IsCreep()) {
                dmg = dmg / 5;
            }
            parent.HealWithParams(dmg, modifier.GetAbility()!, false, true, parent, true);
            let pfx = ParticleManager.CreateParticle('particles/items3_fx/octarine_core_lifesteal.vpcf', ParticleAttachment.ABSORIGIN_FOLLOW, parent);
            ParticleManager.ReleaseParticleIndex(pfx);
        }
    }

    public static ApplyDOTDamage(
        target: CDOTA_BaseNPC,
        caster: CDOTA_BaseNPC,
        ability: CDOTABaseAbility,
        damageTick: number,
        damageType: DamageTypes = DamageTypes.PURE,
        damageFlags: DamageFlag = DamageFlag.NONE,
        ignoreAmplify: boolean = false
    ) {
        let damage = damageTick;

        if (!ignoreAmplify) {
            let casterAmplify = custom_dot_amplify_outgoing.GetAmountFor(caster);
            let targetAmplify = custom_dot_amplify_incoming.GetAmountFor(target);

            damage = damage + (damage * casterAmplify) / 100 + (damage * targetAmplify) / 100;
        }
        
        const lifestealAmount = custom_dot_lifesteal_outgoing.GetAmountFor(caster);

        ApplyDamage({
            attacker: caster,
            damage,
            damage_type: damageType,
            victim: target,
            ability,
            damage_flags: DamageFlag.HPLOSS | DamageFlag.BYPASSES_ALL_BLOCK | damageFlags,
        });

        if(lifestealAmount > 0){
            let dmg = damage * (lifestealAmount / 100);
            caster.HealWithParams(dmg, ability, false, true, caster, true);
            let pfx = ParticleManager.CreateParticle('particles/items3_fx/octarine_core_lifesteal.vpcf', ParticleAttachment.ABSORIGIN_FOLLOW, caster);
            ParticleManager.ReleaseParticleIndex(pfx);
        }
    }

    
    public static AddDoTLifesteal(target: CDOTA_BaseNPC, caster: CDOTA_BaseNPC, ability: CDOTABaseAbility, amount: number, duration: number) {
        return custom_dot_lifesteal_outgoing.Add(target, caster, ability, amount, duration);
    }

    public static AddOutgoingDotAmplify(target: CDOTA_BaseNPC, caster: CDOTA_BaseNPC, ability: CDOTABaseAbility, amount: number, duration: number) {
        return custom_dot_amplify_outgoing.Add(target, caster, ability, amount, duration);
    }

    public static AddIncomingDotAmplify(target: CDOTA_BaseNPC, caster: CDOTA_BaseNPC, ability: CDOTABaseAbility, amount: number, duration: number) {
        return custom_dot_amplify_incoming.Add(target, caster, ability, amount, duration);
    }

    public static ReflectDamage(event: ModifierInstanceEvent, parent: CDOTA_BaseNPC, amount: number): void {
        if (!IsServer()) return;

        //--Trigger only for this modifier
        if (parent !== event.unit) {
            return;
        }

        //--Don't trigger on illusions
        if (parent.IsIllusion()) {
            return;
        }

        ////--If parent has Blade Mail passive /item, Blade Mail buff or Orb of Reflection active buff, don't continue to prevent stacking
        //if parent: HasModifier("modifier_item_orb_of_reflection_active_reflect") or parent: HasModifier("modifier_item_blade_mail") or parent: HasModifier("modifier_item_blade_mail_reflect") then
        //return
        //end

        if (event.original_damage > 0 === false) {
            //print("event.original_damage > 0 === false")
            return;
        }
        const damage_flags = event.damage_flags;
        const attacker = event.attacker;

        //--Don't trigger on damage with these flags
        if (HasBit(damage_flags, DamageFlag.HPLOSS) || HasBit(damage_flags, DamageFlag.REFLECTION)) {
            //print("HasBit(damage_flags, DamageFlag.HPLOSS)", HasBit(damage_flags, DamageFlag.HPLOSS))
            //print("HasBit(damage_flags, DamageFlag.REFLECTION)", HasBit(damage_flags, DamageFlag.REFLECTION))
            return;
        }

        //--To prevent crashes
        if (!attacker || attacker.IsNull()) {
            //print("!attacker || attacker.IsNull()")
            return;
        }

        //--Don't trigger on self damage or on damage from allies
        if (attacker == parent || attacker.GetTeamNumber() == parent.GetTeamNumber()) {
            //print("attacker == parent || attacker.GetTeamNumber() == parent.GetTeamNumber()")
            return;
        }

        //--Don't trigger if attacker is dead
        if (!attacker.IsAlive()) {
            //print("!attacker.IsAlive()")
            return;
        }

        //--Don't trigger on buildings, towers and fountains
        if (attacker.IsBuilding() || attacker.IsTower() || attacker.IsInvulnerable()) {
            //print("attacker.IsBuilding()", attacker.IsBuilding())
            //print("attacker.IsTower()", attacker.IsTower())
            //print("attacker.IsInvulnerable()", attacker.IsInvulnerable())
            return;
        }

        //--Damage before reductions
        const damage = event.original_damage;

        //--Calculating damage that will be returned to attacker
        const new_damage = (damage * amount) / 100;

        const damage_table: ApplyDamageOptions = {
            victim: attacker,
            attacker: parent,
            damage_type: event.damage_type, //--Same damage type as original damage
            damage: new_damage,
            damage_flags: damage_flags | DamageFlag.REFLECTION | DamageFlag.NO_SPELL_AMPLIFICATION | DamageFlag.NO_SPELL_LIFESTEAL,
        };

        //print("victim", attacker);
        //print("attacker", parent);
        //print("damage_type", event.damage_type); //--Same damage type as original damag)e
        //print("damage", new_damage);
        //print("damage_flags", damage_flags)

        ApplyDamage(damage_table);

        let pfx = ParticleManager.CreateParticle('particles/custom/custom_reflect_effect.vpcf', ParticleAttachment.ROOTBONE_FOLLOW, attacker);
        ParticleManager.ReleaseParticleIndex(pfx);
    }

    public static PopupNumbers(
        target: CDOTA_BaseNPC,
        pfx: 'block',
        color: Vector,
        lifetime: number,
        number: number,
        presymbol: PopupSymbol | null,
        postsymbol: PopupSymbol | null
    ) {
        let pfxPath = `particles/msg_fx/msg_${pfx}.vpcf`;
        let pidx = ParticleManager.CreateParticle(pfxPath, ParticleAttachment.ABSORIGIN_FOLLOW, target); // target:GetOwner()

        let digits = 0;
        if (number !== null) {
            digits = number;
        }
        if (presymbol !== null) {
            digits = digits + 1;
        }
        if (postsymbol !== null) {
            digits = digits + 1;
        }

        ParticleManager.SetParticleControl(pidx, 1, Vector(tonumber(presymbol), tonumber(number), tonumber(postsymbol)));
        ParticleManager.SetParticleControl(pidx, 2, Vector(lifetime, digits, 0));
        ParticleManager.SetParticleControl(pidx, 3, color);
    }
}

@registerModifier()
export class custom_dot_lifesteal_outgoing extends BaseModifier {
    IsHidden(): boolean {
        return false;
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

    GetAttributes(): ModifierAttribute {
        return ModifierAttribute.MULTIPLE;
    }

    OnCreated({ amount }: { amount: number }): void {
        if (!IsServer()) return;
        this.SetStackCount(amount);
    }
    OnRefresh(params: { amount: number }): void {
        this.OnCreated(params);
    }

    static Add(target: CDOTA_BaseNPC, caster: CDOTA_BaseNPC, ability: CDOTABaseAbility, amount: number, duration: number) {
        return target.AddNewModifier(caster, ability, custom_dot_lifesteal_outgoing.name, { amount, duration }) as custom_dot_lifesteal_outgoing;
    }

    static GetAmountFor(unit: CDOTA_BaseNPC): number {
        if (!IsServer()) return 0;

        const modifiers = unit.FindAllModifiersByName(custom_dot_lifesteal_outgoing.name) as custom_dot_lifesteal_outgoing[];

        let amount = 0;

        for (let modifier of modifiers) {
            amount += modifier.GetStackCount();
        }

        return amount;
    }
}

@registerModifier()
export class custom_dot_amplify_outgoing extends BaseModifier {
    IsHidden(): boolean {
        return false;
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

    GetAttributes(): ModifierAttribute {
        return ModifierAttribute.MULTIPLE;
    }

    OnCreated({ amount }: { amount: number }): void {
        if (!IsServer()) return;
        this.SetStackCount(amount);
    }
    OnRefresh(params: { amount: number }): void {
        this.OnCreated(params);
    }

    static Add(target: CDOTA_BaseNPC, caster: CDOTA_BaseNPC, ability: CDOTABaseAbility, amount: number, duration: number) {
        return target.AddNewModifier(caster, ability, custom_dot_amplify_outgoing.name, { amount, duration }) as custom_dot_amplify_outgoing;
    }

    static GetAmountFor(unit: CDOTA_BaseNPC): number {
        if (!IsServer()) return 0;

        const modifiers = unit.FindAllModifiersByName(custom_dot_amplify_outgoing.name) as custom_dot_amplify_outgoing[];

        let amount = 0;

        for (let modifier of modifiers) {
            amount += modifier.GetStackCount();
        }

        const allModifiers = unit.FindAllModifiers();

        for(let modifier of allModifiers){
            if((modifier as any).GetModifierDOT_OutgoingDamageAmplify_Percentage){
                amount += (modifier as any).GetModifierDOT_OutgoingDamageAmplify_Percentage() ?? 0;
            }
        }

        return amount;
    }
}

@registerModifier()
export class custom_dot_amplify_incoming extends BaseModifier {
    IsHidden(): boolean {
        return true;
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

    GetAttributes(): ModifierAttribute {
        return ModifierAttribute.MULTIPLE;
    }

    OnCreated({ amount }: { amount: number }): void {
        if (!IsServer()) return;
        this.SetStackCount(amount);
    }
    OnRefresh(params: { amount: number }): void {
        this.OnCreated(params);
    }

    static Add(target: CDOTA_BaseNPC, caster: CDOTA_BaseNPC, ability: CDOTABaseAbility, amount: number, duration: number) {
        return target.AddNewModifier(caster, ability, custom_dot_amplify_incoming.name, { amount, duration }) as custom_dot_amplify_incoming;
    }

    static GetAmountFor(unit: CDOTA_BaseNPC): number {
        if (!IsServer()) return 0;

        const modifiers = unit.FindAllModifiersByName(custom_dot_amplify_incoming.name) as custom_dot_amplify_incoming[];

        let amount = 0;

        for (let modifier of modifiers) {
            amount += modifier.GetStackCount();
        }

        const allModifiers = unit.FindAllModifiers();

        for(let modifier of allModifiers){
            if((modifier as any).GetModifierDOT_IncomingDamageAmplify_Percentage){
                amount += (modifier as any).GetModifierDOT_IncomingDamageAmplify_Percentage() ?? 0;
            }
        }

        return amount;
    }
}

export enum PopupSymbol {
    PrePlus = 0, //--plus
    PreMinus = 1, //--minus sign
    PreSadface = 2, //--sad face
    PreBrokenarrow = 3, //--Disconnected arrow
    PreShades = 4, //--sunglasses
    PreMiss = 5, //--MISS, lost
    PreEvade = 6, //--EVADE, avoid
    PreDeny = 7, //--DENY, reject
    PreArrow = 8, //--Up arrow

    PostExclamation = 0, //--none
    PostPointzero = 1, //--".0"
    PostMedal = 2, //--Medal
    PostDrop = 3, //--water droplets
    PostLightning = 4, //--Lightning
    PostSkull = 5, //--Skeleton
    PostEye = 6, //--Eye
    PostShield = 7, //--Shield
    PostPointfive = 8, //--".5"
}
