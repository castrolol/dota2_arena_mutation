import { Ability, ClassScheme, Heroes, PathScheme, TalentAddress, TalentRow } from "./hero.types";
import { CustomAbilityType } from "../heroes/static_definitions";
import * as heroesJSON from '../json/npc_heroes_custom.json';
import * as abilitiesJSON from "../json/npc_abilities_custom.json";
import { custom_ability_attributes_bonus } from "../mechanics/custom_ability_attributes_bonus";

const heroesKV: Heroes = heroesJSON;
const rowRequirement = [0, 4, 9, 14]

export class HeroController {

    playerId: PlayerID;
    heroName: string;
    talents: Map<string, number>;
    abilities: Map<number, Ability>;
    classes: Map<string, ClassScheme>;
    talentsAddress: Map<string, TalentAddress>;
    lastNotifiedLevel: number = 1;
    availablePoints = 0;
    totalPoints = 0;

    constructor(playerId: PlayerID, heroName: string) {
        this.playerId = playerId;
        this.heroName = heroName;
        this.talents = new Map();
        this.prepareHeroScheme(heroName);

        ListenToGameEvent("dota_player_gained_level", ({ PlayerID, hero_entindex, level }) => {
            if (playerId !== PlayerID) return;
            if (this.lastNotifiedLevel === level) return;
            const levelsGained = level = this.lastNotifiedLevel;
            this.lastNotifiedLevel = level;
            this.addPoints(levelsGained)

        }, null)

        CustomGameEventManager.RegisterListener('talent_upgrade_request', (userId, { talent_name, PlayerID }) => {
            if (playerId !== PlayerID) return;
            if (!this.canLearnTalent(talent_name)) return;
            this.learnTalent(talent_name);
        });
    }

    addPoints(levelsGained: number) {
        this.availablePoints += levelsGained;
        this.totalPoints += levelsGained;
        this.sendPoints();
    }

    prepareHeroScheme(heroName: string) {
        
        const heroKV = heroesKV[heroName]

        if(!heroKV) return;

        const abilities: Map<number, Ability> = new Map();
        const classes: Map<string, ClassScheme> = new Map();
        const talentsAddress: Map<string, TalentAddress> = new Map();
        for (let i = 0; i < 24; i++) {
            const value = heroKV[`Ability${i + 1}`];
            abilities.set(i, value ?? "");
        }

        for (const $class in heroKV.CustomClasses) {
            const classInfo = heroKV.CustomClasses[$class];
            let classData: ClassScheme = {
                name: $class,
                paths: new Map()
            }

            for (const $path in classInfo.Paths) {
                const pathInfo = classInfo.Paths[$path];
                let pathData: PathScheme = {
                    name: $path,
                    talentRows: new Map()
                }

                for (let rowIndex = 0; rowIndex < 4; rowIndex++) {
                    const talentRow: TalentRow = pathInfo[`TalentRow0${rowIndex + 1}`];
                    const talents: Ability[] = [];

                    for (let talentIndex = 0; talentIndex < 4; talentIndex++) {
                        const talent = talentRow.Talents[`Talent0${talentIndex + 1}`] ?? "none";
                        talents.push(talent)
                        if (talent !== "none") {
                            talentsAddress.set(talent, {
                                className: $class,
                                pathName: $path,
                                rowIndex: rowIndex,
                                index: talentIndex
                            })
                        }
                    }
                    pathData.talentRows.set(rowIndex, talents);
                }
                classData.paths.set($path, pathData);
            }


            classes.set($class, classData);
        }



        this.abilities = abilities;
        this.classes = classes;
        this.talentsAddress = talentsAddress;

    }

    getRowLevel(talentAddress: TalentAddress, rowIndex: number) {

        if (rowIndex < 0) return 0;

        const classInfo = this.classes.get(talentAddress.className);
        const pathInfo = classInfo.paths.get(talentAddress.pathName);
        const row = pathInfo.talentRows.get(rowIndex);
        const totalLevel = row.map(x => this.talents.get(x) ?? 0).reduce((prev, curr) => {
            return curr + prev;
        })

        return totalLevel;
    }

