import {ContainerLogin, ContainerInput, Button} from "./styled"
import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import axios from "axios"

const LoginPage =() =>{

    const history = useHistory()

    const goToAdminHomePage =()=>{
        history.push("/admin/trips/list")
    }
 
    const [email, setEmail]=useState('')
    const [senha, setSenha]=useState('')

    const handleEmail=(event) =>{
        setEmail(event.target.value)
    }

    const handleSenha=(event)=>{
        setSenha(event.target.value)
    }


    const Login = () =>{
        const url= "https://us-central1-labenu-apis.cloudfunctions.net/labeX/jessica-bento-maryam/login"
        const body = {
            email: "jessicadev@gmail.com.br",
            senha: "123456"
        }
        axios.post(url, body)
        .then((res)=>{
            console.log(res.data)
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }
    return (
        <ContainerLogin>
            <h1>Login</h1>
            <ContainerInput
            type= "email"
            name= "email"
            placeholder= "Email"
            value={email}
            onChange={handleEmail}
            required/>
            <ContainerInput
            placeholder= "Senha"
            type= "password"
            name= "password"
            value={senha}
            onChange={handleSenha}
            required/>
            <Button onClick={goToAdminHomePage}>log in</Button>
        </ContainerLogin>
    )
}
export default LoginPage