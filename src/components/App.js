import React, { Component } from 'react';
import MainHeader from './MainHeader';
import MoviesList from './MoviesList';

class App extends Component {
  render() {
    return (
      <div>
        <MainHeader />
        <MoviesList />
      </div>
    );
  }
}

export default App;
