import { combineReducers, } from 'redux';
import exampleReducer from './exampleReducer';
import signupReducer from './signup';

export default combineReducers({
  exampleReducer,
  signup: signupReducer,
});
