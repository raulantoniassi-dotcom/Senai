const usuarios = [ 
    { nome: 'Alice', idade: 17 },
     { nome: 'Bob', idade: 22 },
      { nome: 'Charlie', idade: 15 },
       { nome: 'David', idade: 30 } 
]; 
const usuariosMaioresDeIdade = usuarios.filter(usuario => usuario.idade >= 18);

console.log(usuariosMaioresDeIdade);