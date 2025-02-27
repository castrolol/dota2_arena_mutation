import { BaseModifier } from '../utils/dota_ts_adapter';

export class TalentBaseModifier extends BaseModifier {
    map: Map<string, number[]>;
    abilityKV: any;

    IsHidden(): boolean {
        return true;
    }

    GetAbilityName(): string {
        throw new Error("The ability wasn't defined");
    }

    DestroyOnExpire(): boolean {
        return false;
    }

    RemoveOnDeath(): boolean {
        return false;
    }

    IsPurgable(): boolean {
        return false;
    }

    IsPurgeException(): boolean {
        return false;
    }

    IsPermanent(): boolean {
        return true;
    }

    GetAbilityValueFor(valueName: string): number {

        if(this.map === null || this.abilityKV === null){ 
            this.abilityKV = GetAbilityKeyValuesByName(this.GetAbilityName());
            this.map = new Map();
            for (const abilityValueName in this.abilityKV.AbilityValues) {
                let valuesString = '' + this.abilityKV.AbilityValues[abilityValueName];
                let values = valuesString.split(' ').map(x => Number(x));
    
                this.map.set(abilityValueName, values);
            }
        }

        return this.map.get(valueName)?.[this.GetStackCount()-1];
    }

    OnCreated(params: { level: number }): void {

        if (IsServer()) {
            this.SetStackCount(params.level);
        }

     

        this.OnTalentCreated(params);
    }

    OnTalentCreated(params: any) {}
}
