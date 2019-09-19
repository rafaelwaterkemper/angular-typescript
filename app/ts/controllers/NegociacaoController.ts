import { Negociacoes, Negociacao } from '../models/index';
import { MensagemView, NegociacoesView } from '../views/index';
import { domInject } from '../helpers/index';

export class NegociacaoController {

    @domInject("#data")
    private data: JQuery;

    @domInject("#quantidade")
    private quantidade: JQuery;
    
    @domInject("#valor")
    private valor: JQuery;
    
    private negociacoes = new Negociacoes();
    private negociacaoView = new NegociacoesView("#negociacoesView", true);
    private mensagemView = new MensagemView("#mensagemView");

    constructor() {
        this.negociacaoView.update(this.negociacoes);
    }

    adiciona(event: Event): void {
        
        event.preventDefault();
        
        const negociacao = new Negociacao(
            new Date((<string>this.data.val()).replace(/-/g, ',')), 
            parseInt(<string>this.quantidade.val()),
            parseFloat(<string>this.valor.val())
        );

        if(!negociacao.ehDiaUtil()) {
            this.mensagemView.update('Só podem ser adicionadas negociações em dias úteis.');
            return;    
        }

        this.negociacoes.adiciona(negociacao);

        this.negociacaoView.update(this.negociacoes);

        this.mensagemView.update('Negociação salva com sucesso');
    }
}