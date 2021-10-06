import  React, {useState, useEffect} from 'react'
import HomePage from "./pages/HomePage/HomePage"
import MatchesPage from "./pages/MatchesPage/MatchesPage"
import axios from 'axios'
import styled from "styled-components"

const Button = styled.button`
    height: 30px;
    width: 60px;
`

const App =()=>{

  const [telaInicial, setTelaInicial]=useState("0")


  const renderizacaoDePagina = (numero) =>{
    if(telaInicial === numero){
      return <MatchesPage changePage={changePage} /> 
    }else {
      return <HomePage changePage={changePage}/>
    }
  }
  
  const changePage = (telas) =>{
      setTelaInicial(telas)
    }

    const clearMatches = () =>{
      const url = ('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jessica-bento-maryam/clear')
      axios.put(url)
      .then((res)=>{
        console.log(res.data)
      })
      .catch((error)=>{
        console.log(error.response)
      })
    }



  return(
    <div>
      {renderizacaoDePagina()}
      <Button onClick={clearMatches}>Apagar</Button>
    </div>
  )
}
export default App