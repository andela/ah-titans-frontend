import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import loginUser from '../../actions/loginActions';
import LoginForm from '../components';
import call from '../../utils/service';

class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
		};
		const { history } = this.props;
		this.history = history;
		this.googleResponse = this.googleResponse.bind(this);
		this.facebookResponse = this.facebookResponse.bind(this);
		this.onFailure = this.onFailure.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	onFailure(error) {
		error.toString();
		this.history.push('/login');
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		const { email, password } = this.state;

		const user = {
			user: {
				email,
				password,
			},
		};

		this.props.loginUser(user, this.props.history);
	}

	googleResponse(response) {
		const requestBody = {
			access_token: response.accessToken,
		};
		call({ endpoint: '/users/auth/google-oauth2', method: 'POST', data: requestBody })
			.then(((res) => {
				localStorage.setItem('token', res.user.token);
				localStorage.setItem('user', res.user.user.username);
			}));
		this.history.push('/');
	}

	facebookResponse(response) {
		const requestBody = {
			access_token: response.accessToken,
		};
		call({ endpoint: '/users/auth/facebook', method: 'POST', data: requestBody })
			.then(((res) => {
				localStorage.setItem('token', res.user.token);
				localStorage.setItem('user', res.user.user.username);
			}));
		this.history.push('/');
	}


	render() {
		const { login } = this.props;
		const { errors, isFetching } = login;
		return (
			<LoginForm
				onChange={this.handleChange}
				onClick={this.handleSubmit}
				errors={errors}
				isFetching={isFetching}
				onFailure={this.onFailure}
				onSuccess={this.googleResponse}
				facebookResponse={this.facebookResponse}
			/>
		);
	}
}

Login.propTypes = {
	loginUser: PropTypes.func.isRequired,
	login: PropTypes.shape({
		user: PropTypes.object,
		errors: PropTypes.object,
		isFetching: PropTypes.bool,
	}).isRequired,
	history: PropTypes.shape({
		push: PropTypes.func.isRequired,
	}).isRequired,
};

const mapStateToProps = ({ login }) => ({
	login,
});


const mapDispatchToProps = (dispatch) => {
	return {
		loginUser: (userData, history) => {
			dispatch(loginUser(userData, history));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
