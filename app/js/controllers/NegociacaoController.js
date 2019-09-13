class NegociacaoController {
    constructor() {
        this.data = document.querySelector("#data");
        this.quantidade = document.querySelector("#quantidade");
        this.valor = document.querySelector("#valor");
        console.log('construtor', this.data.value);
        console.log('construtor', this.data);
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(this.data.value, this.quantidade.value, this.valor.value);
        console.log(negociacao);
    }
}
