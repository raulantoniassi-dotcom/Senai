const usuarios = [ { nome: 'Alice', idade: 17 },
    { nome: 'Bob', idade: 22 },
     { nome: 'Charlie', idade: 15 },
      { nome: 'David', idade: 30 }
     ]; 
     
     const usuarioComC = usuarios.find(usuario => usuario.nome.startsWith('C'));
     
     console.log(usuarioComC);