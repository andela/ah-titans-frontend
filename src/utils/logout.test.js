import { logout } from './service';
import getToken from './headers';
import authHeader from './auth_header';

const setAuth = () => {
	const token = 'sdhfihodhfiohdiofh';
	const username = 'manu';
	localStorage.setItem('token', token);
	localStorage.setItem('username', username);
};

it('should logout user if token has expired', () => {
	setAuth();
	logout();
	const token2 = localStorage.getItem('token');
	expect(token2).toBe(null);
});

it('should test header', () => {
	setAuth();
	getToken();
	expect(getToken()).toEqual({ Authorization: 'Token sdhfihodhfiohdiofh' });
});

it('should test header', () => {
	setAuth();
	authHeader();
	expect(authHeader()).toEqual({ Authorization: 'Token sdhfihodhfiohdiofh' });
});
