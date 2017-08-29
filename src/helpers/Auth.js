class Auth {

  static authenticateUser(response) {
    response.json().then( function(data) {
      localStorage.setItem('token', data.auth_token);
    });
  }

  static userIsAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  static getToken() {
    return localStorage.getItem('token');
  }

}

export default Auth;
