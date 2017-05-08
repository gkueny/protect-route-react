import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';
import { checkUserStatus } from '../services/user.service';

class ProtectedRoute extends Component {
  constructor() {
    super();
    this.state = {
      isLogIn: null,
    };
  }

  componentDidMount() {
    // Fait un appel API au serveur et appel la fonction updateUserStatus en lui passant la réponse (positive ou négative du serveur
    checkUserStatus(this.updateUserStatus);
  }

  //Sera appelé lorsque l'on changera de route
  componentWillReceiveProps() {
    this.state = {
      isLogIn: null,
    };
    checkUserStatus(this.updateUserStatus); //On fait également cette vérification lors d'un changement
  }

  updateUserStatus = isLogIn => {
    if (this.state.isLogIn !== isLogIn) {
      this.setState({
        isLogIn,
      });
    }
  };

  render() {
    const { component: Component, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={props => {
          if (this.state.isLogIn) {
            return <Component {...props} />;
          } else if (this.state.isLogIn !== null) {
            return (
              <Redirect
                to={{
                  pathname: 'login',
                  state: { from: this.props.location },
                }}
              />
            );
          } else {
            return null;
          }
        }}
      />
    );
  }
}

ProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  location: PropTypes.object,
};

export default ProtectedRoute;