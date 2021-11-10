import React from "react"
import {BASE_URL} from "../constants/urls"
import axios from "axios"

export const voteAdd = (id, direction) =>{
    const body = {
        direction: direction
    }
    axios.post(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {Authorization: localStorage.getItem("token")}})
        .then((res)=>{  
        })
        .catch((error)=>{
            console.log(error.response)
        })
}


export const voteDelet = (id, direction) =>{
    const body = {
        direction: direction
    }
    axios.put(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {Authorization: localStorage.getItem("token")}})
        .then((res)=>{
        })
        .catch((error)=>{
            console.log(error.response)
        })

}

export const CreateCommentVote = (id, direction) =>{
    const body = {
        direction: direction
    }
    axios.post(`${BASE_URL}/comments/${id}/votes`, body, {
        headers: {Authorization: localStorage.getItem("token")}})
        .then((res)=>{
        })
        .catch((error)=>{
            console.log(error.response)
        })
}

export const ChangeCommentVote = (id, direction) =>{
    const body = {
        direction: direction
    }
    axios.put(`${BASE_URL}/comments/${id}/votes`, body, {
        headers: {Authorization: localStorage.getItem("token")}})
        .then((res)=>{
        })
        .catch((error)=>{
            console.log(error.response)
        })
}