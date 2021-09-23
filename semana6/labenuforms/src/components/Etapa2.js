import React from 'react';
import styled from 'styled-components'

const FormularioEtapa2 = styled.div`
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

export default class Etapa2 extends React.Component {
  
    state ={
        etapa: 2,
        resposta: 
        [{
           curso: "",
           unidadeCurso: "",
           
        }],
        valorInputCurso: '',
        valorInputUnidade:'',
       
      }

      OnChangeCurso = (event) =>{
        this.setState({valorInputCurso: event.target.value})
    }

    OnChangeUnidade = (event) =>{
        this.setState({valorInputUnidade: event.target.value})
    }

    render() {
      return (
        <FormularioEtapa2>
          <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
          <h2>5. Qual seu curso?</h2>
          <input
          value = {this.props.valorInputCurso}
          onChange = {this.props.OnChangeCurso}
          placeholder = "Curso"
          />
          <h2>6. Qual a unidade de ensino?</h2>
          <input
          value = {this.props.valorInputUnidade}
          onChange = {this.props.OnChangeUnidade}
          placeholder = "Unidade de ensino"
          />
          
        </FormularioEtapa2>
      )
  
    }
  
  }