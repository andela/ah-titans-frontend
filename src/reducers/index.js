import { combineReducers, } from 'redux';
import exampleReducer from './exampleReducer';
import signupReducer from './signup';
import loginReducer from './loginReducer';
import createArticleReducer from './createArticleReducer';

export default combineReducers({
  exampleReducer,
  signup: signupReducer,
  login: loginReducer,
  article: createArticleReducer,

});
