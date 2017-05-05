import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

it('App component render without crashing', () => {
  shallow(<App />);
});
