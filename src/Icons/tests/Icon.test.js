import React from 'react';
import { mount } from 'enzyme';
import Icon from '../components';

describe('Renders Icon', () => {
    const props = {
        id: 'like',
        icon: 'thumb_up',
        count:0
    };
    const iconWrapper = mount(<Icon {...props} />);

    it('renders an icon button', () => {
    expect(iconWrapper.find('button').length).toBeGreaterThan(0);
  });
//   it('renders buttons', () => {
//     iconWrapper.setProps();
//     expect(iconWrapper.find('Button').length).toEqual(1);
//   });
});
