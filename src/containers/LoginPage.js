import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { checkResponseStatus, saveAuthorizationToken } from '../helpers/userHelpers';

class LoginPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      redirect: false,
      user: {
        email: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
    this.authenticateUser = this.authenticateUser.bind(this);
  }

  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  processForm(event) {
    event.preventDefault();

    this.authenticateUser();
  }

  authenticateUser() {
    const user = this.state.user;

    fetch('/api/v1/auth/login', {

      method: 'post',
      headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" },
      body: `email=${user.email}&password=${user.password}`

    }).then( (response) => {

      checkResponseStatus(response, 200);
      saveAuthorizationToken(response);
      this.props.changeUser(this.state.user.email);
      this.setState({ redirect: true });

    }).catch(function(err) {
      console.log('Fetch Error:', err);
    });
  }

  render() {
    if(this.state.redirect) {
      return (
        <Redirect to='/' />
      );
    }

    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

LoginPage.propTypes = {
  changeUser: PropTypes.object.isRequired,
};

export default LoginPage;
