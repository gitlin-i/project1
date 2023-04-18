import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import NotFoundPage from './page/NotFoundPage';
import DetailPage from './page/DetailPage';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './my-theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    errorElement:<NotFoundPage />
  },
  {
    path: "detail/:id",
    element:<DetailPage />,

  }
])
root.render(
    <React.StrictMode>
      
        <Provider store={store}>
          <ThemeProvider theme={lightTheme}>
            <RouterProvider router={router} />
          </ThemeProvider>
        </Provider>
      
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
