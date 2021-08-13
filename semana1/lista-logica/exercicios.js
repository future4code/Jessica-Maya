// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
    // implemente sua lógica aqui
    return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
    // implemente sua lógica aqui
    const mensagem = prompt('Digite uma mensagem!')

    console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
    // implemente sua lógica aqui
    const altura = prompt('Digite a altura de um Retângulo?')
    const largura = prompt('Digite a Largura do Rentâgulo?')
    const resultado = altura * largura

    console.log(resultado)
}
calculaAreaRetangulo()

// EXERCÍCIO 02
function imprimeIdade() {
    // implemente sua lógica aqui
    const anoAtual = Number(prompt('Digite o ano atual!'))
    const anoDeNascimento = Number(prompt('Digite seu ano de nascimento!'))
    const idade = anoAtual - anoDeNascimento

    console.log(idade)
}

imprimeIdade()


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
    // implemente sua lógica aqui
    const imc = peso / (altura * altura)
    return imc
    console.log(imc)

}
calculaIMC()

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
    // implemente sua lógica aqui
    // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
    const nome = prompt('Qual é seu nome?')
    const idade = Number(prompt('Quantos anos você tem?'))
    const email = prompt('Qual é seu email?')
    console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}
imprimeInformacoesUsuario()

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
    // implemente sua lógica aqui
    const cor1 = prompt("Qual é a sua 1 cor favorita? ")
    const cor2 = prompt("Qual é a sua 2 cor favorita?")
    const cor3 = prompt("Qual é a sua 3 cor favorita? ")
    console.log([cor1, cor2, cor3])
}
imprimeTresCoresFavoritas()

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
    // implemente sua lógica aqui
    const frase = string.toUpperCase()
    return frase

}
retornaStringEmMaiuscula("oi")


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
    // implemente sua lógica aqui
    const vendidos = custo / valorIngresso
    return vendidos

}
calculaIngressosEspetaculo()

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
    // implemente sua lógica aqui

    return string1.length === string2.length
}


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
    // implemente sua lógica aqui
    return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
    // implemente sua lógica aqui
    return array[array.length - 1]
}


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
    // implemente sua lógica aqui
    const troca = array[0]
    array[0] = array[array.length - 1]
    array[array.length - 1] = troca
    return array
}
trocaPrimeiroEUltimo()

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
    // implemente sua lógica aqui

    return (string1.toLowerCase() === string2.toLowerCase())

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
    // implemente sua lógica aqui
    const anoAtual = Number(prompt("Qual ano atual?"))
    const anoNascimento = Number(prompt("Que ano você nasceu?"))
    const anoCarteiraEmitida = Number(prompt("Em que ano sua carteira foi emitida?"))

    const idade = anoAtual - anoNascimento
    const emitir = anoAtual - anoCarteiraEmitida

    const renovar1 = 20 >= idade && emitir >= 5
    const renovar2 = idade >= 0 && idade <= 50 && emitir >= 10
    const renovar3 = 51 <= idade && emitir >= 15

    const renovarcarteira = renovar1 || renovar2 || renovar3
    console.log(renovarcarteira)
}


// EXERCÍCIO 14
function checaAnoBissexto(ano) {
    // implemente sua lógica aqui


}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
    // implemente sua lógica aqui
    const idade = prompt("Você é maior que 18 anos?")
    const formacao = prompt("Você já completou o Ensino Médio completo?")
    const horarioDisponivel = prompt("Voce tem disponibilidade do nosso horario de ensino?")

    const idade1 = idade >= 18
    const formacao1 = formacao && true && false
    const horario = horarioDisponivel && true && false

    const ValidarInscricao = (idade1 || formacao1 || horario)

    console.log(ValidarInscricao)
}