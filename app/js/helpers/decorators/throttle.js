System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function throttle(milissegundos = 500) {
        return function (target, propertyKey, descriptor) {
            const metodoOriginal = descriptor.value;
            let timer = 0;
            descriptor.value = function (...args) {
                console.log(`timer 2 é ${timer}`);
                if (event)
                    event.preventDefault();
                clearInterval(timer);
                timer = setTimeout(() => metodoOriginal.apply(this, args), milissegundos);
                console.log(`timer após referenciar o retorno do setTimeout ${timer}`);
            };
        };
    }
    exports_1("throttle", throttle);
    return {
        setters: [],
        execute: function () {
        }
    };
});
