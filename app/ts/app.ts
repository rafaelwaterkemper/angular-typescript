import { NegociacaoController } from './controllers/NegociacaoController';

const negociacaoController = new NegociacaoController();
$('.form').submit(negociacaoController.adiciona.bind(negociacaoController));
