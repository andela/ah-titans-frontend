import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, } from 'react-redux';
import { BrowserRouter, } from 'react-router-dom';
import App from './App';
import store from './store';
import updateState from './StateUpdate/updateState';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}
ReactDOM.render(
  <Provider store={store} loggedInUser={updateState()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
