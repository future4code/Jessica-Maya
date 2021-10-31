import React from 'react'
import logo from "../../assets/logo.png"
import SingForm from './SingForm'
import useUnprotectedPage from "../../hooks/useUnprotectedPage"

const SingUpPage = () =>{
    useUnprotectedPage()
    return (
        <div>
            <img src={logo} alt="logo do site"/>
            <SingForm/>
        </div>
    )
}
export default SingUpPage