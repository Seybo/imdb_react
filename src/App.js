import React, { Component } from 'react';
import Layout from './routes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: null,
        email: null
      }
    };

    this.changeUser = this.changeUser.bind(this);
  }

  changeUser(email) {
    const user = this.state.user;
    user.email = email;

    this.setState({
      user
    });
  }

  render() {
    return (
      <Layout user={ this.state.user } changeUser={ this.changeUser }/>
    );
  }
}

export default App;
