import {useHistory} from 'react-router-dom'
import { useLayoutEffect } from 'react'
import {goToPostPage} from "../Route/coordinator"

const useUnprotectedPage = () =>{
    const history = useHistory()
    useLayoutEffect(()=>{
        const token = localStorage.getItem('token')
        if(token) {
            goToPostPage(history)
        }
    }, [history])
}
export default useUnprotectedPage