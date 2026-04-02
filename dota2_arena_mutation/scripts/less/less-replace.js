function LessReplaceProcessor(options) {
    this.configuration = options;
}

LessReplaceProcessor.prototype = {
    process: function (css, extra) {
        const cssOutput = css.replace(/@keyframes\s*(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)/g, (match, name) => {
            // add apostrophe to satisfy valve
            const result = match.replace(name, `'${name}'`);
            console.log(`[Webpack] Replaced: ${match} => ${result}`);
            return result;
        });
        return cssOutput;
    },
};

function ReplacePluginLess(options) {
    this.options = options;
}

ReplacePluginLess.prototype = {
    install: function (less, pluginManager) {
        pluginManager.addPostProcessor(new LessReplaceProcessor());
    },
    printUsage: function () {
        //usage.printUsage();
    },
    setOptions: function (options) {
        this.options = parseOptions(options);
    },
    minVersion: [2, 0, 0],
};

module.exports = ReplacePluginLess;
