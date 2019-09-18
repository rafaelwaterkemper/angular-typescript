class View {
    constructor(seletor) {
        this._element = $(seletor);
    }
    update(model) {
        this._element.html(this.template(model));
    }
}
