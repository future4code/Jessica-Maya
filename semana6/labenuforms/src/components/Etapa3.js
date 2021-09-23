import React from 'react';
import PerguntasForm from './perguntas';
import styled from 'styled-components'

const FormularioEtapa3 = styled.div`
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

export default class Etapa3 extends React.Component {
  
    state ={
        etapa: 3,
        resposta: 
        [{
           graducaoNaoFez: "",
           cursoComplementar: "",
           
        }],
        valorInputGraduacaoNaoFez: '',
        valorInputComplementar:'',
       
      }

      OnChangeGraduacaoNaoFez = (event) =>{
        this.setState({valorInputGraduacaoNaoFez: event.target.value})
    }

    OnChangeComplementar = (event) =>{
        this.setState({valorInputComplementar: event.target.value})
    }

    render() {
      return (
        <FormularioEtapa3>
          <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
          <h2>7. Porque você não terminou um curso de graduação?</h2>
          <input
          value = {this.props.valorInputGraduacaoNaoFez}
          onChange = {this.props.OnChangeGraduacaoNaoFez}
          placeholder = "Porque não fez graduação"
          />
          <h2>8. Você fez algum curso complementar?</h2>
          <input
          value = {this.props.valorInputComplementar}
          onChange = {this.props.OnChangeComplementar}
          placeholder = "Curso Complementar"
          />
          <PerguntasForm
          perguntas={" Você fez algum curso complementar?"}
          opcoes=
          {["Nenhum",
           "Curso técnico", 
          "Curso Profissionalizante"
        ]}
        />
        </FormularioEtapa3>
      )
  
    }
  
  }