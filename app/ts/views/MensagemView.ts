import { View } from './View';
import { logarTempoDeExecucao } from '../helpers/index';

export class MensagemView extends View<string> {

    @logarTempoDeExecucao(true)
    template(mensagem: string): string {
        return `<div class="alert alert-info">${mensagem}</div>`
    }

}