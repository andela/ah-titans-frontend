import config from '../config';
import authHeader from './auth_header';

function logout() {
  // remove token from local storage to log user out
  localStorage.removeItem('token');
}

const handleResponse = response => response.json().then((data) => {
  if (!response.ok) {
    if (response.status === 401) {
      // auto logout if 401 response returned from api
      logout();
    }
    return Promise.reject(data);
  }
  return data;
});

const call = ({
  endpoint, method, data, authenticated,
}) => fetch(`${config.BASE_URL}${endpoint}`, {
  method,
  headers: {
    'content-type': 'application/json',
    ...authHeader(authenticated),
  },
  body: JSON.stringify(data),
}).then(handleResponse);

export default call;
