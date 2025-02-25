import { ChangeAttributeValue } from '../heroes/static_definitions';
import { BaseModifier } from '../utils/dota_ts_adapter';

type ModifierParams<T> = { textureName: string | undefined; amount: number; changeMainAttribute: number } & T;

export class BonusPropertyModifier<Params> extends BaseModifier {
    params: ModifierParams<Params> = { textureName: undefined, amount: 0 } as any;
    textureName: string | undefined = undefined;

    GetAmount() {
        return this.params.amount;
    }

    IsHidden(): boolean {
        return true;
    }

    IsPermanent(): boolean {
        return true;
    }

    IsPurgable(): boolean {
        return false;
    }

    IsPurgeException(): boolean {
        return false;
    }

    RemoveOnDeath() {
        return false;
    }

    GetTexture(): string {
        return this.textureName!;
    }

    OnCreated(params: ModifierParams<Params>): void {
        this.params = params;
        this.textureName = (this.params?.textureName || '') + '';

        (this as any)?.OnBaseCreated?.(this.params);

        if (!IsServer()) return;

        this.SetHasCustomTransmitterData(true);

        Timers.CreateTimer(
            FrameTime(),
            () => {
                this.GetAbilitySpecialValues();
            },
            undefined
        );
    }

    UpdateParams(params: Partial<ModifierParams<Params>>) {
        if (!IsServer()) return;
        this.params = { ...this.params, ...params };

        this.GetAbilitySpecialValues();
        this.TryChangePrimaryAttribute();

        (this.GetParent()! as CDOTA_BaseNPC_Hero).CalculateStatBonus(true);
        (this.GetParent()! as CDOTA_BaseNPC_Hero).CalculateGenericBonuses();
    }

    TryChangePrimaryAttribute() {
        let netAttr = `${this.params.changeMainAttribute || 0}`;
        let attr = Attributes.INVALID;
        if (netAttr == '0') return;

        if (netAttr === ChangeAttributeValue.Strengh) attr = Attributes.STRENGTH;
        if (netAttr === ChangeAttributeValue.Agility) attr = Attributes.AGILITY;
        if (netAttr === ChangeAttributeValue.Intelligence) attr = Attributes.INTELLECT;
        if (netAttr === ChangeAttributeValue.Universal) attr = Attributes.ALL;

        if (attr === Attributes.INVALID) return;

        const hero = this.GetParent() as CDOTA_BaseNPC_Hero;

        if (hero.GetPrimaryAttribute() === attr) return;

        hero.SetPrimaryAttribute(attr);
    }

    AddCustomTransmitterData(): any {
        return this.params as any;
    }

    HandleCustomTransmitterData(data: any) {
        this.params = data as any;
        if (data.amount !== undefined) {
            this.GetAmount = function () {
                return data.amount;
            };
        }
        if (!data.textureName) return;
        this.GetTexture = function () {
            return data.textureName;
        };
    }

    GetAbilitySpecialValues() {
        if (!IsServer()) return;
        this.SendBuffRefreshToClients();
    }
}
