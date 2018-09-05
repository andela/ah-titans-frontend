import PropTypes from 'prop-types';
import { LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_REQUEST, } from './types';

const loginRequest = () => ({ type: LOGIN_REQUEST, });

const loginUserSuccessful = data => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

const loginUserError = data => ({
  type: LOGIN_ERROR,
  payload: data,
});


const handleResponse = response => response.json().then((data) => {
  if (!response.ok) {
    return Promise.reject(data);
  }
  return data;
});

const login = data => fetch('http://ah-titans-api.herokuapp.com/api/users/login/', {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then(res => handleResponse(res));

const loginUser = userData => (dispatch) => {
  dispatch(loginRequest());
  login(userData)
    .then((data) => {
      dispatch(dispatch(loginUserSuccessful(data)));
    })
    .catch(error => dispatch(loginUserError(error)));
};

loginUser.propTypes = {
  loginUserSuccessful: PropTypes.func.isRequired,
  loginUserError: PropTypes.func.isRequired,
};

export default loginUser;
