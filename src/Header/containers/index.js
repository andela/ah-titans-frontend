import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {
	Row,
} from 'react-materialize';
import HeaderComponent from '../components';
import getActiveUser from '../../actions/getActiveUser';

export class Header extends Component {
	constructor(props) {
		super(props);
		this.state = { user: {} };
	}

	componentDidMount() {
		this.props.getActiveUser();
	}

	componentWillReceiveProps(nextProps) {
		const { user } = nextProps;
		this.setState({ user });
	}

	render() {
		const { user } = this.state;
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

export default withRouter(connect(
	mapStatetoProps,
	mapDispatchToProps,
)(Header));
