// .storybook/preview.js

import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';

import { lightTheme } from '../src/my-theme';
import { Provider } from 'react-redux';
import store from '../src/store/configureStore'
// pass ThemeProvider and array of your themes to decorator
addDecorator(withThemes(ThemeProvider, [lightTheme]));
export const ReduxDecorator = (Story) => {
  return (
    <Provider store={store}>
      <Story />
    </Provider>
  )
}

// const Margindecorator = (Story) => {
//   return(
//     <div style={{ margin : '3em'}}>
//       <Story />
//     </div>
//   )
// }
export const decorators = [
  ReduxDecorator,
];


export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}