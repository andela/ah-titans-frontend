import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer';
import signupReducer from './signup';
import loginReducer from './loginReducer';
import googleReducer from './google.login.reducer';
import createArticleReducer from './createArticleReducer';
import resetPass from './resetPass';
import newPass from './newPass';
import viewArticles from './viewArticles';
import getArticle from './article';
import getActiveUser from './getActiveUser';
import likeDislikeArticles from './likeDislike';
import profileReducer from './profileReducer';
import facebookReducer from './facebook.login.reducer';

export default combineReducers({
	exampleReducer,
	signup: signupReducer,
	login: loginReducer,
	article: createArticleReducer,
	resetPass,
	newPass,
	viewArticles,
	getArticle,
	user: getActiveUser,
	likeDislikeArticles,
	profile: profileReducer,
	google: googleReducer,
	facebook: facebookReducer,
});
