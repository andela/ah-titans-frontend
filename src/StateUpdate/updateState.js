import jwt_decode from 'jwt-decode';
import store from '../store';

const types = require('../actions/types');

const updateState = () => {
	const token = localStorage.getItem('token');
	if (token) {
		const decode = jwt_decode(token);
		const action = () => ({ type: types.UPDATE_STATE, user: decode });
		store.dispatch(action());
	}
};

export default updateState;
