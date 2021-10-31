import {useEffect, useState} from "react"
import axios from "axios"


const useRequestData = (initialData, url) => {
    const [page, setPage] = useState(initialData)


    const functionAtualizar = () =>{
        axios.get(url, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .then((res)=>{
            setPage(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    useEffect(()=>{
       functionAtualizar()
    }, [url])
    return (page)
}
export default useRequestData