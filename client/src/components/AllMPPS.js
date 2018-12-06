/* eslint-disable */
//this page here will display all mpps as a list of cards
import React, { Component } from 'react';
//will use array as demo but will have to see how we get all of them
//gotta have access to all of the mpps and loop through them
//this is just a draft
const arrayMPPS = [
  {
    name: 'Hon. Doug Ford',
    position: 'Premier',
    number: '416-325-1941',
    picture:
      'https://www.ola.org/sites/default/files/member/profile-photo/doug_ford.jpg'
  },
  {
    name: 'Hon. Donald Duck',
    position: 'Something',
    number: '416-325-2941',
    picture:
      'https://www.ola.org/sites/default/files/member/profile-photo/doug_ford.jpg'
  }
];
//style the card
//llet it be a stateless component - might need to rewrite as pure function
class listMPPS extends Component {
  render() {
    return arrayMPPS.map(mpp => (
      <div
        style={{
          height: 'auto',
          width: '100%',
          borderStyle: 'solid',
          margin: 'auto',
          display: 'inline-flex',
          justifyContent: 'space-between'
        }}
      >
        {/* <img src={mpp.picture} className="br-100 h4 w4 dib ba b--black-05 pa2" alt="an MPP" /> */}
        {mpp.name}
        {mpp.position}
        {mpp.number}
      </div>
    ));
  }
}
export default listMPPS;
