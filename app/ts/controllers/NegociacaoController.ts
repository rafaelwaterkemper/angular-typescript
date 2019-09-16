class NegociacaoController {

    private data: HTMLInputElement;
    private quantidade: HTMLInputElement;
    private valor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacaoView = new NegociacoesView("#negociacoesView");

    constructor() {
        this.data = <HTMLInputElement>document.querySelector("#data");
        this.quantidade = <HTMLInputElement>document.querySelector("#quantidade");
        this.valor = <HTMLInputElement>document.querySelector("#valor");
        this.negociacaoView.update(this.negociacoes);
    }

    adiciona(event: Event): void {
        
        event.preventDefault();
        
        const negociacao = new Negociacao(
            this.data.valueAsDate,
            parseInt(this.quantidade.value),
            parseFloat(this.valor.value)
        )

        this.negociacoes.adiciona(negociacao);

        this.negociacaoView.update(this.negociacoes);
    }
}