import React, { Component } from 'react';
import GoogleAuth from '../components/GoogleAuth';
import { connect } from 'react-redux';

class Main extends Component {
  render() {
    return (
      <div className="main-page">
        <div className="main">
          <h1>xuyarium</h1>
          <p>{this.props.auth.isFetching && 'zagruzka'}</p>
          <GoogleAuth />
        </div>
      </div>
    );
  }
}

export default connect(({ auth }) => ({ auth }))(Main);
