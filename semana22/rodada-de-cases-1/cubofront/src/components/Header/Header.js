 import axios from "axios"
 import { useForm }  from "../../hooks/userForm"
 import { ContainerHeader, Input, Button, Form } from "./styled"
 import { BASE_URL } from "../../contants/url"
 import { useContext } from "react"
 import { GlobalContext } from "../../contexts/Global/GlobalContext"

 const Header = () => {
    const { request } = useContext(GlobalContext)

    const initialForm = {
        firstName: "",
        lasttName: "",
        participation: ""
    }

    const [form, onChange, clear] = useForm(initialForm)

    const sendUser = (event) => {
        event.preventDefault()
        const {firstName, lastName, participation} = form
        
        const body = {
            firstName, 
            lastName,
            participation: Number(participation)
        }

        axios.post(`${BASE_URL}/user/create`, body)
        .then((res) => {
            clear()
            request.requestUser()
        }).catch((error) =>{
            alert("Erro inesperado, tente novamente.")
        })
    }

    const onlyNumber = (text) => {
        return text.replace(/[^0-9]/g, '');
    }

    return <ContainerHeader onSubmit={sendUser}>
         <Form>
        <Input name="firstName"
            placeholder="First Name"
            onChange={onChange}
            value={form.firstName} />
        <Input name="lastName"
            placeholder="Last Name"
            onChange={onChange}
            value={form.lastName}
        />
        <Input name="participation"
            placeholder="Participation"
            value={form.participation}
            onChange={(e) => onChange(e, onlyNumber)}
        />
        <Button type="submit">
            Send
        </Button>
    </Form>
    </ContainerHeader>
 }
 export default Header