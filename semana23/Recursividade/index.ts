//EXERCÍCIO 1 -  Escreva uma função recursiva que:

// a. Receba um número e imprima todos os inteiros de 0 até esse número no 
// console em ordem crescente.

const numbersCrescente = (n: number) => {
  if(n >= 0 ) {
    numbersCrescente(n - 1)
    console.log(n)
  }

  if(numbersCrescente != undefined) {
    return "Exercício 1 -a"
 }
}
console.log(numbersCrescente(4))

// b. Receba um número e imprima todos os inteiros desse número até 0 em 
// ordem decrescente

const numbersDecrescente = (n: number) => {
  if(n >= 0 ) {
    console.log(n)
    numbersDecrescente(n - 1)
  }

  if(numbersDecrescente != undefined) {
     return "Exercício 1 -b"
  }
}
console.log(numbersDecrescente(4))

//EXERCÍCIO 2 -  Escreva uma função recursiva que calcule a soma dos 
// números inteiros de 0 a **n**

const calcularNumerosInteiros = (n: number, index: number = 0): number => {
  if(n === 0) {
    return index
  }

  return calcularNumerosInteiros(n - 1, index + n)
}
console.log("Exercício 2", calcularNumerosInteiros(10))
console.log("Exercício 2", calcularNumerosInteiros(20))
console.log("Exercício 2", calcularNumerosInteiros(60))

// EXERCÍCIO 4 Escreva uma função recursiva que consiga imprimir 
//todos os elementos de um array

const arrayNumber = (array: number[], index: number = array.length - 1) => {
    if(index >= 0) {
      arrayNumber(array, index -1)
      console.log(`Elemento ${index}: `, array[index])
    }
}
console.log("Exercício4 ", arrayNumber([1,2,3,4]))


// EXERCÍCIO 5 - Escreva uma função recursiva que determine a quantidade
// de digitos de um número

const numberDigits = (n: number, index: number = 1): number => {
    if(n < 10) {
      return index
    }

    return numberDigits(n / 10, index + 1)
}

console.log("Exercício5 ", numberDigits(10))
console.log("Exercício5 ", numberDigits(3029))
console.log("Exercício5 ", numberDigits(1))

// EXERCÍCIO 6 - Escreva uma função recursiva que determine o maior valor 
//de um array que contenha somente números positivos 

const arrayMaximum = (
  array: number[],
  index: number = 0,
  largest: number = 0
): number => {
  let largestAux = largest;
  if (array[index] > largest) {
    largestAux = array[index];
  }
  if (index === array.length - 1) {
    return largestAux;
  }

  return arrayMaximum(array, index + 1, largestAux);
}
console.log("Exercício6 ", arrayMaximum([4,6,8,10,3,5]))

// EXERCÍCIO 7 - Escreva uma função recursiva que determine o primeiro 
///caractere maiúsculo de uma string

const findFirstCapitalLetter = (
  s: string,
  char: string = ""
): string => {
  if (char && char.toUpperCase() === char) {
    return char;
  }
  return findFirstCapitalLetter(s.substring(2), s[0]);
};
console.log("Exercício7", findFirstCapitalLetter("Labenu"))

// EXERCÍCIO 8 - Calcule a complexidade do seguinte algoritmo

function power(a: number, b: number): number {
  if (b < 0) {
    return 0; 
  } else if (b === 0) {
    return a;
  } else {
    return a * power(a, b - 1);
  }
}
console.log("Exercício8", power(3,4))

//EXERCÍCIO 9 - Calcule a complexidade do seguinte código

function allFib(n: number): void {
  for (let i = 0; i < n; i++) {
    console.log(`i: ${fib(i)}`)
  }
}

function fib(n: number) : number {
  if(n <= 0){
    return 0
  } else if( n === 1) {
    return 1
  }
  return fib(n - 1) + fib(n - 2)
}
console.log("Exercício9", fib(2))