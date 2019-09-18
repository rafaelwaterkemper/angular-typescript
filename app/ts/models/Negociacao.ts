export class Negociacao {
    
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
}