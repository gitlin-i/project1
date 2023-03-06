import React from 'react';

import Navbar from './component/Navbar';
import { lightTheme,darkTheme } from './my-theme';
import styled, { ThemeProvider,createGlobalStyle } from 'styled-components';
import MainPage from './page/MainPage';
import SubNav from './component/SubNav';
import Footer from './component/Footer';


function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={lightTheme}>
        <Navbar />
        <SubNav />
        <MainPage />
        <Footer>footer</Footer>

      </ThemeProvider>
    </React.Fragment>
  )
}

export default App;
