import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

const DetalhePost = () =>{
    useProtectedPage()
    return (
        <div>
            Detalhe
            
        </div>
    )
}
export default DetalhePost