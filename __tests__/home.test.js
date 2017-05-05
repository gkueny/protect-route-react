import React from 'react';
import { shallow } from 'enzyme';
import HomeComponent from '../src/components/home.component';

it('Home component render without crashing', () => {
  shallow(<HomeComponent />);
});
