/* eslint-disable */
import React, { Component } from 'react';
// end of inports

const facebookPlug = (d, s, id) => {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2';
  fjs.parentNode.insertBefore(js, fjs);
};

const defaultFb = 'https://www.facebook.com/CBCPolitics/';

// const handleFacebookUrl = fb => {
//   if (window.location.pathname === '/landing') {
//     fb = defaultFb;
//     console.log(fb);
//   } else {
//     fb = fb;
//     console.log(fb);
//   }
// };

const handleUrlCheck = link => {
  if (window.location.pathname === '/landing') {
    console.log('flat link ', defaultFb);
    return (
      <div
        className="fb-page"
        data-href={defaultFb}
        data-tabs="timeline"
        data-width="500"
        data-small-header="true"
        data-adapt-container-width="true"
        data-hide-cover="true"
        data-show-facepile="false"
      >
        <blockquote cite={defaultFb} className="fb-xfbml-parse-ignore">
          <a href={defaultFb}>Politics</a>
        </blockquote>
      </div>
    );
  } else {
    console.log('super link ', link);
    console.log(typeof link);
    return (
      <div
        className="fb-page"
        data-href={link}
        data-tabs="timeline"
        data-width="500"
        data-small-header="true"
        data-adapt-container-width="true"
        data-hide-cover="true"
        data-show-facepile="false"
      >
        <blockquote cite={link} className="fb-xfbml-parse-ignore">
          <a href={link}>Politics</a>
        </blockquote>
      </div>
    );
  }
};

class FacebookFeed extends Component {
  render() {
    const { facebook } = this.props;
    return (
      facebookPlug(document, 'script', 'facebook-jssdk'),
      handleUrlCheck(facebook)
    );
  }
}

export default FacebookFeed;
