import React from "react";
import TelaAddPlayList from "./Components/TelaAddPlayList";
import TelaAddMusicas from "./Components/TelaAddMusicas";
import TelaListaPlayList from "./Components/TelaListaPlayList";

export default class App extends React.Component {

  state={
    telaAtual: "AddPlayList"
  }


  escolherTela = () =>{
    switch(this.state.telaAtual){
      case "AddPlayList":
        return <TelaAddPlayList irParaAddMusicas={this.irParaAddMusicas}/>
      case "AddMusicas":
          return <TelaAddMusicas irParaAddPlayList={this.irParaAddPlayList}/>
      case "Listas":
        return <TelaListaPlayList irParaAddPlayList={this.irParaAddPlayList}/>
        default:
          return <div>Erro! Página não encontrada.</div>
    }
  }

  irParaAddPlayList = () =>{
    this.setState({telaAtual: "AddPlayList"})
  }

  irParaAddMusicas = () =>{
    this.setState({telaAtual: "AddMusicas"})
  }
  
  irParaListas = () =>{
    this.setState({telaAtual: "Listas"})
  }



  render(){
    return (
      <div className="App">
        {this.escolherTela()}
      </div>
    );
  }
  
}


