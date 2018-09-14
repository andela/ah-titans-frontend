import React from 'react';
import NewPassForm from '../components';
import PropTypes from 'prop-types';

class NewPassword extends React.Component {
  state = {
    data: {
      new_password: '',
      cpassword: ''
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
				.submit({
					reset_token: this.props.reset_token,
					new_password: this.state.data.new_password
				})
				.catch(err => err.json())
				.then(data =>
					this.setState({
						errors: {
							new_password: data.error
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
    if (!data.new_password) errors.new_password = "Password is required";
    if (!data.cpassword) errors.cpassword = "You need to confirm your password";
    if (data.new_password !== data.cpassword) errors.cpassword = "Passwords don't match";
    if (data.new_password.length < 8) errors.new_password = "Password should be at least 8 characters";
    return errors;
  }

  render() {
    return (
      <div>
        <NewPassForm 
          onChange={this.onChange} 
          onSubmit={this.onSubmit} 
          onValidate={this.onValidate} 
          data={this.state.data} 
          errors={this.state.errors}
          loading={this.state.loading}
        />
        </div>
    );
  }
}

NewPassword.propTypes = {
  submit: PropTypes.func.isRequired
};

export default NewPassword;
 