import { Entity } from "./Entity";

export class Negociacao implements Entity<Negociacao>{
    
    //readonly permite apenas a leitura da propriedade, porém não oculta o acesso externo
    constructor(readonly data: Date, private _quantidade: number, private _valor: number){}

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }

    ehDiaUtil(): boolean {
        return this.data.getDay() != DiaSemana.Domingo && this.data.getDay() != DiaSemana.Sabado;
    }

    paraTexto(): void {
        console.log(
            `Data: ${this.data} \n
            Quantidade: ${this.quantidade} \n
            Valor: ${this._valor}`
        )
    }

    equals(negociacao: Negociacao): boolean {
        return negociacao.data.getDay() == this.data.getDay()
            && negociacao.data.getMonth() == this.data.getMonth()
            && negociacao.data.getFullYear() == this.data.getFullYear();
    }
}

enum DiaSemana {
    Domingo,
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}