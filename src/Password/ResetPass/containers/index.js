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
    loading: false,
    errors: {}
  };

  onChange = e => this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value}});

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({errors});
    if (Object.keys(errors).length === 0) {
			this.setState({ loading: true });
			this.props
				.submit(this.state.data)
				.catch(err => err.json())
				.then(data =>
					this.setState({
						errors: {
							email: data.user.msg
						},
						loading: false
					})
				);
		}
  };

  onValidate = () => {
    const errors = this.validate(this.state.data);
    this.setState({errors});
  };
  
  validate = (data) => {
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
        onChange={this.onChange} 
        onSubmit={this.onSubmit} 
        onValidate={this.onValidate} 
        data={this.state.data.email} 
        errors={this.state.errors}
        loading={this.state.loading}
      />
    );
  }
}

ResetPassword.propTypes = {
  submit: PropTypes.func.isRequired
};

export default ResetPassword;
