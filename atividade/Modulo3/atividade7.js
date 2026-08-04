const calcularFrete = (peso, taxaPorQuilo = 7.50) => {
    return peso * taxaPorQuilo;
};

console.log(calcularFrete(10));