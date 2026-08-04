const carrinhoOriginal = ['Notebook', 'Mouse'];

const adicionarItemImutavel = (lista, novoItem) => {
    return [...lista, novoItem];
};
const novoCarrinho = adicionarItemImutavel(carrinhoOriginal, 'Teclado');

console.log(carrinhoOriginal);
console.log(novoCarrinho);