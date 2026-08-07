console.clear
let valores = [18.50, 32.00, 9.90, 45.20];
let maior = 0
let menor = 9999999
const encontrarMaiorPedido = (lista) => {
for(let i=0; i<lista.length; i++){
    lista[i] > maior ? maior = lista[i] : maior + 0
    lista[i] < menor ? menor = lista[i] : menor + 0
}
console.log(maior)
console.log(menor)
}
console.log(encontrarMaiorPedido(valores))