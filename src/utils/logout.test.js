import { logout, } from './service';

test('should logout user if token has expired', () => {
  const token = 'sjkdhlkfsdknfoshdsidhfndfs';
  localStorage.setItem('token', token);
  logout();
  const token2 = localStorage.getItem('token');
  expect(token2).toBe(null);
});
