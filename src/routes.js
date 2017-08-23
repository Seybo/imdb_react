import React from 'react';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage';
import MoviesPage from './containers/MoviesPage';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

const Layout = () => (
  <BrowserRouter>
    <div className='primary-layout'>
      <NavBar />
      <main>
        <Route path='/' exact component={ HomePage } />
        <Route path='/login' exact component={ LoginPage } />
        <Route path='/signup' exact component={ SignUpPage } />
        <Route path='/movies' exact component={ MoviesPage } />
      </main>
    </div>
  </BrowserRouter>
);

export default Layout;
