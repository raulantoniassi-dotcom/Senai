// Enunciado: Defina uma constante para guardar a taxa do imposto fixo de transferência (valor:
// 0.02). Tente alterar esse valor para 0.03 dentro de um bloco de tratamento de erro try...catch.
// No bloco catch, capture o erro e use o console para exibir uma mensagem alertando sobre a
// imutabilidade do identificador.

console.clear()
const TAXA_TRANSFERENCIA = 0.02;
try {
TAXA_TRANSFERENCIA = 0.03
} catch (error) {
console.error("Erro! Taxa de transferencia não pode ser mutada", error.message);
}