import React from 'react';
import { shallow } from 'enzyme';
import NewPass from '.';
import store from '../../store';

describe('New Pass Container', () => {
	let component;
	let componentDidMountSpy;

	it('should call componentDidMount once', () => {
		componentDidMountSpy = spyOn(NewPass.prototype, 'componentDidMount');
		component = shallow(<NewPass store={store} />);
		expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
	});
});
