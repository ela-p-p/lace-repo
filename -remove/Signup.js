/* eslint-disable */
import React, { Component } from 'react';

class Signup extends Component {
  render() {
    return (
      <article className="pa4 black-80">
        <form className="measure center" action="sign-up_submit" method="get" acceptCharset="utf-8">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Sign Up</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email address
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
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                />
              </label>
            </div>
          </fieldset>
          <div className="mt3">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
              type="submit"
              value="Sign Up"
            />
          </div>
        </form>
      </article>
    );
  }
}

export default Signup;
