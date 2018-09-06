import React from 'react';
import SnackBar from 'react-material-snackbar';
import { connect, } from 'react-redux';
import Loader from '../../Loader/components';
import './index.scss';

const Home = (props) => {
  const { new_user, } = props.home;
  const { loginSuccess, } = props.login;
  const username = localStorage.getItem('username');

  return (
    <div className="app">
      <Loader />
      {new_user ? (
        <SnackBar show timer={6000} className="home">
          You have successfully signed up to Authors Haven!! Please check your email to verify your
          account
        </SnackBar>
      ) : (
        ''
      )}

      {
        loginSuccess ? (
          <SnackBar show timer={6000}>
            Welcome
            {' '}
            {username}
            {' '}
            have logged in successfully.
          </SnackBar>
        ) : (
          ''
        )
      }
      <h1>Welcome to Authors Haven!</h1>
    </div>
  );
};

const mapStatetoProps = state => ({
  home: state.exampleReducer,
  login: state.login,
});
export default connect(mapStatetoProps)(Home);
