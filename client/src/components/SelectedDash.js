/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';
// components
import MppInfo from './dashComponents/Mppinfo';
import SocialFeed from './dashComponents/SocialFeed';
import EventFeed from './dashComponents/EventFeed';
import NewsFeed from './dashComponents/NewsFeed';
import SpeechFeed from './dashComponents/SpeechFeed';
import VotingRecords from './dashComponents/VotingRecords';
import FollowButton from './dashComponents/FollowButton';
import demoList from './list/mppSocial';
import Loader from './Loader';
import { Animated } from 'react-animated-css';

import TwitterFeed from './dashComponents/TwitterFeed';
import FacebookFeed from './dashComponents/FacebookFeed';
//
// const NewsAPI = require('newsapi');

const styles = {
  layout: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: ''
  },
  size: {
    height: '400px'
  },
  rightA: {
    marginRight: '0px'
  }
};

export default class SelectedMPP extends Component {
  state = {
    mppLockup: this.props.match.params.mppName,
    lastName: '',
    name: '',
    position: [],
    url: '',
    photo: ' ',
    party: '',
    dateOfService: '',
    currentRiding: '',
    ridingMap: '',
    hansard: [],
    votes: [],
    parliamentNumber: '',
    telephone: '',
    twitter: '',
    facebook: '',
    userId: '',
    followingId: '',
    isLoading: true
  };

  mppSearch() {
    axios
      .get(`/api/mppName/${this.state.mppLockup}`, {
        name: name
      })
      .then(res => {
        this.setState({
          followingId: res.data[0]._id,
          lastName: res.data[0].lastName,
          name: res.data[0].name,
          position: res.data[0].careerDetails[0].positions,
          url: res.data[0].url,
          photo: res.data[0].photo,
          party: res.data[0].party,
          dateOfService: res.data[0].dateOfService,
          currentRiding: res.data[0].currentRiding,
          ridingMap: res.data[0].ridingMap,
          parliamentNumber: res.data[0].careerDetails[0].parliamentNumber,
          telephone: res.data[0].addressEmailId.Telephone
        });
      })
      .catch(err => console.log(err));
  }
  //
  getTwitter() {
    demoList.forEach(tName => {
      if (tName.name === this.state.name) {
        return this.setState({ twitter: tName.twitter });
      }
    });
  }
  //
  getFacebook() {
    demoList.forEach(fName => {
      if (fName.name === this.state.name) {
        console.log(fName.name);
        console.log(this.state.name);
        console.log(fName.facebook);
        return this.setState({ facebook: fName.facebook });
      }
    });
  }
  //
  getCurrentUser = () => {
    axios.get('/api/currentUser')
      .then(res => {
        this.setState({ userId: res.data._id })
      })
      .catch(err => console.log(err));
  };
  //
  componentDidMount() {
    this.getCurrentUser();
    this.mppSearch();
    setTimeout(() => {
      this.getTwitter();
      this.getFacebook();

    }, 10000);
    setTimeout(() => this.setState({ isLoading: false }), 3000);
  }

  render() {
    if (this.state.isLoading) {
      return <Loader />;
    }

    const {
      name,
      position,
      url,
      photo,
      currentRiding,
      party,
      parliamentNumber,
      telephone,
      twitter,
      facebook,
      mppLockup,
      userId,
      followingId,
      lastName
    } = this.state;

    return (
      <Animated
        animationIn="fadeInRight"
        animationOut="fadeOutLeft"
        isVisible={true}
      >
        <MppInfo
          // followingId={followingId}
          lastName={lastName}
          name={name}
          position={position}
          url={url}
          photo={photo}
          currentRiding={currentRiding}
          party={party}
          parliamentNumber={parliamentNumber}
          telephone={telephone}
          // userId={userId}
        />
        <div className="outterDiv center w-80" style={styles.layout}>
          <div className="innerDiv-left">
            {/* <SocialFeed twitter={twitter} facebook={facebook} /> */}
            <FollowButton userId={userId} followingId={followingId}/>
            <TwitterFeed twitter={twitter} />
            <FacebookFeed facebook={facebook} />
            <EventFeed  userId={userId} followingId={followingId}/>
            {/* <NewsFeed customStyle={styles.rightA} /> */}
          </div>
          <div className="innerDiv-right w-80 ">
            <VotingRecords votingRecords={VotingRecords} customStyle={styles.rightA} />
            <SpeechFeed mppLockup={mppLockup} customStyle={styles.rightA} />
          </div>
        </div>
      </Animated>
    );
  }
}
