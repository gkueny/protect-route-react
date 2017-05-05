import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

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
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="admin">Admin</Link></li>
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
