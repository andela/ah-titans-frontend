import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
	Row,
} from 'react-materialize';
import HeaderComponent from '../components';
import getActiveUser from '../../actions/getActiveUser';

export class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.props.getActiveUser();
	}

	render() {
		const { user } = this.props;
		return <Row><HeaderComponent user={user} /></Row>;
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
