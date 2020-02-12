import React from 'react';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import DrawerLeft from './DrawerLeft';
import * as MyRawTheme from '../src/material_ui_raw_theme_file';
import AppComponent from './AppComponent';
import LoginDialog from './LoginDialog';

class Header extends AppComponent {
  static get childContextTypes() {
    return { muiTheme: PropTypes.object.isRequired };
  }

  getChildContext() {
    return { muiTheme: getMuiTheme(MyRawTheme) };
  }

  constructor() {
    super();
    this.state = {
      drawerOpen: false,
    };
  }


  toggleDrawer() {
    this.setState({
      drawerOpen: !this.state.drawerOpen,
    });
  }

  handleLogout() {
    this.authActions()
      .logoutAction();
  }

  loginDialog() {
    return (
      <LoginDialog
        key="LoginDialog"
        isFetching={this.auth().isFetching}
        properties={this.auth().loginDialog}
        actions={this.authActions()}
      />
    );
  }

  render() {
    return (
      (this.auth().isAuthenticated)
        ? (
          <section>
            <DrawerLeft
              {...this.props}
              open={this.state.drawerOpen}
              onToggleDrawer={this.toggleDrawer.bind(this)}
            />
            <header
              className="header"
              style={{
                minWidth: 500,
                width: '100%',
                position: 'static',
                top: 0,
              }}
            >
              <AppBar
                title="Автопартнер"
                onLeftIconButtonClick={this.toggleDrawer.bind(this)}
                iconElementRight={(
                  <IconMenu
                    iconButtonElement={
                      <IconButton><MoreVertIcon/></IconButton>
                    }
                    targetOrigin={{
                      horizontal: 'right',
                      vertical: 'top',
                    }}
                    anchorOrigin={{
                      horizontal: 'right',
                      vertical: 'top',
                    }}
                  >
                    <MenuItem primaryText="Настройки"/>
                    <MenuItem onClick={this.handleLogout.bind(this)} primaryText="Выйти"/>
                  </IconMenu>
                )}
              />
            </header>
          </section>
        )
        : (
          <header className="header">
            {this.loginDialog()}
          </header>
        )
    );
  }
}

export default Header;
