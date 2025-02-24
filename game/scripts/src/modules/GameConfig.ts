export class GameConfig {
    gold_per_tick = 1;
    gold_tick_time = 3;
    starting_gold = 600;
    use_bounty_gold_on_heroes = false;
    lose_gold_on_death = false;

    use_universal_shop_mode = true;

    same_hero_selection_enabled = false;
    pre_game_time = 10;
    starting_time_of_day = 0.5;
    custom_game_setup_auto_launch_delay = 10;
    strategy_time = 0;
    showcase_time = 0;

    buyback_enabled = false;
    hero_max_level = 30;

    teams: { player: PlayerID; team: DotaTeam; color: string }[] = [
        { player: 0, team: DotaTeam.GOODGUYS, color: '#0046c2' },
        { player: 1, team: DotaTeam.BADGUYS, color: '#e4273b' },
        { player: 2, team: DotaTeam.CUSTOM_1, color: '#ff00d8' },
        { player: 3, team: DotaTeam.CUSTOM_2, color: '#e8ff01' },
        { player: 4, team: DotaTeam.CUSTOM_3, color: '#00ffcf' },
        { player: 5, team: DotaTeam.CUSTOM_4, color: '#9900ff' },
        { player: 6, team: DotaTeam.CUSTOM_5, color: '#00cc00' },
        { player: 7, team: DotaTeam.CUSTOM_6, color: '#ff8400' },
    ];
    auto_respawn = true;

    setup() {
        this.setupGoldRelated();
        this.setupTimeRelated();
        this.setupGameModeEntity();
        this.setupTeamRelated();
    }

    setupTimeRelated() {
        GameRules.SetPreGameTime(this.pre_game_time);

        GameRules.SetCustomGameSetupAutoLaunchDelay(this.custom_game_setup_auto_launch_delay);
        GameRules.SetStrategyTime(this.strategy_time);
        GameRules.SetShowcaseTime(this.showcase_time);
        GameRules.SetTimeOfDay(this.starting_time_of_day);
        GameRules.SetUseUniversalShopMode(this.use_universal_shop_mode);
    }

    setupTeamRelated() {
        for (let team of this.teams) {
            GameRules.SetCustomGameTeamMaxPlayers(team.team, 1);

            // SetTeamCustomHealthbarColor(team.team, team.color.rgb.x, team.color.rgb.y, team.color.rgb.z);
            // PlayerResource.SetCustomTeamAssignment(team.player, team.team);
            // PlayerResource.SetCustomPlayerColor(team.player, team.color.rgb.x, team.color.rgb.y, team.color.rgb.z);
        }
        GameRules.SetHeroRespawnEnabled(this.auto_respawn);
    }

    setupGameModeEntity() {
        const gameModeEntity = GameRules.GetGameModeEntity();

        gameModeEntity.SetLoseGoldOnDeath(this.lose_gold_on_death);
        gameModeEntity.SetBuybackEnabled(this.buyback_enabled);
        gameModeEntity.SetRandomHeroBonusItemGrantDisabled(true);
        gameModeEntity.SetCustomHeroMaxLevel(this.hero_max_level);
    }

    setupGoldRelated() {
        GameRules.SetGoldPerTick(this.gold_per_tick);
        GameRules.SetGoldTickTime(this.gold_tick_time);
        GameRules.SetStartingGold(this.starting_gold);

        GameRules.SetUseBaseGoldBountyOnHeroes(this.use_bounty_gold_on_heroes);
    }
}
