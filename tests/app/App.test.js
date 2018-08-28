
import React from 'react';
import { shallow } from 'enzyme';

import App from '../../src/App/index';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});
