import {ContainerList, ContainerDetalhes, ContainerSelect, Select} from "./styled"
import { useHistory } from "react-router-dom"
import React, {useState, useEffect} from "react"
import axios from "axios"

const ListTripsPage =() =>{

    const history = useHistory()

    const goToApplicationFormPage = () =>{
        history.push("/trips/application")
    }

    const [listTrip, setListTrips]=useState({})

    const getTrips = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trips"
        axios.get(url)
        .then((res)=>{
            console.log(res.data.trips)
            setListTrips(res.data.trips)
        }).catch((error)=>{
            console.log(error.mensage)
        })

    }

    useEffect(() => {
        getTrips()
    }, [])
       
    return (
        <ContainerList>
            
            <ContainerSelect>
            <Select>
                <option>Ordernação</option>
                <option>Data</option>
            </Select>
            </ContainerSelect>
            <ContainerDetalhes>
           <p><strong>Nome:</strong> {listTrip.name}</p>
           <p><strong>Descrição:</strong>Uma Viagem inesquecivel ao outro planeta cheio de novidades.</p>
           <p><strong>Planeta:</strong>Marte</p>
           <p><strong>Duração:</strong> 200 dias</p>
           <p><strong>Data:</strong>20/20/20</p>
            </ContainerDetalhes>
            <button onClick={goToApplicationFormPage}>Inscreva-se</button>
        </ContainerList>
    )
}
export default ListTripsPage