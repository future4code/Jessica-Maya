import { useEffect, useState } from "react"
import { BASE_URL} from "../constants/urls"
import axios from "axios"
import { CardContestId } from "../components/CardId"
import{ CardContest } from "../components/CardContest"

 export const CardLottery = () => {
    const [games, setGames] = useState([])
    const [gameBet, setGameBet] = useState("")
    const [contest, setContest] = useState([])

    const getGamesBet = () => {
        axios.get(`${BASE_URL}/loterias`)
        .then((res) => {
            setGames(res.data)
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    const getContest = () => {

        axios.get(`${BASE_URL}/loterias-concursos`)

        .then((res) => {
            setContest(res.data)
            console.log(res.data)
        }).catch((error) => {

            console.log(error)
        })
    }

    useEffect(()=>{
        getGamesBet()
        getContest()
    },[])

    const handleGameBet = (event) => {
        setGameBet(event.target.value)
    }

    const contestFind = contest.find((element) => {
        return element.concursoId
      });
      console.log(contestFind)

    return (
        <div>
            <select onChange={handleGameBet}>
                <option value={''}>Nenhum</option>
                {games.map((game) =>{
                    return(
                        <option key={game.id} value={game.id}>
                            {game.nome}
                        </option>
                    )
                })}
            </select>
            {gameBet && <CardContestId game={gameBet}/>}
            {gameBet && <CardContest game={gameBet} contest={contest}/>}
        </div>
    )
}