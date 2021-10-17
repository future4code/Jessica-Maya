import {ContainerText} from "./styled"
import axios from 'axios'
import {useParams} from 'react-router-dom'
import React, {useEffect, useState} from "react"
import { useProtectPage } from "../../Hooks/useProtectPage"
import TripInfoCard from './TripInfoCard'
import CandidatesList from './CandidatesList'
import TripInfoItem from "./TripInfoItem"


const TripDetailsPage =() =>{
   const [trip, setTrip]=useState()
    console.log(trip)
   const params =useParams()
   useProtectPage()

   const getTripDetails = () =>{
     
       axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/jessica-bento-maryam/trip/${params.tripId}`, {
           headers: {
        auth: window.localStorage.getItem('token')
        }
    })
        .then((res)=>{
            setTrip(res.data.trip)
            console.log(res.data)
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }

    useEffect(()=>{
        getTripDetails()
    }, [])

    const decideCandidate = (approve, candidateId) =>{
        const body = {
            approve: approve
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/jessica-bento-maryam/trips/${params.tripId}/candidates/${candidateId}/decide`, body, {
             headers: {
            auth: window.localStorage.getItem('token')
        }
    })
        .then((res)=>{
           getTripDetails()
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }
    return (
        <div>
            <div>
            {trip ? <div><TripInfoCard info={trip}/> <CandidatesList candidates={trip.candidates} decideCandidate={decideCandidate}/></div> 
            : <div>Carregando...</div>}
            </div>
        </div>
    )
}
export default TripDetailsPage


