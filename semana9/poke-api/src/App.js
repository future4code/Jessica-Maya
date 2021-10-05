import React, {useState, useEffect} from"react"
import PokeCard from"./Components/PokeCard/PokeCard"
import axios from "axios"

const App =()=> {
  const [pokeList, setPokeList]=useState([])
  const [pokeName, setPokeName]=useState("")

  const getPokemons = () =>{
      axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res)=>{
        setPokeList(res.data && res.data.results)
        
          console.log(res.data.results)
      })
      .catch((error)=>{
        console.log(error)
      })
  }

  useEffect(() => {
      getPokemons()
  }, [pokeName])

  const changePokeName=(event)=>{
      setPokeName(event.target.value)
  }
  return (
  <div>
    {console.log(pokeList)}
      <select onChange={changePokeName}>
          <option value={''}>Nenhum</option>
             {pokeList.map((pokemon)=>{
                 return(
                  <option key={pokemon.name} value={pokemon.name}>
                      {pokemon.name}
                  </option>
              )
             })}
          </select>
          {pokeName && <PokeCard pokemon={pokeName} />}
      </div>
  )
 }

export default App;
