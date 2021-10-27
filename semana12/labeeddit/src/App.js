import { ThemeProvider } from '@material-ui/styles';
import theme from "./constants/theme"
import React from 'react'
import Router from "./Route/Router"
import GlobalState from "./Global/GlobalState"

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
      <Router/>
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;
