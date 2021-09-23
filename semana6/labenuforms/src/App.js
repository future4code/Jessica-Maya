import React from 'react';
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";
import styled from 'styled-components'


const ClassName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    button{
      margin-top: 20px;
      height: 50px;
      width: 80px

    }

    button:hover{
      background-color: grey;
      border-style: hidden;
      opacity: 1px
    }
    
`




class App extends React.Component {
  state = {
     etapa: 1,
     
  }


  redenrizarEtapa = () =>{
    switch (this.state.etapa) {
      case 1: 
        return <Etapa1/>;
      case 2:
        return <Etapa2/>;
      case 3:
        return <Etapa3/>;
        case 4:
        return <Final/>;
      
      default:
        return <Final/>
      
    }
  }
  irParaProximaEtapa = () =>{
     this.setState({etapa: this.state.etapa + 1})
  }

  render() {
    return (

      <ClassName className="App">
        {this.redenrizarEtapa()}
        {this.state.etapa !== 4 && (
        < button onClick={this.irParaProximaEtapa}>Proxima Etapa</ button>
        )}
        
      </ClassName>
    );

  }

}
     export default App;
