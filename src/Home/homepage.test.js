import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import CreateArticleButton from './components/btnCreateArticle';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Home from './containers/index';
import ArticlesForm from './components/index';
import SearchComponent from './components/search';

describe('Home', () => {
  const homeWrapper = mount(
    <MemoryRouter initialEntries={['/']}>
      <Provider store={store}>
        <Home />
      </Provider>
    </MemoryRouter>,
  );
  it('does not renders button when user is not logged in', () => {
    expect(homeWrapper.find(CreateArticleButton)).toHaveLength(0);
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
    const article = {
      article: { slug: '', tagList: ['any'], body: 'this is a test body' },
    };
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
