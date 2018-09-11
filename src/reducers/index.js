import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer';
import signupReducer from './signup';
import loginReducer from './loginReducer';
import createArticleReducer from './createArticleReducer';
import viewArticles from './viewArticles';

export default combineReducers({
  exampleReducer,
  signup: signupReducer,
  login: loginReducer,
  article: createArticleReducer,
  viewArticles,
});
