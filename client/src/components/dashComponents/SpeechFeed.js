/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';
import './voting.css';

const styles = {};

styles.rightA = {
  marginRight: '0px'
};

class SpeechFeed extends Component {
  state = {
    // mppLockup: this.props.match.params.mppName,
    hansard: []
  };

  //load on Speech Feed
  loadHansard = () => {
    // API.getHansard(this.state.name)
    axios
      .get(`/api/hansard/${this.props.mppLockup}`, {
        name: name
      })
      .then(res => {
        this.setState({ hansard: res.data });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.loadHansard();
  }

  render() {
    const { hansard } = this.state;
    return (
      <article
        // style={styles.rightA}
        className="center br3 hidden  b--black-10 mv4 w-100 pa3 "
      >
        {/* <div className="pa3 bt b--black-10"> */}
        <ul>
          {hansard.map((element, index) => {
            return (
              <div key={index}>
                <li
                  className="f6 link dim br3 ph3 pv2 mb2 dib white bg-mid-gray"
                >
                  {element.speech}
                </li>
                <br />
              </div>
            );
          })}
        </ul>
        {/* </div> */}
      </article>
    );
  }
}

export default SpeechFeed;
