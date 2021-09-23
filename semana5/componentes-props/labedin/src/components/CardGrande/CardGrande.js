import React from 'react';
import styled from 'styled-components';

const Imagem = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`  
const BigCardContainer = styled.main `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    width: 40vw;
`

const BigCardTitulo = styled.h4`
    margin-bottom: 15px;
`
const BigCardTexto = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    margin-left: 12px;
`


function CardGrande(props) {
    return (
        <BigCardContainer>
            <Imagem src={ props.imagem } /> 
            <div>
                <BigCardTitulo>{ props.nome }</BigCardTitulo>
                <p>{ props.descricao }</p>
            </div>
        </BigCardContainer>
    )
}

export default CardGrande;