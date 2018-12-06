/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
//
import API from '../utils/API';
import TwitterFeed from './TwitterFeed';
import FacebookFeed from './FacebookFeed';
import BillsFeed from './dashComponents/BillsFeed';
// end of inports

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    // width: 500,
    flexGrow: 1 // this will center
  }
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
    // value: '',
    recentBill: []
  };

  loadRecentBills = () => {
    API.getRecentBills()
      .then(res => {
        this.setState({ recentBill: res.data });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.loadRecentBills();
  }

  componentDidUpdate() {
    this.swipeableActions.updateHeight();
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
            centered
          >
            <Tab label="Recent Bills" />
            <Tab label="Twitter Feed" />
            <Tab label="Facebook Feed" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
          action={actions => {
            this.swipeableActions = actions;
          }}
          animateHeight
          style={{
            maxHeight: '78vh'
          }}
        >
          <TabContainer
            style={{
              overflowY: 'scroll'
              // maxHeight: '70vh'
            }}
            dir={theme.direction}
          >
            <div className="billsToday">
              <h2>Recent Bills</h2>
              <BillsFeed recentBill={this.state.recentBill} />
            </div>
          </TabContainer>
          <TabContainer
            style={{
              overflowY: 'scroll',
              maxHeight: '70vh'
            }}
            dir={theme.direction}
            className="test"
          >
            <TwitterFeed />
          </TabContainer>
          <TabContainer
            style={{
              overflowY: 'scroll',
              maxHeight: '70vh'
            }}
            dir={theme.direction}
          >
            <FacebookFeed />
          </TabContainer>
        </SwipeableViews>
        <div
          className="postalCodeSearch"
          style={{
            width: '100%',
            marginTop: '0px',
            height: 'auto',
            backgroundColor: '#F4F4F4'
          }}
        >
          <h3>Not Sure who your MPP is?</h3>
          <a
            href="https://voterinformationservice.elections.on.ca/en/election/search?mode=postalCode"
            target="blank"
          >
            Click here to search by postal code
          </a>
        </div>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
