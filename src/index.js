import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  document.querySelector('#root')
);
