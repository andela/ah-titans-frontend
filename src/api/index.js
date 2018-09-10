import axios from 'axios';

export default {
  user: {
    reset: credentials => axios.post('/api/auth', { credentials, }).then(res => res.data.user),
  },
};
