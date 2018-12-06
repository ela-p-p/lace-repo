/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';
// import API from '../utils/API';
class SearchBar extends Component {
  state = {
    value: '',
    mppLookUp: ''
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post(`/api/mppName/${this.state.value}`).then(res => {

      window.location = '/mpp/' + this.state.value;
      this.loading = false;
    });
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      axios.post(`/api/mppName/${this.state.value}`).then(res => {

        window.location = '/mpp/' + this.state.value;
      });
    }
  }

  render() {
    return (
      <div className="searchbar" style={{ display: 'inline-flex' }}>
        <input
          type="text"
          placeholder="search politicans"
          className="input-reset ba b--black-20  mb2 db w-100 gray f6 f5-ns dib "
          onChange={event => this.handleChange(event)}
          onKeyPress={event => this.handleKeyPress(event)}
        />
        <button
          className=" mb2 mr3"
          onClick={event => this.handleSubmit(event)}
        >
          <i className="fa fa-search" />
        </button>
      </div>
    );
  }
}

export default SearchBar;
