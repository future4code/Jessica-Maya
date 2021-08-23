/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!")

function somarCartas(carta1, carta2) {
    const soma = carta1 + carta2
    return soma
}


if (confirm("Quer iniciar uma nova rodada?")) {

    const primeiroCartaDoUsuario = comprarCarta()
    const segundaCartaDoUsuario = comprarCarta()
    const somarAsCartasDoUsuario = somarCartas(primeiroCartaDoUsuario.valor, segundaCartaDoUsuario.valor)
    const primeiraCartaComputador = comprarCarta()
    const segundaCartaComputador = comprarCarta()
    const somarAsCartasDoComputador = somarCartas(primeiraCartaComputador.valor, segundaCartaComputador.valor)
    console.log(`Usuário - cartas: ${primeiroCartaDoUsuario.texto} 
    ${segundaCartaDoUsuario.texto} - pontuação ${somarAsCartasDoUsuario}`)
    console.log(`Usuário - cartas: ${primeiraCartaComputador.texto}
     ${segundaCartaComputador.texto} - pontuação ${somarAsCartasDoComputador}`)


    if (somarAsCartasDoUsuario > somarAsCartasDoComputador) {
        console.log("Parabens! Você Ganhou")

    }
    if (somarAsCartasDoUsuario < somarAsCartasDoComputador) {
        console.log("Não foi dessa vez! Computador Ganhou")

    }
    if (somarAsCartasDoUsuario === somarAsCartasDoComputador) {
        console.log("Foi empate, jogue de novo!")
    }
} else {
    console.log("O jogo acabou")
}