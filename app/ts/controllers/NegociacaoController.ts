import { Negociacoes, Negociacao, NegociacaoParcial } from '../models/index';
import { MensagemView, NegociacoesView } from '../views/index';
import { domInject, throttle, imprime } from '../helpers/index';
import { NegociacaoService } from '../services/index';

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
    private negociacaoService = new NegociacaoService();

    constructor() {
        this.negociacaoView.update(this.negociacoes);
    }

    @throttle(1000)
    adiciona(event: Event): void {

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

        imprime(negociacao, this.negociacoes);

        this.mensagemView.update('Negociação salva com sucesso');
    }

    @throttle(1000)
    async importaDados() {

        try {
            const toImport = await this.negociacaoService
                .importar(res => {
                    if (res.ok) {
                        return res;
                    } else {
                        throw new Error(res.statusText);
                    }
                })

            const alreadyImported = this.negociacoes.paraArray();

            toImport.filter(negociacao =>
                !alreadyImported.some(jaImportada =>
                    negociacao.equals(jaImportada)))
                .forEach(negociacao =>
                    this.negociacoes.adiciona(negociacao));

            this.negociacaoView.update(this.negociacoes);
        } catch (err) {
            this.mensagemView.update(err.message);
        }

    }

}