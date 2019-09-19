System.register(["../models/index", "../views/index", "../helpers/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var index_1, index_2, index_3, NegociacaoController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this.negociacoes = new index_1.Negociacoes();
                    this.negociacaoView = new index_2.NegociacoesView("#negociacoesView", true);
                    this.mensagemView = new index_2.MensagemView("#mensagemView");
                    this.negociacaoView.update(this.negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    const negociacao = new index_1.Negociacao(new Date(this.data.val().replace(/-/g, ',')), parseInt(this.quantidade.val()), parseFloat(this.valor.val()));
                    if (!negociacao.ehDiaUtil()) {
                        this.mensagemView.update('Só podem ser adicionadas negociações em dias úteis.');
                        return;
                    }
                    this.negociacoes.adiciona(negociacao);
                    this.negociacaoView.update(this.negociacoes);
                    this.mensagemView.update('Negociação salva com sucesso');
                }
            };
            __decorate([
                index_3.domInject("#data")
            ], NegociacaoController.prototype, "data", void 0);
            __decorate([
                index_3.domInject("#quantidade")
            ], NegociacaoController.prototype, "quantidade", void 0);
            __decorate([
                index_3.domInject("#valor")
            ], NegociacaoController.prototype, "valor", void 0);
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
