/**
 *Project name
 *Must start with letters and only include lowercase letters, numbers and underscores
 */
let addon_name = 'adaption_arena';

try {
    addon_name = require('./.test/addon_name');
} catch (e) {
    //do nothing
}

/**
 *List of items to be encrypted
 *It is recommended that modifiers, ability codes, etc. that need to be run on both ends are not encrypted.
 *Avoid running-time errors or leaking encryption keys
 */
const encrypt_files = [
    '**/*.lua',
    '!game/scripts/vscripts/lualib_bundle.lua',
    '!game/scripts/vscripts/addon_init.lua',
    '!game/scripts/vscripts/addon_game_mode.lua',
    '!game/scripts/vscripts/addon_game_mode_client.lua',
    '!game/scripts/vscripts/utils/index.lua',
    '!game/scripts/vscripts/utils/decrypt.lua',
    '!game/scripts/vscripts/utils/aeslua.lua',
    '!game/scripts/vscripts/utils/aeslua/**/*.lua',
];

/**List of files to be excluded when publishing, they will not be copied to the published game folder */
const exclude_files = [
    'game/scripts/src/**/*.*', //No source code output
    '**/*.json',
    '**/*.ts',
    '**/*.bin',
    '**/*.py',
    '**/*.cfg',
];

/**Local test (tool mode) keys generally do not need to be modified */
const encryptDedicatedServerKeyTest = `Invalid_NotOnDedicatedServer`;

/**Test release (test image) key, running yarn prod must be done. Please refer to https://github.com/XavierCHN/fetch-keys */
const encryptDedicatedServerKeyRelease_Test = `Here you need to fill in the key of the test diagram. The result of GetDedicatedServerKeyV3('version')`;

/**For official release (official picture) key, you must run yarn prod. Please refer to https://github.com/XavierCHN/fetch-keys */
const encryptDedicatedServerKeyRelease = `Here you need to fill in the result of the official release key GetDedicatedServerKeyV3('version')`;

/**Verify that the configuration is legal */
const assert = require('assert');
assert(
    addon_name.match(/^[a-z][a-z0-9_]*$/),
    `addon_name must start with a letter and can only contain lowercase letters, numbers and underscores. Please go to addon.config.js to modify
    please change addon_name in addon.config.js to match /^[a-z][a-z0-9_]*$/`
);
assert(
    addon_name !== 'x_template',
    `Please go to scripts/addon.config.js to modify addon_name to your project name, not x_template
     please change addon_name in addon.config.js to your project name, not x_template`
);

module.exports = {
    addon_name: addon_name,
    encrypt_files: encrypt_files,
    exclude_files: exclude_files,
    encryptDedicatedServerKeyTest: encryptDedicatedServerKeyTest,
    encryptDedicatedServerKeyRelease_Test: encryptDedicatedServerKeyRelease_Test,
    encryptDedicatedServerKeyRelease: encryptDedicatedServerKeyRelease,
};
