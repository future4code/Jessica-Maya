import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {StyledToolbar} from './styled'
import{goToPostPage, goToLogin} from "../../Route/coordinator"
import {useHistory} from "react-router-dom"

const  Header = () => {
  const history = useHistory()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          <Button onClick={() => goToPostPage(history)}color="inherit">LabEddit</Button>
          <Button onClick={() => goToLogin(history)} color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
export default Header