import styled from "styled-components";


export const ContainerHeader = styled.header `
    background-color: #00b8e2;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem;
    width: 96.5vw;
    margin: 0;
    
`

export const Form = styled.form `
`

export const Input = styled.input`
    margin: 0% .6rem;
    padding: 0.8rem;
    border: none ;
    outline: none ;
    `

export const Button = styled.button`
    padding: 0.6rem 2.5rem 0.6rem 2rem;
    color: white;
    background-color: transparent;
    border: solid white 2px;
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    margin: 0%.5rem;
    :hover{
        background-color: white;
        color:  #00b8e2;
    }
`