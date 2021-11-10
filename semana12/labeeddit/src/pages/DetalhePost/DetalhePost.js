import React from 'react'
import {PostComment} from "../../components/PostComment"
import useProtectedPage from '../../hooks/useProtectedPage'
import {PostContainer, CardText} from "./styled"
import DetalheForm from "../../components/DetalheForm"

const DetalhePost = () =>{
    useProtectedPage()
    
    return (
        <div>
           <PostContainer>
           <DetalheForm/>
            <PostComment/>
           </PostContainer>
        </div>
    )
}
export default DetalhePost