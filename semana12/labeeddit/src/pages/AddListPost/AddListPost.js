import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

const AddListPost = () =>{
    useProtectedPage()
    return (
        <div>
            AddListPost
            
        </div>
    )
}
export default AddListPost