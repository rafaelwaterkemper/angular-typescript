class NegociacaoController {

    private data: HTMLInputElement;
    private quantidade: HTMLInputElement;
    private valor: HTMLInputElement;

    constructor() {
        this.data = <HTMLInputElement>document.querySelector("#data");
        this.quantidade = <HTMLInputElement>document.querySelector("#quantidade");
        this.valor = <HTMLInputElement>document.querySelector("#valor");
    }

    adiciona(event: Event) {
        
        event.preventDefault();
        
        const negociacao = new Negociacao(
            this.data.valueAsDate,
            parseInt(this.quantidade.value),
            parseFloat(this.valor.value)
        )

        console.log(negociacao);
    }
}