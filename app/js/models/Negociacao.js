System.register([], function (exports_1, context_1) {
    "use strict";
    var Negociacao, DiaSemana;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Negociacao = class Negociacao {
                constructor(data, _quantidade, _valor) {
                    this.data = data;
                    this._quantidade = _quantidade;
                    this._valor = _valor;
                }
                get quantidade() {
                    return this._quantidade;
                }
                get valor() {
                    return this._valor;
                }
                get volume() {
                    return this._quantidade * this._valor;
                }
                ehDiaUtil() {
                    return this.data.getDay() != DiaSemana.Domingo && this.data.getDay() != DiaSemana.Sabado;
                }
                paraTexto() {
                    console.log(`Data: ${this.data} \n
            Quantidade: ${this.quantidade} \n
            Valor: ${this._valor}`);
                }
            };
            exports_1("Negociacao", Negociacao);
            (function (DiaSemana) {
                DiaSemana[DiaSemana["Domingo"] = 0] = "Domingo";
                DiaSemana[DiaSemana["Segunda"] = 1] = "Segunda";
                DiaSemana[DiaSemana["Ter\u00E7a"] = 2] = "Ter\u00E7a";
                DiaSemana[DiaSemana["Quarta"] = 3] = "Quarta";
                DiaSemana[DiaSemana["Quinta"] = 4] = "Quinta";
                DiaSemana[DiaSemana["Sexta"] = 5] = "Sexta";
                DiaSemana[DiaSemana["Sabado"] = 6] = "Sabado";
            })(DiaSemana || (DiaSemana = {}));
        }
    };
});
