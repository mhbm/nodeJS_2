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
}