class Plugin {
    onHandleCodeParser(ev) {
        const option = ev.data.option;
        const plugins = ev.data.parserOption.plugins;

        if (option.all || option.decorators) plugins.push("decorators");

        if (option.all || option.classProperties) plugins.push("classProperties");
        if (option.all || option.objectRestSpread) plugins.push("objectRestSpread");
        if (option.all || option.doExpressions) plugins.push("doExpressions");
        if (option.all || option.functionBind) plugins.push("functionBind");
        if (option.all || option.functionSent) plugins.push("functionSent");
        if (option.all || option.asyncGenerators) plugins.push("asyncGenerators");

        if (option.all || option.exportExtensions) plugins.push("exportExtensions");
        if (option.all || option.dynamicImport) plugins.push("dynamicImport");

        if (option.all || option.flow) plugins.push("flow");
        if (option.all || option.flowComments) plugins.push("flowComments");
        if (option.all || option.jsx) plugins.push("jsx");
    }
    onHandlePlugins(ev) {
        const option = ev.data.option || {};
        const plugins = [
            { name: "esdoc-lint-plugin", option: option.lint },
            { name: "esdoc-coverage-plugin", option: option.coverage },
            { name: "esdoc-accessor-plugin", option: option.accessor },
            { name: "esdoc-type-inference-plugin", option: option.typeInference },
            { name: "esdoc-external-ecmascript-plugin" },
            { name: "esdoc-brand-plugin", option: option.brand },
            { name: "esdoc-undocumented-identifier-plugin", option: option.undocumentIdentifier },
            { name: "esdoc-unexported-identifier-plugin", option: option.unexportedIdentifier },
            { name: "esdoc-integrate-manual-plugin", option: option.manual },
            { name: "esdoc-integrate-test-plugin", option: option.test },
            option.useMakdown ? { name: "esdoc-publish-markdown-plugin" } : { name: "esdoc-publish-html-plugin" }
        ];
        const existPluginNames = ev.data.plugins.map(plugin => plugin.name);
        for (const plugin of plugins) {
            if (existPluginNames.includes(plugin.name)) continue;
            if (plugin.option === undefined) delete plugin.option;
            ev.data.plugins.push(plugin);
        }
    }
}

module.exports = new Plugin();
