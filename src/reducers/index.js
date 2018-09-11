import { combineReducers, } from 'redux';
import exampleReducer from './exampleReducer';
import signupReducer from './signup';
import viewArticles from './viewArticles';

export default combineReducers({
  exampleReducer,
  signup: signupReducer,
  viewArticles,
});
