import promptSync from 'prompt-sync'
const prompt = promptSync
console.clear()

const alunos = ["João", "Maria", "Pedro"]
const idades = [18, 20, 19]
const hobbies = ["Futebol", "Leitura", "Videogame"]

for (let i = 0; i < alunos.length; i++) {
  console.log(
    `Aluno: ${alunos[i]}, Idade: ${idades[i]}, Hobby: ${hobbies[i]}`
  )
}