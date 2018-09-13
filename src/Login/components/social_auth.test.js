import { shallow } from 'enzyme';
import React from 'react';
import Login from '.';
import {
  Col, Card, Row, Input, Button,
} from 'react-materialize';
import LoginForm from '.';
import store from '../../store';

describe('<LoginForm />', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  const wrapper = shallow(
    <LoginForm
      store={store}
      onClick={() => ''}
      onChange={() => ''}
      errors={{ error: [], email: [], password: [], }}
      isFetching
      facebookResponse
      googleResponse
    />
  )

//   it('renders the <LoginForm /> component', () => {
//     const wrapper = shallow(<Login history={{ push() {} }} />);
//     expect(wrapper.contains(<h1>Authors' Haven</h1>));
//   });
  it('Test handleSocialLogin is succesfull', () => {
    fetch.mockResponseOnce(JSON.stringify({ user: {} }));
    const wrapper = shallow(<LoginForm history={{ push() {} }} />);
    wrapper.instance().googleResponse();
  });
//   it('Test handleSocialLoginFailure', () => {
//     // SVGElement work around
//     global.SVGElement = global.Element;
//     fetch.mockResponseOnce(JSON.stringify({ user: {} }));
//     const wrapper = shallow(<Login history={{ push() {} }} />);
//     wrapper.instance().handleSocialLoginFailure();
//   });
});