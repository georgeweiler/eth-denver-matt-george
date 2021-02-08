import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from './styles/theme';
import styles from './styles/style.css';
import App from './App';

const GlobalStyles = createGlobalStyle`
   ${styles}
`;

export default () => (
  <>
    <GlobalStyles />
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </>
);
