console.clear()
const pedidos = [
    {id: 1, nome: "Marina", valor: 18.50},
    {id: 2, nome: "Thiago", valor: 32.00},
    {id: 3, nome: "Bruna", valor: 9.90},
    {id: 4, nome: "Kaique", valor: 45.20}
]


export const ordenarPorValor = (pedidos) =>{
for(let i=0; i<pedidos.length - 1; i++){
for(let j=0; j<pedidos.length - 1 - i; j++){
  if (pedidos[j].valor > pedidos[j + 1].valor) {
        let temp = pedidos[j];
        pedidos[j] = pedidos[j + 1];
        pedidos[j + 1] = temp;
     
      }
    }
  }

  return pedidos;
}

console.log(ordenarPorValor(pedidos))

