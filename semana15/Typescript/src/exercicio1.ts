// Exercicio 1

// a) 

// let minhaString: string = 4
// console.log(minhaString)
// ocorre um erro, pois está esperando uma string e o number 
//não pode ser atribuido como string.

// b)

const meuNumero: number = 5
console.log("Numero é: " + meuNumero)

const numeroEString: number | string = "labenu" 
console.log(numeroEString)

// c) e d)

enum CorArcoIris {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: CorArcoIris
}

const UserId: Pessoa ={
    nome: "Ana",
    idade: 30,
    corFavorita: CorArcoIris.VERMELHO
}
console.log(UserId)