import React from "react";
import { Link } from "react-router-dom";
import "./Signup.scss";

const SignupForm = () => (
  <div className="container">
    <div className="card-panel clear">
      <div>
        <h4 className="blue-text">Sign up</h4>
      </div>
      <div className="row">
        <form className="col s12">
          <div row>
            <div className="input-field col s6">
              <input
                type="text"
                name="lname"
                id="lname"
                className="validate"
                required="required"
              />
              <label htmlfor="lname">Username:</label>
            </div>
            <div className="input-field col s6">
              <input
                type="email"
                name="email"
                id="email"
                className="validate"
                required="required"
              />
              <label htmlfor="email">Email:</label>
            </div>
            <div className="input-field col s6">
              <input
                type="password"
                name="password"
                id="password"
                className="validate"
                required="required"
              />
              <label htmlfor="password">Password:</label>
            </div>
            <div className="input-field col s6">
              <input
                type="password"
                name="repassword"
                id="repassword"
                className="validate"
                required="required"
              />
              <label htmlfor="repassword">Retype Password:</label>
            </div>
            <div className="col s6">
              <button
                className="btn waves-effect light-waves blue"
                type="submit"
                name="signup"
              >
                Sign up
              </button>
            </div>
            <div className="col s6">
              <p>
                Have an Account?
                <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default SignupForm;
