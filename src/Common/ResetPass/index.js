import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './index.scss';
import { bindActionCreators } from 'redux';
import { reset } from '../../actions/passReset';
import ResetPassword from './containers';

class ResetPass extends React.Component {
	handleSubmit = (data) => {
		this.props.reset(data, this.props.history);
	}

	render() {
    const { loading } = this.props.resetPass;
    console.log(loading)
		return <ResetPassword loading={loading} handleSubmit={this.handleSubmit} />;
	}
}

ResetPass.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired,
	}).isRequired,
	reset: PropTypes.func.isRequired,
};

const mapStateToProps = ({ resetPass }) => ({
	resetPass,
});

const mapDispatchToProps = dispatch => bindActionCreators({ reset }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ResetPass);
