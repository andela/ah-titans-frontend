import React from 'react';
import PropTypes from 'prop-types';
import NewPassword from './containers';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { checkURL, newpass } from '../../actions/newPass';

class NewPass extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  componentDidMount() {
    this.props.checkURL(this.props.match.params.uidb64, this.props.match.params.token, this.props.history);
	}
	
	submit = (data) => {
    this.props.newpass(data)
      .then(
        (res) => swal("Success", `${res.reset} Click OK to login`, "success" )
        .then(
          () => this.props.history.push('/login')
        )
      )
  };

  render() {
    const { token } = this.props.newPass.newPass;
    return <NewPassword reset_token={token} submit={this.submit}/>;
  }
}

NewPass.propTypes = { 
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
}

const mapDispatchToProps = dispatch => bindActionCreators({
	checkURL, newpass,
}, dispatch);

const mapStatetoProps = newPass => ({
  newPass
});

export default connect(mapStatetoProps, mapDispatchToProps)(NewPass);
 