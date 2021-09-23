import React from "react";
import styled from 'styled-components'


const InputPerguntas = styled.div`

display: flex;
flex-direction: column;
align-items: center;
`

export default function PerguntasForm(props) {
  return (
    <InputPerguntas>
      <h2>{props.perguntas}</h2>
      <select>
        {props.opcoes.map(opcao => (
          <option value={opcao}>{opcao}</option>
        ))}
      </select>
    </InputPerguntas>
  );
};
