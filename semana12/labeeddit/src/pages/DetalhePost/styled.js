import styled from "styled-components"
import Typography from '@mui/material/Typography'

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