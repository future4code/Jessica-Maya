//  ----------> Exercícios de interpretação de código <----------

// Exercício 1

// a) Indefinido 
// b) null
// c) 11
// d) 3
// e) (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f) 9

// Exercício 2

//  (27) SUBI NUM ÔNIBUS EM MIRROCOS

//   ----------> Exercícios de escrita de código <----------

// Exercício 1

const nomeDoUsuario = prompt("Qual é o seu nome?")
const emaildoUsuario = prompt("Qual é o seu email?")

console.log(`O email ${emaildoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

// Exercício 2


const comidasPreferidas = ["Pizza", "Lasanha", "Tropeiro", "Brigadeiro", "Lanche"]
const comidaDoUsuario = prompt("Qual sua comida Preferida?")

console.log("Essas são as minhas comidas preferidas:")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1] = comidaDoUsuario)
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])


// Exercício 3

const listaDeTarefas = []
const tarefaDoUsuario1 = prompt("Me fala a primeira tarefa do seu dia?")
const tarefaDoUsuario2 = prompt("Me fala a segunda tarefa do seu dia?")
const tarefaDoUsuario3 = prompt("Me fala a terceira tarefa do seu dia?")

listaDeTarefas.push(tarefaDoUsuario1)
listaDeTarefas.push(tarefaDoUsuario2)
listaDeTarefas.push(tarefaDoUsuario3)


console.log(listaDeTarefas[0])
console.log(listaDeTarefas[1])
console.log(listaDeTarefas[2])

const indice = Number(prompt("Quais dessas tarefas voce já fez? 0, 1, 2?"))

listaDeTarefas.splice(indice, 1)

console.log(listaDeTarefas)