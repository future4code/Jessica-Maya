import React from "react";
import axios from "axios";
import styled from "styled-components";

const ContainerMusica = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

`

const headers = {
    headers:{
        Authorization: "jessica-bento-maryam"
    }
}

export default class TelaAddMusicas extends React.Component{

    state={
        tracks:[],
        playlists: [],
        name: '',
        artist: '',
        url: '',
        playlistId:  "",
        
    }

    componentDidMount(){
        this.mostrarPlayList()
    }

    mostrarPlayList  = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        axios.get(url, headers)
        .then((resposta)=>{
            this.setState({playlists: resposta.data.result.list})
           this.getPlaylistTracks()
        })
        .catch((error)=>{
            alert(error)
        })
    }

        AdicionarMusica = () =>{
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistId}/tracks`
    const body = {
        name: this.state.name,
        artist: this.state.artist,
        url: this.state.url
    }
    axios.post(url, body, headers)
    .then((resposta)=>{
        this.setState({name: '', artist: '', url: ''})
        console.log(resposta.data)
    })
    .catch((error)=>{
        this.mostrarPlayList()
        this.getPlaylistTracks()
        alert(error.response.data.message)
    })
}

    getPlaylistTracks = () =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistId}/tracks`

         axios.get(url,headers)
         .then((resposta)=>{
             console.log(resposta)
            this.setState({tracks: resposta.data.result.tracks})
            console.log(resposta.data)
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

    const listaDasPlayLists = this.state.playlists.map((lista)=>{
        return(
            <option key={lista.name} value={lista.url}>
               {lista.name}
            </option>
        )
    })

    
    
    const music = this.state.tracks.map((item)=>{
        return <div>
            <h4>Nome:</h4> <p>{item.name}</p>
            <h4>Artista:</h4><p>{item.artist}</p>
            <audio src={item.url} controls></audio>
            
        </div>
    })


    return(
            <ContainerMusica>

            <select onChange={this.mostrarPlayList()}>
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


                <button type='submit'onClick={()=> this.AdicionarMusica()} >Adicionar Musica</button>
                <button onClick={()=> this.props.irParaAddPlayList()}>Voltar</button>
                {music}
                

            </ContainerMusica>
        )
    }

} 