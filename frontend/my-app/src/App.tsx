import React from 'react';

import {Provider} from 'react-redux'
import { lightTheme,darkTheme } from './my-theme';
import  { ThemeProvider } from 'styled-components';
import MainPage from './page/MainPage';
import CategoryHeader from './component/CategoryHeader';
import Footer from './component/Footer';
import Header from './component/Header';
import SubHeader from './component/SubHeader';
import store from './store/configureStore';

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <Header />
        <SubHeader />
        <CategoryHeader />
        <MainPage />
        <Footer>footer</Footer>

      </ThemeProvider>
      </Provider>
    </React.Fragment>
  )
}

export default App;
