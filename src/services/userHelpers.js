export function checkResponseStatus(response, successCode) {
  if (response.status !== successCode) {
    console.log('Looks like there was a problem. Status Code: ' + response.status);
    return;
  }
}

export function savaAuthorizationToken(response) {
  response.json().then( function(data) {
    localStorage.setItem('token', data.auth_token);
  });
}
