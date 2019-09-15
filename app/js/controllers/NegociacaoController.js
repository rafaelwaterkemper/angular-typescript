class NegociacaoController {
    constructor() {
        this.data = document.querySelector("#data");
        this.quantidade = document.querySelector("#quantidade");
        this.valor = document.querySelector("#valor");
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(this.data.valueAsDate, this.quantidade.valueAsNumber, this.valor.valueAsNumber);
        console.log(negociacao);
    }
}
