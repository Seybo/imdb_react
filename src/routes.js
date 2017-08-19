import React from 'react';
import Base from './components/Base';
// import HomePage from './components/HomePage';
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

const Layout = () => (
  <BrowserRouter>
    <div className='primary-layout'>
      <main>
        <Route path='/' exact component={ Base } />
        <Route path='/login' exact component={ LoginPage } />
        <Route path='/signup' exact component={ SignUpPage } />
      </main>
    </div>
  </BrowserRouter>
)

export default Layout;
