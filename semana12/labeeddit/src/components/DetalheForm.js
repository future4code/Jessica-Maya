import React, {useState} from "react"
import axios from "axios"
import { BASE_URL } from "../constants/urls"
import useForm from "../hooks/useForm"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import {useHistory, useParams} from 'react-router-dom'
import CircularProgress from "@material-ui/core/CircularProgress"


const DetalheForm = () =>{
    const [form, onChange, clear] = useForm({body: ''})
    const history = useHistory()
    const [isLoading, setIsLoading]= useState(false)
    const params = useParams()

    const CreateComment = (id, body) =>{
        setIsLoading(true)
        axios.post(`${BASE_URL}/posts/${id}/comments`, body, {
            headers: {Authorization: localStorage.getItem("token")}})
            .then((res)=>{
                setIsLoading(false)
                console.log(res.data)
            })
            .catch((error)=>{
                setIsLoading(false)
                console.log(error.response)
            })
    }

    const  onSubmitForm = (event) =>{
        event.preventDefault()
        CreateComment(params.id, form)
    }

    return (
       
        <form onSubmit={onSubmitForm}>
        <TextField
        type={"text"}
            name={"body"}
            value={form.body}
            onChange={onChange}
            label={"Digite seu comentario"}
            variant={"outlined"}
            fullWidth
            required/>
        <Button
        type={"submit"}
        fullWidth variant={"contained"}
        color={"primary"}
        margin={"normal"}>{isLoading? <CircularProgress color={'inherit'} size={24}/> : <>Comentar</>}</Button>
        </form>
    )
}
export default DetalheForm

