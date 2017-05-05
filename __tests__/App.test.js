import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/components/App';

it('App component render without crashing', () => {
  shallow(<App />);
});
