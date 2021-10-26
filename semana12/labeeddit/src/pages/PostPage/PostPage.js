import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import {BASE_URL} from "../../constants/urls"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {PostContainer, CardText, AddRecipeButton} from "./styled"
import Typography from '@mui/material/Typography'
import {goToAddListPost} from "../../Route/coordinator"
import {useHistory} from "react-router-dom"
import {Add} from "@material-ui/icons"

const PostPage = () =>{
    useProtectedPage()
    const history = useHistory()
    const posts = useRequestData([], `${BASE_URL}/posts`)

    const postsCards = posts.map((post)=>{
        return <Card sx={{marginTop: 2, marginLeft: 2}} key={post.id}>
        <CardContent sx={{height: 120, width: 250}}>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          <CardText variant="body2" color="text.secondary" >
            {post.body}
          </CardText>
        </CardContent>
        </Card>
    })
    return (
        <PostContainer>
          {postsCards}
          <AddRecipeButton color={'primary'}
          onClick={()=>goToAddListPost(history)}><Add/></AddRecipeButton>
        </PostContainer> 
    )
}
export default PostPage