import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../Home/containers';
import Login from '../../Login/containers';
import Signup from '../../Signup/containers/Signup';
import Article from '../../New_Article/containers/index';
import ArticleView from '../../ViewArticle/containers';
import Profile from '../../Profile/containers/ProfileContainer';
import NotFound from '../../Error_pages/components/page_not_found';

const Main = () => (
	<main>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/signup" component={Signup} />
			{
				localStorage.getItem('token') ? (
					<Route
						exact
						path="/article"
						component={
							Article
						}
					/>
				) : ''
			}
			<Route exact path="/article/:slug" component={ArticleView} />
			<Route exact path="/profile/:username" component={Profile} />
			<Route component={NotFound} />
		</Switch>
	</main>
);

export default Main;
