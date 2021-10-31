import React, {useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {StyledToolbar} from './styled'
import{goToPostPage, goToLogin} from "../../Route/coordinator"
import {useHistory} from "react-router-dom"
import {GlobalStateContext} from "../../Global/GlobalStateContext"


const  Header = () => {
  const history = useHistory()
  const {states, seters} = useContext(GlobalStateContext)
   const token = localStorage.getItem("token")

  const logout = () =>{
    localStorage.removeItem("token")
  }

  const rightButtonAction = () =>{
    if(token){
      logout()
      seters.setRightButtonText("Login")
      goToLogin(history)
    }else{
      goToLogin(history)
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>

          <Button onClick={() => goToPostPage(history)}color="inherit">LabEddit</Button>
          <Button onClick={rightButtonAction} color="inherit">{states.rightButtonText}</Button>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
export default Header