
function gerarNomeCompleto(nome, sobrenome) {
    return nome + " " + sobrenome;
}
console.log(gerarNomeCompleto("Ana", "Camilly"))

const gerarNomeCompleto = (nome, sobrenome) => {
    return nome + " " + sobrenome;
}
console.log(gerarNomeCompleto("Ana", "Camilly"))


const gerarNomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;
console.log(gerarNomeCompleto("Ana", "Camilly"))
