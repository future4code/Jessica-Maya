import axios from 'axios'
import {BASE_URL} from "../constants/urls"
import {goToPostPage} from "../Route/coordinator"

export const login = (body, clear, history, set, setIsLoading) =>{
    setIsLoading(true)
    axios.post(`${BASE_URL}/users/login`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        set("Logout")
        goToPostPage(history)
        setIsLoading(false)
    })
    .catch((error)=>{
        setIsLoading(false)
        alert(error.response.data.message)
    })
}

export const singUp = (body, clear, history, setIsLoading) =>{
    setIsLoading(true)
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((res) =>{
        localStorage.setItem("token", res.data.token)
        clear()
        goToPostPage(history)
        setIsLoading(false)
    })
    .catch((error)=>{
        setIsLoading(false)
        alert(error.response.data.message)
    })

}

