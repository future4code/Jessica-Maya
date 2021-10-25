import React from 'react'
import TextField from "@material-ui/core/TextField"
import useForm from "../../hooks/useForm"
import Button from "@material-ui/core/Button"
import {useHistory} from "react-router-dom"
import {singUp} from "../../services/user"

const SingForm = () =>{
    const history = useHistory()
    const [form, onChange, clear] = useForm({username: '', email: '', password: ''})

    const  onSubmitForm = (event) =>{
        event.preventDefault()
        singUp(form, clear, History)
    }

    return (
        <div>
            <form onSubmit={onSubmitForm}>
               <TextField
                    type={"username"}
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
                    margin={"normal"}>Cadastrar</Button>
            </form>
        </div>
    )
}
export default SingForm