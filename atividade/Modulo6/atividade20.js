const produtos = [ { nome: 'Teclado Mecânico', preco: 150, categoria: 'Periféricos' },
     { nome: 'Mouse Gamer', preco: 80, categoria: 'Periféricos' },
      { nome: 'Monitor 24', preco: 800, categoria: 'Monitores' },
       { nome: 'Cabo HDMI', preco: 25, categoria: 'Acessórios' } 
    ]; 
    
const totalPerifericosComDesconto = produtos
.filter(p => p.categoria === 'Periféricos')
.map(p => p.preco * 0.90)
.reduce((acc, preco) => acc + preco, 0);
      
console.log(`Total do Pedido: R$ ${totalPerifericosComDesconto.toFixed(2)}`);