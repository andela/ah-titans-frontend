import React from 'react';
import { shallow, } from 'enzyme';
import Loader from './components/index';
import store from '../store';

describe('Loader', () => {
  it('renders loader component without crashing', () => {
    shallow(<Loader store={store} />);
  });
});
