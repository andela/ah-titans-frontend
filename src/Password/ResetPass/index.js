import React from 'react';
import ResetPassword from './containers';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {reset} from '../../actions/passReset';
import swal from 'sweetalert';
import './index.scss';

class ResetPass extends React.Component {
  submit = data => this.props.reset(data).then(() => swal("Success", "Check your email inbox for password reset instructions!", "success" ).then(() => this.props.history.push('/login')));

  render() {
    return <ResetPassword submit={this.submit} />;
  }
}

ResetPass.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired, 
  reset: PropTypes.func.isRequired
}
export default connect(null, {reset})(ResetPass);