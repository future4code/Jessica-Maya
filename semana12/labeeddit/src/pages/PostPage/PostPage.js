import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import {BASE_URL} from "../../constants/urls"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {PostContainer, CardText, AddRecipeButton} from "./styled"
import Typography from '@mui/material/Typography'
import {goToAddListPost, goToDetalhePost} from "../../Route/coordinator"
import {useHistory} from "react-router-dom"
import {Add} from "@material-ui/icons"
import CreatePost from "./CreatePost"

const PostPage = () =>{
    useProtectedPage()
    const history = useHistory()
    const posts = useRequestData([], `${BASE_URL}/posts`)

    const onClickCard = (id) =>{
      goToDetalhePost(history, id)
    }

    const postsCards = posts.map((post)=>{
        return <Card sx={{marginTop: 2, marginLeft: 2}} key={post.id}>
        <CardContent sx={{height: 200, width: 250}}>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          <CardText variant="body2" color="text.secondary" >
            {post.body}
          </CardText>
        </CardContent>
        <AddRecipeButton color={'primary'}
          onClick={()=>onClickCard(post.id)}><Add/></AddRecipeButton>
        </Card>
    })
    return (
        <PostContainer>
          <CreatePost/>
          {postsCards}
        </PostContainer> 
    )
}
export default PostPage