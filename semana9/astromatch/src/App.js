import  React, {useState} from 'react'
import HomePage from "./pages/HomePage/HomePage"
import MatchesPage from "./pages/MatchesPage/MatchesPage"
import axios from 'axios'


const App =()=>{

  const [telaInicial, setTelaInicial]=useState("0")


  const renderizacaoDePagina = (numero) =>{
    if(telaInicial === numero){
      return <MatchesPage changePage={changePage} clearMatches={clearMatches}/> 
    }else {
      return <HomePage changePage={changePage} clearMatches={clearMatches}/>
    }
  }
  
  const changePage = (telas) =>{
      setTelaInicial(telas)
    }

    const clearMatches = () =>{
      const url = ('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jessica-bento-maryam/clear')
      axios.put(url)
      .then((res)=>{
        alert("Lista Apagada com Sucesso")
      })
      .catch((error)=>{
        alert("Deu um erro inesperado! Tente novamente.")
      })
    }

  return(
    <div>
      {renderizacaoDePagina()}
    </div>
  )
}
export default App