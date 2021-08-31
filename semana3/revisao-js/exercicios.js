// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


//EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}
retornaTamanhoArray()
    // EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let arrayDeNumeros = []
    return arrayDeNumeros = array.reverse(0)
}
retornaArrayInvertido()

//EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort(function(a, b) {

        if (a > b) {
            return 1
        }
        if (a < b) {
            return -1

        }
    })
    return array
}
retornaArrayOrdenado()

//EXERCÍCIO 04
function retornaNumerosPares(array) {
    const pares = (item) => {
        return !(item % 2);
    }
    let numerosPar = array.filter(pares)
    return numerosPar
}
retornaNumerosPares()

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numerosParesElevados = []
    for (let i = 0; i < array.length; i++) {
        if (!(array[i] % 2)) {
            numerosParesElevados.push(array[i] * array[i])
        }
    }
    return numerosParesElevados
}
retornaNumerosParesElevadosADois()

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = array
    return Math.max(...maiorNumero)
}
retornaMaiorNumero()
    //EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const maiorNumero = Math.max(num1, num2)
    const menorNumero = Math.min(num1, num2)

    return numerosMaiorMenor = {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorNumero % menorNumero === 0,
        diferenca: maiorNumero - menorNumero
    }
}
retornaObjetoEntreDoisNumeros()

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

    const listaNumerosPares = []
    for (let i = 0; listaNumerosPares.length < n; i++) {
        if (i % 2 === 0) {
            listaNumerosPares.push(i)
        }

    }
    return listaNumerosPares
}
retornaNPrimeirosPares()


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if ((ladoA === ladoB) && (ladoB === ladoC)) {
        return "Equilátero"
    } else if ((ladoA === ladoB) || (ladoB === ladoC) || (ladoA === ladoC)) {
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}
classificaTriangulo()

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const arrayOrdenado = retornaArrayOrdenado(array)
    let maiorNumero = array.length - 2
    let menorNumero = 1
    return [arrayOrdenado[maiorNumero], arrayOrdenado[menorNumero]]

}
retornaSegundoMaiorESegundoMenor()
// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por  ${filme.diretor}  e estrelado por  ${filme.atores.join(", ")}.`

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return {...pessoa, nome: "ANÔNIMO" }

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}