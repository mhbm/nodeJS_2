const { check, validationResult } = require('express-validator');

const LivroController = require('../controller/livroController');
const livroController = new LivroController();

const BaseController = require('../controller/baseController');
const baseController = new BaseController();

const Livro = require('../modelos/livro');

module.exports = (app) => {

    const rotasLivro = LivroController.rotas();

    app.get('/', baseController.home());

    app.get(rotasLivro.cadastro, Livro.validacoes(),
        livroController.formularioCadastro()
    );

    app.route(rotasLivro.lista)
        .get(livroController.lista())
        .post(Livro.validacoes(), livroController.cadastra())
        .put(Livro.validacoes(), livroController.edita());

    app.get(rotasLivro.edicao, Livro.validacoes(), livroController.formularioEdicao());

    app.post(rotasLivro.atualizacao, Livro.validacoes(), livroController.autalizaoPorPost());

    app.delete(rotasLivro.delecao, livroController.remove());

}