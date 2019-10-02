import { Imprimivel } from "../models/index";

export function imprime(...objects: Imprimivel[]): void {
    objects.forEach(object => object.paraTexto());
}