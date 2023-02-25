import React from 'react';

import Navbar from './component/Navbar';
import Button from './component/Button';
import { lightTheme } from './my-theme';
import styled, { ThemeProvider } from 'styled-components';
import Text from './component/Text';

const StyledMain = styled.div`
  width:100vw;
  height:100vh;
  background-color: orange;
  outline:auto;
  color:purple;
`
const StyledFooter = styled.div`
  width:100vw;
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
        <StyledMain >main</StyledMain>
        <StyledFooter>Footer</StyledFooter>

      </ThemeProvider>
    </React.Fragment>
  )
}

export default App;
