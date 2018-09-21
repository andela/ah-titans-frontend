import React from 'react';
import NewPassForm from '../components';
import PropTypes from 'prop-types';

class NewPassword extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: {
        new_password: '',
        cpassword: ''
      },
      loading: false,
      errors: {}
    };
  
  }
  
  handleChange = event => {
    this.setState(
      { 
        data: { ...this.state.data, [event.target.name]: event.target.value}
      }
    )
  };

  handleSubmit = event => {
    event.preventDefault();
    const errors = this.onKeyUpValidate(this.state.data);
    this.setState({errors});
    if (Object.keys(errors).length === 0) {
			this.setState({ loading: true });
			this.props
				.handleSubmit({
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

  handleInputValidation = () => {
    const errors = this.onKeyUpValidate(this.state.data);
    this.setState({errors});
  }; 
  
  onKeyUpValidate = (data) => {
    const errors = {};
    if (!data.new_password) errors.new_password = "Password is required";
    if (!data.cpassword) errors.cpassword = "You need to confirm your password";
    if (data.new_password !== data.cpassword) errors.cpassword = "Passwords don't match";
    if (data.new_password.length < 8) errors.new_password = "Password should be at least 8 characters";
    return errors;
  }

  render() { 
    return (
      <NewPassForm 
        onChange={this.handleChange} 
        onSubmit={this.handleSubmit} 
        onValidate={this.handleInputValidation} 
        data={this.state.data} 
        errors={this.state.errors}
        loading={this.state.loading}
      />
    );
  }
}

NewPassword.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default NewPassword;
