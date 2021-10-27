import React, {useEffect} from 'react'
import TextField from "@material-ui/core/TextField"
import useForm from "../../hooks/useForm"
import Button from "@material-ui/core/Button"
import {useHistory} from 'react-router-dom'
import {BASE_URL} from "../../constants/urls"
import axios from "axios"

const CreatePost = () =>{
    const [form, onChange, clear] = useForm({Primeiro: "", post: ""})
    const history = useHistory()

    const postCreate = (body) =>{
        axios.post(`${BASE_URL}/posts`, body, {
            headers: {Authorization: localStorage.getItem("token")}})
        .then((res)=>{
            console.log(res.data)
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }


    const  onSubmitForm = (event) =>{
        event.preventDefault()
        postCreate(form, clear, history)
    }

    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <TextField
                type={"title"}
                    name={"title"}
                    value={form.title}
                    onChange={onChange}
                    label={"Titulo"}
                    variant={"outlined"}
                    fullWidth/>
                    <TextField
                type={"text"}
                    name={"text"}
                    value={form.text}
                    onChange={onChange}
                    label={"Texto"}
                    variant={"outlined"}
                    fullWidth/>
            <Button
            type={"submit"}
            fullWidth variant={"contained"}
            color={"primary"}
            margin={"normal"}>Postar </Button>
            </form>
        </div>
    )
}
export default CreatePost