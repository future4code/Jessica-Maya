import {Link} from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useHistory} from 'react-router-dom'
import {ContainerAdm,  ContainerTravel} from "./styled"

const AdminHomePage =() =>{

    const [tripId, setTripId]=useState([])
    const token = localStorage.getItem('token')
    const history = useHistory()

    const goToCreateTrips = () =>{
        history.push("/admin/trips/create")
    }
    const goToLogOut = ()=>{
        history.replace("/login")
    }

    useEffect(()=>{
      axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/jessica-bento-maryam/trips")
      .then((res)=>{
        setTripId(res.data.trips)
        console.log(res.data.trips)
    })
    .catch((error)=>{
        console.log(error.response)
    })
    }, [])



    const DeleteTrip = (id) =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/jessica-bento-maryam/trips/${id}`
        const headers = {
            headers: {
                auth: token
            }}
        axios.delete(url, headers)
        .then((res)=>{
            console.log(res.data)
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }
    
    const viagens = tripId.map((trip)=>{
        const goToTripDetailsPage = () =>{
        history.push(`/admin/trips/${trip.id}`)}
        return <ContainerTravel key={trip.id}>
            <p><strong>Nome:</strong>{trip.name}</p>
            <p><strong>Descrição:</strong>{trip.description}</p>
            <p><strong>Planeta:</strong>{trip.planet}</p>
            <p><strong>Data:</strong>{trip.date}</p>
            <p><strong>Duração:</strong>{trip.durationInDays}</p>
            <button onClick={goToTripDetailsPage}>Candidatos</button>
                <button onClick={()=>DeleteTrip(trip.id)}>Deletar</button>
         
        </ContainerTravel>
    })

    return (
        <ContainerAdm>
            {viagens}
           <button onClick={goToCreateTrips}>Criar Viagem</button>
            <button onClick={goToLogOut}>log out</button>
        </ContainerAdm>
    )

}
export default AdminHomePage
