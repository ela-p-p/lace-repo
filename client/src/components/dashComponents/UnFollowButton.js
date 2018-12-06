/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

const handleUnFollow = (event, props) => {
    event.preventDefault();
    console.log('unfollow key!!!')
    
    axios.put(`/api/unFollow/${props.userId}&${props.followingId}`)
        .then(res => {
        })
        .catch(err => console.log(err));
}

const UnFollowButton = props => {
    return (
        <div>
            <Button variant='contained' className={props.button} size="small" color="primary"
                onClick={event => handleUnFollow(event, props)}
                onClick={() => props.removeCard(props.followingId)}
            >
                Unfollow
        </Button>
        </div>
    );
}

UnFollowButton.propTypes = {
    userId: PropTypes.string.isRequired,
    followingId: PropTypes.string.isRequired,
    removeCard: PropTypes.func.isRequired
};

export default withStyles(styles)(UnFollowButton);