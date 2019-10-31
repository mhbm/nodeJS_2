var tabelaLivros = document.querySelector('#livros');

tabelaLivros.addEventListener('click', (evento) => {
    var elementoClicado = evento.target;

    if (elementoClicado.dataset.type == 'remove') {
        var livroId = elementoClicado.dataset.ref;
        console.log("livroID é " + livroId);
        fetch(`http://localhost:3000/livros/${livroId}`, { method: 'DELETE' })
            .then(resposta => {

                var tr = elementoClicado.closest(`#livro_${livroId}`);
                tr.remove();
            })
            .catch(erro => console.log(erro));
    }
});