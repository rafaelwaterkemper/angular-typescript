import { Negociacoes, Negociacao } from '../models/index';
import { MensagemView, NegociacoesView } from '../views/index';

export class NegociacaoController {

    private data: JQuery;
    private quantidade: JQuery;
    private valor: JQuery;
    private negociacoes = new Negociacoes();
    private negociacaoView = new NegociacoesView("#negociacoesView", true);
    private mensagemView = new MensagemView("#mensagemView");

    constructor() {
        this.data = $("#data");
        this.quantidade = $("#quantidade");
        this.valor = $("#valor");
        this.negociacaoView.update(this.negociacoes);
    }

    adiciona(event: Event): void {
        
        event.preventDefault();
        
        const negociacao = new Negociacao(
            new Date((<string>this.data.val()).replace(/-/g, ',')), 
            parseInt(this.quantidade.val().toString()),
            parseFloat(this.valor.val().toString())
        );

        this.negociacoes.adiciona(negociacao);

        this.negociacaoView.update(this.negociacoes);

        this.mensagemView.update('Negociação salva com sucesso');
    }
}