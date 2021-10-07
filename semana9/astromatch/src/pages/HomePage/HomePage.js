import React,{useState, useEffect} from "react";
import axios from 'axios';
import {Profiles, ContainerHome,Photo,Button, Header, ContainerButton, ButtonHeader, AcabouPerf,ButtonClear} from "./styled"

const HomePage = (props)=>{
    const [profile, setProfile]=useState({})


    const getProfile = () =>{
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jessica-bento-maryam/person')
        .then((res)=>{
                setProfile(res.data.profile)
        })
        .catch((error)=>{
            console.log(error.response)
        })

    }

    const choosePerson = (idPessoa,choicePessoa)=>{
       const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jessica-bento-maryam/choose-person"
       const body={
           id: idPessoa,
           choice: choicePessoa
       }
        axios.post(url, body)
        .then((res)=>{
            getProfile()
            console.log(res.data)
        })
        .catch((error)=>{
            console.log(error.response)
        })

    } 
    useEffect(()=>{
        getProfile()
    }, [])

    return(
       
        <ContainerHome>

           {!profile ?   <Profiles>
            <Header>
            <h1>ASTROMETCH </h1>
            <ButtonHeader onClick={()=> props.changePage()}>↪️</ButtonHeader>
            </Header>
        <AcabouPerf>Acabaram os perfis 💔, aperte o botão de limpar!
        <ButtonClear onClick={()=> props.clearMatches()}>Apagar</ButtonClear>
        </AcabouPerf>

        </Profiles>   
        : 
        <Profiles>
            <Header>
            <h1>ASTROMETCH </h1>
            <ButtonHeader onClick={()=> props.changePage()}>↪️</ButtonHeader>
            </Header>
        <Photo src={profile.photo}/>
        <h2>{profile.name }, {profile.age}</h2>
        <p>{profile.bio}</p>
        <ContainerButton>
        <Button onClick={()=>choosePerson(profile.id, false)}>❌</Button>
        <Button onClick={()=>choosePerson(profile.id, true)}>❤️</Button>
        </ContainerButton>
        </Profiles> 

    }   
        </ContainerHome>
        
    )
}
export default HomePage 

{/* <ContainerHome>
{!profile ? <h1>Acabaram os perfis 💔, aperte o botão de limpar!</h1> : 
    <Profiles>
        <Header>
        <Button onClick={()=> props.changePage()}>➡️</Button>
        <h1>ASTROMETCH </h1>
        <Button onClick={ props.clearMatches}>Apagar</Button>
        </Header>
    <Photo src={profile.photo}/>
    <h2>{profile.name }, {profile.age}</h2>
    <p>{profile.bio}</p>
    <ContainerButton>
    <Button onClick={()=>choosePerson(profile.id, false)}>✖️</Button>
    <Button onClick={()=>choosePerson(profile.id, true)}>❤</Button>
    </ContainerButton>
    </Profiles> 
}   
    </ContainerHome> */}
