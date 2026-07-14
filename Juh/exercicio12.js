const palavras = ["nigger", "okey", "gay"]
let maior = []
for(let i=0; i<palavras.length; i++){
    if((palavras[i].length)>= 4){
     maior.push(palavras[i])
    }
}
console.log(maior)