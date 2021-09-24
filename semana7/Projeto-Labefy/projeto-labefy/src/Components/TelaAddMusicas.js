import React from "react";
import axios from "axios";
import TelaListaPlayList from "./TelaListaPlayList";

const headers = {
    headers:{
        Authorization: "jessica-bento-maryam"
    }
}

export default class TelaAddMusicas extends React.Component{

    state={
        playlistId: [],
        name: '',
        artist: '',
        url: '',
    }
    

addTrackToPlaylist = (playlistId) =>{
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`
    const body = {
        name: this.state.name,
        artist: this.state.artist,
        url: this.state.url
    }
    axios.post(url, body, headers)
    .then((resposta)=>{
        this.setState({playlistId: resposta.data})
        console.log({playlistId: resposta.data})
    })
    .catch((error)=>{
        console.log(error)
    })
}

handleName= (event)=>{
    this.setState({name: event.target.value})
}

handleArtist= (event)=>{
    this.setState({artist: event.target.value})
}

handleUrl= (event)=>{
    this.setState({url: event.target.value})
}

render(){
    
    const listaDasPlayLists = this.state.playlistId.map((lista)=>{
        return(
            <option key={lista.name} value={lista.url}>
                {lista.name}
            </option>
        )
    })

   


    return(
            <div>
            
            <select onChange={this.getAllList}>
                <option>Escolha sua playlist</option>
                {listaDasPlayLists}
                </select>
                <input
                    placeholder={"Digite o nome da Música"}
                    value={this.state.name}
                    onChange={this.handleName}
                />
                <input
                placeholder={"Digite o nome da Banda"}
                value={this.state.artist}
                onChange={this.handleArtist}
                />
                <input
                placeholder={"Insere o link da Música"}
                value={this.state.url}
                onChange={this.handleUrl}
                />
                <TelaListaPlayList/>
                <button onClick={this.props.irParaListas}>listas</button>
                
            </div>
        )
    }

}