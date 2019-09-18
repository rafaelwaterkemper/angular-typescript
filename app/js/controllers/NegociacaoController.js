System.register(["../models/Negociacoes", "../views/MensagemView", "../views/NegociacoesView", "../models/Negociacao"], function (exports_1, context_1) {
    "use strict";
    var Negociacoes_1, MensagemView_1, NegociacoesView_1, Negociacao_1, NegociacaoController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Negociacoes_1_1) {
                Negociacoes_1 = Negociacoes_1_1;
            },
            function (MensagemView_1_1) {
                MensagemView_1 = MensagemView_1_1;
            },
            function (NegociacoesView_1_1) {
                NegociacoesView_1 = NegociacoesView_1_1;
            },
            function (Negociacao_1_1) {
                Negociacao_1 = Negociacao_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this.negociacoes = new Negociacoes_1.Negociacoes();
                    this.negociacaoView = new NegociacoesView_1.NegociacoesView("#negociacoesView");
                    this.mensagemView = new MensagemView_1.MensagemView("#mensagemView");
                    this.data = $("#data");
                    this.quantidade = $("#quantidade");
                    this.valor = $("#valor");
                    this.negociacaoView.update(this.negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    const negociacao = new Negociacao_1.Negociacao(new Date(this.data.val().replace(/-/g, ',')), parseInt(this.quantidade.val().toString()), parseFloat(this.valor.val().toString()));
                    this.negociacoes.adiciona(negociacao);
                    this.negociacaoView.update(this.negociacoes);
                    this.mensagemView.update('Negociação salva com sucesso');
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
