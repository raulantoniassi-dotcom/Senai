console.clear()
import {ordenarPorValor} from "./2.1.js"
const pedidos = [
    {id: 1, nome: "Marina", valor: 18.50},
    {id: 2, nome: "Thiago", valor: 32.00},
    {id: 3, nome: "Bruna", valor: 9.90},
    {id: 4, nome: "Kaique", valor: 45.20}
]
let pedidosOrdenados = ordenarPorValor(pedidos)
let n = pedidosOrdenados.length
const top3Pedidos = (pedidosOrdenados) =>{
return pedidosOrdenados.slice(n-3, n)
} 
console.log(top3Pedidos(pedidosOrdenados))