const LivroDao = require('../infra/livro-dao');

const db = require('../../config/database');

module.exports = (app) => {

    app.get('/', function(req, res) {
        res.send(
            `<html>
             <head> 
             </head>
             <body>
                 <h1> Casa Teste </h1>
             </body>
         </html>`
        );
    });

    app.get('/livros', function(req, res) {

        const livroDao = new LivroDao(db);
        livroDao.lista()
            .then(livros => res.marko(
                require('../views/livros/lista/lista.marko'), {
                    livros: livros
                }
            ))
            .catch(error => console.log(error));

        // livroDao.lista(function(error, result) {
        //         console.log(result)
        //         res.marko(
        //             require('../views/livros/lista/lista.marko'), {
        //                 livros: result
        //             }
        //         );
        //     })
        //     // db.all('SELECT * FROM livros', function(err, result) {
        //     console.log(result)
        //     res.marko(
        //         require('../views/livros/lista/lista.marko'), {
        //             livros: result
        //         }
        //     );

        // });


    });

    app.get('/livros/form', function(req, res) {
        res.marko(require('../views/livros/form/form.marko'), { livro: {} });
    });

    app.post('/livros', function(req, res) {
        console.log(req.body);

        const livroDao = new LivroDao(db);
        livroDao.adiciona(req.body)
            .then(res.redirect('/livros'))
            .catch(error => console.log(error));

    });

    app.put('/livros', function(req, res) {
        console.log(req.body);

        const livroDao = new LivroDao(db);
        livroDao.atualizaPorId(req.body)
            .then(res.redirect('/livros'))
            .catch(error => console.log(error));

    });

    app.get('/livros/form/:id', function(req, res) {
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

    });

    app.post('/livros/atualiza', function(req, res) {

        const livroDao = new LivroDao(db);

        livroDao.atualizaPorId(req.body)
            .then(res.redirect('/livros'))
            .catch(error => {
                console.log('Erro na atualizao : ' + error);
                res.send(error);
            })

    });

    app.delete('/livros/:id', function(req, res) {
        var id = req.params.id;

        const livroDao = new LivroDao(db);

        livroDao.removePorId(id)
            .then(res.send('Arquivo deletado'))
            .catch(error => {
                console.log(error);
                res.send('Erro na deleção : ' + error);
            });

    });

}