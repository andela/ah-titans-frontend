import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../Home/containers';
import Login from '../../Login/containers';
import Signup from '../../Signup/containers/Signup';
import Article from '../../New_Article/containers/index';
import ArticleView from '../../ViewArticle/containers';
import NotFound from '../../Error_pages/components/page_not_found';

const token = localStorage.getItem('token');
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      {token ? <Route exact path="/article" component={Article} /> : ''};
      <Route exact path="/article/:slug" component={ArticleView} />
      <Route component={NotFound} />
    </Switch>
  </main>
);

export default Main;
