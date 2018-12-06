/* eslint-disable */
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import SearchBar from './SearchBar';
import { connect } from 'react-redux';
// import * as actions from '../actions';

class Navbar extends Component {
  renderButton() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <a
            style={{ color: 'white' }}
            href="/auth/google"
            className="link dim gray f6 f5-ns dib mr3"
            title="login"
          >
            Login With Google
          </a>
        );
      default:
        return (
          <a
            style={{ color: 'white' }}
            href="/api/logout"
            className="link dim gray f6 f5-ns dib mr3"
            title="logout"
          >
            Logout
          </a>
        );
    }
  }

  render() {
    return (
      <nav id="navBar" className="pa3 pa4-ns">
        {this.renderButton()}
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Navbar);
