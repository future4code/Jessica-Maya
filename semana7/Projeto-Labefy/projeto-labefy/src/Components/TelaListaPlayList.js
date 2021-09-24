import React from "react";
import axios from "axios";

const headers = {
    headers:{
        Authorization: "jessica-bento-maryam"
    }
}

export default class TelaListaPlayList extends React.Component{
    state={
        playlistId: []
    }

   

    mostrarLista =  async (playlistId) =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`
        const response = await axios.get(url, headers)
       
    }
    
    render(){
        const listaDasPlayLists = this.state.playlistId.map((lista)=>{
            return(
                <div key={lista.name}>
                    {lista.name}
                </div>
            )
        })
        return(
            <div>
                {listaDasPlayLists}
            </div>
        )
    }

}