export class GoldNotifier {
    constructor() {
        Timers.CreateTimer(0.1, () => this.UpdateGold());
    }

    UpdateGold() {
        if (GameRules.Mode.players == null) return 0.1;

        const players = GameRules.Mode.players;
        print(players.length);

        for (const player of players) {
            const gold = PlayerResource.GetNetWorth(player) - 100;

            print('Player Gold', player, gold);

            CustomNetTables.SetTableValue('player_gold', `${player}`, { gold });
        }

        return 1;
    }
}
