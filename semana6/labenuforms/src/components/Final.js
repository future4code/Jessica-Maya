import React from 'react';
import styled from 'styled-components'

const FormularioFinal = styled.div`
display: flex;
flex-direction: column;
align-items: center;



`

export default class Final extends React.Component {
  

    render() {
      return (
        <FormularioFinal>
          <h1>O FORMULÁRIO ACABOU</h1>
          <h2>Muito obrigado por Participar! Entraremos em contato!</h2>
        </FormularioFinal>
      )
  
    }
  
  }