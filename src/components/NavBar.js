import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

function handleTouchTap() {
  alert('onClick triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const NavBar = () => (
  <nav>
    <AppBar
      title={<span><a href='/' style={{color: '#FFFFFF'}}>My IMDB</a></span>}
      onLeftIconButtonTouchTap={handleTouchTap}
      iconElementLeft={<IconButton><NavigationClose /></IconButton>}
      iconElementRight={<FlatButton label="Save" />}
      className='test'
    />
  </nav>
);

export default NavBar;
