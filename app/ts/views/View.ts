abstract class View<T> {

    private _element: Element;

    constructor(seletor: string) {
        this._element = document.querySelector(seletor);
    }

    update(model: T): void {
        this._element.innerHTML = this.template(model);
    }

    abstract template(model: T): string;
}