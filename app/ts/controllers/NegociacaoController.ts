import { Negociacoes, Negociacao, NegociacaoParcial } from '../models/index';
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

        if (!negociacao.ehDiaUtil()) {
            this.mensagemView.update('Só podem ser adicionadas negociações em dias úteis.');
            return;
        }

        this.negociacoes.adiciona(negociacao);

        this.negociacaoView.update(this.negociacoes);

        this.mensagemView.update('Negociação salva com sucesso');
    }

    private isOk(res: Response) {
        if (res.ok) {
            return res;
        } else {
            throw new Error(`Retorno da api ${res.statusText}`)
        }
    }

    importar() {
        fetch("http://localhost:8080/dados")
            .then(res => this.isOk(res))
            .then(res => res.json())
            .then((dados: NegociacaoParcial[]) => {
                dados
                    .map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
                    .forEach(negociacao => this.negociacoes.adiciona(negociacao));
                
                this.negociacaoView.update(this.negociacoes);
            })
            .catch(err => console.log(err))
    }
}