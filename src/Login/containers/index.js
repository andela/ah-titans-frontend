import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Alert from 'react-s-alert';
import loginUser from '../../actions/loginActions';
import LoginForm from '../components';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import googleLogin from '../../actions/googleActions';
import facebookLogin from '../../actions/facebookActions';

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

	componentWillReceiveProps(nextProps) {
		console.log('login', nextProps);
		const {
			email, password,
		} = nextProps.login.user;
		this.setState({
			email, password,
		});
	}


	/**
 * Represents functionality for handling social login errors.
 * @access - Public for both registered and unregistered users.
 * @return {object} Return an object containing the error message from social login.
 */

	onFailure() {
		Alert.error('An error occurred with the social media login, try login by email');
		this.history.push('/login');
	}

	/**
 * Represents functionality for handling changes in input.
 * @event  e - Handles input events.
 * @access - Public for both registered and unregistered users.
 */

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	/**
 * Represents functionality for handling submittions.
 * @constructor
 * @event  e - Handles submit event.
 * @access - Public for both registered and unregistered users.
 */

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
	/**
 * Represents functionality for google login.
 * @param {function} history - Handles routing to the next page.
 * @param {object} response - Contains the token from google.
 * @access - Public for both registered and unregistered users.
 * @return {object} Returns a user token and user details.
 */

	googleResponse(response) {
		const requestBody = {
			access_token: response.accessToken,
		};
		this.props.googleLogin(requestBody, this.props.history);
	}

	/**
 * Represents functionality for facebook login.
 * @param {function} history - Handles routing to the next page.
 * @param {object} response - Contains the token from facebook.
 * @access - Public for both registered and unregistered users.
 * @return {object} Returns a user token and user details.
 */


	facebookResponse(response) {
		const requestBody = {
			access_token: response.accessToken,
		};
		this.props.facebookLogin(requestBody, this.props.history);
	}

	render() {
		console.log(this.props);
		const { login } = this.props;
		const {
			password, email, errors, isFetching, isFetchingFacebook, isFetchingGoogle,
		} = login;
		return (
			<LoginForm
				onChange={this.handleChange}
				onClick={this.handleSubmit}
				errors={errors}
				email={email}
				password={password}
				isFetching={isFetching}
				isFetchingFacebook={isFetchingFacebook}
				isFetchingGoogle={isFetchingGoogle}
				onFailure={this.onFailure}
				onSuccess={this.googleResponse}
				facebookResponse={this.facebookResponse}
			/>
		);
	}
}

Login.propTypes = {
	loginUser: PropTypes.func.isRequired,
	googleLogin: PropTypes.func.isRequired,
	facebookLogin: PropTypes.func.isRequired,
	login: PropTypes.shape({
		user: PropTypes.object,
		errors: PropTypes.object,
		isFetching: PropTypes.bool,
		isFetchingGoogle: PropTypes.bool,
		isFetchingFacebook: PropTypes.bool,
	}).isRequired,
};

const mapStateToProps = state => ({
	login: state.login,
});

const mapDispatchToProps = (dispatch) => {
	return {
		loginUser: (userData, history) => {
			dispatch(loginUser(userData, history));
		},
		googleLogin: (requestBody, history) => {
			dispatch(googleLogin(requestBody, history));
		},
		facebookLogin: (requestBody, history) => {
			dispatch(facebookLogin(requestBody, history));
		},
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
