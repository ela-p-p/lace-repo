/* eslint-disable */
// eslint disbale to be removed once states added.
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';
// import compoenents
// import AuthButton from './components/AuthButton';
// import Landing from './components/Landing';
import SelectedDash from './components/SelectedDash';
import UserDash from './components/UserDash';
import fakeData from './fakedata';
import Logo from './components/Logo';
import Footer from './components/Footer';
// import Loader from './components/Loader';
import Appbar from './components/Appbar';
import Feed from './components/Feed';
import SelectedMpp from './components/SelectedMpp';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import listMPPS from './components/AllMPPS';
// end of inports

// styling
// import SearchBar from './components/SearchBar';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    if (window.location.pathname === '/') {
      require('./logo.css');
    } else {
      require('./App.css');
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="acCointainer">
            <Appbar />
            {/* <AuthButton id="navBar" /> */}
            <div className="mainContent ">
              <Route exact path="/" component={Logo} />
              {/* <Route exact path="/landing" component={Landing} /> */}
              <Route exact path="/landing" component={Feed} />
              {/* <Route exact path="/landing" component={Dashboard} /> */}
              <Route exact path="/user" component={UserDash} />
              {/* <Route path="/mpp/:mppName" component={SelectedDash} /> */}
              <Route path="/mpp/:mppName" component={SelectedMpp} />
              {/* <Route exact path="/dev-ca" component={SelectedMpp} /> */}
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
