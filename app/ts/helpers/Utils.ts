export function imprime(...objects: any[]): void {
    objects.forEach(object => object.paraTexto());
}