import React from 'react';
import { mount, } from 'enzyme';
import { MemoryRouter, } from 'react-router-dom';
import { Provider, } from 'react-redux';
import Article from './index';
import store from '../../store';
import NewArticle from '../components/NewArticle';


describe('Create new article', () => {
  const loginWrapper = mount(
    <MemoryRouter initialEntries={['/article',]}>
      <Provider store={store}>
        <Article />
      </Provider>
    </MemoryRouter>
  );

  it('renders the new article component', () => {
    expect(loginWrapper.find(NewArticle)).toHaveLength(1);
  });
});
