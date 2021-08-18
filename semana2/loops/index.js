// -----------------> Exercícios de interpretação de código  <-----------------

// 1- o resultado no console é 10. 
// 2- a) 18, 19, 21, 23, 25, 27, 30
//b) sim poderia mas para acessar o indece poderia criar um função colocando i = 0 junto com o length
// 3- com asteristicos seria *, **, ***, **** = mas refere-se ao 1, 2, 3, 4  a saida não sai nada pois não foi definida!

// -----------------> Exercícios de escrita de código <-----------------

1

const quantosBichinhosOUsuarioTem = Number(prompt('Quantos animais de estimação você tem?'))
const quantosBichinhos = []

if (quantosBichinhosOUsuarioTem === 0) {
    console.log("Que pena! Você pode adotar um pet!")
}

for (let quantidade = 0; quantidade < quantosBichinhosOUsuarioTem; quantidade++) {
    const nomesDosBichinhos = prompt("Quais são os nomes deles?")
    quantosBichinhos.push(nomesDosBichinhos)
}
console.log(quantosBichinhos)


// 2

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

function novoArray() {
    for (i = 0; i < arrayOriginal.length; i++) {
        console.log(arrayOriginal[i])
    }
}
novoArray()

function segundoArray() {
    for (i = 0; i < arrayOriginal.length; i++)
        console.log(arrayOriginal[i] / 10)
}
segundoArray()

let novaArray = []
let j = 0


for (i = 0; i < arrayOriginal.length; i++) {

    if (arrayOriginal[i] % 2 === 0) {
        novaArray[j] = arrayOriginal[i]
        j = j + 1

    }


}
console.log(novaArray)




let arrayDois = []

for (i = 0; i < arrayOriginal.length; i++) {

    arrayDois[i] = "O elemento do índex " + i + " é: " + arrayOriginal[i]


}
console.log(arrayDois)


//const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

let maiorNumero = arrayOriginal[0]
let menorNumero = arrayOriginal[0]

for (i = 0; i < arrayOriginal.length; i++) {

    if (arrayOriginal[i] > maiorNumero) {
        maiorNumero = arrayOriginal[i]

    } else if (arrayOriginal[i] < menorNumero) {
        menorNumero = arrayOriginal[i]
    }



}

console.log(" Maior Numero " + maiorNumero + " Menor Numero " + menorNumero)