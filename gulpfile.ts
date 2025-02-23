import gulp from 'gulp';
import * as dotax from 'gulp-dotax';
import path from 'path';
import less from 'gulp-less';
import replace from 'gulp-replace';

const paths: { [key: string]: string } = {
    excels: 'excels',
    kv: 'game/scripts/npc',
    src_json: 'game/scripts/src/json',
    panorama_json: 'content/panorama/src/json',
    panorama: 'content/panorama',
    game_resource: 'game/resource',
};

 
/**
 *@description Convert kv file to json file used by panorama
 *@description Convert your kv file to panorama json file
 */
const kv_2_js =
    (watch: boolean = false) =>
    () => {
        const kvFiles = `${paths.kv}/**/*.{kv,txt}`;
        const transpileKVToJS = () => {
            return gulp.src(kvFiles).pipe(dotax.kvToJS()).pipe(gulp.dest(paths.panorama_json)).pipe(gulp.dest(paths.src_json));
        };

        if (watch) {
            return gulp.watch(kvFiles, transpileKVToJS);
        } else {
            return transpileKVToJS();
        }
    };

/**
 *@description Extract all required localized entries from the kv file. You can use parameters such as customPrefix and customSuffix to specify your own prefix and suffix.
 *@description Extract all description from kv file, you can use customPrefix and customSuffix to specify your prefix and suffix
 */
const kv_to_local = () => () => {
    return gulp.src(`${paths.kv}/**/*.{kv,txt}`).pipe(
        dotax.kvToLocalsCSV(`${paths.game_resource}/addon.csv`, {
            //customPrefix: (key, data, path) => {
            //    if (data.BaseClass && /ability_/.test(data.BaseClass)) {
            //        if (data.ScriptFile && data.ScriptFile.startsWith('abilities/combos/')) {
            //            return 'dota_tooltip_ability_combo_';
            //        } else if (data.ScriptFile && /^/.test(data.ScriptFile)) {
            //            return 'dota_tooltip_ability_chess_ability_';
            //        } else {
//            return 'dota_tooltip_ability_';
            //        }
            //    }
            //    return '';
            //},
            //customSuffix: (key, data, path) => {
            //    let suffix = [''];
            //    if (data.ScriptFile && data.ScriptFile.startsWith('abilities/combos/')) {
            //        suffix = ['_description'];
            //        let maxLevel = data.MaxLevel;
            //        if (maxLevel) {
//            suffix = suffix.concat(
            //                Array.from({ length: maxLevel }, (_, i) => `_level${i + 1}`)
            //            );
            //        }
            //    }
            //    return suffix;
            //},
            //exportAbilityValues: false,
        })
    );
};

/**
 *@description Convert localized text in resource/*.csv to addon_*.txt file
 *@description Convert resource/*.csv local text to addon_*.txt file
 *
 */
const csv_to_localization =
    (watch: boolean = false) =>
    () => {
        const addonCsv = `${paths.game_resource}/*.csv`;
        const transpileAddonCSVToLocalization = () => {
            return gulp.src(addonCsv).pipe(dotax.csvToLocals(paths.game_resource));
        };
        if (watch) {
            return gulp.watch(addonCsv, transpileAddonCSVToLocalization);
        } else {
            return transpileAddonCSVToLocalization();
        }
    };

/**
 *@description Convert the existing addon_*.txt file to addon.csv file. This task is to make this task adapt to your original development method. If it is redevelopment, there is no need to run this task.
 *@description Convert addon_*.txt file to addon.csv file, this task is for adapting your original development method, if you are re-developing, you don't need to run this task
 */
const localization_2_csv = () => {
    return dotax.localsToCSV(`${paths.game_resource}/addon_*.txt`, `${paths.game_resource}/addon.csv`);
};

/**
 *Collect jpg, png, and psd files in the panorama/images directory into the image_precache.css file in the dest directory
 *Using this task, you can compile all images without writing them yourself during the game setup stage.
 */
const create_image_precache =
    (watch: boolean = false) =>
    () => {
        const imageFiles = `${paths.panorama}/images/**/*.{jpg,png,psd}`;
        const createImagePrecache = () => {
            return gulp.src(imageFiles).pipe(dotax.imagePrecacche(`content/panorama/images/`)).pipe(gulp.dest(path.join(paths.panorama, 'src')));
        };
        if (watch) {
            return gulp.watch(imageFiles, createImagePrecache);
        } else {
            return createImagePrecache();
        }
    };

/**compile all less files to panorama path */
const compile_less =
    (watch: boolean = false) =>
    () => {
        const lessFiles = `${paths.panorama}/src/**/*.less`;
        const compileLess = () => {
            return (
                gulp
                    .src(lessFiles)
                    .pipe(less())
                    //valve has special formatting requirements for @keyframes, and the name of @keyframes needs to be wrapped in single quotes
                    .pipe(replace(/@keyframes\s*(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)/g, (match, name) => match.replace(name, `'${name}'`)))
                    .pipe(gulp.dest(path.join(paths.panorama, 'layout/custom_game')))
            );
        };
        if (watch) {
            return gulp.watch(lessFiles, compileLess);
        } else {
            return compileLess();
        }
    };

/**
 *start a file sserver to save/read files
 */
const fsServer = require('./scripts/fs');
const p = process.cwd();
const start_file_server = (callback: Function) => {
    const server = fsServer(p);

    server.on('file', (name: string) => {
        console.log('file: ' + name);
    });
    server.on('directory', (name: string) => {
        console.log('directory: ' + name);
    });

    server.listen(10384, () => {
        console.log('file server listening on port 10384');
        callback();
    });
};

gulp.task('start_file_server', start_file_server);

gulp.task('localization_2_csv', localization_2_csv);

gulp.task(`create_image_precache`, create_image_precache());
gulp.task('create_image_precache:watch', create_image_precache(true));

gulp.task('kv_2_js', kv_2_js());
gulp.task('kv_2_js:watch', kv_2_js(true));

gulp.task('csv_to_localization', csv_to_localization());
gulp.task('csv_to_localization:watch', csv_to_localization(true));

gulp.task('compile_less', compile_less());
gulp.task('compile_less:watch', compile_less(true));

gulp.task('predev', gulp.series('kv_2_js', 'csv_to_localization', 'create_image_precache'));
gulp.task(
    'dev',
    gulp.parallel('csv_to_localization:watch', 'create_image_precache:watch', 'kv_2_js:watch', 'compile_less:watch')
);
gulp.task('build', gulp.series('predev'));
gulp.task('jssync', gulp.series('kv_2_js'));
gulp.task('kv_to_local', kv_to_local());
gulp.task('prod', gulp.series('predev'));
