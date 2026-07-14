const numeros = [5, -12, 8, -20, 3]
indice = 0
neg = 0
pos = 0
while(indice<numeros.length){
    if(numeros[indice] < 0){
neg++
    }
    else{
        pos++
    }
}
console.log(` Positivos: ${pos}`/n `Negativos: ${neg}`)
