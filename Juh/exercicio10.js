const numero = [5, 12, 8, 20, 3, 1]
resultado = 0
for(let i=0; i<numero.length; i++){
if(resultado < numero[i]){
    resultado = numero[i]
}
}
console.log(resultado)