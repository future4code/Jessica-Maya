import React from "react";
import TelaCadastro from "./Components/TelaCadastro";
import TelaListaUsuarios from "./Components/TelaListaUsuarios";



export default class App extends React.Component{
  state={
    telaAtual: "cadastro"
  }

  escolherTela = () =>{
    switch(this.state.telaAtual){
      case "cadastro":
        return <TelaCadastro irParaTelaListaUsuarios={this.irParaTelaListaUsuarios}/>
        case "lista":
        return <TelaListaUsuarios irParaTelaCadastro={this.irParaTelaCadastro}/>
        default:
          return <div>Erro! Página não encontrada.</div>
    }

  }

  irParaTelaCadastro = () =>{
    this.setState({telaAtual: "cadastro"})
  }

  irParaTelaListaUsuarios = () =>{
    this.setState({telaAtual: "lista"})
  }

   
  render(){


    return(
      <div>
        {this.escolherTela()}
      </div>
    )
  }
}
