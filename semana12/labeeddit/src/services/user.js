import axios from 'axios'
import {BASE_URL} from "../constants/urls"
import {goToPostPage} from "../Route/coordinator"

export const login = (body, clear, history, setRightButtonText) =>{

    axios.post(`${BASE_URL}/users/login`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToPostPage(history)
        setRightButtonText("Logout")
    })
    .catch((error)=>{
        alert(error.response.data.message)
    })
}

export const singUp = (body, clear, history, setRightButtonText) =>{
    console.log(body)
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((res) =>{
        localStorage.setItem("token", res.data.token)
        clear()
        goToPostPage(history)
        setRightButtonText("Logout")
    })
    .catch((error)=>{
        alert(error.response.data.message)
    })

}