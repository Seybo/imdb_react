import React, { Component } from 'react';

class MoviesList extends Component {
  constructor() {
    super();
    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
    this.setMoviesSatate = this.setMoviesSatate.bind(this);

    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    fetch(`/api/v1/movies`, {
      accept: 'application/json',
    }).then(this.checkStatus)
      .then(this.parseJSON)
      .then(this.setMoviesSatate);
  }

  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
  }

  parseJSON(response) {
    return response.json();
  }

  setMoviesSatate(data) {
    let movies = [];

    for (const movie of data) {
      movies.push(movie);
    }

    this.setState({ movies: movies });
  }

  render() {
    const moviesList = this.state.movies.map(
      movie => <li key={movie.id}>{movie.title}</li>
    )

    return (
      <ul className="movies-list">
        { moviesList }
      </ul>
    );
  }
}

export default MoviesList;
