import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import { withRouter, } from 'react-router-dom';
import { connect, } from 'react-redux';
import createUser from '../../actions/signup';
import SignupForm from '../components/SignupForm';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value, });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createUser({ user: this.state, });
    if (this.props.signup.error === {}) {
      if (Object.keys(this.props.signup.error).length === 0) {
        this.props.history.push('/login');
      }
      this.props.history.push('/login');
    }
  }

  render() {
    const { error, isFetching, } = this.props.signup;

    return (
      <div>
        <SignupForm
          onChange={this.handleChange}
          onClick={this.handleSubmit}
          error={error}
          isFetching={isFetching}
        />
      </div>
    );
  }
}
Signup.propTypes = {
  createUser: PropTypes.func.isRequired,
};

const mapStateToProps = ({ signup, }) => ({
  signup,
});

export default connect(
  mapStateToProps,
  { createUser, }
)(Signup);
