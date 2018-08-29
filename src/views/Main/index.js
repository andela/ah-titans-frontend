import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import Home from '../../components/Home';
import Login from '../../components/Login';
import NotFound from '../../views/Error_pages/page_not_found';

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
