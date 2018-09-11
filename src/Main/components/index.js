import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import Home from '../../Home/components';
import Login from '../../Login/containers';
import Signup from '../../Signup/containers/Signup';
import NewArticle from '../../New_Article/components/NewArticle';
import NotFound from '../../Error_pages/components/page_not_found';
import ResetPass from '../../ResetPass';
import NewPass from '../../NewPass';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/article" component={NewArticle} />
      <Route exact path="/resetpass" component={ResetPass} />
      <Route path="/api/reset/:uidb64/:token" component={NewPass} />
      <Route component={NotFound} />
    </Switch>
  </main>
);

export default Main;
