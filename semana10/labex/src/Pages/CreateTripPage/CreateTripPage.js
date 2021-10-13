import {ContainerInputs, Select, Input, Button, ContainerButton} from "./styled"
import { useHistory } from "react-router-dom"

const CreateTripPage =() =>{

    const history = useHistory()

    const goToAdmin = () =>{
        history.push("/admin/trips/list")
    }
    return (
        <div>
            <h1>Criar Viagem</h1>
            <ContainerInputs>
            <Input
            placeholder="Nome"
            />
            <Select>
                <option>Escolha um Planeta</option>
                <option>Lua</option>
                <option>Marte</option>
                <option>Sartuno</option>
                <option>Júpiter</option>
                <option>Plutão</option>
           </Select>
           <Input id="date" type="date"/>
           <Input
           placeholder="Descrição"
           />
           <Input type="Number"
           placeholder="Duração da Viagem"
           />
           </ContainerInputs>
           <ContainerButton>
           <Button>Criar</Button>
           <Button onClick={goToAdmin}>Voltar</Button>
           </ContainerButton>
        </div>
    )
}
export default CreateTripPage