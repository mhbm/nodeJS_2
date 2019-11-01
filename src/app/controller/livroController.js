const { check, validationResult } = require('express-validator');

const LivroDao = require('../infra/livro-dao');

const db = require('../../config/database');


class LivroController {

    static rotas() {
        return {
            lista: '/livros',
            cadastro: '/livros/form',
            edicao: '/livros/form/:id',
            delecao: '/livros/:id',
            atualizacao: '/livros/atualiza'
        }
    }

    adicionar() {
        return function(req, res) {
            console.log(req.body);

            const livroDao = new LivroDao(db);
            livroDao.adiciona(req.body)
                .then(res.redirect('/livros'))
                .catch(error => console.log(error));

        }
    }

    lista() {
        return function(req, res) {

            const livroDao = new LivroDao(db);

            livroDao.lista()
                .then(livros => res.marko(
                    require('../views/livros/lista/lista.marko'), {
                        livros: livros
                    }
                ))
                .catch(error => {
                    console.log(error);
                    res.send(error);
                });


        }
    }

    formularioCadastro() {
        return function(req, resp) {
            resp.marko(
                require('../views/livros/form/form.marko'), { livro: {} }
            );
        };
    }

    formularioEdicao() {
        return function(req, res) {
            var id = req.params.id;

            const livroDao = new LivroDao(db);

            livroDao.buscaPorId(id)
                .then(livro => {
                    res.marko(require('../views/livros/form/form.marko'), { livro: livro })
                })
                .catch(error => {
                    console.log('Erro na busca por id : ' + error);
                    res.send(error);
                })

        }
    }

    edita() {
        return function(req, res) {
            console.log(req.body);

            const erros = validationResult(req);

            if (!erros.isEmpty()) {
                return res.marko(
                    require('../views/livros/form/form.marko'), {
                        livro: req.body,
                        errosValidacao: erros.array()
                    }
                );
            }

            const livroDao = new LivroDao(db);
            livroDao.atualizaPorId(req.body)
                .then(res.redirect('/livros'))
                .catch(error => console.log(error));

        }
    }

    remove() {
        return function(req, res) {
            var id = req.params.id;

            const livroDao = new LivroDao(db);

            livroDao.removePorId(id)
                .then(res.send('Arquivo deletado'))
                .catch(error => {
                    console.log(error);
                    res.send('Erro na deleção : ' + error);
                });

        }
    }

    cadastra() {
        return function(req, res) {

            const erros = validationResult(req);

            if (!erros.isEmpty()) {
                return res.marko(
                    require('../views/livros/form/form.marko'), {
                        livro: req.body,
                        errosValidacao: erros.array()
                    }
                );
            }

            console.log(req.body);

            const livroDao = new LivroDao(db);
            livroDao.adiciona(req.body)
                .then(res.redirect(LivroController.rotas().lista))
                .catch(error => console.log(error));

        }
    }

    autalizaoPorPost() {
        return function(req, res) {

            const livroDao = new LivroDao(db);

            livroDao.atualizaPorId(req.body)
                .then(res.redirect(LivroController.rotas().lista))
                .catch(error => {
                    console.log('Erro na atualizao : ' + error);
                    res.send(error);
                })

        }
    }
}

module.exports = LivroController;