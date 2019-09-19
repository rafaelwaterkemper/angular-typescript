System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function domInject(seletor) {
        return function (target, propertKey) {
            let elemento;
            const getter = function () {
                if (!elemento) {
                    elemento = $(seletor);
                }
                return elemento;
            };
            Object.defineProperty(target, propertKey, {
                get: getter
            });
        };
    }
    exports_1("domInject", domInject);
    return {
        setters: [],
        execute: function () {
        }
    };
});
