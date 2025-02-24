import { emitLocalEvent } from './event-bus';

GameEvents.Subscribe('dota_player_update_query_unit', OnUpdateSelectedUnit);
GameEvents.Subscribe('dota_player_update_selected_unit', OnUpdateSelectedUnit);

let data: {
    unit: EntityIndex | null;
    player: PlayerID;
    hero: EntityIndex | null;
} = {
    unit: null,
    player: Players.GetLocalPlayer(),
    hero: null,
};

export function OnUpdateSelectedUnit() {
    let h_selector = Players.GetLocalPlayer();
    $.Msg(h_selector);

    let unit = Players.GetQueryUnit(Players.GetLocalPlayer());
    if (unit === -1) {
        unit = Players.GetLocalPlayerPortraitUnit();
    }
    let hero = Players.GetPlayerHeroEntityIndex(Players.GetLocalPlayer());
    let player = Entities.GetPlayerOwnerID(unit);

    data = {
        unit: unit,
        hero: hero,
        player,
    };
    emitLocalEvent('custom_selected_unit', data);
}

OnUpdateSelectedUnit();
