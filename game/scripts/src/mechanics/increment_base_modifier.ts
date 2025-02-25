import { BaseModifier } from "../utils/dota_ts_adapter"

export type UpgradeBaseParams = {
    textureName: string
}

type withTextureName<T> = T & {
    textureName: string
}

type UpgradeParams<> = {
    [key: string]: number
}

export abstract class IncrementBaseModifier<T extends UpgradeParams> extends BaseModifier {
    abstract OnBaseCreated(params: T): void
    abstract GetAbilitySpecialValues?(): void

    textureName: string | undefined = undefined;

    params: withTextureName<T> = {} as withTextureName<T>

    GetSpecialValueFor<U extends keyof T>(name: U): T[U] {

        return this.params[name]
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

    OnCreated(params: withTextureName<T>): void {
        this.params = params;
        this.textureName = params.textureName;


        if (IsServer()) {
            this.GetSpecialValueFor = function <U extends keyof T>(name: U): T[U] {

                return params[name]
            }
            this.SetHasCustomTransmitterData(true);

            this.AddCustomTransmitterData = (): withTextureName<T> => {
                return this.params;
            }
            this.UpdateAbilitySpecialValues()
            Timers.CreateTimer(FrameTime(), () => {
                this.UpdateAbilitySpecialValues()

            }, undefined)
        }
        this.OnBaseCreated(params)
    }

    AddCustomTransmitterData(): withTextureName<T> {
        return this.params;
    }

    HandleCustomTransmitterData(data: withTextureName<T>) {
        this.params = data
        if (data !== undefined) {
            this.GetSpecialValueFor = function <U extends keyof T>(name: U): T[U] {

                return data[name]
            }
        }

        if (data.textureName !== null) {
            this.textureName = data.textureName;
            this.GetTexture = function () {
                return data.textureName
            }
        }

        const keys = data as any;
        const props = Object.keys(keys)

        for (let prop of props) {
            (this as any)[prop as any] = props[prop as any]
        }

        this.GetAbilitySpecialValues?.()
    }

    UpdateAbilitySpecialValues() {
        if (!IsServer()) return;
        this.SendBuffRefreshToClients()
    }

}