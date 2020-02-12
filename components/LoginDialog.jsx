import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  FlatButton, Dialog, TextField, LinearProgress,
} from 'material-ui';
import * as V from '../utils/validation';

class LoginDialog extends Component {
  handleLoginChange(e) {
    const v = e.target.value.substr(0, 48);
    this.props.actions.updateLoginDialog('username', v);
  }

  handlePasswordChange(e) {
    const v = e.target.value.substr(0, 24);
    this.props.actions.updateLoginDialog('password', v);
  }

  handleLogin(e) {
    this.props.actions.loginAction();
  }

  loginFieldF(eText, eColor) {
    return (
      <TextField
        hintText="Имя пользователя"
        fullWidth
        floatingLabelText="Имя пользователя"
        onChange={this.handleLoginChange.bind(this)}
        onKeyDown={((e) => {
          if (e.keyCode === 13 && this.passwordField) {
            this.passwordField.focus();
          }
        })}
        errorText={eText}
        errorStyle={eColor}
        floatingLabelStyle={eColor}
        autoFocus
        value={this.props.properties.credentials.username}
      />
    );
  }

  passwordFieldF(eText, eColor) {
    return (
      <TextField
        hintText="Пароль"
        fullWidth
        floatingLabelText="Пароль"
        ref={ref => this.passwordField = ref}
        onChange={this.handlePasswordChange.bind(this)}
        value={this.props.properties.credentials.password}
        onKeyDown={((e) => {
          if (e.keyCode === 13) {
            this.handleLogin();
          }
        })}
        errorText={eText}
        errorStyle={eColor}
        floatingLabelStyle={eColor}
        type="password"
      />
    );
  }

  actions() {
    return (this.props.isFetching)
      ? (
        <LinearProgress
          mode="indeterminate"
          style={{
            marginTop: 26,
            paddingBottom: 4,
            marginBottom: 18,
          }}
        />
      )
      : (
        <FlatButton
          label="Войти"
          primary
          keyboardFocused
          onClick={this.handleLogin.bind(this)}
          style={{
            width: '100%',
            marginTop: 26,
          }}
        />
      );
  }

  render() {
    const errs = this.props.properties.validations;
    const eText = V.errorText(errs);
    const eColor = V.getMainColor(errs);

    return (
      <Dialog open={this.props.properties.isOpen} contentStyle={{ width: 360 }}>
        <div className="loginGroup">
          {this.loginFieldF(eText, eColor)}
          <br />
          {this.passwordFieldF(eText, eColor)}
          <br />
          {this.actions()}
        </div>
      </Dialog>
    );
  }
}

LoginDialog.propTypes = {
  properties: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default LoginDialog;
