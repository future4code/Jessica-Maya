// ----------> Exercícios de interpretação de código

// 1 a) Primeiro console ira aparecer Matheus Nachtergaele. 
//Depois Virginia Cavendish e por ultimo Canal Globo, Horario 14h

// 2 a) Ira aparecer o nome a idade e a raça deles Juca, Juba e Jubo mas 
// so que no final o A mudou para O (Jubo) e tambem as informacoes serão
// as mesmas.
//b) A continuação do objeto anterior para a nova alteração.

// 3 a) False e Indefinido
// b) Sim porque na estrutura pessoa tem todos os dados, para fazer
// uma alteração eu teria que no final antes do console fazer uma
// const modificando tanto o nome quanto a altura pois o console,
// não modifica e sim imprime o valor ja colocado.

// ----------> Exercícios de escrita de código

//1

const pessoa = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
 }

function dados(objeto){

    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de:
    ${objeto.apelidos[0]}, ${objeto.apelidos[1]} 
    ou ${objeto.apelidos[2]}.`)
}
dados(pessoa)

 const pessoa2 = {
     ...pessoa,
     apelidos: ['Manda', 'Mani', 'Manimani']
 }
 dados(pessoa2)


 // 2

 
const info = {
    nome: 'Jéssica',
    idade: 24,
    profissao: 'Estudante'
}

const info1 = {
    nome: 'Ana',
    idade: 21,
    profissao: 'Modelo'
}

const minhafuncao = (info, info2) => { 
    return [info.nome, info.nome.length, info.idade, 
info.profissao, info.profissao.length]
}
console.log(minhafuncao(info))
console.log(minhafuncao(info1))

//3

const carrinho = []

const fruta1 = {
    nome: 'Maça',
    disponibilidade: true
}

const fruta2 = {
    nome: 'Uva',
    disponibilidade: true
}

const fruta3 = {
    nome: 'Goiaba',
    dusponibilidade: true
}

function objeto(fruta){
    carrinho.push(fruta1, fruta2, fruta3)

}
objeto(carrinho)
console.log(carrinho)

