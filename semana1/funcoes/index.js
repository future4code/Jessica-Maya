// ----------> Exercícios de interpretação de código

// Exercício 1

// a) 10 50
// b) Não irar imprimir o resultado mas também não da erro.

// Exercício 2

// a) Essa função está adicionando 0 texto do usuario que esta na variavel  do escorpo global 
//aonde pede o usuario escrever um texto. Nessa funçao foi adicionada um prototipo para o resultado sair com letras 
// minusculas é esta utilizando outro prototipo que mostra se no texto vai ter cenoura ou nao! no final o resultado sai,
// true ou false.
// b) saiu tudo true pois tem a palavra cenoura, mas não saiu a frase mas se saisse se tiver alguma frase com letra
// MAIUSCULA o resultado serio tudo minuscula.

// ----------> Exercícios de escrita de código

// Exercício 1 

// a) 

function imprimeSobreMim() {
    console.log("Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
        .replace('Caio', 'Jéssica').replace('23', '24').replace('São Paulo', 'Minas Gerais'))
}

imprimeSobreMim()

// b)

const sobreOUsuario = function(nome, idade, endereco, profissao) {
    const informacaoDoUsuario = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}`)

    console.log(informacaoDoUsuario)

}

sobreOUsuario("jessica", "24", "arcos", "estudante")

// Exercício 3

//a)

function receberDoisNumeros(primeironumero, segundonumero) {
    const soma = primeironumero + segundonumero
    console.log(soma)
}

receberDoisNumeros(4, 9)

// b)

function doisNumeros(primeiroNum, segundoNum) {

    const maiorOuMenor = primeiroNum >= segundoNum
    console.log(`O primeiro número é maior ou igual ao segundo número? ${maiorOuMenor}`)

}
doisNumeros(1, 3)

// c)

function numeroPar(num1) {
    const eNumeroPar = num1 % 2 === 0
    console.log(eNumeroPar)
}
numeroPar(5)

// d)

function receberMensagem(mensagem) {
    return mensagem = "Uma Otima Semana pra Você!".toUpperCase()

}
console.log(receberMensagem())

// Exercício 3

const inserirNumero1 = Number(prompt("Digite 1 número por favor?"))
const inserirNumero2 = Number(prompt("Digite 2 número por favor?"))

function soma(numero1, numero2) {
    const somarCalculo = numero1 + numero2
    console.log(somarCalculo)
}
soma(inserirNumero1, inserirNumero2)

function subtrair(numero1, numero2) {
    const subtrairCalculo = numero1 - numero2
    console.log(subtrairCalculo)
}
subtrair(inserirNumero1, inserirNumero2)

function multiplicacao(numero1, numero2) {
    const multiplicarCalculo = numero1 * numero2
    console.log(multiplicarCalculo)
}
multiplicacao(inserirNumero1, inserirNumero2)

function divisao(numero1, numero2) {
    const dividirCalculo = numero1 / numero2
    console.log(dividirCalculo)
}
divisao(inserirNumero1, inserirNumero2)