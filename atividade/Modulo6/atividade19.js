const vendas = [12.50, 45.00, 100.00, 8.99, 25.40]; 

const totalVendas = vendas.reduce( (acumulador, valorAtual) => acumulador + valorAtual, 0 ); 

console.log(`Total faturado: R$ ${totalVendas.toFixed(2)}`);