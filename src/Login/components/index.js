import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
	Col, Card, Row, Input, Button,
} from 'react-materialize';
import './index.scss';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import Alert from 'react-s-alert';
// import 'react-s-alert/dist/s-alert-default.css';
// import 'react-s-alert/dist/s-alert-css-effects/slide.css';

const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const fbAppId = process.env.REACT_APP_FACEBOOK_APP_ID;


const LoginForm = ({
	onClick, onChange, errors, isFetching, facebookResponse, onFailure, onSuccess,
}) => (
	<Row style={{ marginTop: '5%' }}>
		<Col m={6} s={12} offset="m3">
			<Card textClassName="blacktext" title="Login">
				<Row>
					<div className="error">{errors.error}</div>
					<Input
						type="email"
						label="Email"
						name="email"
						onChange={onChange}
						s={12}
					/>
					<div className="error">{errors.email}</div>
					<Input
						type="password"
						label="password"
						name="password"
						onChange={onChange}
						s={12}
					/>
					<div className="error">{errors.password}</div>
				</Row>
				<Row>
					<Col m={6} s={12}>
						<Button
							waves="light"
							className="emailLoginBtn"
							onClick={onClick}
							disabled={isFetching}
						>
							{isFetching ? 'Processing ...' : 'Login with email'}
						</Button>
					</Col>
					<Col m={6} s={12}>
						<p style={{ color: 'black' }}>
              Not a member?
							
					<Link to="/signup">
              			Signup
							</Link>
						</p>
					</Col>
				</Row>
        	Or sign in with:


				
					<Row>
          <Col>
					<FacebookLogin
						appId={fbAppId}
						fields="name,email,picture"
						callback={facebookResponse}
						onSuccess={facebookResponse}
						onFailure={onFailure}
						cssClass="btn btn-primary col"
						style={{ width: '10em' }}
						icon="fa fa-facebook fa-2x"
						textButton=" Sign in with facebook"
					/>
					<GoogleLogin
						clientId={googleClientId}
						onSuccess={onSuccess}
						onFailure={onFailure}
						type=""
						tag="div"
						className="col"
						>
						<a class="waves-effect waves-light btn social google">
            <i class="fa fa-google"></i> Sign in with google</a>
						</GoogleLogin>
            </Col>
					</Row>
			</Card>
		</Col>
    <Alert stack={{limit: 3}} />
	</Row>
);

LoginForm.propTypes = {
	onClick: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	facebookResponse: PropTypes.func.isRequired,
	onSuccess: PropTypes.func.isRequired,
	onFailure: PropTypes.func.isRequired,
	errors: PropTypes.shape({
		error: PropTypes.array,
		email: PropTypes.array,
		password: PropTypes.array,
	}).isRequired,
	isFetching: PropTypes.bool.isRequired,
};

export default LoginForm;
