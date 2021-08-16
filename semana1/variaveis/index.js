// Exercícios de Interpretação de Códigos

/*
 1 - a) 10 10 5
b) 10 10 10
*/

/* 
2- a = 10
b = 10
c = 10
*/

/*
3- Variavel p = horasDeTrabalho
Variavel t = recebePorDia
*/

// Exercícios de Escrita de Códigos

// 1

//let nome
//let idade
let nome = prompt("Qual é seu nome?")
let idade = prompt("Qual é sua idade?")

//console.log(typeof nome)
//console.log(typeof idade)
console.log(nome)
console.log(idade)
console.log("Olá", nome, "você tem", idade, "anos.")

// d) O valor deu Undefined porque o js está esperando um valor na váriavel, como não recebeu nenhum deu indefinido.

// f) Primeiro abriu uma caixa pedindo o nome e a idade depois no console as duas variaveis resultou no nome da pessoa com a idade do usuário.

// 2

let ehAdulto = true
let temFilhos = false
let moraSozinho = true

console.log("Você tem 18 anos?", ehAdulto, "Você tem filhos?", temFilhos, "Você mora sozinho(a)?", moraSozinho)

// 3 

let a = 10
let b = 25
c = a
a = b
b = c


console.log(a)
console.log(b)