import React, {useState, useEffect} from "react"
import axios from 'axios'
import {Cardlista, Photo, ContainerMatch, Button, Header,  ContainerTotal, AcabouList } from "./styled"


const MatchesPage = (props)=>{
    const [matchesList, setMatchesList]=useState([])


    const getMatches = () =>{
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jessica-bento-maryam/matches"
        axios.get(url)
        .then((res)=>{
            setMatchesList(res.data.matches)
        })
        .catch((error)=>{
            alert(`Deu um erro inesperado! Tente novamente.`)
        })
    }


    const listMatches = matchesList.map((match)=>{
        return ( <Cardlista>
            <Photo src={match.photo}/>
            <h3>{match.name}</h3>
            ❤️‍🔥
            </Cardlista>)
    })


    useEffect(()=>{
        getMatches()
    }, [])

    return(
        <ContainerTotal>
             {listMatches.length > 0 ? <ContainerMatch>
         <Header>
            <Button onClick={()=> props.changePage("0")}>↩️</Button>
            <h1>ASTROMETCH </h1>
         </Header>
         {listMatches}
         </ContainerMatch>  
         :
         <ContainerMatch>
         <Header>
            <Button onClick={()=> props.changePage("0")}>↩️</Button>
            <h1>ASTROMETCH </h1>
         </Header>
         <AcabouList>Você não tem Match! 💔</AcabouList>
         </ContainerMatch>
        } 
         </ContainerTotal>
    )
}
export default MatchesPage