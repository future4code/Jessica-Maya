import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../constants/urls"
import { useParams } from "react-router-dom"


export const  CardContestId = (props) => {
    console.log(props)
    const [contestId, setContestId] = useState({})

    const getContestId = (gameBet) => {
        console.log(gameBet)
        axios.get(`${BASE_URL}/concursos/${gameBet}`)
        .then((res) => {

            setContestId(res.data)
            console.log(res.data)

        }).catch((error) =>{
            console.log(error)
        })
    }

    useEffect(() => {
        getContestId(props.game)
    },[props.game])

    return(
        <div>
            <h1>{contestId.id}</h1>
            <p>{contestId.numeros}</p>
            <p>{contestId.data}</p>
        </div>
    )
}