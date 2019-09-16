class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacaoView = new NegociacoesView("#negociacoesView");
        this.data = document.querySelector("#data");
        this.quantidade = document.querySelector("#quantidade");
        this.valor = document.querySelector("#valor");
        this.negociacaoView.update(this.negociacoes);
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(this.data.valueAsDate, parseInt(this.quantidade.value), parseFloat(this.valor.value));
        this.negociacoes.adiciona(negociacao);
        this.negociacaoView.update(this.negociacoes);
    }
}
