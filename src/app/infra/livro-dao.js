class LivroDao {

    constructor(db) {
        this._db = db;
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM livros',
                (error, result) => {
                    if (error) return reject('Não foi possível listar os livros')
                    return resolve(result)
                }

            )
        })

    }

    buscaPorId(id) {
        return new Promise((resolve, reject) => {
            this._db.get(`
            SELECT * FROM livros where id = ?
            `, [id],
                function(err, row) {
                    if (err) {
                        console.log(err);
                        return reject('Erro na consulta por id');
                    }
                    console.log(row);
                    resolve(row);
                })
        });
    }

    removePorId(id) {
        return new Promise((resolve, reject) => {
            this._db.get(`
            DELETE FROM livros where id = ?
            `, [id],
                function(err, row) {
                    if (err) {
                        console.log(err);
                        return reject('Erro na deleção por id');
                    }
                    resolve('Arquivo deletado');
                })
        });
    }

    atualizaPorId(livro) {
        return new Promise((resolve, reject) => {

            this._db.get(`
            UPDATE livros SET titulo = ?, preco=?, descricao=? where id=?
            `, [
                    livro.titulo,
                    livro.preco,
                    livro.descricao,
                    livro.id
                ],
                function(error, row) {
                    if (error) {
                        console.log('Erro da atualização : ', error);
                        return reject('Erro na atualização');
                    }
                    console.log('Atualizado o registro');
                    resolve()
                }
            )
        });
    }

    adiciona(livro) {
        return new Promise((resolve, reject) => {
            this._db.run(`
            INSERT INTO livros (
                titulo,
                preco,
                descricao
            ) VALUES (?, ?, ?)
            `, [
                    livro.titulo,
                    livro.preco,
                    livro.descricao
                ], function(err) {
                    if (err) {
                        console.log(err);
                        return reject('Não foi possível inserir o livro');
                    }
                    resolve();
                }

            )
        })
    }

}

module.exports = LivroDao;