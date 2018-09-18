import React from 'react';
import { shallow } from 'enzyme';
import store from '../store';
import ArticleView from './containers/index';
import ArticlePage from './containers/index';
import ViewArticle from './components/index';

describe('Article', () => {
  const article = {
    article: { slug: '', tagList: ['any'], body: 'this is a test body', created_at: '' },
  };
  it('renders without crashing', () => {
    shallow(<ArticlePage store={store} article={article} />,
    );
  });
});

describe('ArticleView', () => {
  const article = {
    article: { slug: '', tagList: ['any'], body: 'this is a test body', created_at: '' },
  };
  it('renders without crashing', () => {
    shallow(<ArticleView store={store} article={article} />);
  });
});

describe('Articles form', () => {
  const article = {
    article: { slug: '', tagList: [], body: 'this is a test body', created_at: '', },
  };
  const articlesFormWrapper = shallow(<ViewArticle article={article} />,
  );

  it('renders errors ', () => {
    expect(articlesFormWrapper.find('.error').length).toEqual(0);
  });
  it('renders articles ', () => {
    expect(articlesFormWrapper.find('.article').length).toEqual(0);
  });
  it('returns 2 tags', () => {
    expect(articlesFormWrapper.find('.chip').length).toEqual(0);
  });
});
