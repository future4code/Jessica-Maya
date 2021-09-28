import React from "react";
import axios from "axios";
import styled from "styled-components";

const ContainerSpace = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 2%;

  
`

export default class App extends React.Component{

  state={
    missions: []
  }

  componentDidMount(){
    this.getMissions()
  }

    getMissions= () =>{
      axios.get('https://api.spacexdata.com/v3/missions')
      .then((resposta)=>{
        this.setState({missions: resposta.data})
        console.log(resposta.data)
      }).catch((error)=>{
        console.log(error)
      })
    }
  
  render(){
    const missionsList= this.state.missions.map((mission)=>{
        return (
        <div key={mission.mission_id}>
          <p>Nome: {mission.mission_name}</p>
          <p>Fabricantes: {mission.manufacturers.map((manufacturer) => <p>{manufacturer}</p>)}</p>
          <a href={mission.wikipedia}>Link para Wikipedia</a>
          <hr/>
        </div>
        )
    })
    return (
      <div className="App">
        <ContainerSpace>
       <h1>Missões da SpaceX</h1>
       {missionsList}
       </ContainerSpace>
      </div>
    );
  }
  }
  
