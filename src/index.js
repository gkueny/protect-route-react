import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppComponent from './components/app.component';
import HomeComponent from './components/home.component';

import './assets/css/index.css';

ReactDOM.render(
  <Router>
    <AppComponent>
      <Route exact path="/" component={HomeComponent} />
    </AppComponent>
  </Router>,
  document.getElementById('root'),
);
