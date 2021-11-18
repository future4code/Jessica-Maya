// Exercicio 5


function calculos(numero1: number, numero2: number): void {

    if (isNaN(numero1)) { 
        return console.log("Invalid first number in argv")
      }
      
      if (isNaN(numero2)) { 
        return console.log("Invalid second number in argv")
      }

    console.log( numero1 + numero2)
    console.log( numero1 - numero2)
    console.log( numero1 * numero2)

    if (numero1 > numero2) {
        console.log("Maior: ", numero1)
      } else if (numero1 < numero2) {
        console.log("Maior: ", numero2)
      } else {
        console.log(`São iguais: ${numero1} = ${numero2}`)
      }
}
calculos(2, 4)