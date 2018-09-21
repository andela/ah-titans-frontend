// axios
import axios from 'axios';

// headers
import getToken from './headers';

// export default function setAuthToken(token) {
//     axios.defaults.headers.common['Authorization'] = '';
//     delete axios.defaults.headers.common['Authorization'];
  
//     if (token) {
//       axios.defaults.headers.common['Authorization'] = `${token}`;
//     }
//   }
// delete axios.defaults.headers.common.Authorization;
axios.defaults.headers.common.Authorization = getToken();

export default axios;
