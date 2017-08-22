import { checkResponseStatus, savaAuthorizationToken } from './userHelpers';

function createAccount(name, email, password) {
  fetch('/api/v1/signup', {

    method: 'post',
    headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" },
    body: `name=${name}&email=${email}&password=${password}`

  }).then( (response) => {

    checkResponseStatus(response, 201);
    savaAuthorizationToken(response);

  }).catch(function(err) {
    console.log('Fetch Error:', err);
  });
}

export default createAccount;
