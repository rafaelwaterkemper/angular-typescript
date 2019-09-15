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
        this.negociacaoView.update();
    }

    adiciona(event: Event): void {
        
        event.preventDefault();
        
        const negociacao = new Negociacao(
            this.data.valueAsDate,
            parseInt(this.quantidade.value),
            parseFloat(this.valor.value)
        )

        this.negociacoes.adiciona(negociacao);
        this.negociacoes.paraArray().forEach(negociacao => {
            console.log(negociacao.data);
            console.log(negociacao.quantidade);
            console.log(negociacao.valor);
        });
    }
}