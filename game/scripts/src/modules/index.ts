import { Debug } from './Debug';
import { GameConfig } from './GameConfig';
import { GameMode } from './GameMode';
import { GoldNotifier } from './GoldNotifier';
import { XNetTable } from './xnet-table';

declare global {
    interface CDOTAGameRules {
        //Declare all GameRules modules, this is mainly for the convenience of references in other places (guaranteed singleton mode)
        XNetTable: XNetTable;
        Mode: GameMode;
    }
}

/**
 *This method will be called after the game_mode entity is generated and only once
 *So here is used as a singleton mode
 **/
export function ActivateModules() {
    if (GameRules.XNetTable == null) {
        GameRules.Mode = new GameMode();        
        GameRules.Mode.config = new GameConfig();
        GameRules.Mode.config.setup();
        
        new GoldNotifier();
        //Initialize all GameRules modules
        GameRules.XNetTable = new XNetTable();
        //If a module does not need to be used elsewhere, then use it directly here
        //Initialize the test module xD
        new Debug();
    }
}
