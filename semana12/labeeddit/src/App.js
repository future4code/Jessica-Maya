import { ThemeProvider } from '@material-ui/styles';
import theme from "./constants/theme"
import React from 'react'
import Router from "./Route/Router"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router/>
    </ThemeProvider>
  );
}

export default App;
