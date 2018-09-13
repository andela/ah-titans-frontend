import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
	Row, Col, Input, Card, Button,
} from 'react-materialize';
import InlineError from './InlineError';


const ResetPasswordForm = ({
	onSubmit, errors, data, onChange, onValidate, loading,
}) => (
	<Row style={{ marginTop: '5%' }}>
		<form onSubmit={onSubmit} noValidate>
    <Col m={4} s={12} offset="m4">
				<Card textClassName="blacktext" title="Reset Password">
    <Row>
						<Input
							type="email"
							label="Email"
							s={12}
							name="email"
							id="email"
    value={data}
    onChange={onChange}
    onKeyUp={onValidate}
  />
						{errors.email && <InlineError text={errors.email} />}
  </Row>
					<Row>
						<Col m={8} s={12}>
    <Button
    waves="light"
								disabled={loading}
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


ResetPasswordForm.propTypes = {
	loading: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	onValidate: PropTypes.func.isRequired,
	data: PropTypes.string.isRequired,
	errors: PropTypes.shape({
		email: PropTypes.string,
	}).isRequired,
};


export default ResetPasswordForm;
