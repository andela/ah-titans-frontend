import { CREATE_USER, CREATE_USER_ERROR, SIGNUP_REQUEST, } from './types';

export const signingUp = () => ({ type: SIGNUP_REQUEST, });

export const createUserActionCreator = data => ({
  type: CREATE_USER,
  payload: data,
});

export const createUserErrorActionCreator = error => ({
  type: CREATE_USER_ERROR,
  payload: error,
});

const createUser = userData => (dispatch) => {
  dispatch(signingUp());
  fetch('https://ah-titans-api.herokuapp.com/api/users/', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then(res => res.json())
    .then(data => dispatch(createUserActionCreator(data)))
    .catch(error => dispatch(createUserErrorActionCreator(error)));
};

export default createUser;
