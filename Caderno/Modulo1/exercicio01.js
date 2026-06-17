// Enunciado: Declare variáveis adequadas usando a especificação ES6 para armazenar o nome
// de uma pessoa, sua idade e seu país de residência. O nome e o país não devem permitir
// reatribuição, enquanto a idade deve ser alterável. Simule a passagem de um ano
// incrementando a idade e exiba uma frase descritiva usando Template Literals.
import promptSync from 'prompt-sync'
const prompt = promptSync()
console.clear()

const nome = prompt("Digite seu nome: ")
console.clear()
const loc = prompt("Qual a sua localidade: ")
console.clear()
let idade = Number(prompt("Digite sua idade: "))
console.log()

console.log(`Olá ${nome}! você nasceu em ${loc} e após um ano você completou ${idade+1}`)