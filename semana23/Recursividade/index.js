//EXERCÍCIO 1 -  Escreva uma função recursiva que:
// a. Receba um número e imprima todos os inteiros de 0 até esse número no 
// console em ordem crescente.
var numbersCrescente = function (n) {
    if (n >= 0) {
        numbersCrescente(n - 1);
        console.log(n);
    }
    if (numbersCrescente != undefined) {
        return "Exercício 1 -a";
    }
};
console.log(numbersCrescente(4));
// b. Receba um número e imprima todos os inteiros desse número até 0 em 
// ordem decrescente
var numbersDecrescente = function (n) {
    if (n >= 0) {
        console.log(n);
        numbersDecrescente(n - 1);
    }
    if (numbersDecrescente != undefined) {
        return "Exercício 1 -b";
    }
};
console.log(numbersDecrescente(4));
//EXERCÍCIO 2 -  Escreva uma função recursiva que calcule a soma dos 
// números inteiros de 0 a **n**
var calcularNumerosInteiros = function (n, index) {
    if (index === void 0) { index = 0; }
    if (n === 0) {
        return index;
    }
    return calcularNumerosInteiros(n - 1, index + n);
};
console.log("Exercício 2", calcularNumerosInteiros(10));
console.log("Exercício 2", calcularNumerosInteiros(20));
console.log("Exercício 2", calcularNumerosInteiros(60));
// EXERCÍCIO 4 Escreva uma função recursiva que consiga imprimir 
//todos os elementos de um array
var arrayNumber = function (array, index) {
    if (index === void 0) { index = array.length - 1; }
    if (index >= 0) {
        arrayNumber(array, index - 1);
        console.log("Elemento " + index + ": ", array[index]);
    }
};
console.log("Exercício4 ", arrayNumber([1, 2, 3, 4]));
// EXERCÍCIO 5 - Escreva uma função recursiva que determine a quantidade
// de digitos de um número
var numberDigits = function (n, index) {
    if (index === void 0) { index = 1; }
    if (n < 10) {
        return index;
    }
    return numberDigits(n / 10, index + 1);
};
console.log("Exercício5 ", numberDigits(10));
console.log("Exercício5 ", numberDigits(3029));
console.log("Exercício5 ", numberDigits(1));
// EXERCÍCIO 6 - Escreva uma função recursiva que determine o maior valor 
//de um array que contenha somente números positivos 
var arrayMaximum = function (array, index, largest) {
    if (index === void 0) { index = 0; }
    if (largest === void 0) { largest = 0; }
    var largestAux = largest;
    if (array[index] > largest) {
        largestAux = array[index];
    }
    if (index === array.length - 1) {
        return largestAux;
    }
    return arrayMaximum(array, index + 1, largestAux);
};
console.log("Exercício6 ", arrayMaximum([4, 6, 8, 10, 3, 5]));
// EXERCÍCIO 7 - Escreva uma função recursiva que determine o primeiro 
///caractere maiúsculo de uma string
var findFirstCapitalLetter = function (s, char) {
    if (char === void 0) { char = ""; }
    if (char && char.toUpperCase() === char) {
        return char;
    }
    return findFirstCapitalLetter(s.substring(2), s[0]);
};
console.log("Exercício7", findFirstCapitalLetter("Labenu"));
// EXERCÍCIO 8 - Calcule a complexidade do seguinte algoritmo
function power(a, b) {
    if (b < 0) {
        return 0;
    }
    else if (b === 0) {
        return a;
    }
    else {
        return a * power(a, b - 1);
    }
}
console.log("Exercício8", power(3, 4));
//EXERCÍCIO 9 - Calcule a complexidade do seguinte código
function allFib(n) {
    for (var i = 0; i < n; i++) {
        console.log("i: " + fib(i));
    }
}
function fib(n) {
    if (n <= 0) {
        return 0;
    }
    else if (n === 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}
console.log("Exercício9", fib(2));
