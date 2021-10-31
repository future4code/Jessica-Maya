import React from 'react'
import useProtectedPage from '../hooks/useProtectedPage'
import {useParams} from "react-router-dom"
import {BASE_URL} from "../constants/urls"
import useRequestData from "../hooks/useRequestData"
import {PostContainer, CardText} from "../pages/DetalhePost/styled"
import {DeleteComment, DeleteVote} from "../services/Deletes"
import {ChangeCommentVote, CreateCommentVote, voteAdd} from "../services/votes"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';


export const PostComment = () =>{
    useProtectedPage()
    const params = useParams()
    const comment = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
    console.log(comment)

        const detalhes = comment.map((item)=>{
        return <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {item.username.substr(0, 1)}
            </Avatar>
          }
          title={item.username}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          {item.title}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {item.body}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <button onClick={() => voteAdd(item.id, 1)}>👍</button> 
            {item.userVote}
            <button onClick={() => DeleteVote(item.id, -1)}>👎</button> 
        </CardActions>
        <CardActions disableSpacing>
        </CardActions>
      </Card>
  })


    return (
        <div>
           <div>
               {detalhes}
           </div>
        </div>
    )
}
