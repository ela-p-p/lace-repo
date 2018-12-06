/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});


class EventFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventDetails: [],
      // followingId: '',
      // userId: '',
      eventName: '',
      eventSpeaker: '',
      eventDate: '',
      eventLocation: ''
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  
  formSubmission = (event, userId, followingId) => {
    event.preventDefault();    
    const eventInfo = {
      userId: userId,
      followingId: followingId,
      eventName: this.state.eventName,
      eventSpeaker: this.state.eventSpeaker,
      eventDate: this.state.eventDate,
      eventLocation: this.state.eventLocation
    };
    axios.post('/api/submit/', eventInfo)

      .then(res => {
        // console.log(res.data)
      })
      .catch(err => console.log(err));

    // console.log(eventInfo);
    document.getElementById('standard-name-eventName').value = '';
    document.getElementById('standard-name-eventSpeaker').value = '';
    document.getElementById('standard-name-eventLocation').value = '';
    document.getElementById('datetime-local').value = '';
  };
  displayEvents() {
    axios
      .get(`/api/events/${this.props.followingId}`)
      .then(res => {
        console.log('me ' + JSON.stringify(res.data) + 'me ')
        this.setState({
          eventDetails: res.data
        });
      })
      .catch(err => console.log(err));
  };
  //
  componentDidMount() {
    this.displayEvents()
  };

  render() {
    const { classes, userId, followingId  } = this.props;
    return (
      <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
        <React.Fragment>
          <CssBaseline />
          <main>
            <form className={classes.container} noValidate autoComplete="off">
              <TextField
                id="standard-name-eventName"
                label="Event Name"
                className={classes.textField}
                value={this.state.eventName}
                onChange={this.handleChange('eventName')}
                margin="normal"
              />
              <TextField
                id="standard-name-eventSpeaker"
                label="Event Speaker"
                className={classes.textField}
                value={this.state.eventSpeaker}
                onChange={this.handleChange('eventSpeaker')}
                margin="normal"
              />
              <TextField
                id="standard-name-eventLocation"
                label="Event Location"
                className={classes.textField}
                value={this.state.eventLocation}
                onChange={this.handleChange('eventLocation')}
              />
              <TextField
                id="datetime-local"
                label="Date"
                type="date"
                defaultValue="2017-05-24"
                value={this.state.eventDate}
                onChange={this.handleChange('eventDate')}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </form>
            <button onClick={event => this.formSubmission(event, userId, followingId)} >
              Submit
              </button>
          </main>
        </React.Fragment>
      </article>
    );
  }
}
EventFeed.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(EventFeed);
