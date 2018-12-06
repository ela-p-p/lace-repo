/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import AuthButton from './AuthButton';
import SelectMenu from './dashComponents/SelectMenu'

const styles = theme => ({
  root: {
    width: '100%'
  },
  palette: {
    backgroundColor: '#009688'
  },
  grow: {
    flexGrow: 3
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 200
    }
  },
  // searchIcon: {
  //   width: theme.spacing.unit * 9,
  //   height: '100%',
  //   position: 'absolute',
  //   pointerEvents: 'none',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // },
  // inputRoot: {
  //   color: 'black',
  //   width: '100%'
  // },
  // inputInput: {
  //   paddingTop: theme.spacing.unit,
  //   paddingRight: theme.spacing.unit,
  //   paddingBottom: theme.spacing.unit,
  //   paddingLeft: theme.spacing.unit * 10,
  //   transition: theme.transitions.create('width'),
  //   width: '100%',
  //   [theme.breakpoints.up('md')]: {
  //     width: 200
  //   }
  // },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
});

class PrimarySearchAppBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    value: '',
    mppLookUp: ''
  };

  // handleChange(event) {
  //   this.setState({ value: event.target.value });
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   console.log('search key pressed');
  //   axios
  //     .post(`/api/mppName/${this.state.value}`)
  //     .then(res => {
  //       this.setState({ value: res.data[0].name })
  //       window.location = `/mpp/${this.state.value}`;
  //       this.loading = false;
  //     })
  //     .catch(err => console.log(err));
  // }

  // handleKeyPress(event) {
  //   if (event.key === 'Enter') {
  //     event.preventDefault();
  //     axios
  //       .post(`/api/mppName/${this.state.value}`)
  //       .then(res => {
  //         this.setState({ value: res.data[0].name })
  //         window.location = `/mpp/${this.state.value}`;
  //       })
  //       .catch(err => alert('Please Login'));
  //   }
  // }

  renderButton() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <a
            href="/auth/google"
            className="link dim gray f6 f5-ns dib mr3"
            title="login"
          >
            Login With Google
          </a>
        );
      default:
        return (
          <a
            href="/api/logout"
            className="link dim gray f6 f5-ns dib mr3"
            title="login"
          >
            Logout
          </a>
        );
    }
  }

  render() {
    // const { anchorEl, mobileMoreAnchorEl } = this.state;

    const { classes, names } = this.props;
   

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.palette}>
            {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
              <MenuIcon />
    </IconButton> */}
            <Button
              component={Link}
              to="/"
              className={classes.title}
              // variant="h6"
              color="inherit"
              nowrap="true"
            >
              In Their Own Words!
            </Button>

            <div className={classes.search}>
              <SelectMenu
                onChange={event => this.handleChange(event)}
                onInputChange={event => this.handleInputChange(event)}
              >
              </SelectMenu>
            </div>
            <AuthButton id="navBar" />
            <Button color="inherit" component={Link} to="/User">
              User
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PrimarySearchAppBar);
