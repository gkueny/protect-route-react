import React, { Component } from 'react';

import * as userServices from '../services/user.service';

import '../assets/css/App.css';

class LoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      transition: false,
      isSignIn: null,
      error: null,
    };
  }

  componentDidMount() {
    userServices.checkUserStatus().then(this.updateUserStatus);
  }

  componentDidUpdate(lastProps, lastState) {
    // check if user is deconnected
    if (this.state === lastState && !this.state.isSignIn) {
      userServices.checkUserStatus().then(this.updateUserStatus);
    }
  }

  updateUserStatus = isSignIn => {
    if (this.state.isSignIn !== isSignIn) {
      this.setState({
        isSignIn,
      });
    }
  };

  signIn = () => {
    this.setState({
      transition: true,
    });
    userServices
      .signInUser('test@test.fr', 'test@test')
      .then((isOk, errorMessage = null) => {
        this.setState({
          isSignIn: isOk,
          error: errorMessage,
          transition: false,
        });
      });
  };

  signOut = () => {
    this.setState({
      transition: true,
    });
    userServices.signOutUser().then(() => {
      this.setState({
        isSignIn: false,
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

export default LoginComponent;
