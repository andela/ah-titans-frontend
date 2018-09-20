import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HeaderComponent from '../components';
import getActiveUser from '../../actions/getActiveUser';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.props.getActiveUser();
	}

	render() {
		const { user } = this.props;
		return <HeaderComponent user={user} />;
	}
}

const mapDispatchToProps = dispatch => bindActionCreators(
	{
		getActiveUser,
	},
	dispatch,
);

const mapStatetoProps = state => ({
	user: state.user,
});

export default connect(
	mapStatetoProps,
	mapDispatchToProps,
)(Header);
