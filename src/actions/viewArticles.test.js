import getArticle, {
  getArticlesErrorActionCreator,
  gettingArticlesActionCreator,
  getArticlesActionCreator,
} from './viewArticles';

import { VIEW_ARTICLES, GETTING_ARTICLES, VIEW_ARTICLES_ERROR, } from './types';

const expectedAction = type => ({
  type,
});

describe('create actions', () => {
  it('should create an action getArticles', () => {
    const expectedAction = {
      type: GETTING_ARTICLES,
    };
    expect(gettingArticlesActionCreator()).toEqual(expectedAction);
  });

  it('should create an action get article', () => {
    expect(getArticlesActionCreator()).toEqual(expectedAction(VIEW_ARTICLES));
  });

  it('should create an action get articles error', () => {
    expect(getArticlesErrorActionCreator()).toEqual(expectedAction(VIEW_ARTICLES_ERROR));
  });
});

describe('fetch articles', () => {
  fetch.mockResponseOnce(JSON.stringify());
  fetch('https://ah-jn-api.herokuapp.com/api/articles', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    expect(res.body).toEqual(JSON.parse());
  });
});
