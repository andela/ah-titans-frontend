import React from 'react';
import ResetPassword from './containers';

class ResetPass extends React.Component {
  submit = data => {
    console.log(data);
  }

  render() {
    return <ResetPassword submit={this.submit} />;
  }
}

export default ResetPass;
