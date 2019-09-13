const negociacaoController = new NegociacaoController();

document
    .querySelector(".form")
    .addEventListener('submit', negociacaoController.adiciona.bind(negociacaoController));