import React,{useState} from 'react'
import TextField from "@material-ui/core/TextField"
import useForm from "../../hooks/useForm"
import Button from "@material-ui/core/Button"
import {useHistory} from 'react-router-dom'
import {BASE_URL} from "../../constants/urls"
import axios from "axios"
import CircularProgress from "@material-ui/core/CircularProgress"

const CreatePost = () =>{
    const [form, onChange, clear] = useForm({title: "", body: ""})
    const history = useHistory()
    const [isLoading, setIsLoading]= useState(false)


    const postCreate = (body) =>{
        setIsLoading(true)
        axios.post(`${BASE_URL}/posts`, body, {
            headers: {Authorization: localStorage.getItem("token")}})
        .then((res)=>{
            setIsLoading(false)
            alert(res.data)
        })
        .catch((error)=>{
            setIsLoading(false)
            console.log(error.response.message)
        })
    }


    const  onSubmitForm = (event) =>{
        event.preventDefault()
        postCreate(form, clear, history, setIsLoading)
    }

    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <TextField
                type={"text"}
                    name={"title"}
                    value={form.title}
                    onChange={onChange}
                    label={"Titulo"}
                    variant={"outlined"}
                    fullWidth
                    required/>
                    <TextField
                type={"text"}
                    name={"body"}
                    value={form.body}
                    onChange={onChange}
                    label={"Texto"}
                    variant={"outlined"}
                    fullWidth
                    required/>
            <Button
            type={"submit"}
            fullWidth variant={"contained"}
            color={"primary"}
            margin={"normal"}>{isLoading? <CircularProgress color={'inherit'} size={24}/> : <>Publicar</>}
                 </Button>
            </form>
        </div>
    )
}
export default CreatePost