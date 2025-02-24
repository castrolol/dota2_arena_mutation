import { GameConfig } from './GameConfig';
import { reloadable } from '../utils/tstl-utils';
// import { PlayerNotifier } from './PlayerNotifier';

const heroSelectionTime = 20;

declare global {
    interface CDOTAGameRules {
        Addon: GameMode;
    }
}

@reloadable
export class GameMode {
    config: GameConfig = null as any;
    players: PlayerID[] = [];

    public static Activate(this: void) {
        GameRules.Addon = new GameMode();
    }

    constructor() {
        // Register event listeners for dota engine events
        ListenToGameEvent('game_rules_state_change', () => this.OnStateChange(), undefined);
        ListenToGameEvent(
            'dota_player_spawned',
            event => {
                this.OnPlayerSpawned(event);
            },
            undefined
        );
        // ListenToGameEvent('npc_spawned', event => this.OnNpcSpawned(event), undefined);
        // ListenToGameEvent('dota_player_gained_level', event => this.OnHeroLevelUp(event), undefined);
    }
    OnPlayerSpawned(event: GameEventProvidedProperties & DotaPlayerSpawnedEvent) {
        const players: PlayerID[] = [];

        for (let i = 0; i < 8; i++) {
            if (PlayerResource.IsValidPlayer(i) || PlayerResource.IsFakeClient(i as PlayerID)) {
                players.push(i as PlayerID);
            }
        }

        this.players = players;
    }
    OnHeroLevelUp(event: GameEventProvidedProperties & DotaPlayerGainedLevelEvent): void {
        // GameRules.Heroes.notifyLevelUp(event.player_id);
    }

    public OnStateChange(): void {
        const state = GameRules.State_Get();

        // Add 4 bots to lobby in tools
        if (IsInToolsMode() && state == GameState.CUSTOM_GAME_SETUP) {
            Tutorial.SelectPlayerTeam('good');
            // Tutorial.SelectHero('');
            GameRules.SetSameHeroSelectionEnabled(true);
            GameRules.BotPopulate();
        }

        const players: PlayerID[] = [];

        for (let i = 0; i < 8; i++) {
            if (PlayerResource.IsValidPlayer(i) || PlayerResource.IsFakeClient(i as PlayerID)) {
                players.push(i as PlayerID);
            }
        }

        this.players = players;
        
        if (state === GameState.CUSTOM_GAME_SETUP) {
            // Automatically skip setup in tools
            this.config.setupTeamRelated();

            if (IsInToolsMode()) {
                Timers.CreateTimer(3, () => {
                    GameRules.FinishCustomGameSetup();
                });
            }
        }

        // Start game once pregame hits
        if (state === GameState.PRE_GAME) {
            Timers.CreateTimer(0.2, () => this.StartGame());
        }
    }

    private StartGame(): void {
        print('Game starting!');
        // let notificar = new PlayerNotifier();
        // print(notificar);

        // Do some stuff here
    }

    // Called on script_reload
    public Reload() {
        print('Script reloaded!');

        // Do some stuff here
    }

    private OnNpcSpawned(event: NpcSpawnedEvent) {
        // After a hero unit spawns, apply modifier_panic for 8 seconds
        let unit = EntIndexToHScript(event.entindex) as CDOTA_BaseNPC; // Cast to npc since this is the 'npc_spawned' event
        // Give all real heroes (not illusions) the meepo_earthbind_ts_example spell
        if (unit.IsRealHero()) {
            unit as CDOTA_BaseNPC_Hero;
            //GameRules.Heroes.joinOrUpdate(unit.GetPlayerOwnerID(), unit.GetUnitName());

            unit.NotifyWearablesOfModelChange(true);
        }
    }
}
