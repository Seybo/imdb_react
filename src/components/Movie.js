import React, { Component } from 'react';

class Movie extends Component {
  constructor() {
    super();
    this.setColor = this.setColor.bind(this);

    this.state = {
      opened: false
    };
  }

  render() {
    return (
      <li onClick={this.setColor} key={this.props.id}>
        { this.props.title }
      </li>
    );
  }

  setColor() {
    console.log('It works');
  }
}

export default Movie;
