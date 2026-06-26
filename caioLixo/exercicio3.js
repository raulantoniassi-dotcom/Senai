
import promptSync from 'prompt-sync'
const prompt = promptSync
console.clear()

const tabuada = (num) => {
    for(let i = 1; i<11; i++){
        console.log(`${num} x ${i} = ${num*i}`)
    }
}
tabuada(2)