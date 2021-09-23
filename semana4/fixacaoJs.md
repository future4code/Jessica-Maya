````function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
```` let= novoArray = 0
````for(let i= 0; i < arrayDeNumeros.length; i++){
 ````  if(numeroEscolhido === arrayDeNumeros[i]){
  ````   novoArray += 1
 ````  }
```` }
```` if(novoArray === 0){
 ````  return ("Número não encontrado")
```` }else{
 ````  return (`O número ${numeroEscolhido} aparece ${novoArray}x`)
 ````}
````}