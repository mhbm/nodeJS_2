const LivroController = require('../controller/livroController');
const livroController = new LivroController();

const BaseController = require('../controller/baseController');
const baseController = new BaseController();

module.exports = (app) => {

    const rotasLivro = LivroController.rotas();

    app.get('/', baseController.home());

    app.get(rotasLivro.lista, livroController.lista());

    app.get(rotasLivro.cadastro, livroController.formularioCadastro());

    app.post(rotasLivro.lista, livroController.adicionar());

    app.put(rotasLivro.lista, livroController.edita());

    app.get(rotasLivro.edicao, livroController.formularioEdicao());

    app.post(rotasLivro.atualizacao, livroController.autalizaoPorPost());

    app.delete(rotasLivro.delecao, livroController.remove());

}