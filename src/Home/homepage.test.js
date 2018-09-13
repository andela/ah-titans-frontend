import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import CreateArticleButton from './components/btnCreateArticle';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Home from './containers/index';
import { Home } from './containers/index';
import ArticlesPage from './containers/index';
import store from '../store';
import ArticlesForm from './components/index';
import SearchComponent from './components/search';

describe('Home', () => {
  it('renders without crashing', () => {
    shallow(<ArticlesPage store={store} new_user />);
  });
});

describe('Home', () => {
  const article = {
    article: {
      slug: '',
      tagList: ['any'],
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

//       expect(toJson(component)).toMatchSnapshot();
//     });
//   });
// });

describe('Articles form', () => {
  const article = {
    article: {
      slug: '',
      tagList: ['any'],
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
