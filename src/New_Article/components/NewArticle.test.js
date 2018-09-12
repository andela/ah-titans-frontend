import React from 'react';
import {
  shallow,
} from 'enzyme';

import NewArticle from './NewArticle';

describe('Creation of new article', () => {
  const props = {
    isFetching: false,
    errors: [],
  };

  const wrapper = shallow(<NewArticle {...props} />);

  it('renders necessary input fields', () => {
    expect(wrapper.find('Input').length).toEqual(3);
  });
  it('renders buttons', () => {
    wrapper.setProps();
    expect(wrapper.find('Button').length).toEqual(1);
  });
});
