import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import Layout from './routes';

registerServiceWorker();

render(
    <MuiThemeProvider>
      <Layout />
    </MuiThemeProvider>,
    document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default
      render(
        <NextApp />,
        document.getElementById('root')
      );
  });
}
