import React from "react";

const telaImagem = {

}



class App extends React.Component {
  state ={
     mensagem: [
       {
       fotoUsuario: "https://png.pngtree.com/png-vector/20190830/ourlarge/pngtree-messages-icon-design-vector-png-image_1714216.jpg" ,
       nomeDoUsuario: "Jessica",
       mensagemRecebida:"oi"

       }
     ],
     valorFotoUsuario: "https://png.pngtree.com/png-vector/20190830/ourlarge/pngtree-messages-icon-design-vector-png-image_1714216.jpg",
     valorInputUsuario: "",
     valorInputMensagem: ""
  }

  adicionarMensagem= () =>{

      const novaMensagem = {
         nomeDoUsuario: this.state.valorInputUsuario,
         mensagemRecebida: this.state.valorInputMensagem,
         fotoUsuario: this.state.valorFotoUsuario
         
      }
    
      const mensagemNovas = [...this.state.mensagem, novaMensagem];

      this.setState({mensagem: mensagemNovas, valorInputUsuario: "",
      valorInputMensagem: ""});
  };

  onChangeInputUsuario = (event) =>{

    this.setState({valorInputUsuario: event.target.value})
  };

  onChangeInputMensagem = (event) => {

    this.setState({valorInputMensagem: event.target.value})
  };


render(){
    const listaDeMensagens =this.state.mensagem.map((frase)=>{
      return (
        <telaImagem>
          {frase.nomeDoUsuario},
          {frase.mensagemRecebida}
        </telaImagem>
      )
    });



    return(
    <div>

    <blocoMensagem>{listaDeMensagens}</blocoMensagem>
   <div>
        <input
         value= {this.state.valorInputUsuario}
         onChange=  {this.onChangeInputUsuario}
        placeholder= {"Seu nome"}
       />
       <input
        value={this.state.valorInputMensagem}
        onChange={this.onChangeInputMensagem}
        placeholder={"Digite sua Mensagem"}
   />
   </div>

   <button onClick={this.adicionarMensagem}>Enviar</button>

   </div>
  )

}

}
export default App;
