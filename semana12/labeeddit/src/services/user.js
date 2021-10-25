import axios from 'axios'
import {BASE_URL} from "../constants/urls"
import {goToPostPage} from "../Route/coordinator"

export const login = (body, clear, history) =>{

    axios.post(`${BASE_URL}/users/login`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToPostPage(history)
    })
    .catch((error)=>{
        alert("Erro no login!")
    })
}

export const singUp = (body, clear, history) =>{
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((res) =>{
        localStorage.setItem("token", res.data.token)
        clear()
        goToPostPage(history)
    })
    .catch((error)=>{
        alert("Erro no Cadastro!")
    })

}