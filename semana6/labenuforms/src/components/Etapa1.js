import React from 'react';
import PerguntasForm from './perguntas';
import styled from 'styled-components'

const FormularioEtapa1 = styled.div`
display: flex;
flex-direction: column;
align-items: center;

input{
    width: 20em;
    height: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;

}

`



export default class Etapa1 extends React.Component {

    state ={
      etapa: 1,
      resposta: 
      [{
         nome: "",
         idade: "",
         email: "",
         escolaridade: ""
      }],
      valorInputNome: '',
      valorInputIdade:'',
      valorInputEmail:'',
      valorInputEscolaridade:''
    }

    irParaProximaEtapa = () =>{
        const novaResposta = {
          nome: this.state.valorInputNome,
          idade: this.state.valorInputIdade,
          email: this.state.valorInputEmail,
          escolaridade: this.state.valorInputEscolaridade
        }
        const outraRespostas = [...this.state.resposta, novaResposta]
        this.setState({etapa: this.state.etapa + 1, novaResposta: outraRespostas})
      }

    OnChangeNome = (event) =>{
        this.setState({valorInputNome: event.target.value})
    }

    OnChangeIdade = (event) =>{
        this.setState({valorInputIdade: event.target.value})
    }

    OnChangeEmail = (event) =>{
        this.setState({valorInputEmail: event.target.value})
    }

    OnChangeEscolaridade = (event) =>{
        this.setState({valorInputEscolaridade: event.target.value})
    }

    if(){

    }
  
    render() {
      return (
        <FormularioEtapa1>
          <h1>ETAPA 1 - DADOS GERAIS</h1>
          <h2>1. Qual seu nome?</h2>
          <input 
          value = {this.props.valorInputNome}
          onChange = {this.props.OnChangeNome}
          placeholder = "Nome"
          />
          <h2>2. Qual sua idade?</h2>
          <input
          value = {this.props.valorInputIdade}
          onChange = {this.props.OnChangeIdade}
          placeholder = "Idade"
          />
          <h2>3. Qual seu email?</h2>
          <input
          value = {this.props.valorInputEmail}
          onChange = {this.props.OnChangeEmail}
          placeholder = "Email"
          />
          
          <PerguntasForm
          perguntas={"4. Qual a sua escolaridade?"}
          opcoes={[
            "Ensino médio incompleto",
            "Ensino médio completo",
            "Ensino superior incompleto",
            "Ensino superior completo"
          ]}
        />
        
        </FormularioEtapa1>
      )
  
    }
  
  }