export abstract class View<T> {

    private _element: JQuery;
    private _escapar: boolean;


    //? torna o parâmetro opcional. Parâmetros adicionais devem ser os últimos
    //da lista de parâmetros
    constructor(seletor: string, escapar?: boolean) {
        this._element = $(seletor);
        this._escapar = escapar;
    }

    update(model: T): void {
        let template = this.template(model);
        
        if(this._escapar) 
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        
        this._element.html(template);
    }

    abstract template(model: T): string;
}