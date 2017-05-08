import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppComponent from './components/app.component';
import ProtectedRoute from './components/protected.component';
import HomeComponent from './components/home.component';
import AdminComponent from './components/admin.component';
import LoginComponent from './components/login.component';

import * as firebase from 'firebase';
import { config } from './vars/firebase.config';

import './assets/css/index.css';

firebase.initializeApp(config);

ReactDOM.render(
  <Router>
    <AppComponent>
      <Route exact path="/" component={HomeComponent} />
      <Route path="/login" component={LoginComponent} />
      <ProtectedRoute path="/admin" component={AdminComponent} />
    </AppComponent>
  </Router>,
  document.getElementById('root'),
);
