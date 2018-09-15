import { logout } from './service';
import getToken from './headers';
import authHeader from './auth_header';

it('should logout user if token has expired', () => {
	const token = 'sjkdhlkfsdknfoshdsidhfndfs';
	localStorage.setItem('token', token);
	logout();
	const token2 = localStorage.getItem('token');
	expect(token2).toBe(null);
});

it('should test header', () => {
	const token = 'sdhfihodhfiohdiofh';
	const username = 'manu';
	localStorage.setItem('token', token);
	localStorage.setItem('username', username);
	getToken();
	console.log(getToken());
	expect(getToken()).toEqual({ Authorization: 'Token sdhfihodhfiohdiofh' });
});

it('should test header', () => {
	const token = 'sdhfihodhfiohdiofh';
	const username = 'manu';
	localStorage.setItem('token', token);
	localStorage.setItem('username', username);
	authHeader();
	console.log(getToken());
	expect(authHeader()).toEqual({ Authorization: 'Token sdhfihodhfiohdiofh' });
});
