import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

registerServiceWorker();

render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(
      <NextApp />,
      document.getElementById('root')
    );
  });
}
