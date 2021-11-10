import React from 'react'
import logo from "../../assets/logo.png"
import LoginForm from "./LoginForm"
import {useHistory} from 'react-router-dom'
import Button from "@material-ui/core/Button"
import {goToSingUp} from "../../Route/coordinator"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"

const LoginPage = () =>{
    useUnprotectedPage()
    const history = useHistory()
    return (
        <div>
            <img src={logo} alt="logo do site"/>
            <LoginForm/>
            <Button
            onClick={() => goToSingUp(history)}
            type={"submit"}
            fullWidth variant={"contained"}
            color={"primary"}
            margin={"normal"}>Não possui conta? Cadastre-se</Button>
        </div>
    )
}
export default LoginPage