import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import Home from '../../Home';
import Login from '../../Login';
import Signup from '../../Signup/containers/Signup';
import NotFound from '../Error_pages/page_not_found';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route component={NotFound} />
    </Switch>
  </main>
);

export default Main;
