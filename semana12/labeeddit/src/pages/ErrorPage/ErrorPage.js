import React from 'react'
import {goToPostPage} from "../../Route/coordinator"
import Button from "@material-ui/core/Button"
import {useHistory} from 'react-router-dom'
import error from "../../assets/error.gif"
import {ContainerError, Img} from "./styled"

const ErrorPage = () =>{
    const history = useHistory()
    return (
        <ContainerError>
           <Img src={error}/>
            <Button onClick={() => goToPostPage(history)}>Voltar</Button>
        </ContainerError>
    )
}
export default ErrorPage