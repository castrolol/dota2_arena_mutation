import { BaseAbility, BaseModifier, registerAbility, registerModifier } from "../../../../../utils/dota_ts_adapter";
import { TalentBaseModifier } from "../../../../talent_base_modifier";

@registerAbility()
export class talent_crystal_maiden_frosty_fortress_frostbite_amputation extends BaseAbility {
    GetIntrinsicModifierName(): string {
        return modifier_talent_crystal_maiden_frosty_fortress_frostbite_amputation.name;
    }
}

@registerModifier()
export class modifier_talent_crystal_maiden_frosty_fortress_frostbite_amputation extends TalentBaseModifier {
   
    OnTalentCreated(): void {
        
        new talent_crystal_maiden_frosty_fortress_frostbite_amputation().GetLevelSpecialValueFor("", this.GetStackCount());

    }

}


export class modifier_frostbite_amputation_ready extends BaseModifier {



}