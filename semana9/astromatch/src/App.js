import  React, {useState} from 'react'
import {HomePage} from "./pages/HomePage/HomePage"
import {MatchesPage} from "./pages/MatchesPage/MatchesPage"

const App =()=>{

  const [telaInicial, setTelaInicial]=useState("home")



  const renderizacaoDePagina = () =>{
    switch(telaInicial){
      case 'home':
        return <HomePage/>
      case 'matches':
        return <MatchesPage /> 
      default:
        return <HomePage />
    }
  }

    const changePage = (troca) =>{
      setTelaInicial(troca)
    }
  

  return(
    <div>
      {/* <HomePage
      mudarTelas={telaInicial}
      /> */}
      {renderizacaoDePagina}
      <MatchesPage
      changePage={telaInicial}
      />
    </div>
  )
}
export default App