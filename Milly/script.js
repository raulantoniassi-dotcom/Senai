// Exercicio 1
console.log("Bem-vindo a Byte & Bun!")

// Exercicio 2
const button = document.querySelector("#btnSaudacao");
const mensagem = document.querySelector("#mensagem");
const print = document.querySelector("#print");
const print2 = document.querySelector("#print2");
button.addEventListener("click", function() {

mensagem.textContent = "Olá, seja bem-vindo(a)!";
print.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KGIIKmwXKWTQwEO3tweZHmrrbUH4Hb1IMjrIGcEHUg&s=10";
})

// Exercicio 3
const resultado = document.querySelector("#resultado");
const btnFrances = document.querySelector("#btnFrances");
const btnIntegral = document.querySelector("#btnIntegral");
const btnCiabatta = document.querySelector("#btnCiabatta");
const quantidade = document.querySelector("#quantidade");
const total = document.querySelector("#total");
const preco = 1.50;
btnFrances.addEventListener("click", function() {
    resultado.textContent = "Pão Francês: R$ 1,50";
   print2.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrUYFBfhDHRH_y4s5ZsxaRoypffv9qZJecH3E7M4lmJA&s=10";
});
btnIntegral.addEventListener("click", function() {
    resultado.textContent = "Pão Integral: R$ 2,00";
   print2.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGuwXGUTw3L9xJQqt-gs1aZojsvXi7dokE5x8AWCSprw&s=10";
});
btnCiabatta.addEventListener("click", function() {
    resultado.textContent = "Pão Ciabatta: R$ 2,50";
    print2.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7iBgBx_MkyC5aAaKF9D2bTn6pechDazFda6UGugSITw&s=10";
});

// Exercicio 4

btnCalcular.addEventListener("click", function() {
    const quantidadePao = Number(quantidade.value);

    if(!quantidadePao || quantidadePao <= 0) {
        total.textContent = "Por favor, insira uma quantidade válida.";
        return;
    }
    const valorTotal = quantidadePao * preco;
    total.textContent = `Total: R$ ${valorTotal.toFixed(2)}`;
})