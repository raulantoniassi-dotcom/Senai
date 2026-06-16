// Crie duas funcoes: (1) validarEscolha(escolha, min, max): retorna true se a escolha esta dentro do
// intervalo. (2) getPrecoIngrediente(categoria, escolha): valida a entrada usando validarEscolha(); se
// invalida, trata como opcao 1. Retorna o preco correto para a categoria e opcao informadas. Categorias:
// "pao" [1.50, 2.00, 2.50] · "recheio" [5.00, 6.50, 4.00] · "molho" [0.50, 0.50, 1.50].

const validarEscolha = (escolha, min, max) => escolha = (escolha >= min && escolha <= max)
console.log(validarEscolha(2, 1, 3))
let pao = [1.50, 2.00, 2.50]
let recheio = [5.00, 6.50, 4.00]
let molho = [0.50, 0.50, 1.50]
const gpi = (categoria, escolha) => {if(validarEscolha() == true){
}}