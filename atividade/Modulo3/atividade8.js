const limparTexto = (texto) => {
    return texto.trim().toLowerCase();
};

const gerarSlug = (texto) => {
    const textoLimpo = limparTexto(texto);
    return textoLimpo.replaceAll(" ", "-");
};

console.log(limparTexto("Camilly é BURRA"));
console.log(gerarSlug("Camilly é BURRA"));