import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from 'axios'

const Photo = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 20px;
`

const Cardlista = styled.div`
    display:flex;   
    justify-content:space-around;
    align-items: center;
    border: 1px solid black;
    border-radius: 20px;
    margin-top: 20px;
    height: 20vh;
    width: 40vw;
`
const ContainerMatch = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`
const Button = styled.button`
    height: 30px;
    width: 50px;
`

const MatchesPage = (props)=>{
    const [matchesList, setMatchesLis]=useState([])

    useEffect(()=>{
        getMatches()
    }, [])

    const getMatches = () =>{
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jessica-bento-maryam/matches"
        axios.get(url)
        .then((res)=>{
            setMatchesLis(res.data.matches)
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }

    const listMatches = matchesList.map((match)=>{
        return <Cardlista>
        <Photo src={match.photo}/>
        <h3>{match.name}</h3>
        </Cardlista>
    })

    return(
        <div>
         <ContainerMatch>
          {listMatches}
         </ContainerMatch>
         <Button onClick={()=> props.changePage("0")}>⬅️</Button>
         </div> 
    )
}
export default MatchesPage