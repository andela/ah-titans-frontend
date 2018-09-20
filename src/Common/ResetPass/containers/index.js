import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Validator from 'validator';
import {
  Col, Card, Row, Input, Button,
} from 'react-materialize';
import ResetPasswordForm from '../components';

class ResetPassword extends React.Component {
  state = {
    data: {
      email: ''
    }, 
    errors: {}
  };

  handleChange = event => {
    this.setState(
      { 
        data: { ...this.state.data, [event.target.name]: event.target.value}
      }
    )
  };

  handleSubmit = event => {
    event.preventDefault();
    const errors = this.handleKeyUpValidation(this.state.data);
    this.setState({errors});
    if (Object.keys(errors).length === 0) {
			this.props.handleSubmit(this.state.data)
		}
  };

  handleInputValidation = () => {
    const errors = this.handleKeyUpValidation(this.state.data);
    this.setState({errors});
  };
  
  handleKeyUpValidation = (data) => {
    const errors = {};
    if (!data.email) {
      errors.email = "Email is required";
    }
    else if (!Validator.isEmail(data.email)) {
      errors.email = "Email is invalid";
    }
    return errors;
  }

  render() {
    return (
      <ResetPasswordForm 
        onChange={this.handleChange} 
        onSubmit={this.handleSubmit} 
        onValidate={this.handleInputValidation} 
        data={this.state.data.email} 
        errors={this.state.errors}
        loading={this.props.loading}
      />
    );
  }
}

ResetPassword.propTypes = {
  submit: PropTypes.func.isRequired
};

export default ResetPassword;
