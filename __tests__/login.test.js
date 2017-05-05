import React from 'react';
import { shallow } from 'enzyme';
import LoginComponent from '../src/components/login.component';

it('Login component render without crashing', () => {
  shallow(<LoginComponent />);
});
