import { combineReducers, } from 'redux';
import exampleReducer from './exampleReducer';
import createArticleReducer from './createArticleReducer';

export default combineReducers({
  exampleReducer,
  article: createArticleReducer,

});
