import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

function handleTouchTap() {
  alert('onClick triggered on the title component');
}

class LoggedIn extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.changeUser(null);
  }

  render(){
    return(
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText={ this.props.user.email } />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" onClick={ this.logout } />
      </IconMenu>
    )
  }
};

class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton label="Login" />
    );
  }
}

class NavBar extends React.Component {
  render(){
    return(
      <nav>
        <AppBar
          title={<span><a href='/' style={{color: '#FFFFFF'}}>My IMDB</a></span>}
          onLeftIconButtonTouchTap={handleTouchTap}
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={this.props.user.email !== null ? <LoggedIn {...this.props} /> : <Login /> }
          className='test'
        />
      </nav>
    )};
};

export default NavBar;
