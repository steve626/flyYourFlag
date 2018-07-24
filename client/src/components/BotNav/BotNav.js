import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import './BotNav.css';


const styles = {
  root: {
    bottom: 0,
    position: 'absolute',
  },
};

class BotNav extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        style={{width:'100%', backgroundColor:'#e5e5e5', zIndex: '1000'}}
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction icon={<PersonIcon />}  href='/Profile'/>
        <BottomNavigationAction icon={<FavoriteIcon />} href='/TeamChooser'/>
        <BottomNavigationAction icon={<PersonPinCircleIcon />}  href='/MapView'/>
      </BottomNavigation>
    );
  }
}

BotNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BotNav);
