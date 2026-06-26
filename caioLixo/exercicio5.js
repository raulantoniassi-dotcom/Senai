console.clear()

 let expoente = 1
let resultado 
const tabuada = (num) => {
    while(expoente < 10){
        expoente = expoente + 1
        resultado = num * expoente
        console.log(`${num} x ${expoente} = ${resultado}`)
    }
}
tabuada(2)