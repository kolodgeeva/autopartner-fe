import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as MyRawTheme from '../src/material_ui_raw_theme_file';

class Footer extends Component {
  static get childContextTypes() {
    return { muiTheme: PropTypes.object };
  }

  getChildContext() {
    return { muiTheme: getMuiTheme(MyRawTheme) };
  }

  render() {
    return (
      <footer className="footer">
        <Divider style={{ marginTop: 10, width: '100%' }} />
      </footer>
    );
  }
}

export default Footer;
