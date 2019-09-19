export function domInject(seletor: string) {
    return function(target: any, propertKey: string) {

        let elemento: JQuery;

        const getter = function() {

            if(!elemento) {
                elemento = $(seletor);
            }

            return elemento;
        }

        //Substitui a propriedade pelo getter recem criado
        Object.defineProperty(target, propertKey, {
            get: getter
        })
    }
}