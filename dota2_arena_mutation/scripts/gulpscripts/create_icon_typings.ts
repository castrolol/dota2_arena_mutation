import Vinyl from 'vinyl';
import path from 'path';
import through2 from 'through2';

export function createIconTypings(root: string) {
    let files: string[] = [];
    let firstFile: Vinyl;
    function collect(file: Vinyl, enc: any, next: Function) {
        if (firstFile == null) firstFile = file;
        let relativePath = path.relative(root, file.path);
        files.push(relativePath.replace(/\\/g, '/'));
        next();
    }
    function write(done: Function) {
        if (firstFile == null) return done();
        files = files.sort();

        let content = `export type FileIcons = ${files.map((filename) => `"${path.basename(filename, path.extname(filename))}"`).join(" |\n ")}`;

        content += `\n\nexport type FacetIcons = ${facetIcons.map((filename) => `"${filename}"`).join(" |\n ")}`;

        const file = new Vinyl({
            cwd: firstFile.cwd,
            base: firstFile.base,
            path: path.join(firstFile.base, `icons_definitions.ts`),
            contents: Buffer.from(content),
        });
        //@ts-ignore
        this.push(file);
        done();
    }
    return through2.obj(collect, write);
}


const facetIcons = [
 "aghs",
 "agility",
 "arc_warden_alt",
 "arc_warden",
 "area_of_effect",
 "armor_broken",
 "armor",
 "barrier",
 "broken_chain",
 "brush",
 "bubbles",
 "chen",
 "chicken",
 "chrono_cube",
 "cooldown",
 "creep",
 "curve_ball",
 "damage",
 "dawnbreaker_hammer",
 "death_ward",
 "debuff",
 "double_bounce",
 "dragon_fire",
 "dragon_frost",
 "dragon_poison",
 "empower",
 "execute",
 "fence",
 "fist",
 "focus_fire",
 "full_heart",
 "gold",
 "healing",
 "illusion",
 "intelligence",
 "invoker_active",
 "invoker_exort",
 "invoker_passive",
 "invoker_quas",
 "invoker_wex",
 "item",
 "kez_flutter",
 "kez",
 "kez_shadowhawk",
 "lifestealer_rage",
 "mana",
 "meat",
 "moon",
 "movement",
 "multi_arrow",
 "no_facet",
 "no_vision",
 "nuke",
 "ogre",
 "overshadow",
 "phantom_ass_dagger",
 "phantom_lance",
 "pie",
 "pudge_hook",
 "range",
 "ricochet",
 "rng",
 "rune",
 "siege",
 "silencer",
 "skull",
 "slow",
 "snake",
 "snot",
 "snowflake",
 "spectre",
 "speed",
 "spinning",
 "spirit",
 "strength",
 "summons",
 "sun",
 "teleport",
 "tower",
 "tree",
 "twin_hearts",
 "unique",
 "vision",
 "vortex_in",
 "vortex_out",
 "web",
 "whoopee_cushion",
 "wolf",
 "xp"
]