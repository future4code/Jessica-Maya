import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
  input{
    margin-top: 10px;
    width: 20vw;
    height: 5vh;
    opacity: 1px
  }

  button{
    width: 5vw;
    height: 5vh;
    margin: 5px
  }

`


class App extends React.Component {

 state= {

       postagem: [
    {
      nomeUsuario: 'Paulinha',
      fotoUsuario: 'https://i.pravatar.cc/150?img=2',
      fotoPost: 'https://picsum.photos/id/10/200/150'

   },

   {
    nomeUsuario: 'Ana Julia',
    fotoUsuario: 'https://i.pravatar.cc/150?img=1',
    fotoPost: 'https://picsum.photos/id/237/200/150'

 },

 {
  nomeUsuario: 'Gabriel',
  fotoUsuario: 'https://i.pravatar.cc/150?img=8',
  fotoPost: 'https://picsum.photos/id/100/200/150'

},
  ],
   
   valorInputUsuario: '' ,
   valorInputFoto: '',
   valorInputPostagem: ''


 };

 adicionarPessoa = () =>{
   const novoPost = {
    nomeUsuario: this.state.valorInputUsuario,
    fotoUsuario: this.state.valorInputFoto,
    fotoPost: this.state.valorInputPostagem
   };
   //  console.log("adicionou", novoPost)

   const novasPessoas = [...this.state.postagem, novoPost];

   this.setState({
     postagem: novasPessoas,
     valorInputUsuario: "",
     valorInputFoto: "",
     valorInputPostagem: ""
   });
   
 
 }
    onChangeInputUsuario = (event) =>{

    this.setState ({valorInputUsuario: event.target.value})
   }

    onChangeInputFoto = (event) =>{

      this.setState ({valorInputFoto: event.target.value})
    }

   onChangeInputPostagem = (event) =>{
    this.setState({valorInputPostagem: event.target.value})
    }

  render() {

  const listaDePosts = this.state.postagem.map((pessoa)=>{
    return(
      <Post
        
        nomeUsuario= {pessoa.nomeUsuario}
        fotoUsuario= {pessoa.fotoUsuario}
        fotoPost = {pessoa.fotoPost}
      />
    )
  });

    return (

      <MainContainer>
        
         <input
         value= {this.state.valorInputUsuario}
         onChange= {this.onChangeInputUsuario}
         placeholder= "Seu Nome"
         />
         <input 
         value={this.state.valorInputFoto}
         onChange={this.onChangeInputFoto}
         placeholder= "link da sua Foto"
         />
         <input 
         value={this.state.valorInputPostagem}
         onChange={this.onChangeInputPostagem}
         placeholder= "link da foto sua postagem"
         />

         <button onClick={this.adicionarPessoa}>Postar</button>
         {listaDePosts}
        
        </MainContainer>
        
    );
  }
}

export default App;
