import React from 'react';
import { connect, } from 'react-redux';
import Loader from '../../Loader/components';

import './index.scss';

const Home = (props) => {
  const { new_user, } = props.home;
  return (
    <div className="app">
      <Loader />
      {new_user
        ? 'You have successfully signed up to Authors Haven!! Please check your email to verify your account'
        : ''}
      <h1>Welcome to Authors Haven!</h1>
    </div>
  );
};

const mapStatetoProps = state => ({
  home: state.exampleReducer,
});
export default connect(mapStatetoProps)(Home);
