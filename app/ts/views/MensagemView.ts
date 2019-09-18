import { View } from './View';

export class MensagemView extends View<string> {

    template(mensagem: string): string {
        return `<div class="alert alert-info">${mensagem}</div>`
    }

}