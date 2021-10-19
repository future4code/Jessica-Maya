import {ContainerLogin, ContainerInput, Button} from "./styled"
import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import axios from "axios"

const LoginPage =() =>{

    const history = useHistory()
 
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')

    const handleEmail=(event) =>{
        setEmail(event.target.value)
    }

    const handleSenha=(event)=>{
        setPassword(event.target.value)
    }

    const loginSubmit = (event) =>{
        event.preventDefault()

        console.log(email, password)
         const url= "https://us-central1-labenu-apis.cloudfunctions.net/labeX/jessica-bento-maryam/login"
        const body = {
            email: email,
            password: password
        }
        axios.post(url, body)
        .then((res)=>{
            localStorage.setItem('token', res.data.token)
            history.push("/admin/trips/list")
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }

    
    return (
        <ContainerLogin>
            <h1>Login</h1>
            <form onSubmit={loginSubmit}>
            <ContainerInput
            type= "email"
            name= "email"
            placeholder= "Email"
            value={email}
            onChange={handleEmail}
            pattern={'[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'}

            required/>

            <ContainerInput
            placeholder= "Senha"
            type= "password"
            name= "password"
            value={password}
            onChange={handleSenha}
            required/>

             <Button>log in</Button>
            </form>

        </ContainerLogin>
    )
}
export default LoginPage