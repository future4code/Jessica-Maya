import {ContainerHomePage, ContainerButton, Button} from "./styled"
import { useHistory } from "react-router-dom"

const HomePage =() =>{
    const history = useHistory()

    const goToListTripPage=()=>{
        history.push("/trips/list")
    }

    const goToLoginPage =()=>{
        history.push("/login")
    }
    
    return (
        <ContainerHomePage>
           <h1>LABE - X</h1>
           <ContainerButton>
            <Button onClick={goToListTripPage}>Viagens</Button>
            <Button onClick={goToLoginPage}>Área Adm</Button>
            </ContainerButton>
        </ContainerHomePage>
    )
}
export default HomePage