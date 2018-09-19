// axios
import axios from 'axios';

// headers
import getToken from './headers';

axios.defaults.headers.common.Authorization = getToken();

export default axios;
