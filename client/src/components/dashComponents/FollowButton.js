/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import axios from 'axios';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

const handleFollow = (event, followingId, userId) => {
  event.preventDefault();
  console.log('follow key!!!');
  axios
    .put(`/api/following/${userId}&${followingId}`)
    .then(res => { })
    .catch(err => console.log(err));
};

const FollowButton = ({ classes, followingId, userId }) => {
  return (
    <div>
      <Fab

        color="primary"
        aria-label="Add"
        className={classes.fab}
        onClick={event => handleFollow(event, followingId, userId)}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

FollowButton.propTypes = {
  userId: PropTypes.string.isRequired,
  followingId: PropTypes.string.isRequired
};

export default withStyles(styles)(FollowButton);
