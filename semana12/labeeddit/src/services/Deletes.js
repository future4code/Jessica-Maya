import axios from 'axios'
import {BASE_URL} from "../constants/urls"

export const DeleteVote = (id) =>{
    axios.delete(`${BASE_URL}/posts/${id}/votes`, {
        headers: {Authorization: localStorage.getItem("token")}})
        .then((res)=>{  
            console.log(res)
        })
        .catch((error)=>{
            console.log(error.response)
        })
}

export const DeleteComment = (id) =>{
    axios.delete(`${BASE_URL}/comments/${id}/votes`, {
        headers: {Authorization: localStorage.getItem("token")}})
        .then((res)=>{  
            console.log(res)
        })
        .catch((error)=>{
            console.log(error.response)
        })
  }