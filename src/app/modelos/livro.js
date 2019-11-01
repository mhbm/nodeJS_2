const { check, validationResult } = require('express-validator');

class Livro {
    static validacoes() {
        return [
            check('titulo').isLength({ min: 5 }).withMessage('O título precisa ter no mínimo cinco caracteres.'),
            check('preco').isCurrency().withMessage('O preço precisa ter um valor monetário válido')
        ]
    }
}

module.exports = Livro;