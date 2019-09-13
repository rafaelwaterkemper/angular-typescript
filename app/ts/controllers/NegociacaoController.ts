class NegociacaoController {

    private data;
    private quantidade;
    private valor;

    constructor() {
        this.data = document.querySelector("#data");
        this.quantidade = document.querySelector("#quantidade");
        this.valor = document.querySelector("#valor");
    }

    adiciona(event) {
        const negociacao = new Negociacao(
            this.data.value,
            this.quantidade.value,
            this.valor.value
        )

        console.log(negociacao);
    }
}