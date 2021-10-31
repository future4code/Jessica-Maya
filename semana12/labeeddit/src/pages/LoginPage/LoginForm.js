import React, {useContext, useState} from 'react'
import TextField from "@material-ui/core/TextField"
import useForm from "../../hooks/useForm"
import Button from "@material-ui/core/Button"
import {login} from "../../services/user"
import {useHistory} from 'react-router-dom'
import {GlobalStateContext} from '../../Global/GlobalStateContext'
import CircularProgress from "@material-ui/core/CircularProgress"

const LoginForm = () =>{
    const [form, onChange, clear] = useForm({email: '', password: ''})
    const {seters} = useContext(GlobalStateContext)
    const [isLoading, setIsLoading]= useState(false)
    const history = useHistory()

    const  onSubmitForm = (event) =>{
        event.preventDefault()
        login(form, clear, history, seters.setRightButtonText,setIsLoading)

    }


    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <TextField
                type={"email"}
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                />

                <TextField
                type={"password"}
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"Senha"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                />
            <Button
            type={"submit"}
            fullWidth variant={"contained"}
            color={"primary"}
            margin={"normal"}>
            {isLoading? <CircularProgress color={'inherit'} size={24}/> : <>Fazer Login!</>}
            </Button>
            </form>
        </div>
    )
}
export default LoginForm