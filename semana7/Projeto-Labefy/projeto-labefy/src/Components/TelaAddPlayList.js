import React from "react";
import axios from "axios";
import styled from 'styled-components';



const ContainerPlay = styled.div`
    display:flex;
    flex-direction : column;
    align-items: center;
    margin-top: 5em;
    
    

    button{
        margin-top: 2em;
        cursor: pointer;
        border-spacing: 5px ;
        font-size: 18px;
        opacity: 20px;
        
    }

    button:active{

        background-color: green;
        color: white;

    }

    input{
        text-align: center;
        border: 1px salmon green;
        color: green;
        height: 20px;
        font-size: 18px
    }
`

const ContainerPlaylist = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-around;
    border: 1px solid black;
    height: 2em;
    width: 20vw;
    font-size: 20px;
    margin-top: 20px;
    color: grey;

`
const ButtonRed = styled.button`
    color: red;

`
const ButtonGreen = styled.button`
    color: green;

`

const ContainerText = styled.div`
    color: green;
    height: 10vh;
    
`

const headers = {
    headers:{
        Authorization: "jessica-bento-maryam"
    }
}

export default class TelaAddPlayList extends React.Component{

    state={
        result: [],
        name: "",

    }

    handleName = (event) =>{
        this.setState({name: event.target.value})
    }

    componentDidMount(){
        this.mostrarPlayList()
    }

    criarPlayList = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.name
        }
          axios.post(url, body, headers)
        .then((resposta)=>{
            this.mostrarPlayList()
        })
        .catch((error)=>{
        alert(error.response.data.message)
        })
    }


    mostrarPlayList  = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        axios.get(url, headers)
        .then((resposta)=>{
            this.setState({result: resposta.data.result.list})

        })
        .catch((error)=>{
            alert(error.response.data.message)
        })
    }

    deletePlayList = (playlistId) =>{
        const url=`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`
        axios.delete(url, headers)
        .then((resposta)=>{
            this.mostrarPlayList()
        })
        .catch((error)=>{
            alert(error.response.data.message)
        })
    }



    render(){

        const listaDasPlayLists = this.state.result.map((lista)=>{
            return(
                <ContainerPlaylist key={lista.name}>
                    {lista.name}
                    <ButtonGreen onClick={() => this.props.irParaAddMusicas()}>+</ButtonGreen>
                <ButtonRed onClick={()=> this.deletePlayList(lista.id)}>X</ButtonRed>
                </ContainerPlaylist>
            )
        })

        return(
            <div>
                <ContainerText>
                <h1>LABEFY</h1>
                </ContainerText>
                <ContainerPlay>
                <input
                placeholder={"Crie sua playlist"}
                value={this.state.name}
                onChange={this.handleName}
                />
                <button type="submit" onClick={this.criarPlayList}> Adicionar </button>
                </ContainerPlay>
                <div>
                {listaDasPlayLists}
                </div>
                
            </div>


        )
    }

} 