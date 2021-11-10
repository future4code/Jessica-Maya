import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import {PostContainer, CardText} from "../../pages/PostPage/styled"
import {voteAdd, voteDelet} from "../../services/votes"
import Posts from "../../components/Posts"
import CreatePost from "./CreatePost"

const PostPage = () =>{
    useProtectedPage()
    return (
        <PostContainer>
            <CreatePost/>
             <Posts />
        </PostContainer> 
    )
}
export default PostPage