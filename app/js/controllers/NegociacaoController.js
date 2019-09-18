System.register(["../models/index", "../views/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, index_2, NegociacaoController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this.negociacoes = new index_1.Negociacoes();
                    this.negociacaoView = new index_2.NegociacoesView("#negociacoesView");
                    this.mensagemView = new index_2.MensagemView("#mensagemView");
                    this.data = $("#data");
                    this.quantidade = $("#quantidade");
                    this.valor = $("#valor");
                    this.negociacaoView.update(this.negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    const negociacao = new index_1.Negociacao(new Date(this.data.val().replace(/-/g, ',')), parseInt(this.quantidade.val().toString()), parseFloat(this.valor.val().toString()));
                    this.negociacoes.adiciona(negociacao);
                    this.negociacaoView.update(this.negociacoes);
                    this.mensagemView.update('Negociação salva com sucesso');
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
