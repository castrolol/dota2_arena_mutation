import { useMemo } from 'react';
import abilities from '../json/npc_abilities_custom.json';
import { useHeroInfo } from './useHeroInfo';
import { useNetTableKey, useNetTableValues } from 'react-panorama-x';
import * as heroesJSON from '../json/npc_heroes_custom.json';
import { Heroes, Ability, ClassScheme, TalentAddress, PathScheme, TalentRow, HeroScheme } from './hero.types';

const heroesKV: Heroes = heroesJSON;
const cachedHeroes: Map<string, HeroScheme> = new Map();
const rowRequirement = [0, 4, 9, 14]

function getRowLevel(
    heroName: string,
    talents: TalentInfo[],
    talentName: string
) {
    const heroScheme = getHeroScheme(heroName);
    if (!heroScheme) return [0, 0];
    const talentAddress = heroScheme.talentsAddress.get(talentName)!
    const classInfo = heroScheme.classes.get(talentAddress.className)!;
    const pathInfo = classInfo.paths.get(talentAddress.pathName)!;
    if (talentAddress.rowIndex <= 0) return [0, 0];

    const row = pathInfo.talentRows.get(talentAddress.rowIndex - 1)!;
    const totalLevel = row.map(x => talents.find(y => y.talent === x)?.level ?? 0).reduce((prev, curr) => {
        return curr + prev;
    })

    return [totalLevel, talentAddress.rowIndex];
}

export function useAbilityInfo(

    playerId: PlayerID,
    heroName: string,

    abilityName: string,


) {
    const talents = useNetTableKey("player_talents", `${playerId}`)

    const [canLearn, currentLevel, requiredRowLevel, rowLevel] = useMemo(() => {

        const talentsLearned = talents ? Object.values(talents?.learned_talents ?? {}) : [];

        const [rowLevel, rowIndex] = getRowLevel(heroName, talentsLearned, abilityName)
        const currentLevel = talentsLearned?.find(x => x.talent === abilityName)?.level ?? 0;
        if (rowRequirement[rowIndex] <= rowLevel) {
            return [true, currentLevel, rowRequirement[rowIndex], rowLevel];
        }

        return [false, currentLevel, rowRequirement[rowIndex], rowLevel];

    }, [talents, heroName, abilityName])

    const ability = useMemo(() => {
        const abilityInfo = (abilities as any)[abilityName];

        const abilityData: AbilityData = {
            maxLevel: abilityInfo.MaxLevel
        };

        return abilityData;
    }, [abilityName]);

    return {
        ...ability,
        canLearn,
        requiredRowLevel,
        rowLevel,
        currentLevel
    };
}

export type AbilityData = {
    maxLevel: number;
};


function getHeroScheme(heroName: string) {
    if (!cachedHeroes.has(heroName)) {
        const heroKV = heroesKV[heroName]

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

        cachedHeroes.set(heroName, {
            abilities,
            classes,
            talentsAddress
        })

    }

    return cachedHeroes.get(heroName);
}