import React from 'react';
import { shallow } from 'enzyme';
import LoginComponent from '../src/components/login.component';
import * as firebase from 'firebase';
import { config } from '../src/vars/firebase.config';

it('Login component render without crashing', () => {
  firebase.initializeApp(config);

  shallow(<LoginComponent />);
});
