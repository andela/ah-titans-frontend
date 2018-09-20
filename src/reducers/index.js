import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer';
import signupReducer from './signup';
import loginReducer from './loginReducer';
import createArticleReducer from './createArticleReducer';
import resetPass from './resetPass';
import newPass from './newPass';
import viewArticles from './viewArticles';
import getArticle from './article';
import getActiveUser from './getActiveUser';

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
});
