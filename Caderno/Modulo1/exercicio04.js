// Enunciado: Crie três constantes: produtoNome, precoBase e porcentagemDesconto (ex: 20
// para indicar 20%). Calcule o valor deduzido e armazene o resultado final em uma variável let.
// Imprima na tela a mensagem exata: "O produto [Nome] recebeu [X]% de desconto e passou de
// R$ [Base] para R$ [Final]".
// Use Template Literals (crases) para a interpolação de strings
console.clear()
const produtoNome = "Bike"
const precoBase = 2000.00
const porcentagemDesconto = 10
const desconto = (10/100)
let totalDesconto = precoBase * desconto
let total = precoBase - totalDesconto

console.log(`O produto ${produtoNome} recebeu ${porcentagemDesconto}% de desconto e passou de R$${precoBase} para R$${total.toFixed(2)}`)
