abstract class View<T> {

    private _element: JQuery;

    constructor(seletor: string) {
        this._element = $(seletor);
    }

    update(model: T): void {
        this._element.html(this.template(model));
    }

    abstract template(model: T): string;
}