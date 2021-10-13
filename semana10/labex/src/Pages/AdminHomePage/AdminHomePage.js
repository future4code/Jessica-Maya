import {ContainerTravel, ContainerAdm} from "./styled"
import { useHistory } from "react-router-dom"

const AdminHomePage =() =>{
    const history = useHistory()

    const goToCreateTripPage = () =>{
        history.push("/admin/trips/create")
    }
    const goToLogOut = ()=>{
        history.replace("/login")
    }

    return (
        <ContainerAdm>
            <ContainerTravel>
            <p>Viagem ao centro da terra </p>
            <button>🚮</button>
            </ContainerTravel>
            <button onClick={goToCreateTripPage}>Criar Viagem</button>
            <button onClick={goToLogOut}>log out</button>
        </ContainerAdm>
    )
}
export default AdminHomePage