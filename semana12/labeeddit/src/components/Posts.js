import  React from 'react'
import useProtectedPage from '../hooks/useProtectedPage'
import useRequestData from '../hooks/useRequestData'
import {BASE_URL} from "../constants/urls"
import {PostContainer, CardText} from "../pages/PostPage/styled"
import {goToDetalhePost} from "../Route/coordinator"
import {useHistory} from "react-router-dom"
import {voteAdd, voteDelet} from "../services/votes"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

  const Posts = () =>{
    useProtectedPage()
    const history = useHistory()
    const posts = useRequestData([], `${BASE_URL}/posts`)
  
    const onClickCard = (id) =>{
      goToDetalhePost(history,id)
    }
    
      const postCard = posts.map((post)=>{
        return <div>
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {post.username.substr(0, 1)}
                </Avatar>
              }
              title={post.username}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
              {post.title}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {post.body}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <button onClick={() => voteAdd(post.id, 1)}>👍</button> 
                {post.userVote}
                <button onClick={() => voteDelet(post.id, -1)}>👎</button> 
            </CardActions>
            <CardActions disableSpacing>
              <button onClick={()=> onClickCard(post.id)}>Comentar</button> 
              {post.commentCount} comentários
            </CardActions>
          </Card>
          </div>
      })

      return (
        <div>
          {postCard}
        </div>
      )
      

}
export default Posts

