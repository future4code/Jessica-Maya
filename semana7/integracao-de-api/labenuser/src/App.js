import React from "react";
import axios from "axios";
import UserList from "./UserList";
import ListaUsuarios from "./ListaUsuarios"



const headers = {
  headers: {
    Authorization: "jessica-bento-maryam"

  }
}


export default class App extends React.Component{
  state={
    registro: [],
      nameUser: '',
      emailUser: '',
      cadastro: false
    } 
    
    dadosDosUsuarios = () =>{
      this.setState({cadastro: false})
    }

    cadastroDosUsuarios = ()=>{
      this.setState({cadastro: false})
    }

    renderizarPagina = () =>{
      if(this.state.cadastro){
          return <ListaUsuarios cadastroDosUsuarios={this.cadastroDosUsuarios}/>
      }
    }

    componentDidMount() {
      this.getAllUsers();
    }


    onChangerNameUser=(event)=>{
        this.setState({nameUser: event.target.value})
    }

    onChangerEmailUser=(event)=>{
      this.setState({emailUser: event.target.value})
    }

    createUser = () =>{
        const url= "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
          name: this.state.nameUser,
          email: this.state.emailUser,
          
        }
        axios.post(url, body, headers)
        .then((res)=>{
            this.setState({nameUser: ""})
            this.setState({emailUser: ""})
            this.getAllUsers()
        })
        .catch((err)=>{
          alert(err.response.data.message)
        })
    }

    getAllUsers = () =>{
      const url="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
     axios.get(url, headers)
     .then((res)=>{
        this.setState({registro: res.data})
     })
     .catch((err)=>{

        alert(err.response.data.message? err.response.data.message: "erro desconhecido")

     })

    }

   
  render(){

      // const listaDeRegistros = this.state.registro.map((dados)=>{
        
      //     return <ul key={dados.id}>{dados.name}</ul>;
          
      // })
     

    return(
      <div>
        <h1>LabenUser</h1>
        
        <button>Ir para outra página</button>
      
        
  
    <UserList
    nomeUser={this.state.nameUser}
    emailUser={this.state.emailUser}
    onChangerNameUser={this.onChangerNameUser}
    onChangerEmailUser={this.onChangerEmailUser}
    registro={this.state.registro}
    createUser={this.createUser}
    />
     <ListaUsuarios
        nomeUser={this.state.nameUser}
        emailUser={this.state.emailUser}
        onChangerNameUser={this.onChangerNameUser}
        onChangerEmailUser={this.onChangerEmailUser}
        registro={this.state.registro}
        createUser={this.createUser}
      />
      
      </div>
    )
  }
}
