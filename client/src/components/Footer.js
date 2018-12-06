/* eslint-disable */
import React from 'react';
//

const styles = {
  footerStyle: {
    textAlign: 'center',
    width: '100%',
    backgroundColor: '#009688',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '10px',
    paddingTop: '10px',
    color: 'white'
  },
  footerDiv: {
    // position: 'absolute',
    // position: 'sticky',
    bottom: '0px',
    width: '100%',
    height: '50px'
    // marginTop: '-50px'
  }
};
//
const Footer = () => (
  <div style={styles.footerDiv}>
    <div style={styles.footerStyle}>In Their Own Words &copy;</div>
  </div>
);

export default Footer;
