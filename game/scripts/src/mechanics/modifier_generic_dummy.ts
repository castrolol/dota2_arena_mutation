import { BaseModifier, registerModifier } from "../utils/dota_ts_adapter";

@registerModifier()
export class modifier_generic_dummy extends BaseModifier {
	// Modifier properties
	caster: CDOTA_BaseNPC = this.GetCaster()!;
	ability: CDOTABaseAbility = this.GetAbility()!;
	parent: CDOTA_BaseNPC = this.GetParent();

	IsHidden() {
		return false;
	}
	IsDebuff() {
		return false;
	}
	IsPurgable() {
		return false;
	}

	OnCreated(params: object): void {
		print("Dummy Created")
	}

	CheckState(): Partial<Record<ModifierState, boolean>> {
		return {
			[ModifierState.NO_UNIT_COLLISION]: true,
			[ModifierState.NO_TEAM_MOVE_TO]: true,
			[ModifierState.NO_TEAM_SELECT]: true,
			[ModifierState.COMMAND_RESTRICTED]: true,
			[ModifierState.ATTACK_IMMUNE]: true,
			[ModifierState.INVULNERABLE]: true,
			[ModifierState.NOT_ON_MINIMAP]: true,
			[ModifierState.UNSELECTABLE]: true,
			[ModifierState.OUT_OF_GAME]: true,
			[ModifierState.NO_HEALTH_BAR]: true,
			[ModifierState.FLYING_FOR_PATHING_PURPOSES_ONLY]: true

		}
	}

	DeclareFunctions() {
		return [
			ModifierFunction.IGNORE_MOVESPEED_LIMIT
		];
	}

	GetModifierIgnoreMovespeedLimit(): 0 | 1 {
		return 1
	}
}