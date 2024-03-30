// api url
var url = 'https://jsonplaceholder.typicode.com/users';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @typedef {object} Address
 * @property {string} city
 * @property {string} street
 */

/**
 * 
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url);
}

fetchUser().then(function(response) {
  response.address.cit // << type Err
});

function startApp() {
  fetchUser()
    .then(function (response) {
      console.log(response);
      user = response.data;
      username.innerText = user[0].username
      email.innerText = user[0].email
      address.innerText = user[0].addres.city
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
