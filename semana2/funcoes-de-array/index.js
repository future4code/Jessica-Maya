//                     =============> Exercícios de interpretação de código <=============

// 1- a) primeiro ira mostrar que são tres objetos junto com array que são tres informações dentro dele abrindo ele
// ira mostrar os dados que são os nomes e apelidos de cada uma separados por cada um tipo um grupo de cada array suas informações.

// 2- a) ira mostra os que tem 3 informação dentro do array os nomes de cada e suas posições que são 0,1,2 em cada um.

// 3- a) irá mostrar que tem 2 informação dentro de um array que é o nome e apelido (Amanda e Laís) pois o filtre pediu
// para filtrar as informações que são diferentes do apelido da Chijo.

//                         =============> Exercícios de escrita de código <=============

const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

function extrairNomes(obj) {
    return obj.nome
}

function produtosEncontrar(obj) {
    return obj.includes("Ypê")
}

// Atividade 1


const nomeDosDoguinhos = pets.map((item) => {
    return item.nome
})
console.log(nomeDosDoguinhos)



const doguinhosDaRacaSalsicha = pets.filter((item, array) => { // ver com o professor
    return item.raca === "Salsicha"
})

console.log(doguinhosDaRacaSalsicha)





const clientesCupomDeDesconto = (item) => {
    return item.raca === "Poodle"
}

const quemGanhouOCupomDeDesconto = pets
    .filter(clientesCupomDeDesconto)
    .map(extrairNomes)


console.log(`Você ganhou um cupom de desconto de 10% para tosar a ${quemGanhouOCupomDeDesconto[0]}`)
console.log(`Você ganhou um cupom de desconto de 10% para tosar a ${quemGanhouOCupomDeDesconto[1]}`)


// Atividade 2


const descontoDosProdutos = produtos.map((produtos) => {
    const precoComDesconto = produtos.preco - (produtos.preco * 5 / 100)
    return { nome: produtos.nome, preco: precoComDesconto.toFixed(2) }
})
console.log(descontoDosProdutos)


const categoriaDeBebidas = produtos.filter((item, array) => {
    return item.categoria === "Bebidas"
})
console.log(categoriaDeBebidas)


const produtosYpe = produtos.filter((produto) => {
    return produto.nome.includes("Ypê")
})

console.log(produtosYpe)


const compreYpe = produtosYpe.map((produto) => {
    return `Compre ${produto.nome} por ${produto.preco}`
})
console.log(compreYpe)


// Desafio

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

const nomesDosPokemons = pokemons.map((poken) => {
    return poken.nome
})

const ordemAlfabetica = nomesDosPokemons.sort((a, b) => a.localeCompare(b))
console.log(ordemAlfabetica)



const naoRepetirTipo = pokemons.map((pokemon) => {
    return pokemon.tipo
})

const numerosNaoRepetir = naoRepetirTipo.filter((item, index, array) => {
    return array.indexOf(item) === index
})
console.log(numerosNaoRepetir)