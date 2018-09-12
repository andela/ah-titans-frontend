import React from 'react';
import { shallow, } from 'enzyme';
import toJson from 'enzyme-to-json';
import Home from './containers/index';
import store from '../store';
import ArticlesForm from './components/index';
import SearchComponent from './components/search';

describe('Home', () => {
  it('renders without crashing', () => {
    shallow(<Home store={store} />);
  });
});

describe('<SearchComponent />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<SearchComponent />);
      const component = wrapper.dive();

      expect(toJson(component)).toMatchSnapshot();
    });
  });
});

describe('<ArticlesForm />', () => {
  describe('render()', () => {
    const article = { article: { slug: '', tagList: ['any', ], body: 'this is a test body', }, };
    test('renders the component', () => {
      const wrapper = shallow(<ArticlesForm article={article} />);
      const component = wrapper.dive();

      expect(toJson(component)).toMatchSnapshot();
    });
  });
});

// // describe('Articles form', () => {
// //   const articlesFormWrapper = shallow(<ArticlesForm store={store} error={{}} success key={{}} />);

//   it('renders error fields ', () => {
//     expect(articlesFormWrapper.find('.error').length).toEqual(1);
//   });
// });
