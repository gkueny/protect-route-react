import React from 'react';
import { shallow } from 'enzyme';
import AppComponent from '../src/components/app.component';

test('App component render without crashing', () => {
  shallow(<AppComponent />);
});

test('App component contain good H2 title', () => {
  const appcomponent = shallow(<AppComponent />);

  expect(appcomponent.find('h2').text()).toEqual(
    'Hey ! Bienvenue sur ton application React',
  );
});
