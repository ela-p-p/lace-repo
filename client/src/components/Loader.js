/* eslint-disable */
import React from 'react';
import { css } from 'react-emotion';
// First way to import
import { ScaleLoader } from 'react-spinners';
// Another way to import
// import ClipLoader from 'react-spinners/ClipLoader';
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const styles = {
  loaderPosition: {
    marginTop: '40vh'
  }
};

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <div className="sweet-loading" style={styles.loaderPosition}>
        <span> </span>
        <span> </span>
        <ScaleLoader
          className={override}
          sizeUnit={'px'}
          size={200}
          color={'#123abc'}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default Loader;
