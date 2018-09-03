import { CREATE_USER, CREATE_USER_ERROR, } from './types';

const createUser = userData => (dispatch) => {
  fetch('https://ah-titans-api.herokuapp.com/api/users/', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then(res => res.json())
    .then(data => dispatch({
      type: CREATE_USER,
      payload: data,
    }))
    .catch(error => dispatch({
      type: CREATE_USER_ERROR,
      payload: error,
    }));
};

export default createUser;
