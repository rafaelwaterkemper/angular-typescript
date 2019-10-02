import { Negociacao } from './Negociacao';
import { Entity } from './Entity';

export class Negociacoes implements Entity<Negociacoes>{

    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {
        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    paraTexto(): void {
        console.log(`para texto \n`);
        console.log(`Negociações: ${JSON.stringify(this._negociacoes)}`)
    }

    equals(negociacoes: Negociacoes): boolean {
        return JSON.stringify(negociacoes) == JSON.stringify(this._negociacoes); 
    }

}