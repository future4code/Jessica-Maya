import  React, {useState} from 'react'
import HomePage from "./pages/HomePage/HomePage"
import MatchesPage from "./pages/MatchesPage/MatchesPage"
import TelaDescricao from "./pages/DescricaoMatch/TelaDescricao"

const App =()=>{

  const [telaInicial, setTelaInicial]=useState("0")



  const renderizacaoDePagina = () =>{
    if(telaInicial === "0"){
      return <TelaDescricao /> 
    }else if(telaInicial === "1"){
      return<MatchesPage />
    }
  }
  
  const changePage = (telas) =>{
      setTelaInicial(telas)
    }

  return(
    <div>
      {renderizacaoDePagina()}
      <HomePage
      changePage={changePage}
      />
    </div>
  )
}
export default App