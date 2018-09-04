import PropTypes from 'prop-types';
import { LOGIN_SUCCESS, LOGIN_ERROR, } from './types';

const loginUserSuccessful = data => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

const loginUserError = data => ({
  type: LOGIN_ERROR,
  payload: data,
});

const loginUser = userData => dispatch => (
  fetch('http://ah-titans-api.herokuapp.com/api/users/login/', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then(res => res.json())
    .then(data => (
      data.errors ? dispatch(loginUserError(data)) : dispatch(loginUserSuccessful(data))))
);

loginUser.propTypes = {
  loginUserSuccessful: PropTypes.func.isRequired,
  loginUserError: PropTypes.func.isRequired,
};

export default loginUser;
