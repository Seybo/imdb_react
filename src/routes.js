import React from 'react';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage';
import MoviesPage from './containers/MoviesPage';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

const Layout = (props) => (
  <BrowserRouter>
    <div className='primary-layout'>
      <NavBar {...props} />
      <main>
        <Route path='/' exact component={ HomePage } />
        <Route exact path='/login' render={() => (
          <LoginPage {...props} />
        )}/>
        <Route exact path='/signup' render={() => (
          <SignUpPage {...props} />
        )}/>
        <Route path='/movies' exact component={ MoviesPage } />
      </main>
    </div>
  </BrowserRouter>
);

export default Layout;
