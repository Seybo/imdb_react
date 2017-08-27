import React from 'react';
import SignUpForm from '../components/SignUpForm';
import { checkResponseStatus, saveAuthorizationToken } from '../helpers/userHelpers';

class SignUpPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        name: '',
        email: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
    this.createAccount = this.createAccount.bind(this);
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

    this.createAccount();
  }

  createAccount() {
    const user = this.state.user;

    fetch('/api/v1/signup', {

      method: 'post',
      headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" },
      body: `name=${user.name}&email=${user.email}&password=${user.password}`

    }).then( (response) => {

      checkResponseStatus(response, 201);
      saveAuthorizationToken(response);

    }).catch(function(err) {
      console.log('Fetch Error:', err);
    });
  }

  render() {
    return (
      <SignUpForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

export default SignUpPage;
