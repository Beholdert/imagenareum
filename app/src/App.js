import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';

import Main from './pages/Main';
class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.auth.auth ? (
          <p>zdarova, {this.props.auth.user.name}. Dobro pozhalovat'</p>
        ) : (
          <Main />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(App);
