import React from "react";
import axios from "axios";
import styled from "styled-components"

const ContainerBored = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 2%;
  font-size: 20px;
`
const ContainerText = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 2%;
  color: red;

  button{
    cursor: pointer
  }
`

export default class App  extends React.Component{
    state={
        activity: {}
        
    }


  getActivity = () =>{
    axios
    .get("https://www.boredapi.com/api/activity/")
    .then((resposta)=>{
      this.setState({activity: resposta.data})
    }).catch((error)=>{
      alert("Erro Inesperado, tente novamente!")
    })
  }


  render(){
   
    const {activity, type, participants, price} = this.state.activity
    return (
      <div>
        < ContainerText>
       <h1>Esta Entediado?</h1>
       <button onClick={this.getActivity}>Click e se Divirta</button>
       </ ContainerText>
       <hr/>
       <ContainerBored>
       <h3>Atividades</h3>
       <p>Nome: {activity}</p>
       <p>Tipo: {type}</p>
       <p>Participantes: {participants}</p>
       <p>Preço: ${price}</p>
       </ContainerBored>
      </div>
    );
  }
  
}

