export function saveAuthorizationToken(response) {
  response.json().then( function(data) {
    localStorage.setItem('token', data.auth_token);
  });
}

