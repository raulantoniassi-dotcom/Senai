// Crie DUAS funcoes: (1) temDesconto(subtotal, extras): retorna true se subtotal >= 10.00 E extras >= 2,
// false caso contrario. (2) calcularTotalComDesconto(subtotal, extras): usa temDesconto() para decidir se
// aplica 15% de desconto e retorna o total final.

console.clear()


 const temDesconto = (subtotal, extras) => (subtotal >= 10.00 && extras >= 2)

const totalDesconto = (subtotal, extras) => {if(temDesconto(subtotal, extras) == true){ 
   let desconto = subtotal*(15/100)
   console.log(subtotal - desconto)
}}


console.log(temDesconto(11, 3));
console.log(totalDesconto(11, 3))    
