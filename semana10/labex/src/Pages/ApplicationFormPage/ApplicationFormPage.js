import {ContainerForm, ContainerButton,ContainerInput, Select, Input, Button} from "./styled"
import { useHistory } from "react-router-dom"
const ApplicationFormPage =() =>{
    const history = useHistory()

    const Voltar = () =>{
        history.push("/trips/list")
    }
    return (
        <ContainerForm>
                <h1>Inscreva-se para uma viagem</h1>
            <ContainerInput>
    
            <Select>
            <option>Escolha uma viagem</option>
                <option>Lua</option>
                <option>Marte</option>
                <option>Sartuno</option>
                <option>Júpiter</option>
                <option>Plutão</option>
            </Select>

            <Input
            placeholder="Nome"
            />

            <Input type= "Number"
            placeholder="Idade"
            />

            <Input
            placeholder="Texto de Candidatura"
            />

            <Input
            placeholder="Profissão"
            />

            <Select name="paises" id="paises">
            <option value="Brasil" selected="selected">Brasil</option>
            <option value="Afeganistão">Afeganistão</option>
            <option value="África do Sul">África do Sul</option>
            <option value="Albânia">Albânia</option>
            </Select>
            </ContainerInput>

            <ContainerButton>
                <Button>Criar</Button>
                <Button onClick={Voltar}>Voltar</Button>
            </ContainerButton>
        </ContainerForm>
    )
}
export default ApplicationFormPage