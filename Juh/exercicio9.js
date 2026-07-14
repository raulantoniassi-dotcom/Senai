const numeros = [5, 12, 8, 20, 3, 1]
resultado = 0

for(let i=0; i<numeros.length; i++){
    resultado = resultado + numeros[i]
}
resultado = resultado / numeros.length
console.log(resultado.toFixed(2))