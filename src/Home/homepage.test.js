import React from 'react';
import { shallow, } from 'enzyme';
import Home from './components';

describe('Home', () => {
  it('renders without crashing', () => {
    shallow(<Home />);
  });
});
