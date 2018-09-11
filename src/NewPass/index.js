import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import NewPassword from './containers';
import { connect } from 'react-redux';
import { newpass } from '../actions/newPass';

class NewPass extends React.Component {
	state = {}
  componentDidMount() {
    axios.get(`http://ah-titans-api.herokuapp.com/api/reset/${this.props.match.params.uidb64}/${this.props.match.params.token}/`)
			.then(res => this.setState(res.data));
	}
	
	submit = data => this.props.newpass(data).then((res) => swal("Success", `${res.reset} Click OK to login`, "success" ).then(() => this.props.history.push('/login')));

  render() {
		if (this.state.msg) this.props.history.push('/NotFound')
    return <NewPassword reset_token={this.state.token} submit={this.submit}/>;
  }
}

NewPass.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
}

export default connect(null, {newpass})(NewPass);
 