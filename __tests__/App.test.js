import React from 'react';
import { shallow } from 'enzyme';
import AppComponent from '../src/components/app.component';

it('App component render without crashing', () => {
  shallow(<AppComponent />);
});
