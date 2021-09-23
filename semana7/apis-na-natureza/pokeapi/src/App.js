import React from "react";
import axios from "axios";
import styled from "styled-components"
 
const ContainerPoke = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 2%;

  h1{
    color: red
  }
`

export default class App extends React.Component {

  state={
    pokemons:[],
    pictures: ''
  }

  componentDidMount(){
    this.getPokemons()
  }


  getPokemons = async () =>{
 const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
 this.setState({pokemons: response.data.results})
  }

  getPokemonPictures = async(event) =>{
    console.log(event.target.value)
    const url = event.target.value
    const response = await axios.get(`${url}`)
  this.setState({pictures: response.data.sprites.front_default})
}
  
  render(){
    const pokemonsLista = this.state.pokemons.map((pokemon)=>{
      return (
      <option key={pokemon.name} value={pokemon.url}>{pokemon.name}</option>
    )
    })
    return (
      <div className="App">
      <ContainerPoke>
        <h1>Pokemons</h1>
        <select onChange={this.getPokemonPictures}>
          <option>Seleciona um Pokemon</option>
          {pokemonsLista}
          </select>
        {this.state.pictures && 
          <img src={this.state.pictures} alt='imagens de Pokemons'></img>
        }
        </ContainerPoke>
      </div>
    );
  }
  
}

