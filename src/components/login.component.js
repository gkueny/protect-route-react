import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as userServices from '../services/user.service';

import '../assets/css/App.css';

class LoginComponent extends Component {
  constructor() {
    super();

    this.state = {
      transition: false,
      isSignIn: null,
      error: '',
    };
  }

  componentWillMount() {
    this.checkUserStatus();
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state === nextState) {
      this.checkUserStatus();
    }
  }

  checkUserStatus = () => {
    userServices.checkUserStatus(isSignIn => {
      this.setState({
        isSignIn,
      });
    });
  };

  signIn = () => {
    this.setState({
      transition: true,
    });
    userServices.signInUser(
      'test@test.fr',
      'test@test',
      (isOk, errorMessage = null) => {
        this.setState({
          isSignIn: isOk,
          error: errorMessage,
          transition: false,
        });
      },
    );
  };

  signOut = () => {
    this.setState({
      transition: true,
    });
    userServices.signOutUser(isOk => {
      this.setState({
        isSignIn: !isOk,
        transition: false,
      });
    });
  };

  render() {
    return (
      <div className="home-block">
        <p>{this.state.error}</p>
        {this.state.isSignIn
          ? <button
              disabled={this.state.isSignIn === null || this.state.transition}
              onClick={this.signOut}
            >
              Se déconnecter
            </button>
          : <button
              disabled={this.state.isSignIn === null || this.state.transition}
              onClick={this.signIn}
            >
              Se connecter (compte de test par défaut)
            </button>}

      </div>
    );
  }
}

LoginComponent.propTypes = {
  history: PropTypes.object,
};

export default LoginComponent;
