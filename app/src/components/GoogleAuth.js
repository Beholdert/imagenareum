import React from 'react';
import { GoogleLogin } from 'react-google-login';

import { connect } from 'react-redux';

import * as actions from '../actions';

class GoogleAuth extends React.Component {
  render() {
    return (
      <GoogleLogin
        className={`login`}
        clientId="526885040426-vg86dkauc9l1r80bbd1dbqfgie6kbc55.apps.googleusercontent.com"
        onSuccess={res => {
          console.log(res.accessToken);
          this.props.authUser(res.accessToken);
        }}
        onFailure={() => {}}
        responseType="profile"
      >
        <i aria-hidden="true" className="google plus icon" />Log In With Google
      </GoogleLogin>
    );
  }
}

export default connect(
  null,
  actions
)(GoogleAuth);
