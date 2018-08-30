import React, { Component, } from 'react';
import './Signup.css';

const Logo = require('../../assets/logo.png');

class Signup extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="container flex">
        <div className="card">
          <div className="box" id="sign-up">
            <div className="logo">
              <img src={Logo} alt="App logo" />
            </div>
            <h2 className="title"> Sign up now </h2>
          </div>
          <div className="form ">
            <form>
              <div>
                <input type="text" name="username" placeholder="Your username" required />
              </div>
              <div>
                <input type="email" name="email" placeholder="Your email" required />
              </div>
              <div>
                <input type="password" name="password" placeholder="Create your password" required />
              </div>
              <div>
                <input type="password" name="password" placeholder="Confirm your password" required />
              </div>
              <button type="submit" name="signup">Sign up for free</button>
              <div>
                Already have an account?
                <a href="#signin">Signin here</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;
