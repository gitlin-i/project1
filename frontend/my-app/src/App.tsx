import React from 'react';

import Navbar from './component/Navbar';
import { lightTheme,darkTheme } from './my-theme';
import styled, { ThemeProvider,createGlobalStyle } from 'styled-components';
import MainPage from './page/MainPage';


const StyledFooter = styled.div`
  width:100%;
  height:20vh;
  background-color: purple;
  position:fixed;
  bottom:0;
  outline:auto;
  color:orange;

`

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={lightTheme}>
        <Navbar />
        <MainPage />
        <StyledFooter>Footer</StyledFooter>

      </ThemeProvider>
    </React.Fragment>
  )
}

export default App;
