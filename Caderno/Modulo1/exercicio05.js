// Enunciado: Crie uma variável constante que receba um objeto literal representando uma
// configuração de sistema com as chaves tema: 'dark' e idioma: 'pt-BR'. Modifique a propriedade
// tema para 'light' e adicione uma nova propriedade versao: 1.0. Explique por que o interpretador
// aceita as modificações mesmo a variável sendo declarada como const.
console.clear()
const config = { tema: 'dark', idioma: 'pt-BR' };
// Execute as alterações abaixo e comente
config.tema = 'light'

config.versao = 1.0

console.log(config)

//Como o valor de configuracao (que é apenas o endereço) não foi alterado, o const não foi violado. O objeto em si é mutável, enquanto a variável que aponta para ele é imutável.