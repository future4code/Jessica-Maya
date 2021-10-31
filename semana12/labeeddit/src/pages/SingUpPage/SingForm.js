import React, {useState} from 'react'
import TextField from "@material-ui/core/TextField"
import useForm from "../../hooks/useForm"
import Button from "@material-ui/core/Button"
import {useHistory} from "react-router-dom"
import {singUp} from "../../services/user"
import CircularProgress from "@material-ui/core/CircularProgress"

const SingForm = () =>{
    const history = useHistory()
    const [form, onChange, clear] = useForm({username: '', email: '', password: ''})
    const [isLoading, setIsLoading]= useState(false)

    const  onSubmitForm = (event) =>{
        event.preventDefault()
        singUp(form, clear, history, setIsLoading)
    }

    return (
        <div>
            <form onSubmit={onSubmitForm}>
               <TextField
                    type={"name"}
                    name={"username"}
                    value={form.username}
                    onChange={onChange}
                    label={"Nome"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    autoFocus
                    required
                />

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
                    {isLoading? <CircularProgress color={'inherit'} size={24}/> : <>Fazer Cadastro</>}
                    </Button>
            </form>
        </div>
    )
}
export default SingForm