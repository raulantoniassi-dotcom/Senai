import promptSync from 'prompt-sync'
const prompt = promptSync
console.clear()

let laco = prompt("Escolha seu laço: ")

if(laco == "while"){
     let expoente = 1
let resultado 
const tabuada = (num) => {
    while(expoente < 10){
        expoente = expoente + 1
        resultado = num * expoente
        console.log(`${num} x ${expoente} = ${resultado}`)
    }
}
}
else if(laco == "for"){
const tabuada = (num) => {
    for(let i = 1; i<11; i++){
        console.log(`${num} x ${i} = ${num*i}`)
    }
}
}