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
    //On check le statut de l'utilisateur auprès du serveur, et on agit en conséquance
    checkUserStatus().then(this.updateUserStatus);
  }

  //Sera appelé lorsque l'on changera de route
  componentWillReceiveProps(nextProps) {
    this.state = {
      isLogIn: null,
    };
    //On fait également cette vérification lors d'un changement
    checkUserStatus().then(this.updateUserStatus);
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
            return <Redirect to={'login'} />;
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
