import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../../Home/components';
import Login from '../../Login/containers';
import Signup from '../../Signup/containers/Signup';
import Article from '../../New_Article/containers/index';
import NotFound from '../../Error_pages/components/page_not_found';
import ResetPass from '../../Password/ResetPass';
import NewPass from '../../Password/NewPass';

const token = localStorage.getItem('token');
const Main = () => (
	<main>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/signup" component={Signup} />
			{
				token ? (
					<Route exact path="/article" component={Article} />
				) : ('')
			}
			<Route exact path="/resetpass" component={ResetPass} />
			<Route path="/api/reset/:uidb64/:token/" component={NewPass} />
			<Route component={NotFound} />
		</Switch>
	</main>
);

export default Main;
