
function senhaEhValidaV1(senha) {
    return senha.length >= 8;
}
console.log(senhaEhValidaV1("12345"));


const senhaEhValidaV2 = (senha) => {
    return senha.length >= 8;
}
console.log(senhaEhValidaV2("milly1234"));


const senhaEhValidaV3 = (senha) => senha.length >= 8;
console.log(senhaEhValidaV3("senha_segura"));
