import React from "react";
import axios from "axios";
import styled from "styled-components"

const ContainerUser = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;
    justify-content: space-between;
    width: 300px;
    height: 30px;
    margin-bottom: 5px;
    border: 1px solid black;
    padding: 12px;  
`
const ButtonPag = styled.button`
cursor: pointer;
margin-top: 30px
`

const Button = styled.button`
border: none;
cursor: pointer;
color: red;
`

const ContainerLista = styled.div`
 width: 50vw;
 height: 60vh;
 display: flex;
 justify-content: center;
 flex-direction: column;
 align-items: center;
 margin-left: 20em;
 margin-top: 60px;
 
 input{
     margin-top: 20px
 }


`

const headers = {
    headers:{
        Authorization: "jessica-bento-maryam"
    }
}

export default class TelaListaUsuarios extends React.Component{

    state={
        usuarios: []
    }

    componentDidMount(){
        this.getAllUser()
    }

getAllUser = () =>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

    axios.get(url, headers)
    .then((resposta)=>{
        this.setState({usuarios: resposta.data})
    })
    .catch((error)=>{
        alert("Houve um erro, tente novamente!")
    })
}


deleteUser = (id) =>{
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

    axios.delete(url, headers)
    .then((resposta)=>{
        alert("Usuario deletado com Sucesso!")
        this.getAllUser()
    })
    .catch((error)=>{
        alert("Houve um erro, tente Novamente!")
    })
}

    render(){
        
        const listaDeUsuarios = this.state.usuarios.map((usuarios)=>{
            return(
                <ContainerUser key={usuarios.id}>
                {usuarios.name}
                <Button onClick={() => this.deleteUser(usuarios.id)}>X</Button>
               </ContainerUser>
            )
        })

        return(
            <ContainerLista>

                <h1>Lista de Usuarios</h1>
                {listaDeUsuarios}
                <ButtonPag onClick={this.props.irParaTelaCadastro}>Ir para Cadastro</ButtonPag>
            </ContainerLista>
        )
    }
}