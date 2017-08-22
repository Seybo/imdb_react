import { checkResponseStatus, savaAuthorizationToken } from './userHelpers';

function authenticateUser(name, email, password) {
  fetch('/api/v1/auth/login', {

    method: 'post',
    headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" },
    body: `email=${email}&password=${password}`

  }).then( (response) => {

    checkResponseStatus(response, 200);
    savaAuthorizationToken(response);

  }).catch(function(err) {
    console.log('Fetch Error:', err);
  });
}

export default authenticateUser;
