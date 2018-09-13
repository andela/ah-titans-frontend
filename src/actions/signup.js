import { CREATE_USER, CREATE_USER_ERROR, SIGNUP_REQUEST } from './types';
import call from '../utils/service';

export const signingUp = () => ({ type: SIGNUP_REQUEST });

export const createUserActionCreator = user => ({
  type: CREATE_USER,
  payload: user,
});

export const createUserErrorActionCreator = error => ({
  type: CREATE_USER_ERROR,
  payload: error,
});

const createUser = (userData, history) => dispatch => {
  dispatch(signingUp());
  call({ endpoint: '/users/', method: 'POST', data: userData })
    .then(data => {
      dispatch(createUserActionCreator(data));
      localStorage.setItem('user', data);
      history.push('/');
    })
    .catch(error => dispatch(createUserErrorActionCreator(error)));
};

export default createUser;
