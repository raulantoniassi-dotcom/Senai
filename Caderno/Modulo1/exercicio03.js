// Enunciado: Crie um bloco condicional simples do tipo if (true). Dentro dele, declare uma
// variável chamada contextoVar utilizando var e uma chamada contextoLet utilizando let. Fora do
// escopo do bloco if, execute um console.log para tentar exibir ambas as variáveis. Explique
// textualmente o comportamento verificado no terminal.

if (true) {
var contextoVar
let contextoLet
}
console.log(contextoVar, ", ", contextoLet)

// O terminal vai dar um erro por que as variáveis so estão definidas dentro do escopo do if