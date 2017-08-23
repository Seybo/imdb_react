import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import styles from './../styles/movies.css';

const MoviesForm = (({ movies }) => {
  const moviesList = movies.map(
    movie => (
      <Card>
        <CardHeader
          key={ movie.id }
          title={ movie.title }
          actAsExpander={ true }
          showExpandableButton={ true }
        />
        <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
    )
  );

  return (
    <section className="flexbox">

      <h2 className="movies-list-heading">Movies</h2>
      <div className="movies-list flexbox">
        { moviesList }
      </div>

      <Card className="container">
        <CardText><Link to={'/login'}>Log in</Link> if you want to rate and submit movies.
          Don't have an account? <Link to={'/signup'}>Create one</Link>.</CardText>
      </Card>

    </section>
  );
});

export default MoviesForm;
