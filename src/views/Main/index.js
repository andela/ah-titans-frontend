import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import Home from '../Home';
import Login from '../../components/Login';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
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
