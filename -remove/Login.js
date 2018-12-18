/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div className="pa4 black-80">
        <form className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Login Here</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                />
              </label>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                />
              </label>
            </div>
            <label className="pa0 ma0 lh-copy f6 pointer" htmlFor="rembM">
              Remember me
              <input id="rembMe" type="checkbox" />
            </label>
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Login"
            />
          </div>
        </form>
        <div className='mv3'>
          <Link to="/signup" className="link dim gray f6 f5-ns dib mr3" title="User Page">
            Create an Account
          </Link>
          <a href="/auth/google" className="link dim gray f6 f5-ns dib mr3" title="User Page">
            Login With Google
        </a>
        </div>
      </div>
    );
  }
}

export default Login;
