import { useEffect } from "react"
import {useHistory} from 'react-router-dom'

export const useProtectPage = () => {
  const history = useHistory()

  useEffect(() => {
    const token = window.localStorage.getItem('token')

    if(!token) {
        return history.push('/login')
    }
  }, [])
}