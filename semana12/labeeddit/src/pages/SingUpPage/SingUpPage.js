import React from 'react'
import logo from "../../assets/logo.png"
import {useHistory} from 'react-router-dom'
import SingForm from './SingForm'
import useUnprotectedPage from "../../hooks/useUnprotectedPage"

const SingUpPage = ({setRightButtonText}) =>{
    useUnprotectedPage()
    const history = useHistory()
    return (
        <div>
            <img src={logo}/>
            <SingForm setRightButtonText={setRightButtonText}/>
        </div>
    )
}
export default SingUpPage