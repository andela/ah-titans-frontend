import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import Home from '../../components/Home';
import Login from '../../components/Login';

const NotFound = () => <h1>Not found</h1>;

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </main>
);

export default Main;
