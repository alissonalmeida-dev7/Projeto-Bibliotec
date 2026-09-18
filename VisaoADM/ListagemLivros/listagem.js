const livros = document.querySelectorAll(".book");

const botaoAnterior = document.getElementById("pagina-anterior");
const botaoProxima = document.getElementById("proxima-pagina");
const numeroPagina = document.querySelector(".present-page");
const quantidadeLivros = document.querySelector(".book-quantity");


//* Configuração da paginação

// Define quantos livros serão mostrados em cada pagina
const livrosPorPagina = 4;

// Guarda qual página está sendo exibida, começando na pagina 1
let paginaAtual = 1;


//* Calculando o total de páginas

// Divide a quantidade total de livros pela quantidade de livros por pagina
// Math.ceil() -> arredonda o resultado para cima

// Exemplo:
// 10 livros / 4 por página = 2.5
// Math.ceil() = 2.5 arredondado para cima -> 3 páginas
const totalPaginas = Math.ceil(livros.length / livrosPorPagina);

//* Função responsavel por mostrar a página (atualizar os elementos)
function mostrarPagina() {

    // Descobre o índice do primeiro livro que deve aparecer

    // Página 1:
    // (1 - 1) * 4 = 0

    // Página 2:
    // (2 - 1) * 4 = 4

    // livros = [1, 2, 3, 4, 5, 6, 7, 8]
    // Página 1 - 1, 2, 3, 4
    // Página 2 - 5, 6, 7, 8
    const inicio = (paginaAtual - 1) * livrosPorPagina;

    // Descobre até onde os livros devem ser exibidos

    // Pagina 1: inicio 0 -> fim = 0 + 4 = 4
    // Página 2: inicio 4 -> fim = 4 + 4 = 8
    const fim = inicio + livrosPorPagina;

    // Percorre toda a lista de livros encontrados no HTML
    // "livro" representa o elemento atual
    // "posicao" representa a posição desse livro na lista
    livros.forEach((livro, posicao) => {

        // inicio na pagina 1 = 0
        // fim = 4

        // Verifica se o indice/posição do livro está dentro do intervalo da página atual
        if(posicao >= inicio && posicao < fim) {
            // mostra o elemento na tela
            livro.style.display = "grid";
        }

        else {
            livro.style.display = "none";
        }
    })

    // Atualiza no HTML o número da pagina atual
    numeroPagina.textContent = paginaAtual;

    // Inicialmente, consideramos "fim" como a posição do último livro mostrado
    let ultimoLivro = fim;

    // se o valor ultrapassar a quantidade real de livros, usamos a quantidade total.
    if(ultimoLivro > livros.length) {
        ultimoLivro = livros.length;
    }

    quantidadeLivros.textContent = `Mostrando ${ultimoLivro} de ${livros.length} livros.`;
};

// Evento de click no botão de proxima página
botaoProxima.addEventListener("click", () => {

    // Só permite avançar se ainda exister uma proxima pagina
    if(paginaAtual < totalPaginas) {

        // Avança uma página
        // paginaAtual = paginaAtual + 1
        paginaAtual++;

        // Atualiza os livros exibidos na tela
        mostrarPagina();
    }
})

// Evento de click no botão de página anterior
botaoAnterior.addEventListener("click", () => {

    // Só permite voltar se não estivermos na primeira pagina
    if(paginaAtual > 1) {

        // Voltamos uma pagina
        paginaAtual--;

        // Atualiza os livros exibidos na tela
        mostrarPagina();
    }
})

// Quando a paginá carregar, precisamos executar a função de mostrar página uma vez para esconder os livros que não pertecem a primeira pagina
mostrarPagina();