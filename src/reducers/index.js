import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer';
import signupReducer from './signup';
import loginReducer from './loginReducer';
import createArticleReducer from './createArticleReducer';
import viewArticles from './viewArticles';
import getArticle from './article';
import getActiveUser from './getActiveUser';
import likeDislikeArticles from './likeDislike';
import profileReducer from './profileReducer';

export default combineReducers({
	exampleReducer,
	signup: signupReducer,
	login: loginReducer,
	article: createArticleReducer,
	viewArticles,
	getArticle,
	user: getActiveUser,
	likeDislikeArticles,
	profile: profileReducer,
});
