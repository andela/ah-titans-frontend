import React from 'react';
import { shallow, } from 'enzyme';
// import toJson from 'enzyme-to-json';
import Loader from './components/index';
import store from '../store';
// import ArticlesForm from './components/index';
// import SearchComponent from './components/search';

describe('Loader', () => {
  it('renders without crashing', () => {
    shallow(<Loader store={store} />);
  });
});
