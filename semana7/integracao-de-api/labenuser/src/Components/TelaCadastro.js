import React from "react";
import axios from "axios";
import styled from "styled-components";

const Button = styled.button`
cursor: pointer;
margin-top: 30px
`
const ContainerCadastro = styled.div`
 width: 50vw;
 height: 60vh;
 display: flex;
 justify-content: center;
 flex-direction: column;
 align-items: center;
 border: 1px solid black;
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

export default class TelaCadastro extends React.Component{

    state={
        name: "",
        email: ""
    }


    handleName = (event) =>{
        this.setState({name: event.target.value})
    }

    handleEmail = (event) =>{
        this.setState({email: event.target.value})
    }


    createUser = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.name,
            email: this.state.email
        }
        axios.post(url, body, headers)
        .then((resposta) =>{
            alert("Usuario(a) cadastrado com sucesso!")
            this.setState({name: "", email: ""})
        })
        .catch((error) =>{
            alert(error.response.data.message)

        })
    }



    render(){
        return(
                 <ContainerCadastro>
                <h1>Cadastro</h1>
                <input
                    value={this.state.name}
                    onChange={this.handleName}
                    placeholder={"Nome"}

                />
                <input
                    value={this.state.email}
                    onChange={this.handleEmail}
                    placeholder={"E-mail"}

                />

                <Button onClick={this.createUser}>Cadastrar</Button>
                <Button onClick={this.props.irParaTelaListaUsuarios}>Ir para lista Usuarios</Button>
            </ContainerCadastro>
        )
    }
}