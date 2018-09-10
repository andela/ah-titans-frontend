import { combineReducers, } from 'redux';
import exampleReducer from './exampleReducer';
import signupReducer from './signup';
import loginReducer from './loginReducer';
import resetPass from './resetPass';

export default combineReducers({
  exampleReducer,
  signup: signupReducer,
  login: loginReducer,
  resetPass,
});
