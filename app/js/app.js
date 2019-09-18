System.register(["./controllers/NegociacaoController"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NegociacaoController_1, negociacaoController;
    return {
        setters: [
            function (NegociacaoController_1_1) {
                NegociacaoController_1 = NegociacaoController_1_1;
            }
        ],
        execute: function () {
            negociacaoController = new NegociacaoController_1.NegociacaoController();
            $('.form').submit(negociacaoController.adiciona.bind(negociacaoController));
        }
    };
});
