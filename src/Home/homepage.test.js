import React from 'react';
import { shallow, } from 'enzyme';
import Home from './containers/index';
import store from '../store';
import ArticlesForm from './components/index';

describe('Home', () => {
  it('renders without crashing', () => {
    shallow(<Home store={store} />);
  });
});

// // describe('Articles form', () => {
// //   const articlesFormWrapper = shallow(<ArticlesForm store={store} error={{}} success key={{}} />);

//   it('renders error fields ', () => {
//     expect(articlesFormWrapper.find('.error').length).toEqual(1);
//   });
// });
