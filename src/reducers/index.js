import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer';
import signupReducer from './signup';
import loginReducer from './loginReducer';
import googleReducer from './google.login.reducer';
import createArticleReducer from './createArticleReducer';
import facebookReducer from './facebook.login.reducer';

export default combineReducers({
	exampleReducer,
	signup: signupReducer,
	login: loginReducer,
	article: createArticleReducer,
	google: googleReducer,
	facebook: facebookReducer,
});
