import React from "react"





export default class UserList extends React.Component{
    render(){
        const listasDosNomes = this.props.registro.map((dados)=>{
            return <li key={dados.id}>{dados.name}</li>
        })
        return(

            <div>
                {listasDosNomes}
                <h1>Lista De Nomes Cadastrados</h1>
                <button>Voltar ao Cadastro</button>
    
            </div>
        )
    }
}