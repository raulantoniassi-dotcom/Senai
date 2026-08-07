console.clear()
let valores = [18.50, 32.00, 9.90, 45.20];
let final = 0
const  existePedidoAcimaDe = (valores, valorReferencia) =>{
for(let i=0; i<valores.length; i++){
valores[i] > valorReferencia ? console.log(true) : console.log(false)
}}
console.log(existePedidoAcimaDe(valores, 20));