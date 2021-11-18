type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// a) Instalado globalmente com npm i -g typescript e executando o comando: tsc ./nome-do-arquivo.ts
// Instalado localmente com npm i typescript -D e executando o comando: npx tsc ./nome-do-arquivo.ts

// b)  Instalado globalmente com npm i -g typescript e executando o comando: tsc ./src/exercicio4.ts
// Instalado localmente com npm i typescript -D e executando o comando: npx tsc ./src/exercicio4.ts

// c) Sim, configurando o tsconfig para olhar a pasta de entrada rootDir e a pasta de saída outDir

// Instalado globalmente com npm i -g typescript e executando o comando: tsc
// Instalado localmente com npm i typescript -D e executando o comando: npx tsc

// d) O outDir, rootDir e es6. Existem diversas configs comentadas, cada uma com uma funcionalidade.