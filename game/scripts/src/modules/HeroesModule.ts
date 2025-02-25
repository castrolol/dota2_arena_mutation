import { CustomAbilityType } from '../heroes/static_definitions';
import { custom_ability_attributes_bonus } from '../mechanics/custom_ability_attributes_bonus';
import "../heroes/index"

export class HeroesModule {
    heroes: Map<PlayerID, HeroInfo> = new Map();

    constructor() {
        CustomGameEventManager.RegisterListener('talent_upgrade_request', (userId, { talent_name, PlayerID }) => {
            print(talent_name);

            this.learnTalent(PlayerID, talent_name);
        });
    }

    joinOrUpdate(playerId: PlayerID, heroName: string) {
        this.heroes.set(playerId, { playerId, heroName, talents: new Map() });
    }

    learnTalent(playerId: PlayerID, talentName: string) {
        const heroInfo = this.heroes.get(playerId);
        if (!heroInfo) {
            print('Nao tem hero');
            GameRules.UI.notifyError('Talents', 'NotFound');
            // throw error...
            return;
        }
        const hero = PlayerResource.GetSelectedHeroEntity(heroInfo.playerId);
        const currentLevel = heroInfo.talents.get(talentName) ?? 0;

        print('hero: ' + hero.GetUnitName());

        let ability: CDOTABaseAbility;

        const abilitiesKv = GetAbilityKeyValuesByName(talentName) as {
            AbilityIndex?: string;
            CustomAbilityType: CustomAbilityType;
            AbilityValues: Record<string, string>;
            AffectedBy: Record<string, string>;
        };

        const abilityType = abilitiesKv.CustomAbilityType;
        print('abilityType: ' + abilityType);

        if (abilityType === CustomAbilityType.Base) {
            GameRules.UI.notifyError('Talents', 'InvalidTalentType');
            return;
        }
        heroInfo.talents.set(talentName, currentLevel + 1);

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
            print('vai ser ' + level);

            const incrementAbility = hero.FindModifierByName(`modifier_${talentName}`);

            print('vai ser ' + incrementAbility);

            if (incrementAbility !== null) {
                print('vai ser removido' );
                hero.RemoveModifierByName(`modifier_${talentName}`);
            }

            const item = hero.AddNewModifier(hero, null, `modifier_${talentName}`, { level });
            print("item: " + item);

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
    }
}

export interface HeroInfo {
    playerId: PlayerID;
    heroName: string;
    talents: Map<string, number>;
}
