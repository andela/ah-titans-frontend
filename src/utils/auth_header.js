const authHeader = (authenticated) => {
  // return authorization header with jwt token
  if (!authenticated) {
    return {};
  }
  const data = localStorage.getItem('user');
  if (!data) {
    return {};
  }
  const { user, } = JSON.parse(data);
  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}`, };
  }
  return {};
};
export default authHeader;
