class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacaoView = new NegociacoesView("#negociacoesView");
        this.mensagemView = new MensagemView("#mensagemView");
        this.data = $("#data");
        this.quantidade = $("#quantidade");
        this.valor = $("#valor");
        this.negociacaoView.update(this.negociacoes);
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this.data.val().replace(/-/g, ',')), parseInt(this.quantidade.val().toString()), parseFloat(this.valor.val().toString()));
        this.negociacoes.adiciona(negociacao);
        this.negociacaoView.update(this.negociacoes);
        this.mensagemView.update('Negociação salva com sucesso');
    }
}
