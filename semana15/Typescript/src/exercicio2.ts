// Exercicio 2

type NumerosEstatisticas = {
    maior: number,
    menor: number,
    media: number,
}

type AmostraDeNumeros = {

    numeros: number[],

    obterEstatisticas: (numeros: number[])
     => NumerosEstatisticas
}


function obterEstatisticas(numeros: number[]) : NumerosEstatisticas {

    const numerosOrdenados =  numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }
    return estatisticas
}


console.log(obterEstatisticas([10,20,10]))