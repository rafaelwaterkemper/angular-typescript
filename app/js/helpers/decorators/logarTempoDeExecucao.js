System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logarTempoDeExecucao(emSegundos = false) {
        return function (target, propertyKey, descriptor) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function (...args) {
                console.log(`Conteúdo do descriptor ${JSON.stringify(descriptor)}`);
                console.log(`Value do descriptor ${JSON.stringify(descriptor.value)}`);
                console.log(`Parämetro recebido no decorator emSegundos ${emSegundos}`);
                console.log(`Referência para o objeto decorado ${JSON.stringify(target)}`);
                console.log(`Parâmetros do método ${propertyKey}: ${JSON.stringify(args)}`);
                const start = performance.now();
                let resultado = metodoOriginal.apply(this, args);
                console.log(`This é ${JSON.stringify(this)}`);
                const end = performance.now();
                console.log(`O tempo de execução foi de ${end - start} ms`);
                console.log(`Resultado do método ${resultado}`);
                return resultado;
            };
            return descriptor;
        };
    }
    exports_1("logarTempoDeExecucao", logarTempoDeExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
