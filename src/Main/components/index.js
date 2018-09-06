import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import Home from '../../Home/components';
import Login from '../../Login/containers';
import Signup from '../../Signup/containers/Signup';
import Article from '../../New_Article/containers/index';
import NotFound from '../../Error_pages/components/page_not_found';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/article" component={Article} />
      <Route component={NotFound} />
    </Switch>
  </main>
);

export default Main;
