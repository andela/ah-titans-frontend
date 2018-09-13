import React from 'react';
import { mount, } from 'enzyme';
import { MemoryRouter, } from 'react-router-dom';
import { Provider, } from 'react-redux';
import Article from './index';
import store from '../../store';
import NewArticle from '../components/NewArticle';


describe('Create new article', () => {
  const newArticleWrapper = mount(
    <MemoryRouter initialEntries={['/article',]}>
      <Provider store={store}>
        <Article />
      </Provider>
    </MemoryRouter>
  );

  it('renders the new article component', () => {
    expect(newArticleWrapper.find(NewArticle)).toHaveLength(1);
  });
  it('new article receive props', () => {
    const newArticle = newArticleWrapper.find(NewArticle);
    expect(Object.keys(newArticle.props()).length).toBeGreaterThan(0);
  });
  it('always renders a div', () => {
    const divs = newArticleWrapper.find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
  it('does not receive any props', () => {
    const newArticle = newArticleWrapper.find(NewArticle);
    expect(newArticle.props.length).toBe(0);
  });
});
