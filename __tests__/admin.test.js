import React from 'react';
import { shallow } from 'enzyme';
import AdminComponent from '../src/components/admin.component';

it('App component render without crashing', () => {
  shallow(<AdminComponent />);
});
