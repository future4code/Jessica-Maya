import { useNavigate } from "react-router-dom"
import { goToHome } from "../../Router/coordinares"
import { ContainerError } from "./styled"

export const Error = () => {
    const navigate = useNavigate()
    return <ContainerError>
        <h1>Pagina não encontrada</h1>
        <button onClick={() => goToHome(navigate)}>Ir para a Home</button>
    </ContainerError>
}