    canLearnTalent(talentName: string) {

        const talentScheme = this.talentsAddress.get(talentName);

        const lastRowLevel = this.getRowLevel(talentScheme, talentScheme.rowIndex - 1);

        if (rowRequirement[talentScheme.rowIndex] <= lastRowLevel) {
            return true;
        }

        return false;
    }

    learnTalent(talentName: string) {

        const hero = PlayerResource.GetSelectedHeroEntity(this.playerId);
        const currentLevel = this.talents.get(talentName) ?? 0;


        const talentInfo = abilitiesJSON[talentName];

        if ((currentLevel + 1) > talentInfo.MaxLevel) {
            GameRules.UI.notifyError("Talents", "MaxLevel")
            return;
        }


        const abilitiesKv = GetAbilityKeyValuesByName(talentName) as {
            AbilityIndex?: string;
            CustomAbilityType: CustomAbilityType;
            AbilityValues: Record<string, string>;
            AffectedBy: Record<string, string>;
        };

        const abilityType = abilitiesKv.CustomAbilityType;


        if (abilityType === CustomAbilityType.Base) {
            GameRules.UI.notifyError('Talents', 'InvalidTalentType');
            return;
        }

        if (this.availablePoints <= 0) {
            GameRules.UI.notifyError('Talents', 'NotEnoughPoints');
            return;
        }

        this.availablePoints--;
        this.talents.set(talentName, currentLevel + 1);
        this.sendPoints();

        if (abilityType === CustomAbilityType.Attribute) {
            const values = Object.entries(abilitiesKv.AbilityValues);
            const attributesAbility = hero.FindAbilityByName(custom_ability_attributes_bonus.name) as custom_ability_attributes_bonus;

            for (let [key, value] of values) {
                const specialValues = value.split(' ').map(x => Number(x));
                const levelIndex = math.min(currentLevel, specialValues.length - 1);
                let levelValue = specialValues[levelIndex];
                if (levelIndex > 0 && levelIndex === currentLevel) {
                    levelValue -= specialValues[levelIndex];
                }
                attributesAbility.AddParam(key as any, levelValue);
            }
        } else if (abilityType === CustomAbilityType.Trait) {
            const level = currentLevel + 1;

            const incrementAbility = hero.FindModifierByName(`modifier_${talentName}`);

            if (incrementAbility !== null) {

                hero.RemoveModifierByName(`modifier_${talentName}`);
            }

            hero.AddNewModifier(hero, null, `modifier_${talentName}`, { level });


        } else if (abilityType === CustomAbilityType.Increment) {
            const values = Object.entries(abilitiesKv.AbilityValues);
            const abilityValues: Record<string, number> = {};

            for (let [key, value] of values) {
                const specialValues = value.split(' ').map(x => Number(x));
                const levelIndex = math.min(currentLevel, specialValues.length);
                let levelValue = specialValues[levelIndex];

                abilityValues[key] = levelValue;
            }

            const incrementAbility = hero.FindModifierByName(`modifier_${talentName}`);

            if (incrementAbility !== null) {
                hero.RemoveModifierByName(`modifier_${talentName}`);
            }

            hero.AddNewModifier(hero, null, `modifier_${talentName}`, abilityValues);
        }

        this.sendTalentLevels();
    }

    sendTalentLevels() {

        const talents =  [...this.talents.entries()].map(([talent, level]) => {
            return { talent, level }
        })

        CustomNetTables.SetTableValue("player_talents", `${this.playerId}`, {
            learned_talents: talents
        })

    }

    sendPoints() {

        CustomNetTables.SetTableValue("player_points", `${this.playerId}`, {
            points: this.availablePoints,
            spent: this.totalPoints - this.availablePoints
        })

    }
}

