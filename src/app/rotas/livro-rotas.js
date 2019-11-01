const LivroController = require('../controller/livroController');
const livroController = new LivroController();


const Livro = require('../modelos/livro');

module.exports = (app) => {

    const rotasLivro = LivroController.rotas();

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