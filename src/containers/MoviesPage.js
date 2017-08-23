import React from 'react';
import MoviesForm from '../components/MoviesForm';

class MoviesPage extends React.Component {

  constructor(props) {
    super(props);

    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
    this.setMoviesSatate = this.setMoviesSatate.bind(this);

    this.state = {
      errors: {},
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
    console.log(error);
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
    return (
      <MoviesForm
        movies={this.state.movies}
      />
    );
  }

}

export default MoviesPage;
