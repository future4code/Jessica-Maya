import React from "react";




export default class UserList extends React.Component{

    render(){
        console.log(this.props.nameUser)
        console.log(this.props.emailUser)
        console.log(this.props.createUser)
        return(
       
       <div>
    <label>Nome:</label>
    <input
     
      placeholder= " Nome"
      value={this.props.nameUser}
      onChange={this.props.onChangerNameUser}
    />
    <label >Email:</label>
    <input
     
      placeholder=" Email"
      value={this.props.emailUser}
      onChange={this.props.onChangerEmailUser}
    />
   
    
      <button onClick={()=> this.props.createUser()}>Salvar</button>
            </div>
        )
    }
}