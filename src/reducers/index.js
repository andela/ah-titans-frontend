import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer';
import signupReducer from './signup';
import loginReducer from './loginReducer';
import googleReducer from './google.login.reducer';
import createArticleReducer from './createArticleReducer';
import viewArticles from './viewArticles';
import getArticle from './article';
import getActiveUser from './getActiveUser';
import facebookReducer from './facebook.login.reducer';

export default combineReducers({
	exampleReducer,
	signup: signupReducer,
	login: loginReducer,
	article: createArticleReducer,
	viewArticles,
	getArticle,
	user: getActiveUser,
	google: googleReducer,
	facebook: facebookReducer,
});
