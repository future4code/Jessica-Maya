import React from "react";
import axios from "axios";

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
                <div key={lista.name}>
                    {lista.name}
                    <button onClick={() => this.props.irParaAddMusicas()}>+</button>
                <button onClick={()=> this.deletePlayList(lista.id)}>X</button>
                </div>
            )
        })

        return(
            <div>
                <h1>LABEFY</h1>
                <input
                placeholder={"Crie sua playlist"}
                value={this.state.name}
                onChange={this.handleName}
                />
                {listaDasPlayLists}
                <button onClick={this.criarPlayList}> Adicionar </button>

            </div>
            

        )
    }

}