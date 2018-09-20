import React from 'react';
import { Link } from 'react-router-dom';
import {
	Row, Col, Input, Card, Button,
} from 'react-materialize';
import InlineError from '../../ResetPass/components/InlineError';

const NewPassForm = ({
	onSubmit, errors, data, onChange, onValidate, loading,
}) => (
	<Row style={{ marginTop: '5%' }}>
		<form onSubmit={onSubmit} noValidate>
			<Col m={4} s={12} offset="m4">
				<Card textClassName="blacktext" title="New Password">
					<Row>
						<Input
							type="password"
							label="New Password"
							s={12}
							name="new_password"
							id="new_password"
							value={data.password}
							onChange={onChange}
							onKeyUp={onValidate}
						/>
						{errors.new_password && <InlineError text={errors.new_password} />}
					</Row>
					<Row>
						<Input
							type="password"
							label="Confirm Password"
							s={12}
							name="cpassword"
							id="cpassword"
							value={data.cpassword}
							onChange={onChange}
							onKeyUp={onValidate}
						/>
						{errors.cpassword && <InlineError text={errors.cpassword} />}
					</Row>
					<Row>
						<Col m={8} s={12}>
							<Button
								waves="light"
							>
								{loading ? 'Processing ...' : 'Reset Password'}
							</Button>
						</Col>
						<Col m={4} s={12}>
							<Link to="/login">Login instead?</Link>
						</Col>
					</Row>
				</Card>
			</Col>
		</form>
	</Row>
);

export default NewPassForm;
