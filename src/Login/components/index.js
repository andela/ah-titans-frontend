import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
	Col, Card, Row, Input, Button,
} from 'react-materialize';
import './index.scss';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

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
  
							<Link to="/signup"> Signup</Link>
						</p>
					</Col>
				</Row>
        Or login with:
				<Row>
        <div className="text-center row" style={{ marginLeft: '12.8em', marginRight: '19.6em' }}>
					{/* <Col m={6} s={12}> */}
						{/* <Row style={{ marginTop: '5%' }}> */}
							<FacebookLogin
								appId={fbAppId}
								fields="name,email,picture"
								callback={facebookResponse}
                onSuccess={facebookResponse}
                cssClass="btn btn-primary col"
                style={{ width: '10em' }}

                // cssClass="waves-effect  btn-flat btn--default m-b--100 btn--block"
          icon="fa fa-facebook fa-2x"
          textButton=""
                />
							<GoogleLogin
								clientId={googleClientId}
								onSuccess={onSuccess}
								onFailure={onFailure}
          type=""
          tag="div"
          className="col"
							>
								<button className="btn btn-danger" type="button" style={{width: '1em'}}>
									<i className="fa fa-google fa-2x" />
								</button>
							</GoogleLogin>
             </div> 
					{/* </Col> */}
				</Row>
			</Card>
		</Col>
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
