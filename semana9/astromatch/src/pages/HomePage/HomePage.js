import React,{useState, useEffect} from "react";
import styled from "styled-components";
import axios from 'axios';



const Profiles = styled.div`
    display:flex;   
    justify-content:center;
    flex-direction:column;
    align-items: center;
    border: 1px solid black;
    width: 500px;
`
const ContainerHome = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  
`

 const Photo = styled.img`
    padding-top: 20px;
    width: 400px;
    height: 350px;
`

const Button = styled.button`
    height: 30px;
    width: 50px;

    button:hover{
        background-color: red;
    }
`

const HomePage = (props)=>{
    const [profile, setProfile]=useState({})

    useEffect(()=>{
        getProfile()
    }, [])

    const getProfile = () =>{
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jessica-bento-maryam/person')
        .then((res)=>{
                setProfile(res.data.profile)
        })
        .catch((error)=>{
            console.log(error.response)
        })

    }

    const choosePerson = (id, choice)=>{
       const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jessica-bento-maryam/choose-person"
       const body={
           id: profile.id,
           choice: choice
       }
        axios.post(url, body)
        .then((res)=>{
            getProfile()
        })
        .catch((error)=>{
            console.log(error.response)
        })

    } 

    return(
        <div>
        <ContainerHome>
    {!profile ? <div>Acabaram os perfis 💔, aperte o botão de limpar!</div> : 
        <Profiles>
        <Photo src={profile.photo}/>
        <h1>{profile.name }, {profile.age}</h1>
        <p>{profile.bio}</p>
        <Button onClick={()=>choosePerson(true)}>✖️</Button>
        <Button onClick={()=>choosePerson(false)}>❤</Button>
        </Profiles> 
    }
        </ContainerHome>
        <Button onClick={()=> props.changePage()}>➡️</Button>
        </div>
    )
}
export default HomePage 
