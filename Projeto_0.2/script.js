// Array   
const pedido = []
const preco = []
// JS
let integral
let frances
let ciabatta

let maionese
let mostarda
let especial

// buttons
const btnIntegral = document.querySelector("#btnIntegral");
const btnFrances = document.querySelector("#btnFrances");
const btnCiabatta = document.querySelector("#btnCiabatta");
const btnSelecionar = document.querySelector("#selecionar");

// jorge
const imagem = document.querySelector("#imagem");
const resultado1 = document.querySelector("#resultado1");
const pao = document.querySelector("#pao");
const molho = document.querySelector("#molho");

// output buttons Pão
btnFrances.addEventListener("click", function() {
frances = true
integral = false
ciabatta = false
    resultado1.textContent = "R$ 1,50";
    imagem.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeFyVA-prYbnNX9Ks0S1BLyYuxlsTfZnGAipXDEq9c8w&s=10"
})


btnIntegral.addEventListener("click", function() {
    integral = true
    frances = false
    ciabatta = false
      resultado1.textContent = "R$ 2,00";
  imagem.src = "https://i.pinimg.com/736x/97/ce/15/97ce15020d1f438f6ed6a4984fc43ddc.jpg";
    
})

btnCiabatta.addEventListener("click", function() {
    ciabatta = true
    frances = false
    integral = false
    resultado1.textContent = "R$ 2,50";
    imagem.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8A4HUiv8tpHHKVDGJ6-T8XrhzO14mFSjc4FSouTGFw&s=10"
})

btnSelecionar.addEventListener("click", function() {
if (frances == true) {
    pedido.push("Pão Frances")
    preco.push(1.50)

    btnSelecionar.replaceWith(btnSelecionar.textContent = "Frances Selecionado!")
}
else if (integral == true) {
    pedido.push("Pão Integral")
    preco.push(2.00)

   btnSelecionar.replaceWith(btnSelecionar.textContent = "Integral Selecionado!")
}
else if (ciabatta == true) {
    pedido.push("Pão Ciabatta")
    preco.push(2.50)

    btnSelecionar.replaceWith(btnSelecionar.textContent = "Ciabatta Selecionado!")
} 
  pao.replaceWith(molho)
  molho.removeAttribute("hidden")
});

// output buttons Molho

const btnMaionese = document.querySelector("#btnMaionese");
const btnMostarda = document.querySelector("#btnMostarda");
const btnEspecial = document.querySelector("#btnEspecial");
const btnSelecionar2 = document.querySelector("#selecionar2");
const imagemMolho = document.querySelector("#imagemMolho");
const resultado2 = document.querySelector("#resultado2");

btnMaionese.addEventListener("click", function() {
    maionese = true
    mostarda = false
    especial = false
    imagemMolho.src = "https://i.pinimg.com/736x/b5/6c/44/b56c445c511dca2eef6fc20196d6f1a0.jpg"
    resultado2.textContent = "R$ 0,50";
});

btnMostarda.addEventListener("click", function() {
    mostarda = true
    maionese = false
    especial = false
    imagemMolho.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4k0haDAutHznDtKpGBhX5NyU_Wn1JfD8JQ_57aCJ6dw&s=10"
    resultado2.textContent = "R$ 0,50";
});

btnEspecial.addEventListener("click", function() {
    especial = true
    maionese = false
    mostarda = false
    imagemMolho.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Ggufb9b5mH1UNe_yuMqMtx6er5FmbgQJcFqTF492SA&s=10"
    resultado2.textContent = "R$ 1,50";
});

btnSelecionar2.addEventListener("click", function() {

if (maionese == true) {
    pedido.push("Maionese")
    preco.push(0.50)

    btnSelecionar2.replaceWith(btnSelecionar2.textContent = "Maionese Selecionado!")
}
else if (mostarda == true) {
    pedido.push("Mostarda")
    preco.push(0.50)

    btnSelecionar2.replaceWith(btnSelecionar2.textContent = "Mostarda Selecionado!")
}
else if (especial == true) {
    pedido.push("Molho Especial")
    preco.push(1.50)

    btnSelecionar2.replaceWith(btnSelecionar2.textContent = "Molho Especial Selecionado!")
  
}
    molho.replaceWith(recheio)
  recheio.removeAttribute("hidden")
});

// output buttons recheio

const btnFrango = document.querySelector("#btnFrango");
const btnCarne = document.querySelector("#btnCarne");
const btnVegetariano = document.querySelector("#btnVegetariano");
const btnSelecionar3 = document.querySelector("#selecionar3");
const imagemRecheio = document.querySelector("#imagemRecheio");
const resultado3 = document.querySelector("#resultado3");
const recheio = document.querySelector("#recheio");

btnFrango.addEventListener("click", function() {
    frango = true
    carne = false
    vegetariano = false
    imagemRecheio.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqwGO1gwQg5EJeRvDZB0DQyiqsQjareq6teZzguBC75w&s=10"
    resultado3.textContent = "R$ 2,00";
});

btnCarne.addEventListener("click", function() {
    carne = true
    frango = false
    vegetariano = false
    imagemRecheio.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStGc0SaTAS4Ek1PaB4v68LfWCNMThVUwcnTBHt5JhysA&s=10"
    resultado3.textContent = "R$ 3,00";
});

btnVegetariano.addEventListener("click", function() {
    vegetariano = true
    frango = false
    carne = false
    imagemRecheio.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwI4NzMDor8ImQgl4iB84cTw_aGR6tUam0ra6v517x9w&s=10"
    resultado3.textContent = "R$ 2,50";
});

btnSelecionar3.addEventListener("click", function() {

if (frango == true) {
    pedido.push("Frango")
    preco.push(2.00)

    btnSelecionar3.replaceWith(btnSelecionar3.textContent = "Frango Selecionado!")
}
else if (carne == true) {
    pedido.push("Carne")
    preco.push(3.00)

    btnSelecionar3.replaceWith(btnSelecionar3.textContent = "Carne Selecionado!")
}
else if (vegetariano == true) {
    pedido.push("Vegetariano")
    preco.push(2.50)

    btnSelecionar3.replaceWith(btnSelecionar3.textContent = "Vegetariano Selecionado!")
} 
});
