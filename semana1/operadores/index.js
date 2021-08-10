// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// Exercício 1) 
// A) FALSE
// B) FALSE
// C) TRUE
// D) BOLLEAN

// Exercício 2)

/*  Para que a soma seja correta iremos ter que colocar o Number antes do prompt, pois para fazer uma soma
precisamos de usar o number que é usado quando se usa a variavel bolleano. Estamos trabalhando com o prompt que é
uma string (textos), e para separar uma string de um bollean usamos o number por exemplo:

let primeiroNumero = Number(prompt(''))
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1) Faça um programa que:
// a) Pergunte a idade do usuário
// b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
// c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
// d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

let suaIdade = Number(prompt('Qual é sua idade?'))
let idadeSeuMelhorAmigo = Number(prompt('Qual é a idade do seu melhor amigo?'))
const idade = suaIdade - idadeSeuMelhorAmigo

console.log('Sua idade é maior do que a do seu melhor amigo? ', suaIdade >= idadeSeuMelhorAmigo)
console.log('A diferença de idade é: ', idade)

// 2) Faça um programa que:
// a) Peça ao usuário que insira um número **par**
// b) Imprima na console **o resto da divisão** desse número por 2.
// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
// d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

let insiraNumeroPar = Number(prompt('Por favor insira um número par!'))
const divisao = 2
let resultado = insiraNumeroPar / divisao

console.log(resultado)

// quanto o usuário insere um número ímpar o resultado não sai inteiro e sim decimais.

// 3) Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console
// a) A idade do usuário em meses
// b) A idade do usuário em dias
// c) A idade do usuário em horas

let idadeAtual = Number(prompt('Quantos anos você tem?'))

const meses = 12
let idadeEmMeses = idadeAtual * meses
console.log(idadeEmMeses)

const dias = 365
let idadeEmDias = idadeAtual * dias
console.log(idadeEmDias)

const horas = 24
let idadeEmHoras = idadeAtual * horas
console.log(idadeEmHoras)

// 4) Faça um programa que pergunte ao usuário dois números. 
// Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:
// a)O primeiro numero é maior que segundo? true
// b)O primeiro numero é igual ao segundo? false
// c)O primeiro numero é divisível pelo segundo? true
// d)O segundo numero é divisível pelo primeiro? true

let primeiroNumero = Number(prompt('Escolha um número de 0 a 100'))
let segundoNumero = Number(prompt('Escolha outro número de 0 a 100'))

console.log('O primeiro número é maior que segundo?', primeiroNumero > segundoNumero)
console.log('O primeiro numero é igual ao segundo?', primeiroNumero === segundoNumero)
console.log('O primeiro numero é divisível pelo segundo?', primeiroNumero % segundoNumero === 0)
console.log('O segundo numero é divisível pelo primeiro?', primeiroNumero % segundoNumero === 0)