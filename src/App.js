import React, { Component } from 'react';
import Auth from './helpers/Auth';
import Layout from './routes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: null
      }
    };

    this.changeUser = this.changeUser.bind(this);
    this.getUserProfile = this.getUserProfile.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
    this.updateUserState = this.updateUserState.bind(this);
  }

  componentWillMount() {
    if(Auth.userIsAuthenticated()) this.getUserProfile();
  }

  getUserProfile() {
    fetch(`/api/v1/profile`, {
      headers: { 'Authorization': Auth.getToken() },
      accept: 'application/json',
    }).then(this.checkStatus)
      .then(this.parseJSON)
      .then(this.updateUserState);
  }

  parseJSON(response) {
    return response.json();
  }

  updateUserState(data) {
    this.setState({ user: { email: data.email } });
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
