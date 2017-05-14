import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import logo from '../assets/images/logo.svg';
import '../assets/css/App.css';

const AppComponent = props => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hey ! Bienvenue sur ton application React</h2>
        <nav>
          <ul>
            <li><NavLink exact to="/">Accueil</NavLink></li>
            <li><NavLink to="/admin">Admin</NavLink></li>
            <li><NavLink to="/login">Connexion</NavLink></li>
          </ul>
        </nav>
      </div>

      {props.children}

    </div>
  );
};

AppComponent.propTypes = {
  children: PropTypes.array,
};

export default AppComponent;
