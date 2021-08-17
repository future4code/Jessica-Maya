// ---------> Exercícios de interpretação de código <---------

// 1
// a) o codigo esta execuntando se o numero é divisivel ao 2 e se for igual a 0 ele diz que passou se nao passar
// ira mostrar um falso que nao ira passar no teste.
// b) tipos de numeros que tem restante exatos tipo 2, 12, 10 entre outros que o restante é igual a === 0
// numero interio (mais facil com os numeros pares).
// c) tipos de numeros que tem restos como 0,2500 ou 7,5 aonde não são numero exatos.

// 2
// a) Ele serve para o usuario saber o preço das frutas, o codigo informa o preço delas.
// b) no console imprimiu 2.25 reais.
// c) Se tirar imprimi 5.

//3
// a) A primeira linha tem uma variavel pedindo para o usuario um numero.
// b) Se fosse 10 ira imprimir a mensagem "Esse numero passou no teste", e se fosse -10 ira da erro. 
// c) ira pois o if esta mostrando que todo numero for maior que 0 a mensagem passou ira mostrar,
// para que o codigo funcione -10 teria que colocar o else e debaixo dele a outra mensagem para a resposta do -10.

// ---------> Exercícios de escrita de código <---------

// 1
const idade = Number(prompt('Quantos anos você tem?'))
const deMaior = "18"

function podeDirigir(idade, deMaior) {
    if (idade >= deMaior) {
        console.log ("Você pode dirigir!")
    } else{
        idade < deMaior
        console.log("Você não pode dirigir!")
    }

}
podeDirigir(idade)

//2
const turnoDoUusario = prompt('Digite M para (Matutino), V para (Vespertino), N para (Noturno)!')
qualTurnoE(turnoDoUusario)

function qualTurnoE(matutino, vespertino, noturno){
if (turnoDoUusario === "m") {
        console.log('Bom Dia!')
}else if (turnoDoUusario === "v") {
        console.log('Boa Tarde!')
}else if (turnoDoUusario == "n") {
        console.log('Boa Noite!')
}else{
        console.log('Digite as letras Surgeridas!')
}
}


// 3

const turnoDoDia = prompt('Digite M para (Matutino), V para (Vespertino), N para (Noturno)!')

 switch(turnoDoDia){
     case "m":
         console.log('Bom Dia!')
         break
    case "v":
        console.log('Boa Tarde!')
        break
    case "n":
        console.log('Boa Noite!')
        break
        default:
            console.log('Digite as letras surgeridas!')
 }

 // 4
 
const vaiAssistirOFilme = (
    qualGeneroDoFilme, precoDoIngresso
  ) => {
    if (qualGeneroDoFilme && precoDoIngresso) {
      console.log('Bom filme!');
    } else {
      console.log('Escolha outro filme :(');
    }
  }
  
  const qualGeneroDoFilmeUsuario =
    prompt('Qual é o gênero do filme que você e seu amigo(a) irão assistir?').toLowerCase() === "fantasia";
  const precoDoIngressoUsuario =
    Number(prompt('Qual é o preço do Ingresso do filme que irão assistir?')) <= 15;
  
  vaiAssistirOFilme(qualGeneroDoFilmeUsuario, precoDoIngressoUsuario)

  // ---------> Desafios <---------

  // 1

const vaiAssistirOFilme2 = (qualGeneroDoFilme, precoDoIngresso, lanchinho) => {
if (qualGeneroDoFilme && precoDoIngresso && lanchinho) {
    lanchinho = ["chocolate"[0], "pipoca"[1], "salgadinho"[2]]
    console.log('Bom filme!')
     console.log(`Aproveite seu ${escolhaLanchinhoUsuario}`)

 } else {
      console.log('Escolha outro filme :(')
 }
}
  const lanchinho = ["chocolate", "pipoca", "salgadinho"]
  const qualGeneroDoFilmeUsuario2 =
    prompt('Qual é o gênero do filme que você e seu amigo(a) irão assistir?').toLowerCase() === "fantasia";
  const precoDoIngressoUsuario2 =
    Number(prompt('Qual é o preço do Ingresso do filme que irão assistir?')) <= 15;
    const escolhaLanchinhoUsuario =
     prompt('Qual snack que você quer comprar: chocolate, pipoca ou salgadinho?')
  
  vaiAssistirOFilme2(qualGeneroDoFilmeUsuario, precoDoIngressoUsuario, escolhaLanchinhoUsuario)

