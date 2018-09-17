import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
	Col, Row, Input, Button,
} from 'react-materialize';
import './index.scss';

const LoginForm = ({
	onClick, onChange, errors, isFetching,
}) => (
	<Row >
		<Col m={4} s={12} offset="m4">
			<form>
				<h1 className="h1-signin">Login to your account</h1>
				<Row>
					<div className="error">{errors.error}</div>
					<Input
						type="email"
						label="Email"
						name="email"
						onChange={onChange}
						s={12}
					/>
					<span className="error">{errors.email}</span>
					<Input
						type="password"
						label="Password"
						name="password"
						onChange={onChange}
						s={12}
					/>
					<div className="error">{errors.password}</div>
				</Row>
				<Row>
					<Col m={12} s={12}>
						<Button
							waves="light"
							onClick={onClick}
							disabled={isFetching}
							className="btn-signin"
						>
							{isFetching ? 'Processing ...' : 'Login'}
						</Button>
						<Col
							m={12}
							s={12}
							style={{ textAlign: 'center', marginTop: '30px' }}
						>
							<span>
								<Link to="/resetpass" className="reset-pass">
                  Forgot password?
								</Link>
							</span>
						</Col>
						<Col
							m={12}
							s={12}
							style={{ textAlign: 'center', marginTop: '30px' }}
						>
							<span>OR</span>
						</Col>
						<Col m={12} s={12}>
							<Col m={6} s={6} style={{ textAlign: 'right' }}>
								<Link to="/" title="Login with Facebook">
									<ion-icon name="logo-facebook" size="large" />
								</Link>
							</Col>
							<Col m={6} s={6}>
								<Link to="/" title="Login with Google" style={{ color: 'red' }}>
									<ion-icon name="logo-google" size="large" />
								</Link>
							</Col>
						</Col>
					</Col>
				</Row>
			</form>
		</Col>
	</Row>
);

LoginForm.propTypes = {
	onClick: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	errors: PropTypes.shape({
		error: PropTypes.array,
		email: PropTypes.array,
		password: PropTypes.array,
	}).isRequired,
	isFetching: PropTypes.bool.isRequired,
};

export default LoginForm;
