import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from '@material-ui/core';

import App from './App';
import theme from './theme'

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

