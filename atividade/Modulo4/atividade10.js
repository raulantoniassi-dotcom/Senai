const filmeInfo = {
    titulo: "Inception",
    diretor: "Christopher Nolan",
    anoLancamento: 2010,
    genero: "Ficção Científica"
};

function exibirResumoFilme({ titulo, diretor, anoLancamento }) {
    return `O filme ${titulo} foi dirigido por ${diretor} e lançado em ${anoLancamento}.`;
}

console.log(exibirResumoFilme(filmeInfo));