import  React, {useState} from 'react'
import HomePage from "./pages/HomePage/HomePage"
import MatchesPage from "./pages/MatchesPage/MatchesPage"

const App =()=>{

  const [telaInicial, setTelaInicial]=useState("0")



  const renderizacaoDePagina = (numero) =>{
    if(telaInicial === numero){
      return <HomePage changePage={changePage} /> 
    }else {
      return <MatchesPage changePage={changePage}/>
    }
  }
  
  const changePage = (telas) =>{
      setTelaInicial(telas)
    }

  return(
    <div>
      {renderizacaoDePagina()}
    </div>
  )
}
export default App