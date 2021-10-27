import styled from "styled-components"
import Typography from '@mui/material/Typography'
import Fab from "@material-ui/core/Fab"

export const PostContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 30px;
    padding: 30px;
`

export const CardText = styled(Typography)`
    display: flex;
    align-items:center;
    justify-content: center;
    margin-top: 40px;
`

export const AddRecipeButton = styled(Fab)`
    position: fixed !important;
    right: 5px;
    bottom: 10px;
    z-index: 3;
`