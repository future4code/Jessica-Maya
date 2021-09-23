import React from 'react';
import styled from 'styled-components';

const Imagem = styled.img`
    width: 70px;
`  
const CardPequenoTexto = styled.div `
   display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 5px 5px;
    margin-top: 5px;
    margin-bottom: 1px;
    height: 90px;
    width: 40vw;
`

const CardPequenoFrase = styled.p`
    margin-left: 6px
    
`


function CardPequeno(props){
   return (
      <CardPequenoTexto>
          <Imagem src={props.imagem} />
          <h4>{props.texto}</h4>
          <CardPequenoFrase>{props.descricao}</CardPequenoFrase>

      </CardPequenoTexto>
   )
}

export default CardPequeno;