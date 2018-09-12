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

describe('Home', () => {
  const article = {
    article: {
      slug: '',
      tagList: ['any', ],
      body: 'this is a test body',
      created_at: '',
    },
  };
  it('renders without crashing', () => {
    shallow(<Home store={store} article={article} />);
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

describe('Articles form', () => {
  const article = {
    article: {
      slug: '',
      tagList: ['any', ],
      body: 'this is a test body',
      created_at: '',
    },
  };
  const articlesFormWrapper = shallow(<ArticlesForm article={article} />);

  it('renders errors ', () => {
    expect(articlesFormWrapper.find('.error').length).toEqual(0);
  });
  it('renders articles ', () => {
    expect(articlesFormWrapper.find('.article').length).toEqual(1);
  });
});
